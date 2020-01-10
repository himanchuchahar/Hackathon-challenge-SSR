/**
 * Job detail container
 */


import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

// Main layout for details page
const DetailContainer = styled.div`
    background: #f5f5f5;
    padding: 8px;
`;

// Common style for panels
const Panel = styled.div`
    border-radius: 2px;
    border: 1px solid #f1f1f1;
    box-shadow: 0 1px 1px rgba(0,0,0,.12);
    margin-bottom: 12px;
    padding: 4px 8px;
    background: white;
`;

// Panel heading
const PanelHeading = styled.h3`
    font-size: 1.2em;
    color: #2baae1;
    margin-bottom: 4px;
`;

//Panel sub heading
const PanelSubHeading = styled(PanelHeading)`
    font-size: 1.1em;
`;

// Parent layout for JD, details and contact.
// This is responsible for responsive layout
const DetailSubContainer = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;
    @media only screen and (max-width: 992px) {
        display: block;
        width: 100%;
    }
`;

// Job description layout
const DescriptionPanel = styled(Panel)`
    text-align: justify;
    font-size: 0.9em;
    width: 70%;
    @media only screen and (max-width: 992px) {
        width: initial;
    }
`;

// Layout for details panel (location, contract, release etc ) and contact panel
// This is responsible to change layout to 2 columns on tab and single column on dekstop and mobile
const ExtrasPanel = styled.div`
    width: 30%;
    margin-left: 12px;
    @media only screen and (max-width: 767px) {
        display:block;
        width: initial;
        margin-left: 0;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        display: flex;
        width: 100%;
        margin-left: 0;
    }
`;

// Layout for each div in details panel (location, contract, release etc )
const SummanyPanel = styled.div`
    margin-bottom: 12px;
`;

// Heading for each div in details panel (location, contract, release etc )
const SummaryHeading = styled.h4`
    font-size: 1em;
    margin: 0;
    font-weight: 600;
`;

// Value for each div in details panel (location, contract, release etc )
const Summary = styled.p`
    font-size: 0.9em;
    margin: 0;
`;

// Style for header (if any)
const Header = styled(Panel)`
    // styles related to Header
`;

// Style to make details panel (location, contract, release etc ) responsive
const Details = styled(Panel)`
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 50%;
    }
`;

// Style to make contact panel responsive
const Contact = styled(Panel)`
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 50%;
        margin-left: 12px;
    }
`;

const NoData = styled.h1`
    text-align: center;
`;
export default class JobDetail extends Component {

    componentDidMount() {
        this.props.getJobDetailsHandler();
    }

    head = (title) => (
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content="job details" />
        </Helmet>
    )

    // method to render skills and perks
    renderSkills_perks = (skills_perks) => {
        return (
            <ul>
                {this.props.jobDetailsData.jobDetails[skills_perks].split(';').map(skill => {
                    // adding key as Math.random temporarily because this array doesn't have a unique key
                    return <li key={Math.random()} >{skill}</li>
                })}
            </ul>
        )
    }

    //method to render location, contract, release etc 
    renderSummayPanel = (summaryHeading, summaryValue) => {
        return (
            <SummanyPanel>
                <SummaryHeading>{summaryHeading}</SummaryHeading>
                <Summary>{summaryValue}</Summary>
            </SummanyPanel>
        )
    }

    render() {
        const jobDetails = this.props.jobDetailsData.jobDetails;

        if (!jobDetails) {
            return (
                <NoData data-testid="no-data">
                    Something went wrong!!!
                 </NoData>
            )
        }
        return (
            <DetailContainer data-testid="job-details">
                {jobDetails &&
                    <div>
                        {this.head(jobDetails.title)}
                        <Header>
                            <h3>{jobDetails.title}</h3>
                        </Header>
                        <DetailSubContainer>
                            <DescriptionPanel>
                                <PanelSubHeading>Job Descriptions</PanelSubHeading>
                                <p>{jobDetails.description}</p>
                                <hr />
                                <div>
                                    <PanelSubHeading>Skills</PanelSubHeading>
                                    {this.renderSkills_perks('skills')}
                                </div>
                                <div>
                                    <PanelSubHeading>Perks</PanelSubHeading>
                                    {this.renderSkills_perks('perks')}
                                </div>
                            </DescriptionPanel>
                            <ExtrasPanel>
                                <Details>
                                    <PanelHeading>Details</PanelHeading>
                                    {this.renderSummayPanel("Location", jobDetails.details.location)}
                                    {this.renderSummayPanel("Contract", jobDetails.details.contract)}
                                    {this.renderSummayPanel("Release", jobDetails.details.released)}
                                    {this.renderSummayPanel("Sectors", jobDetails.details.sectors)}
                                    {this.renderSummayPanel("Career Level", jobDetails.details.career_level)}
                                </Details>
                                <Contact>
                                    <PanelHeading>Contact</PanelHeading>
                                    {jobDetails.contact.name}
                                </Contact>
                            </ExtrasPanel>
                        </DetailSubContainer>
                    </div>
                }
            </DetailContainer>
        )
    }
}