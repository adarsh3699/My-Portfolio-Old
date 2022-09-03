import React from 'react';
import AOS from 'aos';
import { Slide } from 'react-slideshow-image';
import animateScrollTo from 'animated-scroll-to';
import NavBar from "../components/Bar/NavBar";
import FootBar from "../components/Bar/FootBar";
import { Accordion } from '../components/Accordion/';
import Button from '../components/Button';

import '../css/accordion.css';
import 'react-slideshow-image/dist/styles.css';
import 'aos/dist/aos.css';
import "../css/worksPage.css";
import "../css/container.css";


import myProjectBanner from "../img/myProjects.png";
import InternshipBanner from "../img/internshipBanner.jpeg";
// import MettingBanner from "../img/meeting.jpg";

import notesImg1 from "../img/projects/user-home.jpg";
import LoginPage from "../img/projects/loginPage.png";
import HomePage from "../img/projects/homePage.png";
import NoteTodo from "../img/projects/noteTodo.jpeg";
import iitpLogo from "../img/projects/iitp-logo.png";
import auricTouchLogo from "../img/projects/aurictouch-logo.png";

import react from "../img/technologies/react.png";
import nodeJs from "../img/technologies/nodejs.svg";
import javaScript from "../img/technologies/javascript.svg";
import mongoDB from "../img/technologies/mongodb.svg";
import mysql from "../img/technologies/mysql.svg";
import css from "../img/technologies/css.svg";
import muiLogo from "../img/technologies/mui-logo.svg";

import iitpCertificate from "../img/projects/iitp-certificate.pdf";
import auricTouchCertificate from "../img/projects/auricTouch-certificate.pdf";

document.title = "Adarsh Suman | Works";

AOS.init();

const aosDelay = "100";
const aosDuration = "1000";
const aosOffset = "250"

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
}

function WorksPage() {

    function myProject() {
        if (getWindowDimensions().width > 1000) {
            return animateScrollTo(600);
        } else if (getWindowDimensions().width <= 1000 && getWindowDimensions().width > 800) {
            return animateScrollTo(550);
        } else if (getWindowDimensions().width <= 800 && getWindowDimensions().width > 500) {
            return animateScrollTo(500);
        } else if (getWindowDimensions().width <= 500) {
            return animateScrollTo(350);
        }
    }

    function myInternships() {
        if (getWindowDimensions().width > 800) {
            return animateScrollTo(1920);
        } else if (getWindowDimensions().width <= 800 && getWindowDimensions().width > 500) {
            return animateScrollTo(2000);
        } else if (getWindowDimensions().width <= 500) {
            return animateScrollTo(1900);
        }
    }

    return (
        <div id="background">
            <NavBar />
            <Slide>
                <div className="each-slide-effect">
                    <div className='bannerImg' style={{ 'backgroundImage': `url(${myProjectBanner})` }}>
                        <span onClick={myProject}>My Projects</span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div className='bannerImg' style={{ 'backgroundImage': `url(${InternshipBanner})` }}>
                        <span onClick={myInternships}>Internships</span>
                    </div>
                </div>
                {/* <div className="each-slide-effect">
                    <div className='bannerImg' style={{ 'backgroundImage': `url(${MettingBanner})` }}>
                        <span>Slide 1</span>
                    </div>
                </div> */}
            </Slide>
            <div className="mainTitle">My Works</div>

            <div className="container">
                <div className="containerTitle">The Notes App</div>

                <div className="img_text"
                    data-aos="fade-up"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                >
                    <img src={notesImg1} alt="" height="300px" />

                    <div className='pointSection'>
                        <div className='aboutPoints'>This is a Multi-User Notes app.</div>
                        <div className='aboutPoints'>Which allows multiple logins and new users can also create their own new account to login.</div>
                        <div className='aboutPoints'>Each user can keep their notes and to-dos separate and secure from others.</div>
                        <div className='aboutPoints'>Where user data and their notes store in encrypted form in Database.</div>
                        <div className='aboutPoints'>This Notes app facilitates both Notes type and To-dos type with all your basic features.</div>
                        <div className='aboutPoints'>Type Notes provides you unlimited space for your notes with a self-extended input box.</div>
                        <div className='aboutPoints'>Type To-dos Come with Done CheckBox, which helps you remember your works.</div>
                        <div className='bottons'>
                            <a href='https://notes.bhemu.me/' id='noteLink' target="_blank" rel="noreferrer">
                                <Button
                                    title="Web-Link"
                                    color="sky"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='technologies'>
                    <div id='subTitle'>Technologies Used</div>

                    <div id='technologiesLogo'>
                        <div>
                            <img src={react} id="reactLogo" alt="" />
                            <div>React</div>
                        </div>
                        <div>
                            <img src={nodeJs} id="nodeJsLogo" alt="" />
                            <div>NodeJS</div>
                        </div>
                        <div>
                            <img src={javaScript} id='javaScriptLogo' alt="" />
                            <div>JavaScript</div>
                        </div>
                        <div>
                            <img src={mongoDB} id="mongoDbLogo" alt="" />
                            <div>MongoDB</div>
                        </div>
                    </div>
                </div>

                <br />
                <Accordion title="Login Page">
                    <div className='img_text'>
                        <img className='accordionImg' src={LoginPage} alt="" />
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
                        <img className='accordionImg' src={HomePage} alt="" />
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
                        <img className='accordionImg' src={NoteTodo} alt="" />
                        <div className='pointSection'>
                            <div className='aboutPoints'>This is our note dialog box, with a simple UI and easy to navigate.</div>
                            <div className='aboutPoints'>Type Notes provides you unlimited space for your notes with a self-extended input box.</div>
                            <div className='aboutPoints'>Type To-dos It comes with a Done CheckBox, which helps you remember your work progress.</div>
                        </div>
                    </div>
                </Accordion>
            </div>

            <div className="container"
                data-aos="fade-up"
                data-aos-delay={aosDelay}
                data-aos-duration={aosDuration}
                data-aos-offset={aosOffset}
            >
                <div className="containerTitle">Some Other Projects</div>

                <div className="img_text">
                    {/* <img src={notesImg1} alt="" height="300px" /> */}

                    <div className='pointSection'>
                        <div className='aboutPoints'>These are my persnal project.</div>
                        <div className='aboutPoints'>Which are based on CSS and concept JavaScript.</div>
                    </div>
                </div>

                <div id='technologies'>
                    <div id='subTitle'>Technologies Used</div>

                    <div id='technologiesLogo'>
                        <div>
                            <img src={react} id="reactLogo" alt="" />
                            <div>React</div>
                        </div>
                        <div>
                            <img src={css} id="cssLogo" alt="" />
                            <div>CSS</div>
                        </div>
                        <div>
                            <img src={javaScript} id='javaScriptLogo' alt="" />
                            <div>JavaScript</div>
                        </div>
                        <div>
                            <img src={mysql} id="mySqlLogo" alt="" />
                            <div>MySQL</div>
                        </div>
                    </div>
                </div>

                <br />
                <Accordion title="JavaScript Based">
                    <div className='img_text' style={{ alignItems: "flex-end" }}>
                        <div className='pointSection'>
                            <div className='accordionTitle'>SDT Calculator</div>
                            <div className='aboutPoints'>This is a speed, time, and distance calculator.</div>
                            <div className='aboutPoints'>
                                <b>Concept:-</b> <br />
                                Write any of two of them, and the third will be auto calculated. <br />
                                I.e, if you write speed and distance, then time is automatically calculated.
                            </div>

                        </div>

                        <a href='https://sdt.bhemu.me/' className='noteLink' target="_blank" rel="noreferrer">
                            <Button
                                title="Live Link"
                                color="sky"
                                sx={{ marginBottom: "10px" }}
                            />
                        </a>
                    </div>

                    <div className='img_text' style={{ alignItems: "flex-end" }}>
                        <div className='pointSection'>
                            <div className='accordionTitle'>Multi Select</div>
                            <div className='aboutPoints'>There are three Dropdowns, all of which have the same option of cars inside.</div>
                            <div className='aboutPoints'>
                                <b>Concept:-</b> <br />
                                If you select a car in the first dropdown, then the selected car is automatically removed from the second and third dropdowns. <br />
                                Similarly, if you select another car in the second dropdown the selected car is automatically removed from the first and third dropdowns.
                            </div>
                        </div>
                        <a href='https://select.bhemu.me/' className='noteLink' target="_blank" rel="noreferrer">
                            <Button
                                title="Live Link"
                                color="sky"
                                sx={{ marginBottom: "10px" }}
                            />
                        </a>
                    </div>

                    <div className='img_text' style={{ alignItems: "flex-end" }}>
                        <div className='pointSection'>
                            <div className='accordionTitle'>Bitcoin Live Prices</div>
                            <div className='aboutPoints'>It shows the live price of Bitcoin in different currencies.</div>
                            <div className='aboutPoints'>
                                <b>Concept:-</b> <br />
                                Get data from the server and render it on the frontend.
                            </div>
                        </div>
                        <a href='https://bitcoin.bhemu.me/' className='noteLink' target="_blank" rel="noreferrer">
                            <Button
                                title="Live Link"
                                color="sky"
                                sx={{ marginBottom: "10px" }}
                            />
                        </a>
                    </div>

                </Accordion>

                <Accordion title="CSS Based Designs" >
                    <div className='pointSection'>
                        <div className='designs'>
                            <div className='accordionTitle'>Design 1</div>
                            <a href='https://design1.bhemu.me/' className='noteLink' target="_blank" rel="noreferrer">
                                <Button
                                    title="Live Link"
                                    color="sky"
                                />
                            </a>
                        </div>
                        <div className='designs'>
                            <div className='accordionTitle'>Design 2</div>
                            <a href='https://design2.bhemu.me/' className='noteLink' target="_blank" rel="noreferrer">
                                <Button
                                    title="Live Link"
                                    color="sky"
                                />
                            </a>
                        </div>
                        <div className='designs'>
                            <div className='accordionTitle'>Design 3</div>
                            <a href='https://design3.bhemu.me/' className='noteLink' target="_blank" rel="noreferrer">
                                <Button
                                    title="Live Link"
                                    color="sky"
                                />
                            </a>
                        </div>
                        <b>Note:-</b> These are only non-functional designs.
                    </div>
                </Accordion>
            </div>

            <div className="mainTitle">My Internships</div>

            <div className="container"
                data-aos="fade-up"
                data-aos-delay={aosDelay}
                data-aos-duration={aosDuration}
                data-aos-offset={aosOffset}
            >
                <div className="containerTitle">Indian Institute Of Technology Patna (IIT Patna)</div>

                <div className="img_text">
                    <img src={iitpLogo} style={{ background: "#f1f1f1" }} alt="" height="300px" />

                    <div className='pointSection'>
                        <div className='aboutPoints'>Developed Facility evaluation System for college IITP.</div>
                        <div className='aboutPoints'>Internships duration from 1 june 2022 to 15 july 2022.</div>
                        <div className='aboutPoints'>Work on both the frontend and backend.</div>
                        <div className='aboutPoints'>Created a multiuser login system for the facility, canditate, and admin.</div>
                        <div className='aboutPoints'>Learned and did software architecture design of complete project.</div>

                        <div className='bottons'>
                            <a href="https://github.com/adarsh3699/Facility-Evaluation-System-IITP" id='noteLink' target="_blank" rel="noreferrer">
                                <Button
                                    title="Git Repo"
                                    color="green"
                                />
                            </a>
                            <a href={iitpCertificate} id='noteLink' target="_blank" rel="noreferrer">
                                <Button
                                    title="Certificate"
                                    color="sky"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='technologies'>
                    <div id='subTitle'>Technologies Used</div>

                    <div id='technologiesLogo'>
                        <div>
                            <img src={react} id="reactLogo" alt="" />
                            <div>React</div>
                        </div>
                        <div>
                            <img src={nodeJs} id="nodeJsLogo" alt="" />
                            <div>NodeJS</div>
                        </div>
                        <div>
                            <img src={javaScript} id='javaScriptLogo' alt="" />
                            <div>JavaScript</div>
                        </div>
                        <div>
                            <img src={mysql} id="mongoDbLogo" alt="" />
                            <div>MongoDB</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container"
                data-aos="fade-up"
                data-aos-delay={aosDelay}
                data-aos-duration={aosDuration}
                data-aos-offset={aosOffset}
            >
                <div className="containerTitle">Auric Touch LLP</div>

                <div className="img_text">
                    <img src={auricTouchLogo} alt="" height="300px" />

                    <div className='pointSection'>
                        <div className='aboutPoints'>Work on Fantasy Points Optimizer for Auric Touch LLP.</div>
                        <div className='aboutPoints'>Internships duration from 20 june 2022 to 20 September 2022.</div>
                        <div className='aboutPoints'>Learned working with team.</div>
                        <div className='aboutPoints'>Work on Frontend Part.</div>
                        <div className='aboutPoints'>SetUp Authorization based Features.</div>

                        <div className='bottons'>
                            <a href="https://www.fantasypointsoptimizer.com/" id='noteLink' target="_blank" rel="noreferrer">
                                <Button
                                    title="Web-link"
                                    color="green"
                                />
                            </a>
                            <a href={auricTouchCertificate} id='noteLink' target="_blank" rel="noreferrer">
                                <Button
                                    title="Certificate"
                                    color="sky"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='technologies'>
                    <div id='subTitle'>Technologies Used</div>

                    <div id='technologiesLogo'>
                        <div>
                            <img src={react} id="reactLogo" alt="" />
                            <div>React</div>
                        </div>
                        <div>
                            <img src={nodeJs} id="nodeJsLogo" alt="" />
                            <div>NodeJS</div>
                        </div>
                        <div>
                            <img src={javaScript} id='javaScriptLogo' alt="" />
                            <div>JavaScript</div>
                        </div>
                        <div>
                            <img src={muiLogo} id="mongoDbLogo" alt="" />
                            <div>Material UI</div>
                        </div>
                    </div>
                </div>
            </div>

            <FootBar />
        </div>
    )
}

export default WorksPage;