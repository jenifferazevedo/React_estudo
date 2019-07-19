import React from 'react';
import styled from 'styled-components';
import { Breadcrumb } from 'antd';

const Breadcrum1 = styled.div`
    padding-top: 15px;
    .ant-breadcrumb, .ant-breadcrumb-separator {
        color:  ${({ theme }) => theme.colors.secondary};
    }
    .ant-breadcrumb a {
        color:  ${({ theme }) => theme.colors.tertiary};
    }
`

export default function Breadcrumbs() {
    return (
        <Breadcrum1>
            <Breadcrumb>
                <Breadcrumb.Item>Student Dashboard</Breadcrumb.Item>
                    <a href="">Home</a>
            </Breadcrumb>
        </Breadcrum1>
    )
}
