import React from 'react';
import Button from './Button';
import Card from './Card';
import './ErrorModal.css';

function ErrorModal({ title, message }) {
	return (
		<Card className='modal'>
			<header className='header'>
				<h2>{title}</h2>
			</header>
			<div className='content'>
				<p>{message}</p>
			</div>
			<footer className='footer'>
				<Button></Button>
			</footer>
		</Card>
	);
}

export default ErrorModal;
