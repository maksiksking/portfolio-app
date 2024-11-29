import React from 'react';
import {
    RecoilRoot,
} from 'recoil';

import { useEffect } from "react";
import ReactDOM from 'react-dom/client';
import './css/styles.scss';

import './i18n';

import S1ini from './S1ini.js';
import LightBox from "./LightBox";
import S3about from "./S3about";
import S4holder from "./S4holder";
import S5webDev from "./S5webDev";
import S6programmin from "./S6programmin";
import S7designin from "./S7designin";
import MiniFooter from "./MiniFooter";



function RestOfThePage() {
    return (
        <>
            <LightBox/>
            <S3about/>
            <S4holder/>
            <S5webDev/>
            <S6programmin/>
            <S7designin/>
            <MiniFooter/>
        </>
    )
}

function Page() {
    useEffect(() => {
        document.title = 'Maksiks';
    }, []);

    return (<RecoilRoot translate="no">
        <S1ini/>
        {/*<S2now/> removed*/}
        <RestOfThePage/>
        </RecoilRoot>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Page/>);

