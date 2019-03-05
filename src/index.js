import './main.css'
import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {browserHistory} from 'react-router'
import {syncHistoryWidthStore} from 'react-router-redux'
import reducers from 'reducers'
import {Provider} from 'react-redux'
import {Router, Route} from 'react-router'

import Layout from 'containers/layout'
import Phones from 'containers/phones'  

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const history = syncHistoryWidthStore(browserHistory, store)


ReactDom.render(
    <Provider store={store}>
    <Router history={History}>
            <Route component={Layout}>
            <Route path='/' component={Phones}>
            
            </Route>
            </Route>
    </Router>
    </Provider>,

    document.getElementById('root')
)