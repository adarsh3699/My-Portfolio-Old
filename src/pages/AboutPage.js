import React from 'react';
import { NavLink } from 'react-router-dom';

import NavBar from '../components/Bar/NavBar';
import FootBar from '../components/Bar/FootBar';
import AOS from 'aos';
import Button from '../components/Button';

import 'aos/dist/aos.css';
import '../css/aboutPage.css';
import '../css/container.css';

import aboutMeIng from '../img/myImg.jpg';
import logoFireIng from '../img/logoFire.jpg';
import notesImg1 from '../img/projects/user-home.jpg';

import MyResume from '../img/projects/my_resume.pdf';

document.title = 'Adarsh Suman | About';

AOS.init();
const aosStyle = 'fade-up';
const aosDelay = '100';
const aosDuration = '1000';
const aosOffset = '250';

function AboutPage() {
	return (
		<div id="background">
			<NavBar />
			<div id="myIntro">
				<div className="welcome_msg">
					<p className="line-1 anim-typewriter">
						Hi, This is <span id="fName">Adarsh</span> <span id="lName">Suman</span>
					</p>
				</div>
			</div>

			<div className="container" data-aos={aosStyle} data-aos-delay="50" data-aos-duration={aosDuration}>
				<div className="containerTitle">About Me</div>

				<div className="img_text">
					<img
						src={aboutMeIng}
						alt=""
						height="300px"
						data-aos="zoom-in"
						data-aos-delay="50"
						data-aos-duration={aosDuration}
					/>

					<div
						className="pointSection"
						data-aos="zoom-in-up"
						data-aos-delay="50"
						data-aos-duration={aosDuration}
					>

						<div className="aboutPoints">I'm a programmer and a computer geek.</div>
						<div className="aboutPoints">I have one year of experience in this industry.</div>
						<div className="aboutPoints">I have skill in Web Application Development as a full stack developer.</div>
						<div className="aboutPoints">
							I have experience in JavaScript, React, NodeJs, MySql, MongoDb, PHP, HTML and CSS.
						</div>
						<div className="aboutPoints">
							I have done some of my personal projects and some internships at different companies.
						</div>
						<div className="aboutPoints">
							Other than programming I use to spend time in gaming, listening songs and graphics
							designing.
						</div>
						<div className="aboutPoints">Currently, I'm in high school in the science stream.</div>
						<div className="bottons">
							<a href={MyResume} target="_blank" rel="noreferrer">
								<Button title="My Resume" color="sky" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div
				className="container"
				data-aos-offset={aosOffset}
				data-aos={aosStyle}
				data-aos-delay={aosDelay}
				data-aos-duration={aosDuration}
			>
				<div className="containerTitle">My Logo</div>

				<div className="img_text text_img">
					<img src={logoFireIng} alt="" height="300px" id="logoMoblie" />

					<div className="pointSection">
						<div className="aboutPoints">
							Our logo is combination of A and S, where :-
							<li>A for Adarsh</li>
							<li>S for Suman</li>
						</div>

						<div className="aboutPoints">
							First time made this logo in className 5th during my Drawing className, after 1 year(in
							className 6th) i made this logo on pc with Ms paint, Ms PowerPoint.
						</div>
					</div>

					<img src={logoFireIng} alt="" height="300px" id="logoPc" />
				</div>
			</div>

			<div
				className="container"
				data-aos-offset={aosOffset}
				data-aos={aosStyle}
				data-aos-delay={aosDelay}
				data-aos-duration={aosDuration}
			>
				<div className="containerTitle">The Notes App</div>

				<div className="img_text">
					<img src={notesImg1} alt="" height="300px" />

					<div className="pointSection">
						<div className="aboutPoints">This is a Multi-User Notes app.</div>
						<div className="aboutPoints">
							Which allows multiple logins and new users can also create their own new account to login.
						</div>
						<div className="aboutPoints">
							Each user can keep their notes and to-dos separate and secure from others.
						</div>
						<div className="aboutPoints">
							Where user data and their notes store in encrypted form in Database.
						</div>
						<div className="bottons">
							<a href="https://notes.bhemu.me/" id="noteLink" target="_blank" rel="noreferrer">
								<Button title="Web-Link" color="sky" />
							</a>
							<NavLink to="/works" id="knowMore">
								<Button title="Know More" color="green" />
							</NavLink>
						</div>
					</div>
				</div>
			</div>

			<FootBar />
		</div>
	);
}

export default AboutPage;
