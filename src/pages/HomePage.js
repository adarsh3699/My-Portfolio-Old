import React from 'react';
import NavBar from '../components/Bar/NavBar';
import FootBar from '../components/Bar/FootBar';
import {
	Animator,
	ScrollContainer,
	ScrollPage,
	batch,
	Fade,
	FadeIn,
	Move,
	MoveIn,
	MoveOut,
	Sticky,
	StickyIn,
	ZoomIn,
} from 'react-scroll-motion';

import 'aos/dist/aos.css';
import '../css/homePage.css';

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

function HomePage() {
	return (
		<>
			<NavBar />

			<ScrollContainer>
				<ScrollPage page={0} key="0">
					<Animator animation={batch(Fade(), Sticky(50, 45), MoveOut(0, -200))}>
						<div id="welcome">
							Hello <span>World</span>
						</div>
					</Animator>
				</ScrollPage>
				<ScrollPage page={1} key="1">
					<Animator animation={ZoomInScrollOut}>
						<div id="myName">
							This is <span>Adarsh</span> Suman
						</div>
					</Animator>
				</ScrollPage>
				<ScrollPage page={2} key="2">
					<Animator animation={FadeUp}>
						<span id="iAm">I am a 🤔</span>
					</Animator>
				</ScrollPage>
				<ScrollPage page={3} key="3">
					<div id="myPoints">
						<Animator animation={MoveIn(-1000, 0)}>Programmer👋🏻</Animator>
						<Animator animation={MoveIn(1000, 0)}>Web App Developer</Animator>
						Gamer
						<Animator animation={MoveOut(1000, 0)}>And Human</Animator>
						<Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
					</div>
				</ScrollPage>
				<ScrollPage page={4} key="4">
					<Animator animation={batch(Fade(), Sticky(50, 45))}>
						<div id="thankMsg">Thank you for visting my site</div>
					</Animator>
				</ScrollPage>
			</ScrollContainer>

			<div className="waveWrapper waveAnimation">
				<div className="waveWrapperInner bgTop">
					<div className="wave waveTop"></div>
				</div>
				<div className="waveWrapperInner bgMiddle">
					<div className="wave waveMiddle"></div>
				</div>
				<div className="waveWrapperInner bgBottom">
					<div className="wave waveBottom"></div>
				</div>
			</div>

			<FootBar />
		</>
	);
}

export default HomePage;
