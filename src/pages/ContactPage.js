import React, { useState } from 'react';
import Bar from "../components/Bar";
import FootBar from "../components/FootBar";
import "../css/contact.css"
import emailIconImg from "../img/email.png"
import telegramIconImg from "../img/telegram.svg"
import instaIconImg from "../img/instagram.png"
import youtubeIconImg from "../img/youtube2.png"
import websiteIconImg from "../img/website.png"

function AboutPage() {
    const [emailValue, setEmailValue] = useState("");
    const [msgValue, setMsgValue] = useState("");
    const [error, setError] = useState({});

    function handelEmailChange(e) {
        const value = e.target.value;
        setEmailValue(value)
    }

    function handelMsgChange(e) {
        const value = e.target.value;
        setMsgValue(value)
    }

    function handleFormSubmit(e) {
        e.preventDefault();
    
        setError({});
        let tempError = {};
        if ((emailValue).trim() === "") {
            tempError.email =  "Please write email";
        }
        if ((msgValue).trim() === "") {
            tempError.msg =  "Please write msg";
        }
        if ((emailValue).trim() && (msgValue).trim()) {
            tempError.msg =  "Sent";
        }

        setError(tempError);
    }

    return (
        <>
            <Bar />

            <div id="background">

                <div id="title">Contact Us</div>
                <form id="msgUs" onSubmit={handleFormSubmit}>
                    <div>
                        <input type="email" placeholder="Email" id="email" value={emailValue} onChange={handelEmailChange}/>
                        <div id="confirmEmail">{error.email}</div>
                    </div>

                    <div>
                        <textarea id="textArea" cols="40" rows="13" placeholder="Write your msg" value={msgValue} onChange={handelMsgChange}></textarea>
                        <div id="confirmMsg">{error.msg}</div>
                    </div>
                    <div><button id="send">Send</button></div>
                </form>

                <div id="contact">
                    <div className="subTitle">Contact On </div>

                    <div>
                        <a href="mailto:adarsh3699@gmail.com">
                            <img src={emailIconImg} /><div>adarsh3699@gmail.com</div>
                        </a>
                    </div>

                    <div>
                        <a href="mailto:bhemu3699@gmail.com">
                            <img src={emailIconImg} /><div>bhemu3699@gmail.com</div>
                        </a>
                    </div>

                    <div>
                        <a href="https://t.me/adarsh3699" target="_blank">
                            <img src={telegramIconImg} height="40px" /><div>Telegram</div>
                        </a>
                    </div>

                    <div className="subTitle">Follow Us</div>

                    <div>
                        <a href="https://www.instagram.com/_adarsh.s/" target="_blank">
                            <img src={instaIconImg} /><div>Instagram</div>
                        </a>
                    </div>

                    <div>
                        <a href="https://www.youtube.com/channel/UCkdSVbjY4sS1I7hw9ZJMdew" target="_blank"  >
                            <img src={youtubeIconImg} /><div>YouTube</div>
                        </a>
                    </div>

                    <div>
                        <a href="https://github.com/adarsh3699" target="_blank">
                            <svg height="30"  viewBox="0 0 16 16" version="1.1" id="git">
                                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                            <div>GitHub</div>
                        </a>
                    </div>

                    <div>
                        <a href="https://www.bhemu.me/" target="blank">
                            <img src={websiteIconImg} /><div>Website</div>
                        </a>
                    </div>
                </div>
            </div>

            <FootBar />
        </>
    )
}

export default AboutPage;