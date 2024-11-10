import './css/styles.scss';

import {animated, useSpring} from '@react-spring/web';

import {useRecoilState, useRecoilValue} from 'recoil';
import {lightBoxAtom} from "./recoil/atom/lightBoxAtom"

function LightBox() {
    const check = useRecoilValue(lightBoxAtom);


    const [_, setCheck] = useRecoilState(lightBoxAtom);

    setInterval(() => {
        console.log(check)
    }, 2000)


    const [springs, api] = useSpring(() => ({
        opacity: 0.0,
        config: {
            mass: 2,
            friction: 30,
            tension: 120,
        }
    }))

    let theBox = document.getElementsByClassName("lightBox")[0]

    if (check) {
        fadeIn()
        setTimeout(() => {
            theBox.classList.add("no-pointer")
        }, 400)
    }

    function display() {
        // if (check) {
        //     document.body.style.overflow = 'hidden'
        // }
        console.log("test")
    }

    function unDisplay() {
        fadeOut();
        theBox.classList.remove("no-pointer")
        setTimeout(() => {
            setCheck(false);
        }, 500)
    }

    function fadeIn() {
        api.start({
            from: { opacity: 0.0 },
            to: { opacity: 0.8 },
        })
        // on={() => {fadeIn(); display()}}
    }
    function fadeOut() {
        api.start({
            from: { opacity: 0.8 },
            to: { opacity: 0.0 },
        })
        // on={() => {fadeIn(); display()}}
    }

    return (
        <animated.div onClick={() => unDisplay()} onChange={() => {display()}}  style={{...springs}} className={"lightBox " + (check ? "" : "hidden-elem")}>
        </animated.div>
    )

}

export default LightBox;