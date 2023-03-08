const BillingCycle = require('./billingCycle')
const errorHandler = require('../billingCycle/common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true}) // quando fazemos um "put" (uma atualização no banco de dados), "new" faz com que retornemos o objeto atualizado ao invés de sua versão antiga (que é o padrão) e  "runValidators" faz com que as validação de entrada (do arquivo "billingCycle.js") sejam as mesma p/ quando atualizarmos um objeto
BillingCycle.after('post', errorHandler).after('put', errorHandler)

// MIDDLEWARES
BillingCycle.route('get', (req, res, next) => {
    BillingCycle.find({}, (error, docs) => {
        if(!error) {
            res.json(docs)
        } else {
            res.status(500).json({errors: [error]})
        }
    }).skip(req.query.skip).limit(req.query.limit)
})

BillingCycle.route('count', (req, res, next) => { // irá retornar a quantidade de elementos que se tem na coleção
    BillingCycle.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{
        $project: {credit: {$sum: "$credits.value"}, debit: {$sum: "$debits.value"}} // soma todos os créditos e também todos os débitos de um registro
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debit: {$sum: "$debit"}} // o "$crédit" é o resultado de $project.credit - é a soma total de todos os créditos e débitos de todos os registros
    }, {
        $project: {_id: 0, credit: 1, debit: 1}
    }], (error, result) => {
        if(error){
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {credit: 0, debit: 0})
        }
    })
})

module.exports = BillingCycle