import React, { useEffect, useState } from 'react';
import Bar from "../components/Bar";
import FootBar from "../components/FootBar";
import AOS from 'aos';

import 'aos/dist/aos.css';
import "../css/about.css"

import aboutMeIng from "../img/myImg.jpg"
import logoFireIng from "../img/logoFire.jpg"
import notesImg1 from "../img/projects/user-home.jpg"
import notesImg2 from "../img/projects/notes-todos.jpg"
import react from "../img/projects/react.png"
import nodeJs from "../img/projects/nodejs.svg"
import javaScript from "../img/projects/javascript.svg"
import mongoDB from "../img/projects/mongodb.svg"


AOS.init();

function AboutPage() {
    useEffect(() => {
        document.title = "Adarsh Suman | About"
    }, []);

    return (
        <>
            <Bar />
            <div id="background">
                <div id="myIntro">
                    <div className="welcome_msg">
                        <p className="line-1 anim-typewriter">My name is <b>Adarsh</b> <a>Suman</a></p>
                    </div>
                </div>

                <div className="aboutBox"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="600"
                >

                    <div className="title">About Me</div>

                    <div className="img_text">
                        <img src={aboutMeIng} alt="image not load" height="300px"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                            data-aos-duration="600"
                        />

                        <div className='pointSection' data-aos="zoom-in-up" data-aos-delay="50">
                            <div className='aboutPoints'>I'm a computer geek and a beginner programmer.</div>
                            <div className='aboutPoints'>
                                Other than programming I use to spend time in gaming,
                                listening songs and graphics designing.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="aboutBox"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                >
                    <div className="title">My Logo</div>

                    <div className="img_text text_img">
                        <img src={logoFireIng} alt="image not load" height="300px" id="logoMoblie"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        />

                        <div className='pointSection' data-aos="zoom-in-up" data-aos-delay="50">
                            <div className='aboutPoints'>Our logo is combination of A and S, where :-

                                <li>A for Adarsh</li>
                                <li>S for Suman</li>
                            </div>

                            <div className='aboutPoints'>First time made this logo in className 5th during my Drawing className, after 1 year(in className 6th)
                                i made this logo on pc with Ms paint, Ms PowerPoint.
                            </div>
                        </div>

                        <img src={logoFireIng} alt="image not load" height="300px" id="logoPc"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        />
                    </div>
                </div>

                <div className="aboutBox"
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                >
                    <div className="title">The Notes App</div>

                    <div className="img_text">
                        <img src={notesImg1} alt="image not load" height="300px"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        />

                        <div className='pointSection' data-aos="zoom-in-up" data-aos-delay="50">
                            <div className='aboutPoints'>This is a Multi-User Notes app.</div>
                            <div className='aboutPoints'>Which allows multiple logins and new users can also create their own new account to login.</div>
                            <div className='aboutPoints'>Each user can keep their notes and to-dos separate and secure from others.</div>
                            <div className='aboutPoints'>Where user data and their notes store in encrypted form in Database.</div>
                            <div id='link'>
                                Link :-
                                <a href='https://notes.bhemu.me/' target="_blank"> https://notes.bhemu.me/</a>
                            </div>


                        </div>
                    </div>

                    <div id="nextDiv" className="img_text text_img">
                        <img src={notesImg2} alt="image not load" height="300px" id="logoMoblie"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        />

                        <div className='pointSection' data-aos="zoom-in-up" data-aos-delay="50">
                            <div className='aboutPoints'>This Notes app facilitates both Notes type and To-dos type with all your basic features.</div>
                            <div className='aboutPoints'>Type Notes provides you unlimited space for your notes with a self-extended input box.</div>
                            <div className='aboutPoints'>Type To-dos Come with Done CheckBox, which helps you remember your works.</div>

                            <div className='aboutPoints'>
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
                            </div>
                        </div>

                        <img src={notesImg2} alt="image not load" height="300px" id="logoPc"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        />
                    </div>
                </div>
            </div>
            <FootBar />
        </>
    )
}

export default AboutPage;