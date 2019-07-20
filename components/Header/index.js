import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import Logo from './Logo';
import Breadcrumbs from './Breadcrumb';
import Searchbar from './Searchbar';
import Iconsmenu from './Iconsmenu';


const Head = styled.div`
    width:100%;
    height:80px;
    padding-top: 10px;
    position: fixed;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.primary};
    .ant-col-5:nth-last-child(1) {
        text-align: center;
        padding-top: 15px;
    }
`

export default function Header() {
    return (
        <Head>
            <Row align="middle">
                <Col span={6}>
                    <Logo logo="Logo" />
                </Col>
                <Col span={5}>
                    <Breadcrumbs />
                </Col>
                <Col span={8}>
                    <Searchbar />
                </Col>
                <Col span={5}>
                    <Iconsmenu />
                </Col>
            </Row>
        </Head>
    )
}
