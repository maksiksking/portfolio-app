import React from "react";
import '../css/styles.scss';
import RightPFPWidget from "./RightPFPWidget.jsx";

import { useTranslation } from "react-i18next";

import {useInView, animated, useSpring} from "@react-spring/web";
import i18next from "i18next";

function RightPart() {
    const { t } = useTranslation();
    const getLanguage = () => i18next.language || window.localStorage.i18nextLng

    const buildInteractionObserverThreshold = (count = 100) => {
        const threshold = []

        const parts = 1 / count

        for (let i = 0; i <= count; i++) {
            threshold.push(parseFloat((parts * i).toFixed(2)))
        }

        return threshold
    }


    const [ref, isInView] = useInView({
        rootMargin: '10% 0px 10% 0px',
        amount: buildInteractionObserverThreshold(),
    })


    const styles = useSpring({
        fontSize: getLanguage()==="uk"  ? "1.3rem" : "1.5rem",
        // extra bit for translation ^
        scale: isInView ? 1 : 0,
        config: {
            tension: 300,
        },
    })

    function ProfileAttribute(props) {
        return <animated.li ref={ref} style={styles}>{props.name}</animated.li>
    }


    const translatedAttributes = t('attributes', { returnObjects: true });
    const names = translatedAttributes.names || [];
    const values = translatedAttributes.values || [];

    const combinedAttributes = names.map((name, index) => ({
        name,
        value: values[index] || '',
    }));

    return (
        <div className={"s3rightCont"}>
            <ul>
                {combinedAttributes.map((att) => <ProfileAttribute key={att.id} name={att.name}/>)}
            </ul>
            <svg className={"modernArt"} width="5" height="502" viewBox="0 0 5 502" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <rect y="488" width="5" height="14" rx="2.5" fill="#212121"/>
                <rect y="408" width="5" height="5" rx="2.5" fill="#212121"/>
                <rect y="400" width="5" height="5" rx="2.5" fill="#212121"/>
                <rect y="392" width="5" height="5" rx="2.5" fill="#212121"/>
                <rect y="384" width="5" height="5" rx="2.5" fill="#212121"/>
                <rect y="361" width="5" height="20" rx="2.5" fill="#212121"/>
                <rect y="449" width="5" height="29" rx="2.5" fill="#212121"/>
                <rect y="416" width="5" height="29" rx="2.5" fill="#212121"/>
                <rect width="5" height="358" rx="2.5" fill="#212121"/>
            </svg>
            <ul>
                {combinedAttributes.map((att) => <ProfileAttribute key={att.name} name={att.value}/>)}
            </ul>
            <RightPFPWidget/>
        </div>
    )
}

export default RightPart;
