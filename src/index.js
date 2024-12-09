import React, {useEffect, useState} from 'react';
import {
    RecoilRoot,
} from 'recoil';

import ReactDOM from 'react-dom/client';
import './css/styles.scss';

import './i18n';

import {HelmetProvider} from 'react-helmet-async';

import MainPage from "./MainPage";

const helmetContext = {};

function Page() {
    const [titleIx, setTitleIx] = useState(0)
    const [titleIxOld, setTitleIxOld] = useState(0)
    const [curTitle, setCurTitle] = useState('')
    const [initSubName, setInitSubName] = useState('Maksiksq')
    const [subName, setSubName] = useState('Maksiks ')
    const [currentTimeout, setCurrentTimeout] = useState(1000)
    const [switcher, setSwitcher] = useState(false)

    useEffect(() => {
        if (currentTimeout === 3000) {
            setCurrentTimeout(1000);
        }
        let ifPass = true;
        const interval = setInterval(() => {
            setSwitcher(!switcher)
            console.log("new ita");
            console.log(titleIxOld);
            console.log(titleIx);
            console.log("new ita");
            if (titleIx === initSubName.length && (titleIxOld === titleIx - 1)) {
                setTitleIxOld(titleIx);
                setTitleIx(initSubName.length - 1);
                setCurrentTimeout(3000);
                // exit
                return () => clearInterval(interval)
                console.log("new ita");

            }
            if (ifPass) {
                if (titleIxOld === titleIx - 1) {
                    setTitleIxOld(titleIx);
                    setTitleIx(titleIx + 1);
                }
                if (titleIxOld === titleIx + 1) {
                    setTitleIxOld(titleIx);
                    setTitleIx(titleIx - 1);
                }
                if (titleIx === 0 && (titleIxOld === 0)) {
                    setTitleIx(titleIx + 1);
                }
                if (titleIx === 0 && (titleIxOld === titleIx + 1)) {
                    setTitleIxOld(initSubName.length-2);
                    setTitleIx(initSubName.length-1);
                }
            }

            setCurTitle(subName.slice(0, -titleIx));
        }, currentTimeout)

        return () => clearInterval(interval)
    }, [currentTimeout, initSubName.length, subName, switcher, titleIx, titleIxOld]);

    useEffect(() => {
        if (switcher === true) {
            console.log("ita: " + titleIx);
            document.title = curTitle+"▮";
        } else {
            console.log("ita: " + titleIx);
            document.title = curTitle+" ";
        }
    }, [curTitle, switcher, titleIx]);

    return (
        <HelmetProvider context={helmetContext}>
            <MainPage></MainPage>
        </HelmetProvider>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Page/>);

