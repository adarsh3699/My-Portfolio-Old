import React from 'react';

import '../styles/button.css';

function Button({ color, title, sx }) {
	return (
		<button className={'button ' + color} style={sx}>
			{title}
		</button>
	);
}

export default Button;
