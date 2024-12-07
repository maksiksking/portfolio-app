import {Helmet} from "react-helmet-async";
import {RecoilRoot} from "recoil";
import S1ini from "./S1ini";
import React from "react";
import LightBox from "./LightBox";
import S3about from "./S3about";
import S4holder from "./S4holder";
import S5webDev from "./S5webDev";
import S6programmin from "./S6programmin";
import S7designin from "./S7designin";
import MiniFooter from "./MiniFooter";


function RestOfThePage() {
    return (
        <>
            <LightBox/>
            <S3about/>
            <S4holder/>
            <S5webDev/>
            <S6programmin/>
            <S7designin/>
            <MiniFooter/>
        </>
    )
}


function MainPage() {
    return (
        <div>
            <Helmet>
                <title>Maksiks</title>
                <meta name='description' content='My about me page, made in React, try it out and see.'/>
                { /* Facebook tags */ }
                <meta property="og:type" content={"portfolio"} />
                <meta property="og:title" content={"Maksiks"} />
                <meta property="og:description" content={"My about me page, made in React, try it out and see."} />
                { /* End Facebook tags */ }
                { /* Twitter tags */ }
                <meta name="twitter:creator" content={"Maksiks"} />
                <meta name="twitter:card" content={"app"} />
                <meta name="twitter:title" content={"Maksiks"} />
                <meta name="twitter:description" content={"My about me page, made in React, try it out and see."} />
                { /* End Twitter tags */ }
            </Helmet>
            <RecoilRoot translate="no">
                <S1ini/>
                {/*<S2now/> removed*/}
                <RestOfThePage/>
            </RecoilRoot>

        </div>
    )
}

export default MainPage;