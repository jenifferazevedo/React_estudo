import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import Iconsmenu from './Iconsmenu';


const { Header } = Layout;

export default function index() {
    return (
        <div>
            <Layout>
                <Header>
                    Oi
                    <Iconsmenu />
                </Header>
            </Layout>
        </div>
    )
}