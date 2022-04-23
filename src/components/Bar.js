import React, { useState } from "react";

import logoImg from '../img/logo.png';
import instaLogo from '../img/insta.png';
import youtubeLogo from '../img/youtube.png';
import mobileMenuIcon from '../img/menu.png';

function Bar() {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    function handleMobileMenuClick() {
        setIsMobileMenuVisible(!isMobileMenuVisible);
    }

    return(
        <div id="bar">
            <div id="topBar">
                <div id="logo">
                    <a href="/">
                        <img src={logoImg} height="50px" />
                        <div><span id="adarsh">Adarsh </span>Suman</div>
                    </a>
                </div>

                <div id="desktopMenu">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>

                <div id="social">
                    <a href="https://www.instagram.com/_adarsh.s/" target="_blank">
                        <img src={instaLogo} height="22px" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCkdSVbjY4sS1I7hw9ZJMdew" target="_blank">
                        <img src={youtubeLogo} height="20px" />                    
                    </a>
                </div>

                <div id="mobileIcon" onClick={handleMobileMenuClick}>
                    <img src={mobileMenuIcon} />
                </div>
            </div>

            {
                isMobileMenuVisible ?
                    <div id="mobileMenu">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </div>
                    : null
            }
            
        </div>
    )
}

export default Bar;