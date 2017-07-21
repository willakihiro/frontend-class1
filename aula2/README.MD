# Desenvolvimento Front-end UFSCar / 2017 (Angular/Grails)

Arquivos para acompanhamento da aula 2/3 

## Aula 3 (21/07 e 22/07)

### Projeto
O estudo de caso criado para entender como angular funciona é baseado na ideia de uma rede social profissional, assim como o famoso (https://www.linkedin.com) LinkedIn. 

A aplicação não cobre todos os cenários do LinkedIn (https://www.linkedin.com), apenas alguns fluxos de navegação mais simplificado para podermos explorar o angular em um contexto mais real. 


### a1 - criação e configuração do projeto
**objetivo**: 
como criar um projeto somente em angular.

- comandos ng-server
- comandos ng-app
- configuração do bootswatch
- configuração do jquery
- configuração do boostrap
- arquivo Angular-CLI
- configuração global do style.css

### a2 - criar um projeto grails com angular
**objetivo**: 
como criar um projeto grails com angular.

### a3 - criar o servidor do projeto com grails
**objetivo**: 
não é o objetivo desta aula focar no back-end, mas precisamos criar um servidor **dummy** para conseguirmos ter uma experiência mais completa

### a4 - dividindo o projeto em componentes
- c: adds
- c: header
- c: home
- c: login
- c: photo
- c: profile
	- form
	- view
- c: vacancy
- f: app.component.html
- f: app.component.ts
- f: app.module.ts

### a5 - código html dos componentes
- c: adds
	- adds.component.html
- c: header
	- header.component.html
- c: home
	- home.component.html
- c: login
	- login.component.html
- c: photo
	- photo.component.html
- c: profile
	- form
		- profile.add.component.html
		- profile.update.component.html
	- view
		- profile.view.component.html
- c: vacancy
	- vacancy.component.html
- f: app.component.html

### a6 - código typescript para criar componentes
- c: adds
	- adds.component.ts
- c: header
	- header.component.ts
- c: home
	- home.component.ts
- c: login
	- login.component.ts
- c: photo
	- photo.component.ts
- c: profile
	- form
		- profile.add.component.ts
		- profile.update.component.ts
	- view
		- profile.view.component.ts
- c: vacancy
	- vacancy.component.ts
- f: app.component.ts
- f: app.module.ts

### a7 - estilizando componente
**objetivo**: 
entendo o conceito de aplicar o estilo no componente.

- c: login
	- login.component.html
	- login.component.ts
	- login.css

### a8 - criação dos objetos profile e news
**objetivo**: 
criando objetos para podermos usar o recurso do typescript e garantir que o objeto esteja coerente com o que é retorno do nosso serviço restful.

- c: home
	- home.component.html
	- home.component.ts
	- news.obj.ts
- c: profile
	- form
		- profile.add.component.html
		- profile.add.component.ts
		- profile.update.component.html
		- profile.update.component.ts
	- view
		- profile.view.component.html
		- profile.view.component.ts
	- profile.obj.ts

### a9 - configuração de rotas
**objetivo**: 
permite que as páginas fiquem navegáveis seguindo o esquema de single-page-application.

- c: header
	- header.component.html
	- header.component.ts
- c: home
	- home.component.html
	- home.component.ts
- c: login
	- login.component.html
	- login.component.ts
- c: profile
	- form
		- profile.add.component.html
		- profile.add.component.ts
		- profile.update.component.html
		- profile.update.component.ts
	- view
		- profile.view.component.html
		- profile.view.component.ts
- f: app.routing.ts
- f: app.component.html

### a10 - trabalhando com service
**objetivo**: 
utilizar service permite centralizar código que podem ser reusado durante toda a aplicação. A ideia do service é conter a lógica de negócio da aplicação.

- f: app.service.ts

### a11 - simulação do login
**objetivo**:
- somente profissionais cadastros na rede podem participar do linkedin;
- o login construído no projeto é uma simulação;
- o correto é trabalhar com tokens e sistemas de autenticação OAuth. Mas isso, não é escopo deste curso porque teríamos que entrar em outros pontos voltados na integração com o back-end.

- c: login
	- login.component.html
	- login.component.ts

### a12 - validação de formulário orientado a template
**objetivo**: 
- se o profissional não faz parte da rede o mesmo deve realizar um cadastro;
- ao realizar um cadastro com sucesso, o mesmo será redirecionado para a página home da aplicação;
- o formulário deve requerer todos os campos e validar se o campo email é um campo válido.

- c: profile
	- form
		- profile.add.component.html
		- profile.add.component.ts

### a13 - criação do componente photo
**objetivo**:
- o componente photo deve ser utilizado na página home; e
- o componente deve receber o nome, foto e profissão do profissional.

- c: photo
	- photo.component.html
	- photo.component.ts

### a14 - criação da página home
**objetivo**: 
- na página home deve ser carregado detalhes do perfil do profissional. Os detalhes são o nome completo, fotos e profissão;
- na mesma página deve ser apresentado todas as notícias publicadas na rede;
- o profissional pode criar, alterar e editar notícias; e
- as notícias que não são publicadas pelo profissional não podem ser modificadas e devem apresentar apenas o nome, email e descrição da notícia.

- c: home
	- home.component.html
	- home.component.ts
	- news.obj.ts

### a15 - visualizar detalhes do perfil
**objetivo**: 
- ao clicar no link perfil o profissional é redirecionado a detalhes do seu perfil;
- na tela do perfil deve ser apresentado: a foto, o nome completo, a profissão, a mini-biografia e as experiências e ter uma opção para redirecionar a página de edição. 

- c: form
	c: view
		- profile.view.component.html
		- profile.view.component.ts

### a16 - editar o perfil
**objetivo**:
- ao clicar no botão de edição do perfil, o profissional é redirecionado para a tela de edição;
- nesta tela é apresentado campos para alterar apenas o nome do profissional, profissão e minibiografia com 255 caracteres.

- c: form
	- profile.update.component.html
	- profile.update.component.ts
	- profile.obj.ts

