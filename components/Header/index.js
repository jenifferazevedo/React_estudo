import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { Iconsmenu } from './Iconsmenu';


const { Header } = Layout;
const { Iconsmenu } = Iconsmenu;

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