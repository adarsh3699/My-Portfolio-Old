import React from 'react';
import './waveCard.css';

function WaveCard({ slideList, onSlideClick }) {
	return (
		<div className="WaveCard">
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
