const port = 3003

const bodyParser = require('body-parser') // middleware que trará as requisições p/ trazer um objeto pronto
const express = require('express') // referência p/ express
const server = express() // cria-se uma nova instância do express

server.use(bodyParser.urlencoded({extended: true})) // bodyparser vai interpretar o urlencoded (que é o formato que vem as requisições de resposta de um formulário)
server.use(bodyParser.json())

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})