import React from 'react';
import { NavLink } from 'react-router-dom';

import 'aos/dist/aos.css';
import '../styles/aboutPage.css';

import AOS from 'aos';

import Container from '../components/Container/Container';
import Button from '../components/Button';

import aboutMeIng from '../img/myImg.jpg';
// import logoFireIng from '../img/logoFire.jpg';
import newLogoWithBg from '../img/newLogoBlack.webp';
import notesImg1 from '../img/projects/user-home.jpg';

import MyResume from '../img/projects/my_resume.pdf';

AOS.init();
const aosStyle = 'fade-up';
const aosDelay = '100';
const aosDuration = '1000';
const aosOffset = '250';

function AboutPage() {
	if (document.title !== 'Adarsh Suman | About') document.title = 'Adarsh Suman | About';

	return (
		<div className="background">
			<div id="myIntro">
				<div className="welcome_msg">
					<p className="line-1 anim-typewriter">
						Hi, This is <span id="fName">Adarsh</span> <span id="lName">Suman</span>
					</p>
				</div>
			</div>

			<Container containerTitle="About Me" aosStyle={aosStyle} aosDelay="50" aosDuration={aosDuration}>
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
						<div className="aboutPoints">I have more than two years of experience in this industry.</div>
						<div className="aboutPoints">
							I have skill in Web Application Development as a full stack developer.
						</div>
						<div className="aboutPoints">
							I have experience in JavaScript, React, NodeJs, MySql, MongoDb, MERN, PHP, HTML and CSS.
						</div>
						<div className="aboutPoints">
							I have done some of my personal projects and some internships at different companies.
						</div>
						<div className="aboutPoints">
							Other than programming I use to spend time in gaming, listening songs and video editing.
						</div>
						<div className="aboutPoints">Currently, I'm in high school in the science stream.</div>
						<div className="bottons">
							<a href={MyResume} target="_blank" rel="noreferrer">
								<Button title="My Resume" color="sky" />
							</a>
						</div>
					</div>
				</div>
			</Container>

			<Container
				containerTitle="Our New Logo"
				aosOffset={aosOffset}
				aosStyle={aosStyle}
				aosDelay={aosDelay}
				aosDuration={aosDuration}
			>
				<div className="img_text text_img">
					<img src={newLogoWithBg} alt="" height="300px" id="logoMoblie" />

					<div className="pointSection">
						<div className="aboutPoints">This is our new logo.</div>
						<div className="aboutPoints">It is modern and more vibrant.</div>
						<div className="aboutPoints">This represents our creativity and vision.</div>
						{/* <div className="aboutPoints">
							Our logo is combination of A and S, where :-
							<li>A for Adarsh</li>
							<li>S for Suman</li>
						</div>

						<div className="aboutPoints">
							First time made this logo in className 5th during my Drawing class, after 1 year(in standard
							6th) i made this logo on pc with Ms paint, Ms PowerPoint.
						</div> */}
					</div>

					<img src={newLogoWithBg} className="logoPc" alt="" height="300px" />
				</div>
			</Container>

			<Container
				containerTitle="Bhemu Notes"
				aosOffset={aosOffset}
				aosStyle={aosStyle}
				aosDelay={aosDelay}
				aosDuration={aosDuration}
				sx={{ marginBottom: '90px' }}
			>
				<div className="img_text">
					<img src={notesImg1} alt="" height="300px" />

					<div className="pointSection">
						<div className="aboutPoints">This is a Multi-User Notes app.</div>
						<div className="aboutPoints">
							Which allows all users separate logins, and new users can also create their own account.
						</div>
						<div className="aboutPoints">
							Each user can keep their notes and to-dos secure and safe from others.
						</div>
						<div className="aboutPoints">
							The user can customize their account by changing their profile picture, name, and password
							at any time.
							{/* Users can also share their notes with others by just sharing the link of that note. */}
						</div>
						<div className="aboutPoints">
							User data and their notes store in encrypted form in Database.
						</div>
						<div className="bottons">
							<a
								href={
									'https://notes' +
									(window.location.host.split('www')[1] ||
										process.env?.REACT_APP_MY_BASE_URL ||
										'.bhemu.me')
								}
								id="noteLink"
								target="_blank"
								rel="noreferrer"
							>
								<Button title="Web-Link" color="sky" />
							</a>
							<NavLink to="/works" id="knowMore">
								<Button title="Know More" color="green" />
							</NavLink>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default AboutPage;
