import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
    text-align: center;
`;

const NotFound = ({staticContext = {}}) => {
    // staticContext is used by staticRouter; 
    // notFOund will be used to send 404 error if user try to access unkown page
    staticContext.notFound = true;
    return (
        <div>
            <Text>Page Not Found</Text>
        </div>
    )
}

export default {
    component: NotFound
}