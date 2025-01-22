import {Outlet, Link} from "react-router-dom";
import React from "react";
import Parmesan from "./Parmesan.jsx";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/public">Web</Link>
                    </li>
                    <li>
                        <Link to="/MeTheBestest">MeTheBestest</Link>
                    </li>
                    <li>
                        <Link to="/Projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/Graphic & Arts">Graphic</Link>
                    </li>
                    <li>
                        <Link to="/Skills"></Link>
                    </li>
                    <li>
                        <Link to="/CuteAboutMeSegment"></Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Layout;