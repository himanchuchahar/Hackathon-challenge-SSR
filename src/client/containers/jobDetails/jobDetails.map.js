/**
 * Map file responsible for:
 * - dispatching an action
 * - getting a data when reducer returns the data
 * - loadData which will be called from server-side
 * 
 */

import JobDetail from './jobDetails.container';
import { connect } from 'react-redux';
import { getJobDetail } from '../../store/actions/index';

const mapStateToProps = (state) => ({
    jobDetailsData: state.detail
});

const mapDistpatchToProps = (dispatch) => ({
    getJobDetailsHandler: () => dispatch(getJobDetail())
});

const loadData = (store) => {
    return store.dispatch(getJobDetail());
}

export default {
    loadData,
    component: connect(mapStateToProps, mapDistpatchToProps)(JobDetail)
}