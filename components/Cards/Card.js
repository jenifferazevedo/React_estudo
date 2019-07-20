import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { Icon } from 'antd';

const Cardbase1 =styled.div`
    margin: 40px 20px 0px 20px;
    border-radius: .20rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    img {
        width:100%;
        border-radius: .20rem;
    }
`

const Cardbase2 =styled.div`
    margin: 100px 20px 0px 20px;
    border-radius: .20rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0px -30px 2px -8px rgba(203, 198, 245, 0.8), 0px -60px 2px -15px rgba(203, 198, 245, 0.6);
    img {
        width:100%;
        border-radius: .20rem;
    }
`


const Cardbody = styled.div`
    height: 200px;
    margin: 50px 0px 0px 0px;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .20rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0px -20px 2px -8px rgba(255, 255, 255, 0.8), 0px -40px 2px -15px rgba(255, 255, 255, 0.6);
`
const Cardlarg1 = styled.div`
    height: 100px;
    margin-top: 40px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .20rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    .anticon {
        font-size: 1.8em;
        margin-left: 10px;
    }
    .anticon svg {
        fill: ${({ theme }) => theme.colors.primary};
    }
`
const Cardlarg2 = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
    padding-top: 15px;
    .anticon {
        margin-right:5px;
        font-size: 2em;
        float: left;
    }
    .ant-col-4 {
        border-left: 1px solid ${({ theme }) => theme.colors.tertiary};
    }
`


export function Cardbasic(props) {
    return (
        <div><Cardbody>
            <h1>{props.title}</h1>
            <h4>{props.subtitle}</h4>
            <p>{props.text}</p></Cardbody>
        </div>
    )
}

export function Cardsec(props) {
    return <Cardlarg1>
        <Row>
            <Col span={22}>
                <h3>{props.action}</h3>
            </Col>
            <Col span={2}>
                <Icon type="mail" />
                <Icon type="file-text" />
            </Col>
        </Row>
        <Cardlarg2>
            <Row>
                <Col span={12}>
                    <h4>{props.application}</h4>
                </Col>
                <Col span={4}>
                    <Icon type="red-envelope" />
                    <h6>{props.fees}</h6>
                    <h6>{props.number}</h6>
                </Col>
                <Col span={4}>
                    <Icon type="red-envelope" />
                    <h6>{props.fees}</h6>
                    <h6>{props.number}</h6>
                </Col>
                <Col span={4}>
                    <Icon type="red-envelope" />
                    <h6>{props.fees}</h6>
                    <h6>{props.number}</h6>
                </Col>
            </Row>
        </Cardlarg2>
        </Cardlarg1>
}

export function Cardimgpri (props) {
    return <Cardbase1><img src={props.src} alt={props.alt}></img>
    </Cardbase1>
}

export function Cardimgsec (props) {
    return <Cardbase2><img src={props.src} alt={props.alt}></img>
    </Cardbase2>
}
