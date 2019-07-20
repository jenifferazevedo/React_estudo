import React from 'react'
import styled from 'styled-components';

const Logoname = styled.h1`
    font-style: italic;
    font-size: 2.5em;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: ${({ theme }) => theme.colors.secondary};
    margin: 0px;
    text-align:center;
`

export default function Logo(props) {
    return (
            <Logoname>{props.logo}</Logoname>
    )
}
