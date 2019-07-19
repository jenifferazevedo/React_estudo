import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Cards from '../components/Cards';
import { Row, Col } from 'antd';

const Back = styled.div`
  background:  ${({ theme }) => theme.colors.degrade};
  height: 100vh;
  padding: 0px 50px 0px 50px;
`
const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`

export default function index() {
    return (
        <Back>
            <Container>
                <Row>
                    <Header />
                </Row>
                <Row type="flex" justify="center">
                    <Col span={5}>

                    </Col>
                    <Col span={19}>
                        <Row>
                            <Col span={24}>
                                <Cards />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Back>
    )
}
