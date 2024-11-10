import './css/styles.scss';

import {animated, useSpring} from '@react-spring/web';
import {useState} from "react";

function LightBox() {
    const [springs, api] = useSpring(() => ({
        opacity: 0.8,
        config: {
            mass: 4,
            friction: 120,
            tension: 120,
        }
    }))

    const [check, setCheck] = useState<boolean>(false)

    function display() {
        setCheck(true);
        console.log("test")
    }

    function unDisplay() {
        setCheck(false);
    }

    function fadeIn() {
        api.start({
            from: { opacity: 0.8 },
            to: { opacity: 0.8 },
        })
        // on={() => {fadeIn(); display()}}
    }

    return (
        <animated.div  style={{...springs}} className={"lightBox " + (check ? "" : "hidden-elem")}>
        </animated.div>
    )

}

export default LightBox;