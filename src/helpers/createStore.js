/**
 * Store file for server  
 */


import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../client/store/reducers/index';

export default () => {
    return createStore(rootReducer, {}, applyMiddleware(thunk));
}
