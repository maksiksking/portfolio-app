import React, {useState} from "react";
import './css/styles.scss';

import LiteralCard from './svgComps/s4/LiteralCard';
import Suidou from "./svgComps/s4/Suidou";



function S4holder({ sendPass }) {
    return (<section className={"s4holder"}>
        <LiteralCard/>
        <Suidou/>
    </section>)
}

export default S4holder;