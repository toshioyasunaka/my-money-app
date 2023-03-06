const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true}) // quando fazemos um "put" (uma atualização no banco de dados), "new" faz com que retornemos o objeto atualizado ao invés de sua versão antiga (que é o padrão) e  "runValidators" faz com que as validação de entrada (do arquivo "billingCycle.js") sejam as mesma p/ quando atualizarmos um objeto

module.exports = BillingCycle