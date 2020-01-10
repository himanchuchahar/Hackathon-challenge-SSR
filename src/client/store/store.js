/**
 * Store file for client
 * - this file will hydrate state with inital data. To have synchronization between client and server
 */

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

export const store = createStore(rootReducer, window.INITIAL_STATE, applyMiddleware(thunk));
