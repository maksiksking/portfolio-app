import React, {useState} from "react";
import './css/styles.scss';

import LiteralCard from './svgComps/s4/LiteralCard';
import Suidou from "./svgComps/s4/Suidou";



function S4holder({ sendPass }) {
    const skillz = [
        {id: 1, text: "It’s not that impressive that it will make your heart stop, <br/> thanks for the compliment tho. Now press Yes"},
        {id: 2, text: "Yes, your choice does not matter, this is a website after all."},
        {id: 3, text:"Just click, you got your extra line of dialogue"},
        {id: 4, text:"That's it, there is no more line here"}
    ]
    return (<section className={"s4holder"}>
        <LiteralCard/>
        <Suidou/>
    </section>)
}

export default S4holder;