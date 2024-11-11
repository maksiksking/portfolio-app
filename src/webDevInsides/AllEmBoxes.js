import React, { useState } from 'react';
import '../css/styles.scss';
import { useSpring, animated } from '@react-spring/web';


function AllEmBoxes() {
    const handleClick = () => {
        const themAll = document.getElementsByClassName("corVid")
        console.log(themAll);
        for (let item of themAll) {

            console.log(item);
        }

        api.start({
            from: {
            },
            to: {
                width: "252.7%",
            },
        })
    }
    const unhandleClick = () => {
        console.log("hi")
        api.start({
            from: {},
            to: {
                width: "100%",
            },
        })
    }

    const futureVid = <video className={"corVid"}  src={"../vid/webdevvid1.mp4"}  loop muted autoPlay={true}>
    </video>
    const teaVid = <video className={"corVid"}  src={"../vid/webdevvid2.mp4"}  loop muted autoPlay={true}>
    </video>
    const hereVid = <video className={"corVid"}  src={"../vid/webdevvid4.mp4"}  loop muted autoPlay={true}>
    </video>
    const bwkittyVid = <video className={"corVid"}  src={"../vid/webdevvid5.mp4"}  loop muted autoPlay={true}>
    </video>
    const oldfolioVid = <video className={"corVid"}  src={"../vid/webdevvid6.mp4"}  loop muted autoPlay={true}>
    </video>
    const aieEmojifyVid = <video className={"corVid"}  src={"../vid/webdevvid7.mp4"}  loop muted autoPlay={true}>
    </video>
    const clickTheCityCommisionVid = <video className={"corVid"} src={"../vid/baguette.webm"}  loop muted autoPlay={true}>
    </video>



    let gridData = [
        {id: 1, a1: 1, a2: 1, a3: 2, a4: 3, vid: futureVid},
        {id: 2, a1: 1, a2: 3, a3: 2, a4: 6, vid: teaVid},
        {id: 3, a1: 2, a2: 1, a3: 3, a4: 3, vid: hereVid},
        {id: 4, a1: 2, a2: 3, a3: 3, a4: 5, vid: bwkittyVid},
        {id: 5, a1: 2, a2: 5, a3: 3, a4: 6, vid: oldfolioVid},
        {id: 6, a1: 3, a2: 1, a3: 4, a4: 4, vid: aieEmojifyVid},
        {id: 7, a1: 3, a2: 4, a3: 4, a4: 6, vid: clickTheCityCommisionVid}
    ]


    const [boxes, setBoxes] = useState(
        gridData
    );

    const [springs, api] = useSpring(() => ({
        width: "100%",
        config: {
            mass: 8,
            friction: 30,
            tension: 120,
        },
    }))


    function GridDataBake(props) {
        let elem = <animated.div className={"wdiv wdiv" + String(props.ids)} key={props.id} style={{gridArea: String(props.a1) + "/" + String(props.a2) + "/" + String(props.a3) + "/" + String(props.a4), ...springs,}}>
            {props.vid}
        </animated.div>;
        return elem;
    }





    return (<div className="allEmWrapper flex-to-mid">
            {/* a lil bit of credit to https://cssgrid-generator.netlify.app/ for the amazing Grid generator*/}

            <div className={"allEmBoxes"}>
                {/*divs*/}
                {boxes.map((box) => <GridDataBake key={box.id} ids={box.id} a1={box.a1} a2={box.a2} a3={box.a3} a4={box.a4} vid={box.vid}/>)}
            </div>
        </div>
    )


}

export default AllEmBoxes;