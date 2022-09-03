import React, { useState, useEffect, useRef } from "react";

import "./bar.css";

import logoImg from './img/logo.png';
import instaLogo from './img/instagramWhite.svg';
import youtubeLogo from './img/youtubeWhite.svg';
import mobileMenuIcon from './img/menu.png';

function Bar() {
    const mobileIconRef = useRef();

    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    //component did mount
    useEffect(function() {
        document.addEventListener('click', handleClickOutside, true);
      
        //component did un-mount
        return function() {
            document.removeEventListener('click', handleClickOutside, true);
        }
    }, []);
    
    function handleClickOutside(e) {    
        if (mobileIconRef.current && !mobileIconRef.current.contains(e.target)) {
            setIsMobileMenuVisible(false);
        }
    }

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
                    <a href="/works">Works</a>
                    <a href="/contact">Contact</a>
                </div>

                <div id="social">
                    <a href="https://www.instagram.com/_adarsh.s/" target="_blank">
                        <img src={instaLogo} height="27px" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCkdSVbjY4sS1I7hw9ZJMdew" target="_blank">
                        <img src={youtubeLogo} height="22px" />                    
                    </a>
                </div>

                <div id="mobileIcon" onClick={handleMobileMenuClick} ref={mobileIconRef}>
                    <img src={mobileMenuIcon} />
                </div>
            </div>

            {
                isMobileMenuVisible ?
                    <div id="mobileMenu">
                        <a href="/" style={{borderTop: "1px #f1f1f1 solid"}}>Home</a>
                        <a href="/about">About</a>
                        <a href="/works">Works</a>
                        <a href="/contact">Contact</a>
                    </div>
                    : null
            }
            
        </div>
    )
}

export default Bar;