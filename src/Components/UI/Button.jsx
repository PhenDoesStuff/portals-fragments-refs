import React from 'react';
import './Button.css';

function Button({ type, children, onClick }) {
	return (
		<button
			className='button'
			type={type || 'button'}
			onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
