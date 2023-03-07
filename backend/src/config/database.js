const mongoose = require('mongoose')
mongoose.Promise = global.Promise // utiliza da API de promises do node (c/ global) e atribuindo o mongoose p/ a API. Isso porque o mongoose não está mais sendo mantido, tem seu status como deprecated
module.exports = mongoose.connect('mongodb://localhost/mymoney', {useMongoClient: true}) // exportando a conexão do mongodb

// TRADUÇÃO DA MENSAGEM DE ERRO DE REQUISIÇÃO
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não é válido para o atributo '{PATH}'."