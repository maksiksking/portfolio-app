import '../css/styles.scss';
import {animated} from '@react-spring/web';
import React from "react";

interface SpringProps {
    sp: any
}

function Snow(props: SpringProps) {
    return (
        <animated.div style={{...props.sp}} className={"g-snows"}>
            {Array.from({length: 100}, (_, i) => (
                <li key={i}></li>
            ))}
        </animated.div>
    )
}


export default Snow;