import React from 'react';
import { NavLink } from 'react-router-dom';

import 'aos/dist/aos.css';
import '../styles/aboutPage.css';

import AOS from 'aos';

import Container from '../components/Container/Container';
import Button from '../components/Button';

import aboutMeIng from '../img/myImg.jpeg';
import myEducationImg from '../img/education.png';
// import logoFireIng from '../img/logoFire.jpg';
// import newLogoWithBg from '../img/newLogoBlack.webp';
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

			{/* <Container
				containerTitle="My Skills"
				aosOffset={aosOffset}
				aosStyle={aosStyle}
				aosDelay={aosDelay}
				aosDuration={aosDuration}
			>
				<div className="img_text text_img">
					<img src={newLogoWithBg} loading="lazy" alt="" height="300px" id="logoMoblie" />

					<div className="pointSection">
						<div className="aboutPoints">This is our new logo.</div>
						<div className="aboutPoints">It is modern and more vibrant.</div>
						<div className="aboutPoints">This represents our creativity and vision.</div>
					</div>

					<img src={newLogoWithBg} loading="lazy" className="logoPc" alt="" height="300px" />
				</div>
			</Container> */}

			<Container
				containerTitle="Bhemu Notes"
				aosOffset={aosOffset}
				aosStyle={aosStyle}
				aosDelay={aosDelay}
				aosDuration={aosDuration}
				sx={{ marginBottom: '90px' }}
			>
				<div className="img_text">
					<img src={notesImg1} loading="lazy" alt="" height="300px" />

					<div className="pointSection">
						<div className="aboutPoints">This is a Multi-User Notes app.</div>
						<div className="aboutPoints">
							Now you can store note types and todos in the same file, which makes taking notes more
							handy.
						</div>
						<div className="aboutPoints">Feature like group notes in a folder to keep them organized.</div>
						<div className="aboutPoints">
							Feature Like share notes with others by just sharing the link of that note.
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
									(process.env?.REACT_APP_MY_BASE_URL ||
										window.location.host.split('www')[1] ||
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
