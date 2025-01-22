import React from "react";
import '../css/styles.scss';

import {animated, useScroll} from "@react-spring/web";

function S1ini() {
    const { scrollYProgress } = useScroll();
    return (

        <div className={"iniIllusion"}>
            <animated.img  style={{
                width: "40.125vw",
                height: "42.125vw",
                rotate: scrollYProgress.to((progress) => {
                    const pageHeight = window.innerHeight;
                    return progress * pageHeight * 2;
                })
            }} className={"iniIllu1"} src={"/img/illu1.png"}  alt={"cool illusion p 1"}/>
            {/*one day i'll try out an inline css library, one day*/}
            <animated.img style={{
                width: "40.325vw",
                height: "42.125vw",
                left: scrollYProgress.to((progress) => {
                    const pageHeight = window.innerHeight;
                    const pageWidth = window.innerWidth;
                    return progress * pageHeight + pageWidth*0.32;
                }),
                rotate: scrollYProgress.to((progress) => {
                    const pageHeight = window.innerHeight;
                    return progress * pageHeight * 4;
                })
            }} className={"iniIllu2"} src={"/img/illu2.png"}  alt={"cool illusion p 2"}/>
        </div>
    )
}

export default S1ini;