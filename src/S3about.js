import React from "react";
import './css/styles.scss';

import Card from './svgComps/s3/Card.js'
import Skills from './svgComps/s3/Skills'
import BottomRect from "./aboutPageInsides/BottomRect";
import RightPartInAbout from "./aboutPageInsides/RightPartInAbout";

import {useTranslation} from "react-i18next";

function S3about() {
    const {t} = useTranslation();
    return (<section className={"s3about"}>
        <svg className={"blackLine0"} width="2.7vw" height="71vh" viewBox="0 0 4vw 71vh" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <rect width="4vw" height="61vh" fill="#212121"/>
        </svg>
        <svg className={"blackLine1"} width="52" height="1716" viewBox="0 0 52 1716" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="52" height="598" fill="#212121"/>
            <rect width="52" height="38" transform="matrix(1 0 0 -1 0 636)" fill="#1B1B1B"/>
            <rect y="636" width="52" height="1080" fill="url(#paint0_linear_543_2)"/>
            <rect width="52" height="22" transform="matrix(-1 0 0 1 52 636)" fill="black" fill-opacity="0.1"/>
            <defs>
                <linearGradient id="paint0_linear_543_2" x1="26" y1="636" x2="26" y2="1716"
                                gradientUnits="userSpaceOnUse">
                    <stop stop-color="#383737"/>
                    <stop offset="0.604" stop-color="#383737"/>
                    <stop offset="0.809" stop-color="#383737" stop-opacity="0"/>
                </linearGradient>
            </defs>
        </svg>


        {/* layout */}


        <Card/>
        <RightPartInAbout/>
        <Skills/>
        <BottomRect/>


    </section>)
}

export default S3about;