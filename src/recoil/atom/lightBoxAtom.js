import { atom } from "recoil";

export const lightBoxAtom = atom({
    key: "testState",
    default: [{img: "/img/404Bg.svg"}, {check: "false"}, {text: null}]
});