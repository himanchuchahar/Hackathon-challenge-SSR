/**
 * Reducer file for job detail
 */


import * as actionTypes from '../actions/actionTypes';

const initialState = {
    status: null,
    jobDetails: null
}

const jobDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_JOB_DETAIL:
            return {
                ...state,
                status: action.payload.status,
                jobDetails: action.payload.data
            };
        default:
            return state;
    }
}

export default jobDetailReducer;