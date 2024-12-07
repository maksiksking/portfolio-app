import React from 'react';
import {
    RecoilRoot,
} from 'recoil';

import {useEffect} from "react";
import ReactDOM from 'react-dom/client';
import './css/styles.scss';

import './i18n';

import {HelmetProvider} from 'react-helmet-async';

import MainPage from "./MainPage";

const helmetContext = {};

function Page() {
    return (
        <HelmetProvider context={helmetContext}>
            <MainPage></MainPage>
        </HelmetProvider>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Page/>);

