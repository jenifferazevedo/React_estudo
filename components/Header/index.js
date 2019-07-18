import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { Iconsmenu } from './Iconsmenu';

export default function Index() {
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