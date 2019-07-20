import React from 'react';
import styled from 'styled-components';
import { Cardbasic, Cardsec, Cardimgpri, Cardimgsec } from './Card';
import { Row, Col } from 'antd';


export function Cards(props) {
    return (
        <Row gutter={24}>
            <Col span={8}>
                <Cardbasic title="Titulo 1" subtitle="Sub Titulo" text="blablabla" />
            </Col>
            <Col span={8}>
                <Cardbasic title="Titulo 2" subtitle="Sub Titulo" text="blablabla" />
            </Col>
            <Col span={8}>
                <Cardbasic title="Titulo 3" subtitle="Sub Titulo" text="blablabla" />
            </Col>
        </Row>
    )
}

export function Cardsecondary(props) {
    return <Cardsec action="Action Sports Park Development" application="Application ID: 2371237674618"
    fees="Application Fees" number="$450"/>
}

export function Cardsgrafico1(props) {
    return <Cardimgpri src="..\static\grafico-ex.jpg" alt="Gráfico1" />
}

export function Cardsgrafico2(props) {
    return <Cardimgsec src="..\static\grafico2.jpg" alt="Gráfico2" />
}