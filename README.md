# Desafio Fullstack
------------

## Requisitos:
- [Angular CLI ( 7.3.4)](https://cli.angular.io/ "Angular CLI ( 7.3.4)")
- [json-server](https://github.com/typicode/json-server "json-server")

### Iniciando a API REST
API REST
Abra o terminal e caminhe até a pasta raiz do projeto e digite:
`json-server db.json -p 3000`

##### endpoints
- [/leilao](http://localhost:3000/leilao "/leilao")
- [/usuarios](http://localhost:3000/usuarios "/usuarios")

obs.: deixe o terminal aberto, se fechar finalizará a API REST.

### Iniciando a aplicação Angular
Abra outro terminal e caminhe até a pasta raiz do projeto e digite:
`ng serve`

normalmente o host é iniciado em [http://localhost:4200](http://localhost:4200 "http://localhost:4200")

##### Rotas
- [/](http://localhost:4200 "/")   (página de login) `Não foi finalizado a parte de autenticação`
- [/leilao](http://localhost:4200/leilao "/leilao") (página de leilão) `Insere/Lista/Delete - não foi feito o update`
- [/usuarios](http://localhost:4200/usuarios "/usuarios") (página de usuarios) `somente lista`

------
>"E isso foi oque deu para ser feito, obrigado!!"