import React from 'react';
import styled from 'styled-components';


const Body = styled.div`
    height: 100vh;
    background: linear-gradient(180deg, rgba(0,89,255,1) 0%, rgba(0,89,255,1) 40%, rgba(255,255,255,1) 40%);
    background-repeat: no-repeat;
    margin: 0px;
`;

export default function index() {
    return (
        <Body></Body>
    )
}