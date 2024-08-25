import React, { useEffect } from 'react';
import './waveCard.css';

function WaveCard({ slideList, onSlideClick }) {
	useEffect(() => {
		const slides = document.querySelectorAll('.item');

		slides.forEach((slide) => {
			slide.addEventListener('mouseover', () => {
				slides.forEach((p) => {
					if (p !== slide) {
						p.classList.add('dimmed');
					} else {
						p.classList.add('highlighted');
					}
				});
			});

			slide.addEventListener('mouseout', () => {
				slides.forEach((p) => {
					p.classList.remove('dimmed', 'highlighted');
				});
			});
		});
	}, []);

	return (
		<div id="WaveCard">
			<div className="items">
				{slideList?.map((slide, index) => (
					<div
						key={index}
						className={`item ${slide.grayOut && 'grayOut'}`}
						tabIndex="0"
						style={{ backgroundImage: `url(${slide.url})` }}
						onClick={() => onSlideClick(slide.navigateTo)}
					>
						<div>{slide.caption}</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default WaveCard;
