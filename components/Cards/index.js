import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { Row, Col } from 'antd';


export default function Cards(props) {
    return (
        <Row gutter={24}>
            <Col span={8}>
                <Card title="Titulo 1" subtitle="Sub Titulo" text="blablabla" />
            </Col>
            <Col span={8}>
                <Card title="Titulo 2" subtitle="Sub Titulo" text="blablabla" />
            </Col>
            <Col span={8}>
                <Card title="Titulo 3" subtitle="Sub Titulo" text="blablabla" />
            </Col>
        </Row>
    )
}
