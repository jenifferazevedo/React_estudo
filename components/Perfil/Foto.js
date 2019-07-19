import React from 'react';
import styled from 'styled-components';

const Photouser = styled.div`
    width: 110px;
    height: 110px;
    border-radius: 100%;
    border-style: dashed;
    border-color: blue;
    margin: 15px auto;
    margin-top: 30px;
    padding: 10px;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        object-fit: cover;
    }
`

export default function Foto() {
    return (
        <Photouser>
            <img src=".\static\perfil-foto.jpg" />
        </Photouser>
    )
}
