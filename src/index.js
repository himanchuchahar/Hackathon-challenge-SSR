/**
 *  - Express server file
 *  - File responsible to get a request and return a response to browser
 *   
 */

import 'babel-polyfill';
import express from "express";
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';

const app = express();
const port = 4000; // Port number to run the server (localhost)

app.use(express.static('public'));

app.get('*', (req, res) => { // express will get the request from browser URL and hand it over to static router
    const store = createStore();
    
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        // check if component has load data. if yes then pass store which will be used as a preloaded state
        return route.loadData ? route.loadData(store) : null;
    }).map(promise => {
        // extra step to wrap promise inside promise to handle success & any unknown requst
        if (promise) {
            return new Promise((resolve) => {
                promise.then(resolve).catch(resolve);
            });
        }
    })

    Promise.all(promises).then(() => {
        const context = {};
        const rendererContent = renderer(req, store, context);
        if (context.notFound) { // notFound component sends notfound = true when user access unknow url
            res.status(404);
        }
        res.send(rendererContent);
    });

});


app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});