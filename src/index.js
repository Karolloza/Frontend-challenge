import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Switch, BrowserRouter, Route } from 'react-router-dom'


import { Provider } from 'react-redux'
import store from './store'
import Layout from './js/common/Layout/Layout'
import NotFound from './js/components/NotFound/NotFound'
import Login from './js/components/Login/Login'

import PostDetails from './js/components/PostDetails/PostDetails'
import App from './App';


ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    {!JSON.parse(sessionStorage.getItem('auth')) && <Redirect to='/login' /> }

                    <Route exact path='/' component={App} />
                    <Route exact path='/posts/:id' component={PostDetails} />
                    <Route exact path='/notFound' component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

