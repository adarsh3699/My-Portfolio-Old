import React from "react";
import logoImg from "../img/logo.png";
import googleImg from "../img/google.png";
import instaImg from "../img/insta.png";
import youtubeImg from "../img/youtube.svg";

function FootBar() {
    return (
        <div id="bottomBar">
            <div id="footMemu">
                <div>
                    <a href="">Home</a>
                </div>
                <div>
                    <a href="/about">About</a>
                </div>
                <div>
                    <a href="/contact">Contact</a>
                </div>
            </div>
            <div id="footLogo">
                <img src={logoImg} />
                <div>© 2022-25 (V 1.0)</div>
                <div>Developed by Adarsh Suman</div>
            </div>

            <div id="footSocial">
                <a href="mailto:adarsh3699@gmail.com" target="_blank">
                    <img src={googleImg} height="22px" />
                    <div> adarsh3699</div>
                </a>

                <a href="https://www.instagram.com/_adarsh.s/" target="_blank">
                    <img src={instaImg} height="19px" />
                    <div> Instagram</div>
                </a>

                <a href="https://www.youtube.com/channel/UCkdSVbjY4sS1I7hw9ZJMdew" target="_blank">
                    <img src={youtubeImg} height="18px" />
                    <div> YouTube</div>
                </a>
            </div>
        </div>
    )
}

export default FootBar;