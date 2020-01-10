/**
 *  - Route file for server side rendering using StaticRouter
 *  - Implemented styled-components, so styles added in components will be applied properly
 *  - Implemented helmet SEO  
 *  - This file is also responsible to set Initial state of store on client-side
 *  - This file handles XSS attack by making use of serialize-javascript 
 */


import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { ServerStyleSheet } from 'styled-components';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../client/globalStyle';

export default (req, store, context) => {
    const sheet = new ServerStyleSheet()

    const markup = renderToString(sheet.collectStyles(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div className="app-container">
                    <GlobalStyle />
                    {renderRoutes(Routes)}
                </div>
            </StaticRouter>
        </Provider>
    ));

    const styles = sheet.getStyleTags();

    const helmet = Helmet.renderStatic();

    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${styles}
            <script src="bundle.js" defer></script>
            <script>
                window.INITIAL_STATE = ${serialize(store.getState())}
            </script>
        </head>
        <body>
            <div id="root">${markup}</div>
        </body>
        </html>
  `;
};