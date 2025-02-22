import '../css/styles.scss';
import {useTranslation} from "react-i18next";

import React, {useState} from "react";
import {Trans} from "react-i18next";

function DesiLeft() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const t = useTranslation();
    // updater

    const [x, setX] = useState(1);
    const [pointer, setPointer] = useState("pointer");
    return (
        <svg width="754" height="631" viewBox="0 0 754 631" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="222" cy="343" rx="93" ry="24" fill="#747474"/>
            <rect x="168" y="279" width="98" height="8" fill="#262626"/>
            <rect x="170" y="292" width="96" height="8" fill="#262626"/>
            <rect x="170" y="305" width="96" height="8" fill="#262626"/>
            <path d="M257 273H272V343H257L261.5 298.87L257 273Z" fill="#161616"/>
            <path d="M161 273H176V343H161L165.5 298.87L161 273Z" fill="#161616"/>
            <path d="M178 321H191V343H178L181.9 329.13L178 321Z" fill="#161616"/>
            <path d="M270 321H283V343H270L273.9 329.13L270 321Z" fill="#161616"/>
            <rect x="167" y="317" width="49" height="8" fill="#272727"/>
            <rect x="184" y="317" width="99" height="8" fill="#2D2D2D"/>
            <text fill="black" style={{whiteSpace: "pre"}} font-family="Fredericka the Great"
                  font-size="50" letter-spacing="0em">
                <tspan x="27" y="48.7373"><Trans i18nKey={"graphics.titleLine1"}></Trans> &#10;</tspan>
                <tspan x="27" y="109.737"><Trans i18nKey={"graphics.titleLine2"}></Trans></tspan>
            </text>
            <text className={"graphicsDescTxt"} fill="black" style={{whiteSpace: "pre"}} font-family="Comfortaa" font-size="30"
                  letter-spacing="0em">
                <tspan x="47" y="543.205"><Trans i18nKey={"graphics.descLine1"}></Trans>&#10;</tspan>
                <tspan x="47" y="576.205"><Trans i18nKey={"graphics.descLine2"}></Trans></tspan>
            </text>
            <text fill="black" style={{whiteSpace: "pre"}} font-family="Comfortaa" font-size="15"
                  letter-spacing="0em">
                <tspan x="99.1025" y="387.352"><Trans i18nKey={"graphics.bench"}></Trans>&#10;</tspan>
                <tspan x="198.346" y="409.353">( &#x361;&#xb0; &#x35c;&#x296; &#x361;&#xb0;)</tspan>
            </text>
            <text fill="black" style={{whiteSpace: "pre"}} font-family="Comfortaa" font-size="15"
                  letter-spacing="0em">
                <tspan x="192" y="432" style={{zIndex: 0}}><Trans i18nKey={"graphics.both"}></Trans>&#10;</tspan>
            </text>
            <rect className={"lilSpoiler"} onClick={() => {
                setX(0) ; setPointer("initial")
            }} style={{opacity: x, cursor: pointer}} x="141" y="418" width="156" height="20" fill="#161616"/>
            <text>

                <tspan x="99.1025" y="387.352">which way is the bench facing?&#10;</tspan>
                <tspan x="198.346" y="404.353">( &#x361;&#xb0; &#x35c;&#x296; &#x361;&#xb0;)</tspan>
            </text>
            <circle cx="144.5" cy="486.5" r="6" stroke="black" stroke-width="3"/>
            <circle cx="193" cy="621" r="8.5" stroke="black" stroke-width="3"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M151.851 488C151.949 487.517 152 487.017 152 486.504C152 485.989 151.948 485.486 151.849 485H753V488H151.851ZM137.149 488H-133V485H137.151C137.052 485.486 137 485.989 137 486.504C137 487.017 137.052 487.517 137.149 488Z"
                  fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M199.86 623C199.952 622.515 200 622.014 200 621.5C200 620.986 199.952 620.485 199.86 620H753V623H199.86ZM186.14 623H-62V620H186.14C186.048 620.485 186 620.986 186 621.5C186 622.014 186.048 622.515 186.14 623Z"
                  fill="black"/>
            <circle cx="686.5" cy="595.5" r="20" stroke="black" stroke-width="3"/>
            <path
                d="M687.707 577.293C687.317 576.902 686.683 576.902 686.293 577.293L679.929 583.657C679.538 584.047 679.538 584.681 679.929 585.071C680.319 585.462 680.953 585.462 681.343 585.071L687 579.414L692.657 585.071C693.047 585.462 693.681 585.462 694.071 585.071C694.462 584.681 694.462 584.047 694.071 583.657L687.707 577.293ZM688 598V578H686V598H688Z"
                fill="black"/>
            <path
                d="M696.768 593.257C696.91 592.868 696.709 592.437 696.32 592.296L689.977 589.987C689.587 589.845 689.157 590.046 689.015 590.435C688.874 590.824 689.074 591.255 689.464 591.397L695.102 593.449L693.05 599.087C692.908 599.476 693.109 599.906 693.498 600.048C693.887 600.19 694.318 599.989 694.459 599.6L696.768 593.257ZM687.317 597.906L696.38 593.68L695.746 592.321L686.683 596.547L687.317 597.906Z"
                fill="black"/>
            <rect x="669" y="596" width="4" height="1" fill="black"/>
            <rect x="700" y="596" width="4" height="1" fill="black"/>
            <rect x="686" y="613" width="4" height="1" transform="rotate(-90 686 613)" fill="black"/>
            <rect x="685" y="620" width="3" height="3" transform="rotate(-90 685 620)" fill="black"/>
            <path
                d="M556.5 134.5C556.5 142.784 563.216 149.5 571.5 149.5C572.332 149.5 572.845 149.431 573.141 149.355C573.096 149.245 573.028 149.095 572.922 148.9C572.647 148.396 572.233 147.788 571.698 147.041C571.534 146.813 571.361 146.574 571.181 146.325C570.219 144.999 569.054 143.393 568.092 141.646C566.945 139.562 566 137.133 566 134.5C566 131.867 566.945 129.438 568.092 127.354C569.054 125.607 570.219 124.001 571.181 122.675C571.361 122.426 571.534 122.187 571.698 121.959C572.233 121.212 572.647 120.604 572.922 120.1C573.028 119.905 573.096 119.755 573.141 119.645C572.845 119.569 572.332 119.5 571.5 119.5C563.216 119.5 556.5 126.216 556.5 134.5ZM573.407 119.74C573.407 119.74 573.407 119.74 573.406 119.74L573.407 119.74Z"
                stroke="black" stroke-width="3"/>
            <path
                d="M35.2219 134.5C35.2219 142.784 28.5061 149.5 20.2219 149.5C19.3895 149.5 18.8769 149.431 18.5811 149.355C18.6252 149.245 18.6936 149.095 18.7998 148.9C19.0745 148.396 19.4889 147.788 20.0239 147.041C20.1873 146.813 20.3606 146.574 20.541 146.325C21.5028 144.999 22.6676 143.393 23.6292 141.646C24.7769 139.562 25.7217 137.133 25.7217 134.5C25.7217 131.867 24.7769 129.438 23.6292 127.354C22.6676 125.607 21.5028 124.001 20.541 122.675C20.3606 122.426 20.1873 122.187 20.0239 121.959C19.4889 121.212 19.0745 120.604 18.7998 120.1C18.6936 119.905 18.6252 119.755 18.5811 119.645C18.8769 119.569 19.3895 119.5 20.2219 119.5C28.5061 119.5 35.2219 126.216 35.2219 134.5ZM18.3146 119.74C18.3146 119.74 18.3149 119.74 18.3155 119.74L18.3146 119.74Z"
                stroke="black" stroke-width="3"/>
            <rect x="34" y="132" width="523" height="5" rx="2.5" fill="black"/>
            <rect width="33" height="5" rx="2.5" transform="matrix(-1 0 0 1 622 132)" fill="black"/>
            <rect width="33" height="5" rx="2.5" transform="matrix(-1 0 0 1 11 132)" fill="black"/>
            <rect width="33" height="5" rx="2.5" transform="matrix(-1 0 0 1 671 132)" fill="black"/>
            <rect width="50" height="5" rx="2.5" transform="matrix(-1 0 0 1 754 132)" fill="black"/>
            <rect width="8" height="5" rx="2.5" transform="matrix(-1 0 0 1 688 132)" fill="black"/>
        </svg>


    )
}

export default DesiLeft;