import React from "react";

function Cheese(props) {
    return <h2>Hi, I am {props.kind}!</h2>;
}

function Barrel() {
    function commitCrimes(commit, e) {
        alert(commit + e.type);
    }
    let a = true;
    if (a) {
        return <h1>nope</h1>;
    }
    return (
        <>
            <h1>The cheese in the barrel is</h1>
            <Cheese kind={"mozzarella"}></Cheese>
            <button onClick={(event) => commitCrimes("commit", event)}></button>
        </>
    )
}


export default Barrel;