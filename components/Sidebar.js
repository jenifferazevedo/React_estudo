import React from 'react';
import styled from 'styled-components';
import { Buttonhome, Buttonuser, Buttonbest, Buttondocs, Buttonearn, Buttonhelp, Buttonmsg, Buttonnotes, Buttontransfer, Buttonwallet } from './Button';
import { Row, Col } from 'antd';

const Basebar = styled.div`
    width: 180px;
    height: 355px;
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-radius: 10px;
    margin: 30px auto;
    margin-bottom: 0px;
    padding: 20px 15px;
    text-align: center;
    .ant-col-12 {
        text-align: center;
    }
`

export default function Sidebar() {
    return (
    <div>
        <Basebar>
            <Col span={12}>
                <div><Buttonhome title="Home" href="#" /></div>
                <div><Buttonnotes title="Notes" href="#" /></div>
                <div><Buttonearn title="Earn" href="#" /></div>
                <div><Buttonmsg title="Msg" href="#" /></div>
                <div><Buttonwallet title="Wallet" href="#" /></div>
            </Col>
            <Col span={12}>
                <div><Buttonuser title="User" href="#" /></div>
                <div><Buttonbest title="Best" href="#" /></div>
                <div><Buttondocs title="Docs" href="#" /></div>
                <div><Buttontransfer title="Transfer" href="#" /></div>
                <div><Buttonhelp title="Help" href="#" /></div>
            </Col>
        </Basebar>
    </div>
    )
}