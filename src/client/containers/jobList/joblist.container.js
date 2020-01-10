/**
 * Job list container
 */

import React, { Component } from 'react';
import Job from '../../components/jobItem/jobItem';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

// Style for promotional header
const Header = styled.div`
  height: 150px;
  text-align: center;
  background-color: #e6af14;
  box-shadow: inset 0 8px 8px -8px #654c06, inset 0 -8px 8px -8px #654c06;
  color: #000;
  padding: 4px;
  h1 {
    font-family: sans-serif;
    font-size: 3em;
    font-weight: bold;
    margin-bottom: 2px;
    text-shadow: 0 4px 3px rgba(0,0,0,.3);
  }
  h4{
    margin-top: 10px;
    font-weight: normal;
  }
`;

// Style for job list parent div
const JobListContainer = styled.div`
    background-color: white;
    padding: 8px;
    display: flex;
    flex-wrap: wrap;
`;

// Style for div if no jobs are found
const NoJobs = styled.h1`
    text-align: center;
`;

export default class JobList extends Component {

    componentDidMount() {
        this.props.getJobListHandler();
    }

    renderJobs = () => {
        return (<JobListContainer>
            {this.props.jobListData.jobList.map(job => {
                return <Job key={job.id} {...job} data-testid="job-item"/>
            })}
        </JobListContainer>);
    }

    noJobsMessage = () => {
        return (
            <NoJobs data-testid="no-jobs">
                No Jobs Found!!!
            </NoJobs>
        );
    }


    head = () => (
        <Helmet>
            <title>Jobs List</title>
            <meta property="og:title" content="Jobs List" />
        </Helmet>
    )


    render() {
        return (
            <div>
                {this.head()}
                <Header>
                    <h1>Hackathon</h1>
                    <h4>Job Portal challenge for Hackathon</h4>
                </Header>
                {this.props.jobListData.jobList.length === 0
                    ? this.noJobsMessage()
                    : this.renderJobs()
                }
            </div >
        )
    }
}

