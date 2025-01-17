import React, {useEffect, useState} from 'react';

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
    const [initSubName] = useState('Maksiksq')
    const [subName] = useState('Maksiks ')
    const [currentTimeout, setCurrentTimeout] = useState(1000)
    const [switcher, setSwitcher] = useState(false)

    useEffect(() => {
        if (currentTimeout === 3000) {
            setCurrentTimeout(1000);
        }
        let ifPass = true;
        const interval = setInterval(() => {
            setSwitcher(!switcher)
            console.log("I'm eventually gonna remake the whole thing in probably Svelte or Vue and make it SSR and everything but this codebase is too large (and has too many dependencies) to move it to SSR right now, so you might have to stare at the images loading slowly in the last section.")
            if (titleIx === initSubName.length && (titleIxOld === titleIx - 1)) {
                setTitleIxOld(titleIx);
                setTitleIx(initSubName.length - 1);
                setCurrentTimeout(3000);
                // exit
                return () => clearInterval(interval)

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
            document.title = curTitle+"▮";
        } else {
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

