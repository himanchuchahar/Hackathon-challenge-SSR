/**
 * Action file for job list
 */

import * as actionTypes from '../actions/actionTypes';
import api from '../../api/Api.config';
 

export const getJobList = () =>  {
    return async (dispatch) => {
        return await api.get("jobs.json").then((success) => {
            dispatch({
                type: actionTypes.FETCH_JOB_LIST,
                payload: {
                    status: success.status,
                    data: success.data
                }
            })
        }).catch((error) => {
            dispatch({
                type: actionTypes.FETCH_JOB_LIST,
                payload: {
                    status: error
                }
            })
            throw new Error(error);
        })
    }
}
