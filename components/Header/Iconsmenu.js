import React from 'react'
import styled from 'styled-components';
import { Icon } from 'antd';

const Icones = styled.a`
    .anticon, .anticon svg{
        width: 50px;
        height: 50px;
        fill: ${({theme}) => theme.colors.secondary};
    }
`

export default function Iconsmenu() {
    return (
        <div>
            <Icones href=""><Icon type="home" /></Icones>
            <Icon type="setting" theme="filled" />
            <Icon type="smile" theme="outlined" />
            <Icon type="sync" spin />
        </div>
    )
}
