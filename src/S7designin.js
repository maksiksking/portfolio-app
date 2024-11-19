import React from "react";
import './css/styles.scss';

import DesiLeft from "./desiInsides/DesiLeft";
import DesiRight from "./desiInsides/DesiRight";

function S7designin() {
    return (<section className={"S7designin"}>
        <div className={"desiLeft"}>
            <DesiLeft/>
        </div>
        <div className={"desiRightWrap"}>
            <div className={"desiRight"}>
                <DesiRight/>
            </div>
        </div>

    </section>)
}

export default S7designin;