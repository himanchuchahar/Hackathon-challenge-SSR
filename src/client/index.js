/**
 *  - Initial file to hydrate the server-side markup and attach events
 *     
 */


import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import { store } from './store/store';
import { renderRoutes } from 'react-router-config';
import GlobalStyle from './globalStyle';

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div className="app-container">
                <GlobalStyle />
                {renderRoutes(Routes)}
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));