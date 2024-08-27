import React, { useCallback } from 'react';
import AOS from 'aos';

import { Accordion } from '../components/Accordion/';
import WaveCard from '../components/waveCard/WaveCard';
import Button from '../components/Button';
import Container from '../components/Container/Container';
import ProjectGrip from '../components/projectGrip/ProjectGrid';

import '../styles/accordion.css';
import '../styles/worksPage.css';
import 'aos/dist/aos.css';

import myProjectBanner from '../img/banner/myProjects.png';
import InternshipBanner from '../img/banner/internshipBanner.jpeg';
import MettingBanner from '../img/banner/meeting.jpg';
import BhemuNotesBanner from '../img/banner/bhemuNotes.png';
import NotesLoginIMG from '../img/projects/notesLogin.png';
import NoteSettingsImg from '../img/projects/noteSetting.png';
import NotesMenuIMG from '../img/projects/notesMenu.png';
import ComparisonBanner from '../img/banner/comparison.png';
import ComparisonHome from '../img/projects/comparisonHome.png';
import SharplearnBanner from '../img/banner/sharplearn.png';
import SharplearnAllCourse from '../img/projects/SharpLearn_AllCourse.png';
import SharplearnCourse from '../img/projects/SharpLearn_Course.png';
import SharplearnCart from '../img/projects/SharpLearn_Cart.png';
import SharplearnLogin from '../img/projects/SharpLearn_Login.png';

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

const slideList = [
	{
		url: myProjectBanner,
		caption: 'My Projects',
		navigateTo: 'myProjects',
	},
	{ url: BhemuNotesBanner, caption: 'Bhemu Notes', grayOut: true },
	{ url: ComparisonBanner, caption: 'Price Comparison', grayOut: true },
	{ url: SharplearnBanner, caption: 'SharpLearn', grayOut: true },
	{
		url: InternshipBanner,
		caption: 'Internships',
		navigateTo: 'myInternships',
	},
	{
		url: MettingBanner,
		caption: 'Team working',
	},
];

const projectList = [
	{
		name: 'Bhemu Notes',
		img: [BhemuNotesBanner, NotesLoginIMG, NoteSettingsImg, NotesMenuIMG],
		description: [
			<>
				This is an advance note app called <b>Bhemu Notes.</b>
			</>,
			<>
				This Notes app facilitates a <b>feature-rich text editor</b> for more creative notes.
			</>,
			<>
				User data and their notes are stored in <b>encrypted</b> form in the database.
			</>,
			<>
				Feature like group notes in a <b>folder</b> to keep them organized.
			</>,
			<>
				Feature like exporting a note as <b>PDF</b>.
			</>,
			<>
				Now you can <b>share notes</b> with others as an editor or viewer by just sharing the link to that note.
			</>,
			<>
				Screenshot and Demonstration Video{' '}
				<a
					href="https://drive.google.com/drive/folders/1KsQkL1glnk2edPez8dhEFoGFBmNyAoEi?usp=drive_link"
					target="_blank"
					rel="noreferrer"
					className="clcikHere"
				>
					Click Here.
				</a>
			</>,
			<>
				<b>Demo Account:-</b> <br />
				<b>Email: </b>demo@bhemu.com <b>Pass: </b>demo1234
			</>,
		],
		techStack: [
			{ name: 'React', logo: react },
			{ name: 'JavaScript', logo: javaScript },
			{ name: 'Firebase', logo: firebaseLogo },
			{ name: 'Material UI', logo: muiLogo },
		],
		url: `https://notes${process.env.REACT_APP_MY_BASE_URL || 'bhemu.me'}`,
	},
	{
		name: 'Price Comparison Web',
		img: [ComparisonBanner, ComparisonHome],
		description: [
			<>
				Price comparison tools help you find the best deal across Amazon, Flipkart, Myntra, Paytm, and other
				similar platforms.
			</>,
			<>
				Price comparison tool based on scraping data from multiple e-commerce shopping websites and then
				comparing these prices to help users find the best deal for a specific product.
			</>,
			<>Make informed purchasing decisions with comprehensive product insights.</>,
			<>This tool is only for educational purposes and not for any commercial use.</>,
			<>
				To find screenshot of the website and Demonstration video{' '}
				<a
					href="https://drive.google.com/drive/folders/1tr1z0BmaE2ejicSXNdXK_bk8kDnMCvxq?usp=drive_link"
					id="noteLink"
					target="_blank"
					rel="noreferrer"
					className="clcikHere"
				>
					Click here.
				</a>
			</>,
		],
		techStack: [
			{ name: 'React', logo: react },
			{ name: 'JavaScript', logo: javaScript },
			{ name: 'Node.Js', logo: nodeJs, whiteBg: true },
			{ name: 'Express', logo: express, whiteBg: true },
		],
		url: `https://comparison${process.env.REACT_APP_MY_BASE_URL || 'bhemu.me'}`,
	},
	{
		name: 'SharpLearn',
		img: [SharplearnLogin, SharplearnAllCourse, SharplearnCourse, SharplearnCart],
		description: [
			<>A E_Commerce website of courses where you can buy courses.</>,
			<>All working features like add to cart, buy now, course details, and many more.</>,
			<>Double portal system for admin and user, where admin can add, delete, and update their courses.</>,
			<>This tool is only for educational purposes and not for any commercial use.</>,
			<>
				To find screenshot of the website and Demonstration video{' '}
				<a
					href="https://drive.google.com/drive/folders/1KKfxOQVQRkos6li6YCkSXo96H69YV_p1?usp=drive_link"
					id="noteLink"
					target="_blank"
					rel="noreferrer"
					className="clcikHere"
				>
					Click here.
				</a>
			</>,
		],
		techStack: [
			{ name: 'React', logo: react },
			{ name: 'JavaScript', logo: javaScript },
			{ name: 'Firebase', logo: firebaseLogo },
			{ name: 'Material UI', logo: muiLogo },
		],
		url: 'https://sharplearn.vercel.app',
	},
];

const designBasedProjects = Array(6).fill(null);

function WorksPage() {
	if (document.title !== 'Adarsh Suman | Works') document.title = 'Adarsh Suman | Works';

	const onSlideClick = useCallback((navigateTo) => {
		const element = document.getElementById(navigateTo);
		window.scrollTo({ top: element?.offsetTop, behavior: 'smooth' });
	}, []);

	return (
		<div className="background" id="worksPage">
			<WaveCard slideList={slideList} onSlideClick={onSlideClick} />

			<div id="myProjects">
				<div className="mainTitle">Personal Projects</div>
			</div>

			<ProjectGrip projectList={projectList} />

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
						{designBasedProjects.map((_, index) => (
							<div className="designs" key={index}>
								<div className="accordionTitle">Design {index + 1}</div>

								<Button
									href={`https://design${index + 1}
										${process.env?.REACT_APP_MY_BASE_URL || '.bhemu.me'}`}
									title="Live Link"
									color="sky"
									target="_blank"
								/>
							</div>
						))}
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
