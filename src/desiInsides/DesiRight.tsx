import '../css/styles.scss';

import {useEffect, useRef, useState} from "react";

import {useRecoilState} from "recoil";
import {lightBoxAtom} from "../recoil/atom/lightBoxAtom"

interface DiscombobulateDataProps {
    id: string;
    img: string;
    ratio: string;
}

function DesiRight() {
    const [_, setCheck] = useRecoilState(lightBoxAtom);

    const data = [
        {id: "Oh god Afterplace is such an underrated game, it is so good", img: "/img/afterworld.png", ratio: "s"},
        {id: "Lit 🔥 sunset", img: "/img/amazingsunsetv1.png", ratio: "w"},
        {id: "Kasane Teto with a baguetto", img: "/img/kasanetetov4.png", ratio: "s1k"},
        {id: "Knife", img: "/img/Artboard 2.png", ratio: "w"},
        {id: "Logo design", img: "/img/auraGoldMain.png", ratio: "w"},
        {id: "Lit 🔥 with napalm sunset", img: "/img/colorbgbutfilteredalot.png", ratio: "s3s"},
        {id: "Way too bright banner", img: "/img/Banner.png", ratio: "w"},
        {id: "Fiverr banner design", img: "/img/bannerBanner.png", ratio: "w"},
        {id: "Sacred scripture", img: "/img/bloodyBook.png", ratio: "s"}, // not actually s but sizes
        {id: "Not just any other bush", img: "/img/bush.png", ratio: "s"},
        {id: "It's raining butter", img: "/img/butter.png", ratio: "s"},
        {id: "A candle very much", img: "/img/Cave.png", ratio: "s"},
        {id: "One of the older desktop reworks", img: "/img/DekstopRework.png", ratio: "w"},
        {id: "Reflection", img: "/img/reflectionFinal1.png", ratio: "s2r"},
        {id: "Playlist cover", img: "/img/EDMbg.png", ratio: "s"},
        {id: "Flags of Europe with years of their official adoption", img: "/img/europeflagchartv3.png", ratio: "w"},
        {id: "Boban's bakery for a commission", img: "/img/finalBakery.png", ratio: "w"},
        {id: "Fiverr banner", img: "/img/FiverrBanner.png", ratio: "w"},
        {id: "3D Boolean Gun", img: "/img/GunFinal.png", ratio: "w"},
        {id: "Digital/physical heart", img: "/img/heart.png", ratio: "v"},
        {id: "One of the many", img: "/img/MaksiksLogo6.png", ratio: "s"},
        {id: "Yet another logo", img: "/img/musicMaksiks.png", ratio: "s"},
        {id: "Another logo, that's right", img: "/img/Never fade awayv16.png", ratio: "s"},
        {id: "The current", img: "/img/pfpvlike40somethingidkilostcount.png", ratio: "s"},
        {id: "Made using only a random desktop screenshot", img: "/img/scribe.png", ratio: "w"},
        {id: "Some very old vector art", img: "/img/Shine.jpg", ratio: "w"},
        {id: "A little tea pin", img: "/img/TeaPin.png", ratio: "s"},
        {id: "Textbooks really are mid", img: "/img/textbooks are mid.png", ratio: "w"},
        {id: "TextLapser", img: "/img/TextLapser.png", ratio: "s"},
        {id: "They took all the purple.", img: "/img/thumbv1.png", ratio: "w"},
        {id: "Patriotic", img: "/img/Ukraine.png", ratio: "s"},
        {id: "Diamonds are kinda meh", img: "/img/wothlessVFaceless.png", ratio: "w"},
        {id: "The doodle stash", img: "/img/ytchannelthumbvgl6.png", ratio: "w"},
        {id: "A moon", img: "/img/lilmoontransparent.png", ratio: "s"}
    ]

    function activateLightBoxMode(img: string, txt: string)
    {
        let theBox = document.getElementsByClassName("lightBox")[0]
        document.body.style.overflowY = 'hidden';

        setCheck([{check: "true"}, {img: img}, {text: txt}]);
    }

    let iter = 0;


    function DiscombobulateData(props: DiscombobulateDataProps) {
        let type: string = "something broke";
        iter += 1;
        if (props.ratio === "w") {
            if (iter === 19 || iter === 30) {
                type = "four-horizontal-grid-cells";
            }
            else {
                type = "wide-image";
            }
        }
        if (props.ratio === "s1k") {
            type = "eight-grid-cells";
        }
        if (props.ratio === "s2r") {
            type = "six-grid-cells";
        }
        if (props.ratio === "s3s") {
            type = "four-horizontal-grid-cells";
        }
        if (props.ratio === "s") {
            if (iter === 1 || iter === 8 || iter === 23 || iter === 10) {
                type = "four-grid-cells";
            }
            else {
                type = "one-grid-cell";
            }
        }
        return (
            <img onClick={() => {activateLightBoxMode(props.img, props.id);}} className={type} src={props.img} alt={props.id + " " + iter}/>
        );

    }

    return (
        <>
            {data.map((d) => (
                <DiscombobulateData key={d.id} id={d.id} img={d.img} ratio={d.ratio}/>
            ))}
        </>
    );
}

export default DesiRight;
