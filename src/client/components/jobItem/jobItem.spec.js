import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import JobItem from './jobItem';

configure({ adapter: new Adapter() });

describe('<JobItem />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<JobItem />);
    });

    it('job item should have job card', () => {
        expect(wrapper.find({ "data-testid": "job-card" })).toHaveLength(1);
    });

    it('each job card should have job link', () => {
        const jobCard = wrapper.find({ "data-testid": "job-card" })
        expect(jobCard.find({ "data-testid": "job-card-link" })).toHaveLength(1);
    });
});