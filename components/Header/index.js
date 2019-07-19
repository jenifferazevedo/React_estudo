import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import Logo from './Logo';
import Breadcrumbs from './Breadcrumb';
import Searchbar from './Searchbar';
import Iconsmenu from './Iconsmenu';


const Head = styled.div`
    margin-top: 20px;
    .ant-col-5:nth-last-child(1) {
        text-align: right;
        padding-top: 15px;
    }
`

export default function Header() {
    return (
        <Head>
            <Row align="middle">
                <Col span={6}>
                    <Logo logo="Logo"/>
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
