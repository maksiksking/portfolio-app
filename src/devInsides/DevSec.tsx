import '../css/styles.scss';

import DevSvgLine from "../svgComps/DevSvgLine";
import React from "react";
import Snow from "../devInsides/Snow"

// react doesnt wanna eat my path and make a video so I have to import them separately, so weird
const mouseSpinVid: any = <video src={require("../vid/baguette.webm")} controls={true}/>
const textLapserVid: any = <video className={"devVideoEven"} src={require("../vid/baguette.webm")} controls={true}/>
const opApVid: any = <video src={require("../vid/baguette.webm")} controls={true}/> // add them
const teaModVid: any = <video className={"devVideoEven"} src={require("../vid/baguette.webm")}
                              controls={true}/>


interface DevSecProps {
    sp: any;
}

interface distributeDataProps {
    even: boolean;
    sp: any;
    id: string;
    video: string;
    title: string;
    text: string;
    githublnk: string;
}

function DistributeData(props: distributeDataProps) {
    if (!props.even) {
        return (<>
                <Snow sp={props.sp}/>
                <div className="devSec">
                    <div className={"funkyDiv"}>
                        <img className={"dec1Rainloop"} src={require("../img/rainlooptt.gif")} loading={"lazy"}
                             alt="rainl"/>
                    </div>
                    <div className={"devSecBox"}>
                        {props.video}
                        <div className={"devSecTxtContainer"}>
                            <h3>{props.title}</h3>
                            <DevSvgLine/>
                            <p>
                                {props.text}
                                <br/><br/>
                                <a className={"gitLinkDeco"} target={"_blank"} rel="noreferrer"
                            href={props.githublnk}>Github #
                        </a>
                    </p>
                </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (<>
                <Snow sp={props.sp}/>
                <div className="devSec">
                    <div className={"devSecBox"}>
                        {props.video}
                        <div className={"devSecTxtContainer devTxtContEven"}>
                            <h3>{props.title}</h3>
                            <DevSvgLine/>
                            <p>
                                {props.text}
                                <br/><br/>
                                <a target={"_blank"} rel="noreferrer" href={props.githublnk}>Github #</a>
                            </p>
                        </div>
                    </div>
                    <div className={"funkyDiv"}>

                    </div>
                </div>
            </>
        )
    }
}

function DevSec(props: DevSecProps) {
    const data = [
        {
            id: "mouseSpin",
            video: mouseSpinVid,
            title: "Yep. It just circles your cursor. That’s it.",
            text: "My life before I made this script was completely different, now I can’t live without it. I don’t have ADHD or something but for some reason this works for my brain really well. I also managed to break the library in a very satisfying way",
            githublnk: "https://github.com/maksiksking/Mouse-spinner",
            even: false
        },
        {
            id: "textLapser",
            video: textLapserVid,
            title: "Text Lapser",
            text: "A Discord bot that removes all messages that aren’t GIFs from channels specified in code.  Mostly me playing around with the Discord.py API alongside a few other simple bots for my private servers. Feel free to fork.",
            githublnk: "https://github.com/maksiksking/TextLapserBot",
            even: true
        },
        {
            id: "opAp",
            video: opApVid,
            title: "OpenAI API implementation",
            text: "The back-end for this website was actually made in Python, with Pyodide to make the utilization of the ChatGPT API a little easier. Also gave me some nice experience with the API.",
            githublnk: "https://github.com/maksiksking/AI-emojify",
            even: false
        },
        {
            id: "teaMod",
            video: teaModVid,
            title: "Teamod",
            text: "Yup, just a Minecraft tea mod. Has a fair bit of content even if creative only. There are lots of different teas, and some of them even have certain effects, like nausea or ... vein miner. It's unfinished but it's pretty wild.",
            githublnk: "https://github.com/maksiksking/tea-mod",
            even: true
        }
    ]

    return (<>{data.map((d) =>
        <DistributeData key={d.id} id={d.id} sp={props.sp} even={d.even} video={d.video}
                        title={d.title} text={d.text} githublnk={d.githublnk}/>)}</>)

}

export default DevSec;