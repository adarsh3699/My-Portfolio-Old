import React from 'react';
import { NavLink } from 'react-router-dom';

import 'aos/dist/aos.css';
import '../styles/aboutPage.css';

import AOS from 'aos';

import Container from '../components/Container/Container';
import Button from '../components/Button';

import aboutMeIng from '../img/myImg.jpeg';
import myEducationImg from '../img/education.png';

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

AOS.init();
const aosStyle = 'fade-up';
const aosDelay = '100';
const aosDuration = '1000';
const aosOffset = '250';

const mySkillArary = [
	{ img: javaLogo, title: 'Java' },
	{ img: phpLogo, title: 'PHP' },
	{ img: jqueryLogo, title: 'JQuery' },
	{ img: JavaScriptLogo, title: 'JadfvaScript' },
	{ img: nodejsLogo, title: 'NodeJs' },
	{ img: cssLogo, title: 'CSS' },
	{ img: htmlLogo, title: 'HTML' },
	{ img: mysqlLogo, title: 'MySql' },
	{ img: mongodbLogo, title: 'MongoDb' },
	{ img: mernLogo, title: 'MERN' },
	{ img: expressLogo, title: 'Express' },
	{ img: reactLogo, title: 'React' },
	{ img: reactNativeLogo, title: 'React Native' },
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
							I have experience in JavaScript, React, NodeJs, MySql, MongoDb, MERN, PHP, HTML and CSS.
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
						<div className="aboutPoints">
							Senior Secondary Schooling, BSEB - State Board, Magadh University (2022 - 2024)
						</div>
						<div className="aboutPoints">
							Secondary Schooling, CBSE, R.P.S Public School, Bihar Sharif (2020 - 2021)
						</div>
					</div>

					<img src={myEducationImg} loading="lazy" className="logoPc" alt="" height="300px" />
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
