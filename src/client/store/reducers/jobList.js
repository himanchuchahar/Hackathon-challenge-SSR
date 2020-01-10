/**
 * Reducer file for job list
 */

import * as actionTypes from '../actions/actionTypes';
import { updateJobObject } from '../utility';

const initialState = {
    status: null,
    jobList: null
}

const jobListReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_JOB_LIST:
            return {
                ...state,
                status: action.payload.status,
                jobList: updateJobObject(action.payload.data)
            };
        default:
            return state;
    }
}

export default jobListReducer;