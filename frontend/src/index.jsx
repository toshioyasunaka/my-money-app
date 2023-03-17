import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'

import reducers from './main/reducers'
import Routes from './main/routes'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise)(createStore)(reducers, devTools) // (promise) é um middleware que fará com que a comunicação com o backend seja feita e só seguirá adiante p/ os reducers quando os dados chegarem, a fim de não ter valores null ou undefined como retorno da action (funciona como se fosse um async/await)
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
, document.getElementById('App'))