import React from 'react'
import styled from 'styled-components';

const H3 = styled.h5`
    color: ${({ theme }) => theme.colors.secondary};
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 0px;
    text-align:center;
`
export default function Usertitle(props) {
    return (
        <div>
            <H3>{props.usertitle}</H3>
        </div>
    )
}
