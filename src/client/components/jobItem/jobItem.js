/**
 * Job Item component which is used to render each item in job list
 */



import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import emplyomentIcon from '../../../assets/emplyoment_type_icon.png'

// Style for job item parent div
// This is responsible to make job item responsive
const JobCardContainer = styled.div`
    width: 50%;
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

// Style for job item
const JobCard = styled.div`
    border: 1px solid #ecabc9;
    border-radius: 3px;
    margin: 4px;
    padding: 4px 8px;
    height: 100px;
    &:hover {
        box-shadow: 0 0 5px 1px #ecabc9;
    }
    position: relative;
`;

// Style for job Heading
const Title = styled.h1`
    font-size: 1.15em;
    margin: 3px 0 8px;
`;

// Style for job description
const Description = styled.p`
    margin: 4px 0 6px 0;
    font-size: 0.9em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    min-height: 35px;
`;

// Style for job emplyoment type
const EmplyomentType = styled.span`
    font-size: .75em;
    color: #6f6f6f;
    margin-left: 4px;
`;

const LinkStyle = {
    "textDecoration": "none",
    "color": "black" 
}

const job = (props) => {
    return (
        <JobCardContainer>
            <JobCard data-testid = "job-card">
                <Link
                    to= {'/jobdetail/' + props.id}
                    style={LinkStyle}
                    data-testid = "job-card-link">
                    <div>
                        <Title>{props.title}</Title>
                        <Description>{props.description}</Description>
                        <div><img src={emplyomentIcon} alt={props.emplyoment_type} /><EmplyomentType>{props.emplyoment_type}</EmplyomentType></div>
                    </div>
                </Link>
            </JobCard>
        </JobCardContainer>

    )
}

export default job;