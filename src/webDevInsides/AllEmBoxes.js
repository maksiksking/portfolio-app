import React, {useState} from 'react';
import '../css/styles.scss';
import {useSpring, animated} from '@react-spring/web';


function AllEmBoxes() {
    const handleClick = () => {
        const themAll = document.getElementsByClassName("corVid")
        console.log(themAll);
        for (let item of themAll) {

            console.log(item);
        }

        api.start({
            from: {},
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

    const futureVid = <video className={"corVid"} src={"../vid/webdvid1.mp4"} loop muted autoPlay={true}>
    </video>
    const teaVid = <video className={"corVid"} src={"../vid/webdvid2.mp4"} loop muted autoPlay={true}>
    </video>
    const hereVid = <video className={"corVid"} src={"../vid/baguette.webm"} loop muted autoPlay={true}>
    </video>
    const bwkittyVid = <video className={"corVid"} src={"../vid/webdvid4.mp4"} loop muted autoPlay={true}>
    </video>
    const oldfolioVid = <video className={"corVid"} src={"../vid/webdvid5.mp4"} loop muted autoPlay={true}>
    </video>
    const aieEmojifyVid = <video className={"corVid"} src={"../vid/webdvid6.mp4"} loop muted autoPlay={true}>
    </video>
    const clickTheCityCommisionVid = <video className={"corVid"} src={"../vid/webdvid7.mp4"} loop muted
                                            autoPlay={true}>
    </video>


    let gridData = [
        {id: 1, a1: 1, a2: 1, a3: 2, a4: 3, vid: futureVid, link: "https://maksiksking.github.io/futureOfUkraineWebDesignCompetition2023h1/"},
        {id: 2, a1: 1, a2: 3, a3: 2, a4: 6, vid: teaVid, link: "https://course-site-f.vercel.app/#"},
        {id: 3, a1: 2, a2: 1, a3: 3, a4: 3, vid: hereVid, link: "#"},
        {id: 4, a1: 2, a2: 3, a3: 3, a4: 5, vid: bwkittyVid, link: "https://b-w-kitty-maksiksed.vercel.app/"},
        {id: 5, a1: 2, a2: 5, a3: 3, a4: 6, vid: oldfolioVid, link: "#"},
        {id: 6, a1: 3, a2: 1, a3: 4, a4: 4, vid: aieEmojifyVid, link: "#"},
        {id: 7, a1: 3, a2: 4, a3: 4, a4: 6, vid: clickTheCityCommisionVid, link: "#"}
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
        let elem =
            <animated.a href={props.link} className={"wdiv wdiv" + String(props.ids)} key={props.id}
                          style={{gridArea: String(props.a1) + "/" + String(props.a2) + "/" + String(props.a3) + "/" + String(props.a4), ...springs,}}>
                {props.vid}
            </animated.a>
        return elem;
    }


    return (<div className="allEmWrapper flex-to-mid">
            <div className={"allEmBoxes"}>
                {boxes.map((box) => <GridDataBake key={box.id} ids={box.id} a1={box.a1} a2={box.a2} a3={box.a3}
                                                  a4={box.a4} vid={box.vid} link={box.link}/>)}
            </div>
        </div>
    )


}

export default AllEmBoxes;