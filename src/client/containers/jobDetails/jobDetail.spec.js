import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import JobDetail from './jobDetails.container';

configure({adapter: new Adapter()});

describe('<JobDetail />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<JobDetail jobDetailsData = {{jobDetails: undefined}} getJobDetailsHandler={() => { }}/>);
    });

    it('job detail should show "something went wrong" if there is an error in fetching details', () => {
       expect(wrapper.find({"data-testid": "no-data"})).toHaveLength(1);
       
    });

    it('each job card should have job link', () => {
        wrapper.setProps({ jobDetailsData: { jobDetails: {
            "title": "Senior React Developer",
            "skills":"skill1, skills2",
            "perks":"perk1, perk2",
            "details": {
                    "location": "Berlin",
                    "contract": "Full time, permanent position",
                    "released": "1 days ago",
                    "sectors": "IT software - systems / design; IT Services / Software Development",
                    "career_level":"Experienced"
                },
                "contact": {
                    "name": "John Ipsum"
                }
            }}
        });
        expect(wrapper.find({ "data-testid": "no-data" })).toHaveLength(0);
        expect(wrapper.find({"data-testid": "job-details"})).toHaveLength(1);
     });
});