import React from 'react'
import styled from 'styled-components';

const H2 = styled.h4`
    color: ${({ theme }) => theme.colors.secondary};
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 15px;
    margin-bottom: 0px;
    text-align:center;
`
export default function Username(props) {
    return (
        <div>
            <H2>{props.username}</H2>
        </div>
    )
}
