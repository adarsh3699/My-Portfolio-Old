import React from 'react';
import Bar from "../components/Bar";
import FootBar from "../components/FootBar";
import AOS from 'aos';
import { Slide } from 'react-slideshow-image';
import { Accordion } from '../components/Accordion/'
import animateScrollTo from 'animated-scroll-to';
import Button from '../components/Button';

import '../css/accordion.css'
import 'react-slideshow-image/dist/styles.css';
import 'aos/dist/aos.css';
import "../css/worksPage.css"
import "../css/container.css"

import notesImg1 from "../img/projects/user-home.jpg"
import react from "../img/projects/react.png"
import nodeJs from "../img/projects/nodejs.svg"
import javaScript from "../img/projects/javascript.svg"
import mongoDB from "../img/projects/mongodb.svg"
import LoginPage from "../img/projects/loginPage.png"
import HomePage from "../img/projects/homePage.png"
import NoteTodo from "../img/projects/noteTodo.jpeg"
import myProjectBanner from "../img/myProjects.png"
import InternshipBanner from "../img/internshipBanner.jpeg"

document.title = "Adarsh Suman | Works"

AOS.init();

const aosDelay = "50";
const aosDuration = "1000";

const images = [
    myProjectBanner,
    InternshipBanner,
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function WorksPage() {

    function myProject() {
        if (getWindowDimensions().width > 425 && getWindowDimensions().width <= 750) {
            return animateScrollTo(600)
        } else if (getWindowDimensions().width <= 425) {
            return animateScrollTo(510)
        } else {
            return animateScrollTo(630)
        }
    }

    return (
        <div id="background">
            <Bar />
            <Slide>
                <div className="each-slide-effect">
                    <div onClick={myProject} style={{ 'backgroundImage': `url(${images[0]})` }}></div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}></div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}></div>
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
                        <div id='link'>
                            <a href='https://notes.bhemu.me/' id='noteLink' target="_blank">
                                <Button
                                    title="Web-Link"
                                    color="sky"
                                    sx={{ fontSize: "20px" }}
                                />
                            </a>
                        </div>
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
                        <div className='pointSection'>
                            <div className='aboutPoints'>This is our new simple user-friendly UI.</div>
                            <div className='aboutPoints'>Adding new notes is very easy from the input box in the navbar and by clicking the "Add Note" button.</div>
                            <div className='aboutPoints'>Each note box shows us their note type in the right-upper corner, which helps us to navigate easily.</div>
                            <div className='aboutPoints'>Each note box shows us the last saved time and date, which helps us to navigate easily.</div>
                        </div>
                    </div>
                </Accordion>

                <Accordion title="Notes" >
                    <div className='img_text'>
                        <img className='accordionImg' src={NoteTodo} />
                        <div className='pointSection'>
                            <div className='aboutPoints'>This is our note dialog box, with a simple UI and easy to navigate.</div>
                            <div className='aboutPoints'>Type Notes provides you unlimited space for your notes with a self-extended input box.</div>
                            <div className='aboutPoints'>Type To-dos It comes with a Done CheckBox, which helps you remember your work progress.</div>
                        </div>
                    </div>
                </Accordion>
            </div>
            <FootBar />
        </div>
    )
}

export default WorksPage;