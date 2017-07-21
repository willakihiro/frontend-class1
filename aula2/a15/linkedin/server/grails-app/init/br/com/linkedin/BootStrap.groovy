package br.com.linkedin

import grails.converters.JSON

class BootStrap {

    def init = { servletContext ->

        adicionarPessoas()

        //Register News domain for JSON rendering
        JSON.registerObjectMarshaller(News) {
            def output = [:]
            output['id'] = it.id
            output['dateCreated'] = it.dateCreated
            output['description'] = it.description
            output['lastUpdated'] = it.lastUpdated
            output['belongs'] = ["id": it.belongs.id, "name": it.belongs.getName(), "email": it.belongs.getEmail()]
            return output;
        }

    }


    private adicionarPessoas() {
        15.times { i ->
            def pessoa = new People(
                    name:"Pessoa ${i+1}",
                    birthday: new Date(),
                    matiralStatus: "Solteiro",
                    job: "Analista de desenvolvimento ${i+1}",
                    email: "email${i+1}@email.com",
                    username:"pessoa${i+1}",
                    password:"senha${i+1}"
            )

            pessoa.save(failOnError: true, flush: true)

        }
    }
    def destroy = {

    }
}