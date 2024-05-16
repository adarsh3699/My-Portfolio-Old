import React from 'react';

import '../styles/button.css';

function Button({ color, title, href, target, sx }) {
	if (href)
		return (
			<a href={href} target={target} className={'button ' + color} style={sx} rel="noreferrer">
				{title}
			</a>
		);
	else
		return (
			<button className={'button ' + color} style={sx}>
				{title}
			</button>
		);
}

export default Button;
