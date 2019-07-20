import React from 'react';
import styled from 'styled-components';
import Foto from './Foto';
import Username from './Username';
import Usertitle from './Usertitle';

const Perfilbase = styled.div`
    margin-top: 100px;
`

export default function index() {
    return (
        <Perfilbase>
            <Foto />
            <Username username="Jiahsush Hiahihi" />
            <Usertitle usertitle="Hiahsi dhishda" />
        </Perfilbase>
    )
}
