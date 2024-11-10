import React from "react";
import '../css/styles.scss';

import UnderProfile from "../svgComps/s3/UnderProfile";

function RightPFPWidget() {
    return (<div className={"rightPfpWrapper"}>
            <img className={"profilePic"} src={require("../img/pfpvlike40somethingidkilostcountplusoutline.png")}
                 alt={"profilePic"}/>
            <UnderProfile />
        </div>
    )
}

export default RightPFPWidget;