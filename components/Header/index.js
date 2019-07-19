import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import Iconsmenu from './Iconsmenu';


export default function Header() {
    return (
        <div>
            <Row>
                <Col span={6}>
                </Col>
                <Col span={12}>
                </Col>
                <Col span={6}>
                <Iconsmenu/>
                </Col>
            </Row>
        </div>
    )
}
