import React from 'react';

import '../css/button.css';

function Button({ color, title, sx }) {
	return (
		<button className={'button ' + color} style={sx}>
			{title}
		</button>
	);
}

export default Button;
