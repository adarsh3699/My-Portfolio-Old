import React from 'react';
import AOS from 'aos';
import { Slide } from 'react-slideshow-image';
import animateScrollTo from 'animated-scroll-to';
import NavBar from '../components/Bar/NavBar';
import FootBar from '../components/Bar/FootBar';
import { Accordion } from '../components/Accordion/';
import Button from '../components/Button';

import '../css/accordion.css';
import 'react-slideshow-image/dist/styles.css';
import 'aos/dist/aos.css';
import '../css/worksPage.css';
import '../css/container.css';

import myProjectBanner from '../img/myProjects.png';
import InternshipBanner from '../img/internshipBanner.jpeg';
// import MettingBanner from "../img/meeting.jpg";

import notesImg1 from '../img/projects/user-home.jpg';
import LoginPage from '../img/projects/loginPage.png';
import HomePage from '../img/projects/homePage.png';
import SettingPage from '../img/projects/settingPage.png';
import iitpLogo from '../img/projects/iitp-logo.png';
import auricTouchLogo from '../img/projects/aurictouch_logo.png';
import beAwizLogo from '../img/projects/beawiz_logo.png';

import react from '../img/technologies/react.png';
import nodeJs from '../img/technologies/nodejs.svg';
import javaScript from '../img/technologies/javascript.svg';
import mongoDB from '../img/technologies/mongodb.svg';
import mysql from '../img/technologies/mysql.svg';
import css from '../img/technologies/css.svg';
import muiLogo from '../img/technologies/mui_logo.svg';
import phpLogo from '../img/technologies/php_logo.svg';
import htmlLogo from '../img/technologies/html_logo.svg';

import iitpCertificate from '../img/projects/iitp_certificate.pdf';
import auricTouchCertificate from '../img/projects/auricTouch_certificate.pdf';
import beCertificate from '../img/projects/beawiz_Certificate.pdf';

document.title = 'Adarsh Suman | Works';

AOS.init();

const aosDelay = '100';
const aosDuration = '1000';
const aosOffset = '250';

function WorksPage() {
	function myProject() {
		const myProjectDiv = document.getElementById('myProjects');
		return animateScrollTo(myProjectDiv.getBoundingClientRect().top - 60);
	}

	function myInternships() {
		const myInternshipDiv = document.getElementById('myInternships');
		return animateScrollTo(myInternshipDiv.getBoundingClientRect().top - 60);
	}

	return (
		<div id="background">
			<NavBar />
			<Slide>
				<div className="each-slide-effect">
					<div className="bannerImg" style={{ backgroundImage: `url(${myProjectBanner})` }}>
						<span onClick={myProject}>My Projects</span>
					</div>
				</div>
				<div className="each-slide-effect">
					<div className="bannerImg" style={{ backgroundImage: `url(${InternshipBanner})` }}>
						<span onClick={myInternships}>Internships</span>
					</div>
				</div>
				{/* <div className="each-slide-effect">
                    <div className='bannerImg' style={{ 'backgroundImage': `url(${MettingBanner})` }}>
                        <span>Slide 1</span>
                    </div>
                </div> */}
			</Slide>
			<div id="myProjects" className="mainTitle">
				Personal Projects
			</div>

			<div className="container">
				<div className="containerTitle">The Notes App</div>

				<div className="img_text" data-aos="fade-up" data-aos-delay={aosDelay} data-aos-duration={aosDuration}>
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
						<div className="aboutPoints">
							This Notes app facilitates both Notes type and To-dos type with all your basic features.
						</div>
						<div className="aboutPoints">
							Type Notes provides you unlimited space for your notes with a self-extended input box.
						</div>
						<div className="aboutPoints">
							Type To-dos Come with Done CheckBox, which helps you remember your works.
						</div>
						<div className="bottons">
							<a href={"https://notes." + process.env.REACT_APP_MY_BASE_URL} id="noteLink" target="_blank" rel="noreferrer">
								<Button title="Web-Link" color="sky" />
							</a>
						</div>
					</div>
				</div>

				<div id="subTitle">Technologies Used</div>
				<div className="technologies">
					<div>
						<img src={react} className="technologieImg" alt="" />
						<div>React</div>
					</div>
					<div>
						<img src={nodeJs} className="technologieImgWhite" alt="" />
						<div>NodeJS</div>
					</div>
					<div>
						<img src={javaScript} className="technologieImg" alt="" />
						<div>JavaScript</div>
					</div>
					<div>
						<img src={mongoDB} className="technologieImgWhite" alt="" />
						<div>MongoDB</div>
					</div>
				</div>

				<br />
				<Accordion title="Login Page">
					<div className="img_text">
						<img className="accordionImg" src={LoginPage} alt="" />
						<div className="pointSection">
							<div className="aboutPoints">
								Our login system allows us to login with their email and password.
							</div>
							<div className="aboutPoints">
								Anyone can easily create their account with their email and password.
							</div>
							<div className="aboutPoints">
								There is also an option to "forget password" in case you forget your password. In which
								case you get an OTP on your registered email ID to change your password.
							</div>
							<div className="aboutPoints">
								Your privacy is our responsibility. That is why your information is end-to-end
								encrypted.
							</div>
						</div>
					</div>
				</Accordion>

				<Accordion title="Home Page">
					<div className="img_text">
						<img className="accordionImg" src={HomePage} alt="" />
						<div className="pointSection">
							<div className="aboutPoints">This is our new simple user-friendly UI.</div>
							<div className="aboutPoints">
								Adding new notes is very easy from the input box in the navbar and by clicking the "Add
								Note" button.
							</div>
							<div className="aboutPoints">
								Each note box shows us the last saved time and date, which helps us to navigate easily.
							</div>
							<div className="aboutPoints">
								You can now store both to-do and note types in the same file.
							</div>
						</div>
					</div>
				</Accordion>

				<Accordion title="Setting Page">
					<div className="img_text">
						<img className="accordionImg" src={SettingPage} alt="" />
						<div className="pointSection">
							<div className="aboutPoints">
								We provide basic account and profile settings to keep everything up to date.
							</div>
							<div className="aboutPoints">
								The profile setting allows you to update your user name and profile picture.
							</div>
							<div className="aboutPoints">Account settings allow you to update your password.</div>
							<div className="aboutPoints">
								In the "About" section, you will get the latest changes and fixes.
							</div>
						</div>
					</div>
				</Accordion>
			</div>

			<div
				className="container"
				data-aos="fade-up"
				data-aos-delay={aosDelay}
				data-aos-duration={aosDuration}
				data-aos-offset={aosOffset}
			>
				<div className="containerTitle">Some Other Projects</div>

				<div className="img_text">
					{/* <img src={notesImg1} alt="" height="300px" /> */}

					<div className="pointSection">
						<div className="aboutPoints">These are my persnal project.</div>
						<div className="aboutPoints">Which are based on CSS and concept JavaScript.</div>
					</div>
				</div>

				<div id="subTitle">Technologies Used</div>
				<div className="technologies">
					<div>
						<img src={react} className="technologieImg" alt="" />
						<div>React</div>
					</div>
					<div>
						<img src={css} className="technologieImg" alt="" />
						<div>CSS</div>
					</div>
					<div>
						<img src={javaScript} className="technologieImg" alt="" />
						<div>JavaScript</div>
					</div>
					<div>
						<img src={mysql} className="technologieImgWhite" alt="" />
						<div>MySQL</div>
					</div>
				</div>

				<br />
				<Accordion title="JavaScript Based">
					<div className="img_text" style={{ alignItems: 'flex-end' }}>
						<div className="pointSection">
							<div className="accordionTitle">SDT Calculator</div>
							<div className="aboutPoints">This is a speed, time, and distance calculator.</div>
							<div className="aboutPoints">
								<b>Concept:-</b> <br />
								Write any of two of them, and the third will be auto calculated. <br />
								I.e, if you write speed and distance, then time is automatically calculated.
							</div>
						</div>

						<a href={"https://sdt." + process.env.REACT_APP_MY_BASE_URL} className="noteLink" target="_blank" rel="noreferrer">
							<Button title="Live Link" color="sky" sx={{ marginBottom: '10px' }} />
						</a>
					</div>

					<div className="img_text" style={{ alignItems: 'flex-end' }}>
						<div className="pointSection">
							<div className="accordionTitle">Multi Select</div>
							<div className="aboutPoints">
								There are three Dropdowns, all of which have the same option of cars inside.
							</div>
							<div className="aboutPoints">
								<b>Concept:-</b> <br />
								If you select a car in the first dropdown, then the selected car is automatically
								removed from the second and third dropdowns. <br />
								Similarly, if you select another car in the second dropdown the selected car is
								automatically removed from the first and third dropdowns.
							</div>
						</div>
						<a href={"https://select." + process.env.REACT_APP_MY_BASE_URL} className="noteLink" target="_blank" rel="noreferrer">
							<Button title="Live Link" color="sky" sx={{ marginBottom: '10px' }} />
						</a>
					</div>

					<div className="img_text" style={{ alignItems: 'flex-end' }}>
						<div className="pointSection">
							<div className="accordionTitle">Bitcoin Live Prices</div>
							<div className="aboutPoints">
								It shows the live price of Bitcoin in different currencies.
							</div>
							<div className="aboutPoints">
								<b>Concept:-</b> <br />
								Get data from the server and render it on the frontend.
							</div>
						</div>
						<a href={"https://bitcoin." + process.env.REACT_APP_MY_BASE_URL} className="noteLink" target="_blank" rel="noreferrer">
							<Button title="Live Link" color="sky" sx={{ marginBottom: '10px' }} />
						</a>
					</div>
				</Accordion>

				<Accordion title="CSS Based Designs">
					<div className="pointSection">
						<div className="designs">
							<div className="accordionTitle">Design 1</div>
							<a href={"https://design1." + process.env.REACT_APP_MY_BASE_URL} className="noteLink" target="_blank" rel="noreferrer">
								<Button title="Live Link" color="sky" />
							</a>
						</div>
						<div className="designs">
							<div className="accordionTitle">Design 2</div>
							<a href={"https://design2." + process.env.REACT_APP_MY_BASE_URL} className="noteLink" target="_blank" rel="noreferrer">
								<Button title="Live Link" color="sky" />
							</a>
						</div>
						<div className="designs">
							<div className="accordionTitle">Design 3</div>
							<a href={"https://design3." + process.env.REACT_APP_MY_BASE_URL} className="noteLink" target="_blank" rel="noreferrer">
								<Button title="Live Link" color="sky" />
							</a>
						</div>
						<b>Note:-</b> These are only non-functional designs.
					</div>
				</Accordion>
			</div>

			<div id="myInternships" className="mainTitle">
				My Internships
			</div>

			<div
				className="container"
				data-aos="fade-up"
				data-aos-delay={aosDelay}
				data-aos-duration={aosDuration}
				data-aos-offset={aosOffset}
			>
				<div className="containerTitle">Indian Institute Of Technology Patna (IIT Patna)</div>

				<div className="img_text">
					<img src={iitpLogo} style={{ background: '#f1f1f1' }} alt="" height="300px" />

					<div className="pointSection">
						<div className="aboutPoints">Developed Facility evaluation System for college IITP.</div>
						<div className="aboutPoints">Internships duration from 1 june 2022 to 15 july 2022.</div>
						<div className="aboutPoints">Work on both the frontend and backend.</div>
						<div className="aboutPoints">
							Created a multiuser login system for the facility, canditate, and admin.
						</div>
						<div className="aboutPoints">
							Learned and did software architecture design of complete project.
						</div>

						<div className="bottons">
							<a
								href="https://github.com/adarsh3699/Facility-Evaluation-System-IITP"
								id="noteLink"
								target="_blank"
								rel="noreferrer"
							>
								<Button title="Git Repo" color="green" />
							</a>
							<a href={iitpCertificate} id="noteLink" target="_blank" rel="noreferrer">
								<Button title="Certificate" color="sky" />
							</a>
						</div>
					</div>
				</div>

				<div id="subTitle">Technologies Used</div>
				<div className="technologies">
					<div>
						<img src={react} className="technologieImg" alt="" />
						<div>React</div>
					</div>
					<div>
						<img src={nodeJs} className="technologieImgWhite" alt="" />
						<div>NodeJS</div>
					</div>
					<div>
						<img src={javaScript} className="technologieImg" alt="" />
						<div>JavaScript</div>
					</div>
					<div>
						<img src={mysql} className="technologieImgWhite" alt="" />
						<div>MongoDB</div>
					</div>
				</div>
			</div>

			<div
				className="container"
				data-aos="fade-up"
				data-aos-delay={aosDelay}
				data-aos-duration={aosDuration}
				data-aos-offset={aosOffset}
			>
				<div className="containerTitle">Auric Touch LLP</div>

				<div className="img_text">
					<img src={auricTouchLogo} alt="" height="300px" />

					<div className="pointSection">
						<div className="aboutPoints">Work on Fantasy Points Optimizer for Auric Touch LLP.</div>
						<div className="aboutPoints">
							Internships duration from 20th june 2022 to 31st October 2022.
						</div>
						<div className="aboutPoints">Learned working with team.</div>
						<div className="aboutPoints">Work on Frontend Part.</div>
						<div className="aboutPoints">Setup authorization-based features and many other features</div>

						<div className="bottons">
							<a
								href="https://www.fantasypointsoptimizer.com/"
								id="noteLink"
								target="_blank"
								rel="noreferrer"
							>
								<Button title="Web-link" color="green" />
							</a>
							<a href={auricTouchCertificate} id="noteLink" target="_blank" rel="noreferrer">
								<Button title="Certificate" color="sky" />
							</a>
						</div>
					</div>
				</div>

				<div id="subTitle">Technologies Used</div>
				<div className="technologies">
					<div>
						<img src={react} className="technologieImg" alt="" />
						<div>React</div>
					</div>
					<div>
						<img src={nodeJs} className="technologieImgWhite" alt="" />
						<div>NodeJS</div>
					</div>
					<div>
						<img src={javaScript} className="technologieImg" alt="" />
						<div>JavaScript</div>
					</div>
					<div>
						<img src={muiLogo} className="technologieImgWhite" alt="" />
						<div>Material UI</div>
					</div>
				</div>
			</div>

			<div
				className="container"
				data-aos="fade-up"
				data-aos-delay={aosDelay}
				data-aos-duration={aosDuration}
				data-aos-offset={aosOffset}
				style={{ marginBottom: '90px' }}
			>
				<div className="containerTitle">Be A Wiz Education</div>

				<div className="img_text">
					<img src={beAwizLogo} alt="" height="300px" />

					<div className="pointSection">
						<div className="aboutPoints">Work on BeAwiz Website for Be A Wiz Education.</div>
						<div className="aboutPoints">Internships duration from 1 May 2022 to 1 june 2022.</div>
						<div className="aboutPoints">Fixed css issues and enhanced responsiveness of website.</div>
						<div className="aboutPoints">I added captcha to the login page.</div>

						<div className="bottons">
							<a href="https://beawiz.com/" id="noteLink" target="_blank" rel="noreferrer">
								<Button title="Web-link" color="green" />
							</a>
							<a href={beCertificate} id="noteLink" target="_blank" rel="noreferrer">
								<Button title="Certificate" color="sky" />
							</a>
						</div>
					</div>
				</div>

				<div id="subTitle">Technologies Used</div>
				<div className="technologies">
					<div>
						<img src={htmlLogo} className="technologieImg" alt="" />
						<div>HTML</div>
					</div>
					<div>
						<img src={phpLogo} className="technologieImg" alt="" />
						<div>PHP</div>
					</div>
					<div>
						<img src={javaScript} className="technologieImg" alt="" />
						<div>JavaScript</div>
					</div>
					<div>
						<img src={css} className="technologieImg" alt="" />
						<div>CSS</div>
					</div>
				</div>
			</div>

			<FootBar />
		</div>
	);
}

export default WorksPage;
