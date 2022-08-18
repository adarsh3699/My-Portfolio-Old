import React, { useState } from 'react';
import Bar from "../components/Bar";
import FootBar from "../components/FootBar";
import AOS from 'aos';
import { Slide } from 'react-slideshow-image';
import { Accordion } from '../components/Accordion/'
import animateScrollTo from 'animated-scroll-to';

import '../css/accordion.css'
import 'react-slideshow-image/dist/styles.css';
import 'aos/dist/aos.css';
import "../css/works.css"
import "../css/container.css"

import notesImg1 from "../img/projects/user-home.jpg"
import react from "../img/projects/react.png"
import nodeJs from "../img/projects/nodejs.svg"
import javaScript from "../img/projects/javascript.svg"
import mongoDB from "../img/projects/mongodb.svg"
import LoginPage from "../img/projects/loginPage.png"
import HomePage from "../img/projects/homePage.png"
import NoteTodo from "../img/projects/noteTodo.jpeg"

document.title = "Adarsh Suman | Works"

AOS.init();

const aosStyle = "zoom-out";
const aosDelay = "50";
const aosDuration = "1000";
const aosOffset = "250"

const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

function WorksPage() {

    function scrollDown() {
        animateScrollTo(700)
    }

    return (
        <div id="background">
            <Bar />
            <Slide>
                <div className="each-slide-effect">
                    <div onClick={scrollDown} style={{ 'backgroundImage': `url(${images[0]})` }}><span>Demo 1</span></div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}><span>Demo 2</span></div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}><span>Demo 3</span></div>
                </div>
            </Slide>
            <div className="mainTitle">My Works</div>

            <div className="container">
                <div className="containerTitle">The Notes App</div>

                <div className="img_text"
                    data-aos="fade-up"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                >
                    <img src={notesImg1} alt="image not load" height="300px" />

                    <div className='pointSection'>
                        <div className='aboutPoints'>This is a Multi-User Notes app.</div>
                        <div className='aboutPoints'>Which allows multiple logins and new users can also create their own new account to login.</div>
                        <div className='aboutPoints'>Each user can keep their notes and to-dos separate and secure from others.</div>
                        <div className='aboutPoints'>Where user data and their notes store in encrypted form in Database.</div>
                        <div className='aboutPoints'>This Notes app facilitates both Notes type and To-dos type with all your basic features.</div>
                        <div className='aboutPoints'>Type Notes provides you unlimited space for your notes with a self-extended input box.</div>
                        <div className='aboutPoints'>Type To-dos Come with Done CheckBox, which helps you remember your works.</div>
                    </div>
                </div>

                <div
                    id='technologies'
                    data-aos="fade-up"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                >
                    <div>
                        <div id='subTitle'>Technologies used</div>

                        <div id='technologiesLogo'>
                            <div>
                                <img src={react} id="reactLogo"></img>
                                <div>React</div>
                            </div>
                            <div>
                                <img src={nodeJs} id="nodeJsLogo" ></img>
                                <div>NodeJS</div>
                            </div>
                            <div>
                                <img src={javaScript} id='javaScriptLogo'></img>
                                <div>JavaScript</div>
                            </div>
                            <div>
                                <img src={mongoDB} id="mongoDbLogo"></img>
                                <div>MongoDB</div>
                            </div>
                        </div>
                        <div id='link'>
                            Link :-
                            <a href='https://notes.bhemu.me/' target="_blank"> https://notes.bhemu.me/</a>
                        </div>
                    </div>
                </div>

                <br />
                <Accordion title="Login Page">
                    <div className='img_text'>
                        <img className='accordionImg' src={LoginPage} />
                        <div className='pointSection'>
                            <div className='aboutPoints'>Our login system allows us to login with their email and password.</div>
                            <div className='aboutPoints'>Anyone can easily create their account with their email and password.</div>
                            <div className='aboutPoints'>There is also an option to "forget password" in case you forget your password.
                            In which case you get an OTP on your registered email ID to change your password.</div>
                            <div className='aboutPoints'>Your privacy is our responsibility. That is why your information is end-to-end encrypted.</div>
                        </div>
                    </div>
                </Accordion>
                <Accordion title="Home Page" >
                    <div className='img_text'>
                        <img className='accordionImg' src={HomePage} />
                        <div>
                            <div className='aboutPoints'>This Notes app facilitates both Notes type and To-dos type with all your basic features.</div>
                            <div className='aboutPoints'>Type Notes provides you unlimited space for your notes with a self-extended input box.</div>
                            <div className='aboutPoints'>Type To-dos Come with Done CheckBox, which helps you remember your works.</div>
                        </div>
                    </div>
                </Accordion>

                <Accordion title="Notes" >
                    <div className='img_text'>
                        <img className='accordionImg' src={NoteTodo} />
                        <div>
                            <div className='aboutPoints'>This Notes app facilitates both Notes type and To-dos type with all your basic features.</div>
                            <div className='aboutPoints'>Type Notes provides you unlimited space for your notes with a self-extended input box.</div>
                            <div className='aboutPoints'>Type To-dos Come with Done CheckBox, which helps you remember your works.</div>
                        </div>
                    </div>
                </Accordion>
            </div>
            <FootBar />
        </div>
    )
}

export default WorksPage;