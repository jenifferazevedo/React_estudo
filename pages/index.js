import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import Header from '../components/Header';
import Cards from '../components/Cards';
import H1 from '../components/Textostyle';
import Perfil from '../components/Perfil';
import Sidebar from '../components/Sidebar';

const Back = styled.div`
  background:  ${({ theme }) => theme.colors.degrade};
  height: 100vh;
`
const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    z-index: 0;
`

export default function index() {
    return (
        <Back>
            <Row>
                <Header />
            </Row>
            <Container>
                <Row>
                    <Col span={6}>
                        <Row>
                            <Perfil />
                        </Row>
                        <Row>
                            <Sidebar />
                        </Row>
                    </Col>
                    <Col span={18}>
                        <Row>
                            <Col span={24}>
                                <H1 texto="Welcome!" />
                                <Cards />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Back>
    )
}
