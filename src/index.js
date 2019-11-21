import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Redirect, Switch, BrowserRouter, Link, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'
import Layout from './js/common/Layout/Layout'

import PostDetails from './js/components/PostDetails/PostDetails'

import App from './App';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Layout>
                <Route exact path='/' component={App}  />
                <Route exact path={`/posts`} component={PostDetails}/>
            </Layout>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

