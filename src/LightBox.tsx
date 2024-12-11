import './css/styles.scss';

import {animated, useSpring} from '@react-spring/web';

import {useRecoilState, useRecoilValue} from 'recoil';
import {lightBoxAtom} from "./recoil/atom/lightBoxAtom"

function LightBox() {
    const recoilData: object = useRecoilValue(lightBoxAtom);
    const check: boolean = (recoilData[0]?.check === "true");
    const img: string = recoilData[1]?.img;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setCheck] = useRecoilState(lightBoxAtom);


    const [springs, api] = useSpring(() => ({
        backgroundColor: 'rgba(0, 0, 0, 0)',
        config: {
            duration: 400,
        }
    }))

    let theBox = document.getElementsByClassName("lightBox")[0]
    if (check) {
        theBox.classList.add("no-pointer")
    }

    function display() {
        // console.log("Displayed") // yup
    }

    const unDisplay = () => {
        fadeOut();
        document.body.style.overflowY = 'initial';

        setCheck(false);
        theBox.classList.remove("no-pointer")
    }


    function fadeIn() {
        api.start({
            from: {backgroundColor: 'rgba(0, 0, 0, 0)'},
            to: {backgroundColor: 'rgba(0, 0, 0, 0.79)'},
        })
    }

    function fadeOut() {
        api.start({
            from: {backgroundColor: 'rgba(0, 0, 0, 0.79)'},
            to: {backgroundColor: 'rgba(0, 0, 0, 0)'},
        })
    }


    // lazy af
    if (!img) {
        setTimeout(display, 500)
    }


    return (
        <animated.div onClick={unDisplay} onLoad={() => {
            fadeIn()
        }}
                      style={{...springs}}
                      className={"lightBox " + (check ? "" : "hidden-elem") + (check ? "no-pointer" : "")}>
            <img className={"lightBoxImg"} src={img} alt="lightBoxImg"/>
            <p className={"lightBoxTxt"}>{recoilData[2]?.text}</p>
        </animated.div>
    )

}

export default LightBox;