import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

const { Search } = Input;

const Searchbase = styled.div`
    padding-top: 10px;
    padding-left: 20px;
`

export default function Searchbar() {
    return (
        <Searchbase>
            <Search
                placeholder="Search Programs"
                onSearch={value => console.log(value)} />
        </Searchbase>
    )
}
