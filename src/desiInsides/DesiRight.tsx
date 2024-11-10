import '../css/styles.scss';

import {useRecoilState, useRecoilValue} from "recoil";
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
        {id: "Lit 🔥 unset", img: "/img/amazingsunsetv1.png", ratio: "w"},
        {id: "Kasane Teto with a baguetto", img: "/img/kasanetetov4.png", ratio: "s1k"},
        {id: "Knife", img: "/img/Artboard 2.png", ratio: "w"},
        {id: "Logo design", img: "/img/auraGoldMain.png", ratio: "w"},
        {id: "Way too bright banner", img: "/img/Banner.png", ratio: "w"},
        {id: "Fiverr banner design", img: "/img/bannerBanner.png", ratio: "w"},
        {id: "Sacred scripture", img: "/img/bloodyBook.png", ratio: "s"}, // not actually s but sizes
        {id: "Not just any other bush", img: "/img/bush.png", ratio: "s"},
        {id: "It's raining butter", img: "/img/butter.png", ratio: "s"},
        {id: "A candle very much", img: "/img/Cave.png", ratio: "s"},
        {id: "Lit 🔥 with napalm sunset", img: "/img/colorbgbutfilteredalot.png", ratio: "s3s"},
        {id: "One of the older desktop reworks", img: "/img/DekstopRework.png", ratio: "w"},
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
        {id: "Reflection", img: "/img/reflectionFinal1.png", ratio: "s2r"},
        {id: "Made using only a random desktop screenshot", img: "/img/scribe.png", ratio: "w"},
        {id: "Some very old vector art", img: "/img/Shine.jpg", ratio: "w"},
        {id: "A little tea pin", img: "/img/TeaPin.png", ratio: "s"},
        {id: "Textbooks really are mid", img: "/img/textbooks are mid.png", ratio: "w"},
        {id: "TextLapser", img: "/img/TextLapser.png", ratio: "s"},
        {id: "They took all the purple.", img: "/img/thumbv1.png", ratio: "w"},
        {id: "Patriotic", img: "/img/Ukraine.png", ratio: "s"},
        {id: "Diamonds are kinda meh", img: "/img/wothlessVFaceless.png", ratio: "w"},
        {id: "The doodle stash", img: "/img/ytchannelthumbvgl6.png", ratio: "w"}
    ]

    function DiscombobulateData(props: DiscombobulateDataProps) {
        let type: string = "something broke";
        if (props.ratio === "w") {
            if (Math.floor(Math.random() * 7) === 0) {
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
            if (Math.floor(Math.random() * 7) === 0) {
                type = "four-grid-cells";
            }
            else {
                type = "one-grid-cell";
            }
        }
        return (
            <img onClick={() => {setCheck(true);}} className={type} src={props.img} alt={props.id}/>
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
