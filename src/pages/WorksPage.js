import React, { useCallback } from 'react';
import AOS from 'aos';
import { Slide } from 'react-slideshow-image';

import { Accordion } from '../components/Accordion/';
import Button from '../components/Button';
import Container from '../components/Container/Container';

import '../styles/accordion.css';
import 'react-slideshow-image/dist/styles.css';
import '../styles/worksPage.css';
import 'aos/dist/aos.css';

import myProjectBanner from '../img/myProjects.png';
import InternshipBanner from '../img/internshipBanner.jpeg';
import MettingBanner from '../img/meeting.jpg';

import notesImg1 from '../img/projects/user-home.jpg';
import priceCompresionImg from '../img/projects/priceComparisonPic.png';
import sharplearnPic from '../img/projects/sharplearnPic.png';
import LoginPage from '../img/projects/loginPage.png';
import HomePage from '../img/projects/homePage.png';
import SettingPage from '../img/projects/settingPage.png';
import iitpLogo from '../img/projects/iitp-logo.png';
import auricTouchLogo from '../img/projects/aurictouch_logo.png';
import beAwizLogo from '../img/projects/beawiz_logo.png';

import react from '../img/technologies/reactjsLogo.svg';
import nodeJs from '../img/technologies/nodejs.svg';
import express from '../img/technologies/express.svg';
import javaScript from '../img/technologies/javascript.svg';
import mysql from '../img/technologies/mysql.svg';
import css from '../img/technologies/css.svg';
import muiLogo from '../img/technologies/mui_logo.svg';
import phpLogo from '../img/technologies/php_logo.svg';
import htmlLogo from '../img/technologies/html_logo.svg';
import firebaseLogo from '../img/technologies/firebase.svg';
import tailwindLogo from '../img/technologies/tailwindcss.svg';

import iitpCertificate from '../img/projects/iitp_certificate.pdf';
import auricTouchCertificate from '../img/projects/auricTouch_certificate.pdf';
import beCertificate from '../img/projects/beawiz_Certificate.pdf';

AOS.init();

const aosDelay = '100';
const aosDuration = '1000';
const aosOffset = '250';

const slideImages = [
	{
		url: myProjectBanner,
		caption: 'My Projects',
		navigateTo: '#myProjects',
	},
	{
		url: InternshipBanner,
		caption: 'Internships',
		navigateTo: '#myInternships',
	},
	{
		url: MettingBanner,
		caption: 'Team working',
	},
];

function WorksPage() {
	if (document.title !== 'Adarsh Suman | Works') document.title = 'Adarsh Suman | Works';

	const handleBannerClick = useCallback(() => {
		document.documentElement.style.scrollBehavior = 'smooth';
		setTimeout(() => {
			document.documentElement.style = null;
		}, 1200);
	}, []);

	return (
		<div className="background">
			<Slide transitionDuration="700">
				{slideImages.map((each, index) => (
					<div key={index} className="each-slide-effect">
						<div className="bannerImg" style={{ backgroundImage: `url(${each.url})` }}>
							<a
								className="bannderTag"
								onClick={each?.navigateTo ? handleBannerClick : null}
								href={each?.navigateTo}
							>
								{each.caption}
							</a>
						</div>
					</div>
				))}
			</Slide>

			<div id="myProjects">
				<div className="mainTitle">Personal Projects</div>
			</div>
			<Container containerTitle="Bhemu Notes" sx={{ marginTop: '0' }}>
				<div className="img_text" data-aos="fade-up" data-aos-delay={aosDelay} data-aos-duration={aosDuration}>
					<img src={notesImg1} alt="" height="300px" />

					<div className="pointSection">
						<div className="aboutPoints">This is an advance note app called Bhemu Notes.</div>
						<div className="aboutPoints">
							This Notes app facilitates you to keep your Notes type and To-Dos type with all basic
							features.
						</div>
						<div className="aboutPoints">
							User data and their notes are stored securely in encrypted form in the database.
						</div>
						<div className="aboutPoints">
							Now you can store note types and todos in the same file, which makes taking notes more
							handy.
						</div>
						<div className="aboutPoints">Feature like group notes in a folder to keep them organized.</div>
						<div className="aboutPoints">
							Feature Like share notes with others by just sharing the link of that note.
						</div>
						<div className="aboutPoints">
							<b>Demo Account:-</b> <br />
							<b>Email: </b>demo@bhemu.com <b>Pass: </b>demo1234
						</div>
						<div className="bottons">
							<Button href="https://notes.bhemu.me" target="_blank" title="Live Link" color="green" />

							<Button
								href="https://drive.google.com/drive/folders/1KsQkL1glnk2edPez8dhEFoGFBmNyAoEi?usp=drive_link"
								title="Demo Video"
								color="sky"
								target="_blank"
							/>
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
						<img src={javaScript} className="technologieImg" alt="" />
						<div>JavaScript</div>
					</div>
					<div>
						<img src={firebaseLogo} className="technologieImgWhite" alt="" />
						<div>Firebase</div>
					</div>
					<div>
						<img src={muiLogo} className="technologieImgWhite" alt="" />
						<div>Material UI</div>
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
								case you get an mail on your registered email ID to change your password.
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
								Now you can store note types and todos in the same file, which makes taking notes more
								handy.
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
			</Container>

			<Container containerTitle="Price Comparison Website">
				<div className="img_text" data-aos="fade-up" data-aos-delay={aosDelay} data-aos-duration={aosDuration}>
					<img src={priceCompresionImg} alt="" height="300px" />

					<div className="pointSection">
						<div className="aboutPoints">
							Price comparison tools help you find the best deal across Amazon, Flipkart, Myntra, Paytm,
							and other similar platforms.
						</div>
						<div className="aboutPoints">
							Price comparison tool based on scraping data from multiple e-commerce shopping websites and
							then comparing these prices to help users find the best deal for a specific product.
						</div>
						<div className="aboutPoints">
							Make informed purchasing decisions with comprehensive product insights.
						</div>
						<div className="aboutPoints">
							This tool is only for educational purposes and not for any commercial use.
						</div>
						<div className="aboutPoints">
							To find screenshot of the website and demo video
							<a
								href="https://drive.google.com/drive/folders/1tr1z0BmaE2ejicSXNdXK_bk8kDnMCvxq?usp=drive_link"
								id="noteLink"
								target="_blank"
								rel="noreferrer"
								className="clcikHere"
							>
								Click here.
							</a>
						</div>

						<div className="bottons">
							<Button
								href="https://comparison.bhemu.me/"
								title="Live Link"
								color="green"
								target="_blank"
							/>
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
						<img src={javaScript} className="technologieImg" alt="" />
						<div>JavaScript</div>
					</div>
					<div>
						<img src={nodeJs} className="technologieImgWhite" alt="" />
						<div>Node.Js</div>
					</div>
					<div>
						<img src={express} className="technologieImgWhite" alt="" />
						<div>Express</div>
					</div>
				</div>
				<br />
			</Container>

			<Container containerTitle="SharpLearn">
				<div className="img_text" data-aos="fade-up" data-aos-delay={aosDelay} data-aos-duration={aosDuration}>
					<img src={sharplearnPic} alt="" height="300px" />

					<div className="pointSection">
						<div className="aboutPoints">A E_Commerce website of courses where you can buy courses.</div>
						<div className="aboutPoints">
							All working features like add to cart, buy now, course details, and many more.
						</div>
						<div className="aboutPoints">
							Double portal system for admin and user, where admin can add, delete, and update their
							courses.
						</div>
						<div className="aboutPoints">
							This tool is only for educational purposes and not for any commercial use.
						</div>
						<div className="aboutPoints">
							To find screenshot of the website and demo video
							<a
								href="https://drive.google.com/drive/folders/1KKfxOQVQRkos6li6YCkSXo96H69YV_p1?usp=drive_link"
								id="noteLink"
								target="_blank"
								rel="noreferrer"
								className="clcikHere"
							>
								Click here.
							</a>
						</div>

						<div className="bottons">
							<Button
								href="https://sharplearn.bhemu.me/"
								title="Live Link"
								color="green"
								target="_blank"
							/>

							<Button
								href="https://admin-sharplearn.bhemu.me/"
								title="Admin Link"
								color="sky"
								target="_blank"
							/>
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
						<img src={javaScript} className="technologieImg" alt="" />
						<div>JavaScript</div>
					</div>
					<div>
						<img src={firebaseLogo} className="technologieImgWhite" alt="" />
						<div>Firebase</div>
					</div>
					<div>
						<img src={muiLogo} className="technologieImgWhite" alt="" />
						<div>Material UI</div>
					</div>
				</div>
				<br />
			</Container>

			<Container
				containerTitle="Some Other Projects"
				aosOffset={aosOffset}
				aosStyle="fade-up"
				aosDelay={aosDelay}
				aosDuration={aosDuration}
				sx={{ marginBottom: '0' }}
			>
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
				<Accordion title="Logic Based">
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

						<Button
							href={
								'https://sdt' +
								(process.env?.REACT_APP_MY_BASE_URL ||
									window.location.host.split('www')[1] ||
									'.bhemu.me')
							}
							title="Live Link"
							color="sky"
							target="_blank"
							sx={{ marginBottom: '10px' }}
						/>
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

						<Button
							href={
								'https://select' +
								(process.env?.REACT_APP_MY_BASE_URL ||
									window.location.host.split('www')[1] ||
									'.bhemu.me')
							}
							title="Live Link"
							color="sky"
							target="_blank"
							sx={{ marginBottom: '10px' }}
						/>
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

						<Button
							href={
								'https://bitcoin' +
								(process.env?.REACT_APP_MY_BASE_URL ||
									window.location.host.split('www')[1] ||
									'.bhemu.me')
							}
							title="Live Link"
							color="sky"
							sx={{ marginBottom: '10px' }}
							target="_blank"
						/>
					</div>
				</Accordion>

				<Accordion title="Designs Based">
					<div className="pointSection DesignsBased">
						<div className="designs">
							<div className="accordionTitle">Design 1</div>

							<Button
								href={
									'https://design1' +
									(process.env?.REACT_APP_MY_BASE_URL ||
										window.location.host.split('www')[1] ||
										'.bhemu.me')
								}
								title="Live Link"
								color="sky"
								target="_blank"
							/>
						</div>
						<div className="designs">
							<div className="accordionTitle">Design 2</div>

							<Button
								href={
									'https://design2' +
									(process.env?.REACT_APP_MY_BASE_URL ||
										window.location.host.split('www')[1] ||
										'.bhemu.me')
								}
								title="Live Link"
								color="sky"
								target="_blank"
							/>
						</div>
						<div className="designs">
							<div className="accordionTitle">Design 3</div>

							<Button
								href={
									'https://design3' +
									(process.env?.REACT_APP_MY_BASE_URL ||
										window.location.host.split('www')[1] ||
										'.bhemu.me')
								}
								title="Live Link"
								color="sky"
								target="_blank"
							/>
						</div>
						<div className="designs">
							<div className="accordionTitle">Design 4</div>

							<Button
								href={
									'https://design4' +
									(process.env?.REACT_APP_MY_BASE_URL ||
										window.location.host.split('www')[1] ||
										'.bhemu.me')
								}
								title="Live Link"
								color="sky"
								target="_blank"
							/>
						</div>
					</div>
					<b style={{ margin: '0 10px' }}>Note:-</b>These are only non-functional designs.
				</Accordion>
			</Container>

			<div id="myInternships">
				<div className="mainTitle">My Internships</div>
			</div>

			<Container
				containerTitle="Auric Touch LLP"
				aosStyle="fade-up"
				aosOffset={aosOffset}
				aosDelay={aosDelay}
				aosDuration={aosDuration}
				sx={{ marginTop: '0' }}
			>
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
							<Button
								href="https://www.fantasypointsoptimizer.com/"
								title="Web-link"
								color="green"
								target="_blank"
							/>

							<Button href={auricTouchCertificate} title="Certificate" color="sky" target="_blank" />
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
						<img src={tailwindLogo} className="technologieImgWhite" alt="" />
						<div>Tailwind CSS</div>
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
			</Container>

			<Container
				containerTitle="Indian Institute Of Technology Patna (IIT Patna)"
				aosStyle="fade-up"
				aosOffset={aosOffset}
				aosDelay={aosDelay}
				aosDuration={aosDuration}
			>
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
							<Button
								href="https://github.com/adarsh3699/Facility-Evaluation-System-IITP"
								title="Git Repo"
								color="green"
								target="_blank"
							/>

							<Button href={iitpCertificate} title="Certificate" color="sky" target="_blank" />
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
			</Container>

			<Container
				containerTitle="Be A Wiz Educatio"
				aosStyle="fade-up"
				aosOffset={aosOffset}
				aosDelay={aosDelay}
				aosDuration={aosDuration}
				sx={{ marginBottom: '90px' }}
			>
				<div className="img_text">
					<img src={beAwizLogo} alt="" height="300px" />

					<div className="pointSection">
						<div className="aboutPoints">Work on BeAwiz Website for Be A Wiz Education.</div>
						<div className="aboutPoints">Internships duration from 1 May 2022 to 1 june 2022.</div>
						<div className="aboutPoints">Fixed css issues and enhanced responsiveness of website.</div>
						<div className="aboutPoints">I added captcha to the login page.</div>

						<div className="bottons">
							<Button href="https://beawiz.com/" title="Web-link" color="green" target="_blank" />
							<Button href={beCertificate} title="Certificate" color="sky" target="_blank" />
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
			</Container>
		</div>
	);
}

export default WorksPage;
