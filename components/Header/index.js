import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';


const { Header } = Layout;

export default function index() {
    return (
        <div>
            <Layout>
                <Header>Menu</Header>
            </Layout>
        </div>
    )
}