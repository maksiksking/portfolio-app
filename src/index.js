import React from 'react';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

import { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import './css/styles.scss';

import S1ini from './S1ini.js';
import S2now from './S2now.js';
import LightBox from "./LightBox";
import S3about from "./S3about";
import S4holder from "./S4holder";
import S5webDev from "./S5webDev";
import S6programmin from "./S6programmin";
import S7designin from "./S7designin";



function RestOfThePage() {
    return (
        <>
            <LightBox/>
            <S3about/>
            <S4holder/>
            <S5webDev/>
            <S6programmin/>
            <S7designin/>
        </>
    )
}


function Page() {
    useEffect(() => {
        document.title = 'Maksiks';
    }, []);

    return (<RecoilRoot>
        <S1ini/>
        {/*<S2now sendPass={sendPass}/>*/}
        <RestOfThePage/>
        </RecoilRoot>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Page/>);

