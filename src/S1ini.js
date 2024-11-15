import {useState, React} from "react";
import './css/styles.scss';

import {animated, useSpring} from "@react-spring/web";

import Illu from "./iniInsides/Illu";


function S1ini() {
    const [check, setCheck] = useState(true);

    const [springs, api] = useSpring(() => ({
        x: 0,
        y: 0,
        config: {
            mass: 12,
            friction: 20,
            tension: 420,
        }
    }));

    const [springs1, api1] = useSpring(() => ({
        x: 0,
        y: 0,
        config: {
            mass: 12,
            friction: 20,
            tension: 420,
        }
    }));


    function onMove() {
        if (!check) return;
        api.start({
            from: {}, to: {
                x: Math.floor(Math.random() * 150),
                y: Math.floor(Math.random() * 150),
            },
        })
        api1.start({
            from: {}, to: {
                x: Math.floor(Math.random() * 10),
                y: Math.floor(Math.random() * 10),
            },
        })
    }

    function onHold() {
        api.stop()
        api1.stop()
        setCheck(false);
    }

    function startUp() {
        setCheck(true);
    }

    document.addEventListener('mousemove', startUp);


    return (
        <section className={"s1ini flex-to-mid"}>
            <Illu></Illu>
            <animated.div onMouseDown={onHold} onMouseUp={startUp} onMouseMove={onMove} style={{...springs}}
                          className={"iniHWrap"}>
                <h1 className={"iniH1"}>Maksiks</h1>
            </animated.div>

        </section>
    )
}

export default S1ini;