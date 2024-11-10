import React, {useState} from "react";
import './css/styles.scss';
import './css/snow.scss';

import ProgramminBg from "./svgComps/s6/ProgramminBg";
import DevSec from "./devInsides/DevSec.tsx";
import {useSpring} from '@react-spring/web';

function S6programmin() {
    const [springs, api] = useSpring(() => ({
        x: 0,
        config: {
            mass: 4,
            friction: 120,
            tension: 120,
        },
    }))

    const [coord, setCoord] = useState({ x: 0, y: 0 });

    function moveSnow(e) {
        setCoord({ x: e.screenX, y: e.screenY });
        api.start({
            to:
                { x: coord.x/4},

            reset: true,
        })
    }


    return (<section onMouseMove={moveSnow} onMouseOut={() => {
        console.log("in check")
    }} className={"s6programmin"}>


        <div  className={"innerProgCont"}>
            <div className={"coverUp"}></div>
            <h2 className={"devTxt progCaretCont"}>
                Dev
                <div className={"caret1"}></div>
            </h2>
            <div className={"devSecContainer"}>
                <DevSec sp={springs}/>
                <p className={"gitPlug"}>Of course there's more on my <a target={"_blank"} rel="noreferrer" href={"https://github.com/maksiksking"}><br/>Github #</a></p>
            </div>
        </div>
        <ProgramminBg/>
    </section>)
}

export default S6programmin;