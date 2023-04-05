import React from 'react';

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
import '../styles/homePage.css';

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

function HomePage() {
	if (document.title !== 'Adarsh Suman') document.title = 'Adarsh Suman';
	return (
		<>
			<ScrollContainer>
				<ScrollPage>
					<Animator animation={batch(Fade(), Sticky(50, 45), MoveOut(0, -200))}>
						<div id="welcome">
							Hello <span>World</span>
						</div>
					</Animator>
				</ScrollPage>
				<ScrollPage>
					<Animator animation={ZoomInScrollOut}>
						<div id="myName">
							This is <span>Adarsh</span> Suman
						</div>
					</Animator>
				</ScrollPage>
				<ScrollPage>
					<Animator animation={FadeUp}>
						<span id="iAm">I am a 🤔</span>
					</Animator>
				</ScrollPage>
				<ScrollPage>
					<div id="myPoints">
						<Animator animation={MoveIn(-1000, 0)}>Programmer👋🏻</Animator>
						<Animator animation={MoveIn(1000, 0)}>Web App Developer</Animator>
						Gamer
						<Animator animation={MoveOut(1000, 0)}>And Human</Animator>
						<Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
					</div>
				</ScrollPage>
				<ScrollPage>
					<Animator animation={batch(Fade(), Sticky(50, 45))}>
						<div id="thankMsg">Thank you 🤍</div>
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
		</>
	);
}

export default HomePage;
