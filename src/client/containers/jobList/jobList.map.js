/**
 * Map file responsible for:
 * - dispatching an action
 * - getting a data when reducer returns the data
 * - loadData which will be called from server-side
 * 
 */
import JobList from './joblist.container';
import { connect } from 'react-redux';
import { getJobList } from '../../store/actions/index';

const mapStateToProps = (state) => ({
    jobListData: state.list
});

const mapDistpatchToProps = (dispatch) => ({
    getJobListHandler: () => dispatch(getJobList())
});

const loadData = (store) => {
    return store.dispatch(getJobList());
}

export default {
    loadData,
    component: connect(mapStateToProps, mapDistpatchToProps)(JobList)
}

