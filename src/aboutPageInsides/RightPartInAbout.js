import React from "react";
import '../css/styles.scss';
import RightPFPWidget from "./RightPFPWidget";

function ProfileAttribute(props) {
    return <li>{props.name}</li>
}

function RightPart() {
    const attributes = [
        {id: "age1", name: "age:", value: "17"},
        {id: "pronouns1", name: "pronouns:", value: "he/him"},
        {id: "occupation1", name: "occupation:", value: "student"},
        {id: "nationality1", name: "nationality:", value: "ukrainian"},
        {id: "favorite1", name: "favorite\n" +
                "metal:", value: "lead "},
        {id: "alone1", name: "alone:", value: "alone"},
    ]


    return (
        <div className={"s3rightCont"}>
            <ul>
                {attributes.map((att) => <ProfileAttribute key={att.id} name={att.name}/>)}
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
                {attributes.map((att) => <ProfileAttribute key={att.name} name={att.value}/>)}
            </ul>
            <RightPFPWidget/>
        </div>
    )
}

export default RightPart;
