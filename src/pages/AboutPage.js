import React from 'react';
import { NavLink } from 'react-router-dom';

import 'aos/dist/aos.css';
import '../styles/aboutPage.css';

import AOS from 'aos';

import Container from '../components/Container/Container';
import Button from '../components/Button';

import aboutMeIng from '../img/myImg.jpeg';
import myEducationImg from '../img/education.png';
import myWork from '../img/myWork.webp';

import MyResume from '../img/projects/my_resume.pdf';

import javaLogo from '../img/technologies/javaLogo.svg';
import phpLogo from '../img/technologies/mongodb.svg';
import jqueryLogo from '../img/technologies/jqueryLogo.svg';
import JavaScriptLogo from '../img/technologies/javascript.svg';
import nodejsLogo from '../img/technologies/nodejs.svg';
import cssLogo from '../img/technologies/css.svg';
import htmlLogo from '../img/technologies/html_logo.svg';
import mysqlLogo from '../img/technologies/mysql.svg';
import mongodbLogo from '../img/technologies/mongodb.svg';
import mernLogo from '../img/technologies/mernLogo.webp';
import expressLogo from '../img/technologies/express.svg';
import reactLogo from '../img/technologies/reactjsLogo.svg';
import reactNativeLogo from '../img/technologies/reactNativeLogo.png';
import tailwindcssLogo from '../img/technologies/tailwindcss.svg';

AOS.init();
const aosStyle = 'fade-up';
const aosDelay = '100';
const aosDuration = '1000';
const aosOffset = '250';

const mySkillArary = [
	{ img: javaLogo, title: 'Java' },
	{ img: phpLogo, title: 'PHP' },
	{ img: reactLogo, title: 'React' },
	{ img: reactNativeLogo, title: 'React Native' },
	{ img: htmlLogo, title: 'HTML' },
	{ img: JavaScriptLogo, title: 'JavaScript' },
	{ img: jqueryLogo, title: 'JQuery' },
	{ img: cssLogo, title: 'CSS' },
	{ img: tailwindcssLogo, title: 'Tailwind CSS' },
	{ img: nodejsLogo, title: 'NodeJs' },
	{ img: mysqlLogo, title: 'MySql' },
	{ img: mongodbLogo, title: 'MongoDb' },
	{ img: expressLogo, title: 'Express' },
	{ img: mernLogo, title: 'MERN' },
];

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
						loading="lazy"
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
						<div className="aboutPoints">
							My Name is Adarsh Suman & I'm a programmer and a computer geek.
						</div>

						<div className="aboutPoints">
							My hometown is Nalanda, Bihar, India.
							{/* , but I currently reside in Punjab. */}
						</div>

						<div className="aboutPoints">
							I have skills in web application development as a full-stack developer.
						</div>
						<div className="aboutPoints">I have more than two years of experience in this industry.</div>
						<div className="aboutPoints">
							I have experience in JavaScript, React, NodeJs, MySql, MongoDb, MERN, PHP, HTML, CSS and
							more.
						</div>
						<div className="aboutPoints">
							I have done some of my personal projects and some internships at different companies.
						</div>
						<div className="aboutPoints">
							Other than programming, I spend time gaming, listening to songs, making videos, and editing.
						</div>
						<div className="bottons">
							<a href={MyResume} target="_blank" rel="noreferrer">
								<Button title="My Resume" color="sky" />
							</a>
						</div>
					</div>
				</div>
			</Container>

			<Container
				containerTitle="My Education"
				aosOffset={aosOffset}
				aosStyle={aosStyle}
				aosDelay={aosDelay}
				aosDuration={aosDuration}
			>
				<div className="img_text text_img">
					<img src={myEducationImg} loading="lazy" alt="" height="300px" id="logoMoblie" />

					<div className="pointSection">
						<div className="aboutPoints">Currenly doing bachelor in technology from ___ To be Decided.</div>
						<div className="aboutPoints">Senior Secondary Schooling, BSEB - State Board (2022 - 2024)</div>
						<div className="aboutPoints">
							Secondary Schooling, CBSE, R.P.S Public School, Bihar Sharif (2020 - 2021)
						</div>
					</div>

					<img src={myEducationImg} loading="lazy" className="logoPc" alt="" height="300px" />
				</div>
			</Container>

			<Container containerTitle="My Works" aosStyle={aosStyle} aosDelay="50" aosDuration={aosDuration}>
				<div className="img_text">
					<img src={myWork} loading="lazy" alt="" height="300px" />

					<div className="pointSection">
						<div className="aboutPoints">
							Im a full-stack developer and I have done some of my personal projects and some internships
							like :-
						</div>

						<div className="aboutPoints">
							Bhemu Notes
							<li>An advance note app called Bhemu Notes</li>
							<li>
								Feature like taking notes quickly and easily with support for shortcuts, and we can also
								share notes with others.
							</li>
						</div>

						<div className="aboutPoints">
							Price Comparison Website
							<li>
								Price comparison tools help you find the best deal across Amazon, Flipkart, Myntra,
								Paytm, and other similar platforms.
							</li>
							<li>
								It is based on scraping data from multiple e-commerce shopping websites to find the best
								deal for a specific product.
							</li>
						</div>
						<div className="aboutPoints">
							Sharplearn
							<li>E-commerce website of courses where you can buy courses.</li>
							<li>
								Double portal system for admin and user, where admin can add, delete, and update their
								courses.
							</li>
						</div>
						<div className="bottons">
							<NavLink to="/works">
								<Button title="Know More" color="sky" />
							</NavLink>
						</div>
					</div>
				</div>
			</Container>

			<Container
				containerTitle="My Skills"
				aosOffset={aosOffset}
				aosStyle={aosStyle}
				aosDelay={aosDelay}
				aosDuration={aosDuration}
				sx={{ marginBottom: '90px' }}
			>
				<div className="mySkillGrid">
					{mySkillArary.map((skill, index) => (
						<div className="mySkils" key={index}>
							<img src={skill.img} loading="lazy" alt="" />
							{skill.title}
						</div>
					))}
				</div>
			</Container>
		</div>
	);
}

export default AboutPage;
