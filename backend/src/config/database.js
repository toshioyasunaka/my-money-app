const mongoose = require('mongoose')
mongoose.Promise = global.Promise // utiliza da API de promises do node (c/ global) e atribuindo o mongoose p/ a API. Isso porque o mongoose não está mais sendo mantido, tem seu status como deprecated
module.exports = mongoose.connect('mongodb://localhost/mymoney') // exportando a conexão do mongodb