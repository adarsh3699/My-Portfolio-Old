import React from 'react';

import './container.css';

function Container({ children, containerTitle, sx, aosOffset, aosStyle, aosDelay, aosDuration }) {
	return (
		<div
			className="container"
			style={sx}
			data-aos-offset={aosOffset}
			data-aos={aosStyle}
			data-aos-delay={aosDelay}
			data-aos-duration={aosDuration}
		>
			<div className="containerTitle">{containerTitle}</div>
			{children}
		</div>
	);
}

export default Container;
