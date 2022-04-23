import React from 'react';
import Bar from "../components/Bar";
import FootBar from "../components/FootBar";
import "../css/about.css"
import aboutMeIng from "../img/myImg.jpg"
import logoFireIng from "../img/logoFire.jpg"
import notesImg1 from "../img/projects/user-home.jpg"
import notesImg2 from "../img/projects/notes-todos.jpg"


function AboutPage() {
    return (
        <>
            <Bar />
            <div id="background">
                <div id="myIntro">
                    <div className="welcome_msg">
                        <p className="line-1 anim-typewriter">My name is <b>Adarsh</b> <a>Suman</a></p>
                    </div>
                </div>

                <div className="aboutBox">
                    <div className="title">About Me</div>

                    <div className="img_text">
                        <img src={aboutMeIng} alt="image not load" height="300px" />

                        <div>
                            <div>I'm a computer geek and a beginner programmer.</div>
                            <div>Other than programming I use to spend time in gaming,
                                listening songs and graphics designing.</div>
                        </div>
                    </div>
                </div>

                <div className="aboutBox">
                    <div className="title">My Logo</div>

                    <div className="img_text text_img">
                        <img src={logoFireIng} alt="image not load" height="300px" id="logoMoblie" />

                        <div>
                            <div>Our logo is combination of A and S, where :-

                                <li>A for Adarsh</li>
                                <li>S for Suman</li>
                            </div>

                            <div>First time made this logo in className 5th during my Drawing className, after 1 year(in className 6th)
                                i made this logo on pc with Ms paint, Ms PowerPoint.
                            </div>
                        </div>

                        <img src={logoFireIng} alt="image not load" height="300px" id="logoPc" />
                    </div>
                </div>

                <div className="aboutBox">
                    <div className="title">The Notes App</div>

                    <div className="img_text">
                        <img src={notesImg1} alt="image not load" height="300px" />

                        <div>
                            <div>This is Multi-User Notes app.</div>
                            <div>Which allows multiple login and New user can also create their New account to login.</div>
                            <div>Each user can store their notes and To-Do separately to others and securely</div>
                        </div>
                    </div>

                    <div id="nextDiv" className="img_text text_img">
                        <img src={notesImg2} alt="image not load" height="300px" id="logoMoblie" />

                        <div>
                            <div>This Notes app facilitate Both Notes type and To-dos type with all your basic features.</div>
                            <div>Notes type provide you a unlimited space for your notes with self extended input box.</div>
                            <div>To-dos Type Come with is Done CheckBox which help you to remember you works.</div>
                        </div>

                        <img src={notesImg2} alt="image not load" height="300px" id="logoPc" />
                    </div>
                </div>
            </div>
            <FootBar />
        </>
    )
}

export default AboutPage;