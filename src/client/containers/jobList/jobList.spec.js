import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import JobList from './joblist.container';

configure({ adapter: new Adapter() });

describe('<JobList />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<JobList jobListData={{ jobList: [] }} getJobListHandler={() => { }} />);
    });

    it('should show "no jobs found" when there are no jobs', () => {
        expect(wrapper.find({ "data-testid": "no-jobs" })).toHaveLength(1);
    });

    it('should show jobs when there are jobs fetched from json and "No Jobs found" message should hide', () => {
        wrapper.setProps({ jobListData: { jobList: [{ title: 'react developer' }] } });
        expect(wrapper.find({ "data-testid": "no-jobs" })).toHaveLength(0);
        expect(wrapper.find({ "data-testid": "job-item" })).toHaveLength(1);
    });
});