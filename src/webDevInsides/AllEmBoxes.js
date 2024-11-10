import React, { useState } from 'react';
import '../css/styles.scss';
import { useSpring, animated } from '@react-spring/web';



let gridData = [
    {id: 1, a1: 1, a2: 1, a3: 2, a4: 3},
    {id: 2, a1: 1, a2: 3, a3: 2, a4: 6},
    {id: 3, a1: 2, a2: 1, a3: 3, a4: 3},
    {id: 4, a1: 2, a2: 3, a3: 3, a4: 5},
    {id: 5, a1: 2, a2: 5, a3: 3, a4: 6},
    {id: 6, a1: 3, a2: 1, a3: 4, a4: 4},
    {id: 7, a1: 3, a2: 4, a3: 4, a4: 6}
]

function AllEmBoxes() {
    const [boxes, setBoxes] = useState(
        gridData
    );

    const [springs, api] = useSpring(() => ({
        width: "100%",
        config: {
            mass: 5,
            friction: 120,
            tension: 120,
        },
    }))

    function GridDataBake(props) {
        let elem = <animated.div className={"wdiv" + String(props.ids)} key={props.id} style={{gridArea: String(props.a1) + "/" + String(props.a2) + "/" + String(props.a3) + "/" + String(props.a4), ...springs,}}></animated.div>;
        return elem;
    }

    const handleClick = () => {
        api.start({
            from: {
            },
            to: {
                width: "252.7%",
            },
        })

        const nextBoxes = boxes.map(box => {
            if (box.id !== 1) {
                return box;
            } else {
                return {
                    id: box.id,
                    a1: box.a1,
                    a2: box.a2,
                    a3: box.a3,
                    a4: box.a4
                };
            }
        });
        setBoxes(nextBoxes);
    }

    return (<div className="allEmWrapper flex-to-mid">
            <button onClick={handleClick}>aaa</button>
            {/* a lil bit of credit to https://cssgrid-generator.netlify.app/ for the amazing Grid generator*/}

            <div className={"allEmBoxes"}>
                {/*divs*/}
                {boxes.map((box) => <GridDataBake key={box.id} ids={box.id} a1={box.a1} a2={box.a2} a3={box.a3} a4={box.a4}/>)}
            </div>
        </div>
    )


}

export default AllEmBoxes;