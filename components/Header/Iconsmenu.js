import React from 'react'
import styled from 'styled-components';
import { Icon } from '.\node_modules\antd\lib\icon';

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
