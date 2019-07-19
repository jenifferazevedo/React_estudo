import React from 'react';
import styled from 'styled-components';

const Cardbody = styled.div`
    height: 300px;
    margin: 100px 30px 0px 30px;
    background-color: white;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .20rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0px -20px 2px -8px rgba(255, 255, 255, 0.8), 0px -40px 2px -15px rgba(255, 255, 255, 0.6);
`
export default function Card(props) {
    return (
        <div><Cardbody>
            <h1>{props.title}</h1>
            <h4>{props.subtitle}</h4>
            <p>{props.text}</p></Cardbody>
        </div>
    )
}
