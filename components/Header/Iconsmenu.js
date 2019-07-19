import React from 'react'
import styled from 'styled-components';
import { Icon } from 'antd';

const Icones = styled.a`
    .anticon, .anticon svg{
        width: 20px;
        height: 20px;
        fill: ${({theme}) => theme.colors.secondary};
        margin: 0px 5px 0px 5px;
    }
`


export default function Iconsmenu() {
    return (
        <div>
            <Icones href=""><Icon type="bell" /></Icones>
            <Icones href=""><Icon type="setting" /></Icones>
            <Icones href=""><Icon type="question-circle" /></Icones>
            <Icones href=""><Icon type="export" /></Icones>
        </div>
    )
}
