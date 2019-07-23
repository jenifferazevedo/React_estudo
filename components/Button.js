import React from 'react'
import styled from 'styled-components';
import { Icon } from 'antd';

const Botão = styled.button`
    width: 35%;
    height: 35%;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 10px;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.75em;
    margin-bottom: 10px;
    .anticon {
        font-size: 1.8em;
        margin: 0px 2px 4px 2px;
        display: block;
    }
`

export default function Buttonprimary (props) {
    return (
        <Botão>{props.title}</Botão>     
    )
}

export function Buttonhome (props) {
    return <Botão><Icon type="home" />{props.title}</Botão>     
}

export function Buttonuser (props) {
    return <Botão><Icon type="user" />{props.title}</Botão>     
}

export function Buttonnotes (props) {
    return <Botão><Icon type="profile" />{props.title}</Botão>     
}

export function Buttonbest (props) {
    return <Botão><Icon type="star" />{props.title}</Botão>     
}

export function Buttonearn (props) {
    return <Botão><Icon type="dollar" />{props.title}</Botão>     
}

export function Buttondocs (props) {
    return <Botão><Icon type="folder-open" />{props.title}</Botão>     
}

export function Buttonmsg (props) {
    return <Botão><Icon type="message" />{props.title}</Botão>     
}

export function Buttontransfer (props) {
    return <Botão><Icon type="transaction" />{props.title}</Botão>     
}

export function Buttonwallet (props) {
    return <Botão><Icon type="wallet" />{props.title}</Botão>     
}

export function Buttonhelp (props) {
    return <Botão><Icon type="customer-service" />{props.title}</Botão>     
}