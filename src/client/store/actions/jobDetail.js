/**
 * Action file for job detail
 */

import * as actionTypes from '../actions/actionTypes';
import api from '../../api/Api.config';

export const getJobDetail = () => {
    return async (dispatch) => {
        return await api.get("details.json").then((success) => {
            dispatch({
                type: actionTypes.FETCH_JOB_DETAIL,
                payload: {
                    status: success.status,
                    data: success.data
                }
            })
        }).catch((error) => {
            dispatch({
                type: actionTypes.FETCH_JOB_DETAIL,
                payload: {
                    status: error
                }
            })
            throw new Error(error);
        })
    }
}