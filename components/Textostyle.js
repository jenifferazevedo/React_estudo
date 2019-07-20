import React from 'react';
import styled from 'styled-components';


const H1 = styled.h2`
    color: ${({ theme }) => theme.colors.secondary};
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2em;
`

export default function Textostyle(props) {
    return (
        <H1>{props.texto}</H1>
    )
}


