import React from "react";
import './css/styles.scss';

import Card from './svgComps/s3/Card.js'
import Skills from './svgComps/s3/Skills'
import BottomRect from "./aboutPageInsides/BottomRect";
import RightPartInAbout from "./aboutPageInsides/RightPartInAbout";

function S3about() {
    return (<section className={"s3about"}>
        <svg className={"blackLine0"} width="2.7vw" height="71vh" viewBox="0 0 4vw 71vh" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <rect width="4vw" height="61vh" fill="#212121"/>
        </svg>
        <svg className={"blackLine1"} width="2.7vw" height="215vh" viewBox="0 0 4vw 215vh" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <rect width="4vw" height="95vh" fill="#212121"/>
            <rect width="4vw" height="5vh" transform="matrix(1 0 0 -1 0 636)" fill="#1B1B1B"/>
            <rect y="636" width="4vw" height="135vh" fill="#383737"/>
            <rect width="4vw" height="2.75vh" transform="matrix(-1 0 0 1 52 636)" fill="black" fill-opacity="0.1"/>
        </svg>


        {/* layout */}


        <Card/>
        <Skills />
        <RightPartInAbout/>
        <BottomRect/>


    </section>)
}

export default S3about;