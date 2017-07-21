//Manipulação com banco de dados
let database = (function(){

    let self = this;
    let indexedDB = window.indexedDB 
                 || window.webkitIndexedDB
                 || window.mozIndexedDB
                 || window.msIndexedDB;

    //Abrir banco de dados
    self.open = () => {
        return new Promise(function(resolve, reject){
            //Criar um banco de dados chamado notebook
            let request = indexedDB.open("notebook");
            request.onupgradeneeded = function() {
                let db = request.result;
                let store = db.createObjectStore("notes",{keyPath:"id"});
                let idIndex = store.createIndex("by_id","id",{unique:true});
                let nameIndex = store.createIndex("by_name","name");
                let dateIndex = store.createIndex("by_date","date");
            };
            request.onsuccess = function() {
                self.db = request.result;
                resolve(true);
            };
            request.onerror = function() {
                reject(false);
                console.log('[ERROR] Falha na criação do banco de dados');
            };
        });
    };

    //carregar todos os dados do IndexedDB
    self.loadAll = () => {
        return new Promise(function(resolve,reject){
            let tx = self.db.transaction("notes","readonly");
            let store = tx.objectStore("notes");
            let request = store.getAll();
            request.onsuccess = function() {
                resolve(request.result);
            };
            request.onerror = function() {
                reject(false);
                console.log("[ERROR] Falha no carregamento dos dados...");
            };
        });
    };

    //Salvar objeto
    self.save = (obj) => {
        return new Promise(function(resolve,reject){
            let tx = self.db.transaction("notes","readwrite");
            let store = tx.objectStore("notes");
            store.put({id: Math.random(),
                       name: obj.name,
                       description: obj.description,
                       date: obj.date
                    });
            tx.oncomplete = function() {
                resolve(true);
            };
            tx.onerror = function() {
                reject(false);
                console.log("[ERROR] Falha em salvar o dado");
            };
        });
    };

    //Apagar objeto
    self.delete = (id) => {
        return new Promise(function(resolve,reject){
            let tx = self.db.transaction("notes","readwrite");
            let store = tx.objectStore("notes");
            store.delete(id);
            tx.oncomplete = function() {
                resolve(true);
            };
            tx.onerror = function() {
                reject(false);
                console.log("[ERROR] Falha na exclusão...")
            };
        });
    };

    //Atualizar registro do banco de dados
    self.update = (obj) => {
        return new Promise(function(resolve, reject){
            let tx = self.db.transaction("notes","readwrite");
            let store = tx.objectStore("notes");
            let update = store.put(obj);
            update.onerror = function() {
                reject(false);
            };
            update.onsuccess = function() {
                resolve(true);
            };
        });
    };

    return {
        open: self.open,
        loadAll: self.loadAll,
        save: self.save,
        delete: self.delete,
        update: self.update
    }

})();

//Manipulação da view
let view = (function(){
    let self = this;

    self.buildView = (result) => {
        document.getElementById("addNewNote").onclick = function() {
            if (document.getElementById("addNewNote").text !== "Update") {
                controller.save(document.getElementById("name").value,
                                document.getElementById("description").value,
                                document.getElementById("date").value);
            } else {
                controller.update(parseFloat(document.getElementById("addNewNote").getAttribute("identifier")),
                                  document.getElementById("name").value,
                                  document.getElementById("description").value,
                                  document.getElementById("date").value);
            };
        };
        result.forEach(function(element, index){
            //container
            let elementContainer = document.createElement("div");
            elementContainer.className = "col-md-3 row"

            //data
            let elementDate = document.createElement("p");
            let nodeElementDate = document.createTextNode(element.date);
            elementDate.appendChild(nodeElementDate);

            //nome
            let elementName = document.createElement("p");
            let nodeElementName = document.createTextNode(element.name);
            elementName.appendChild(nodeElementName);

            //description
            let elementDescription = document.createElement("p");
            let nodeElementDescription = document.createTextNode(element.description);
            elementDescription.appendChild(nodeElementDescription);

            //delete btn
            let deleteBtn = document.createElement("button");
            deleteBtn.setAttribute("id", index);
            let nodeElementDelete = document.createTextNode("Delete");
            deleteBtn.appendChild(nodeElementDelete);
            deleteBtn.onclick = function() {
                controller.delete(element.id);
            }

            //Edit btn
            let editBtn = document.createElement("button");
            editBtn.setAttribute("id","edit");
            editBtn.onclick = function() {
                document.getElementById("name").value = element.name;
                document.getElementById("description").value = element.description;
                document.getElementById("date").value = element.date;
                document.getElementById("addNewNote").text = "Update";
                document.getElementById("addNewNote").setAttribute("identifier",element.id);
            };
            let nodeElementEdit = document.createTextNode("Edit");
            editBtn.appendChild(nodeElementEdit);

            elementContainer.appendChild(elementDate);
            elementContainer.appendChild(elementName);
            elementContainer.appendChild(elementDescription);
            elementContainer.appendChild(deleteBtn);
            elementContainer.appendChild(editBtn);

            document.getElementById("notes").appendChild(elementContainer);
        });
    };

    return {
        buildView: self.buildView
    }
})();

//Intermediação com o banco de dados e view
let controller = (function(){
    let self = this;

    //Responsável por criar o banco de dados notebook
    self.createDb = () => {
        database.open().then(function(val){
            if (val) {
                database.loadAll().then(function(result){
                    view.buildView(result);                
                });
            };
        });
    };

    //Responsável carregar todos os registros
    self.loadAll = () => {
        database.loadAll();
    };

    //Responsável por salvar o registro
    self.save = (name, description, date) => {
        let obj = {
            name: name,
            description: description,
            date: date
        };
        database.save(obj).then(function(val){
            if (val) {
                location.reload();
            }
        });
    };

    //Responsável por atualizar o registro
    self.update = (id, name, description, date) => {
        let obj = {
            id: id,
            name: name,
            date: date,
            description: description
        };
        database.update(obj).then(function(val){
            if (val) {
                location.reload()
            };
        });
    };

    //Responsável por apagar o registro
    self.delete = (id) => {
        database.delete(id).then(function(val){
            if (val) {
                location.reload();
            }
        });
    };

    return {
        save: self.save,
        update: self.update,
        delete: self.delete,
        loadAll: self.loadAll,
        createDb: self.createDb
    }

})();

//Aplicação notebook
let app = (function(){
    let self = this;
    self.start = () => controller.createDb();
    return {
        start: self.start
    }
})();

window.onload = function() {
    //Inicializar a aplicação
    app.start();
}
