import React from "react";
import './css/styles.scss';

import AllEmBoxes from "./webDevInsides/AllEmBoxes";

function S5webDev() {
    return (<section className={"s5webDev"}>
        <div className={"topperContainerWrapper"}>
            <div className={"topperContainer"}>
                <h2 className={"webDevHeader"}>Web-dev</h2>
                <div className={"webDevLineWrapper"}>
                    <svg width="768" height="14" viewBox="0 0 768 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="14" width="14" height="768" rx="6" transform="rotate(-90 0 14)" fill="#D2D2D2"/>
                        <rect y="14" width="14" height="590" rx="6" transform="rotate(-90 0 14)" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>


        <AllEmBoxes/>
    </section>)
}

export default S5webDev;