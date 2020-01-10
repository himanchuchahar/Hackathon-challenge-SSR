/**
 * Root file to combine list and detail reducer and return single reducer to store
 */
import { combineReducers } from 'redux';
import jobListReducer from './jobList';
import jobDetailReducer from './jobDetail';

const rootReducer = combineReducers({
    list: jobListReducer,
    detail: jobDetailReducer
});

export default rootReducer;