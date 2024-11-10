import React, { useState } from "react";

function Counter({ count }) {
    return <h1>Go up as I command: {count}</h1>
}

function Choose() {
    const [a, setA] = useState(0);

    const increment = () => setA(a + 1);
    return (
    <div>
        <Counter count={a}/>
        <button onClick={increment}>Increase Count</button>
    </div>
    );
}

export default Choose;