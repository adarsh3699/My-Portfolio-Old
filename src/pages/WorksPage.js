import React, { useState } from 'react';
import Bar from "../components/Bar";
import FootBar from "../components/FootBar";
import AOS from 'aos';
import { Slide } from 'react-slideshow-image';
import { Accordion } from '../components/Accordion'

import '../css/accordion.css'
import 'react-slideshow-image/dist/styles.css';
import 'aos/dist/aos.css';
import "../css/works.css"

import notesImg1 from "../img/projects/user-home.jpg"
import notesImg2 from "../img/projects/notes-todos.jpg"
import react from "../img/projects/react.png"
import nodeJs from "../img/projects/nodejs.svg"
import javaScript from "../img/projects/javascript.svg"
import mongoDB from "../img/projects/mongodb.svg"

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

    return (
        <>
            <Bar />
            <div id="background"></div>

            <div id='content'>
                <Slide>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[0]})` }}><span>Demo 1</span></div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[1]})` }}><span>Demo 1</span></div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[2]})` }}><span>Demo 1</span></div>
                    </div>
                </Slide>
                <div id="title">My Works</div>

                <div className="aboutBox"
                    data-aos={aosStyle}
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                >
                    <div className="title">The Notes App</div>

                    <div className="img_text">
                        <img src={notesImg1} alt="image not load" height="300px"
                            data-aos="zoom-in"
                            data-aos-delay={aosDelay}
                            data-aos-duration={aosDuration}
                        />

                        <div className='pointSection'
                            data-aos="zoom-in-up"
                            data-aos-delay={aosDelay}
                            data-aos-duration={aosDuration}
                        >
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
                            data-aos-delay={aosDelay}
                            data-aos-duration={aosDuration}
                        />

                        <div className='pointSection'
                            data-aos="fade-up"
                            data-aos-delay={aosDelay}
                            data-aos-duration={aosDuration}
                        >
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
                            data-aos-delay={aosDelay}
                            data-aos-duration={aosDuration}
                        />
                    </div>
                    <br />
                    <Accordion>
                        <div className='pointSection'>
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
                    </Accordion>
                    <Accordion title="Custom Accordion Title2" >
                        ku
                    </Accordion>

                    <Accordion title="Custom Accordion Title3" >
                        ki
                    </Accordion>
                </div>
            </div>
            <FootBar />
        </>
    )
}

export default WorksPage;