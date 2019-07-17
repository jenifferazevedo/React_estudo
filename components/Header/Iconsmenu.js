import React from 'react'
import styled from 'styled-components';
import { Icon } from 'antd';

export default function Iconsmenu() {
    return (
        <div className="icons-list">
            <Icon type="home" />
            <Icon type="setting" theme="filled" />
            <Icon type="smile" theme="outlined" />
            <Icon type="sync" spin />
        </div>
    )
}
