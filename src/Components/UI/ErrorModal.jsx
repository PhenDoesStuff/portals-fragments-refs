import React from 'react';
import Button from './Button';
import Card from './Card';
import './ErrorModal.css';

function ErrorModal({ title, message, onConfirm }) {
	return (
		<>
			<div className='backdrop' onClick={onConfirm}></div>
			<Card className='modal'>
				<header className='header'>
					<h2>{title}</h2>
				</header>
				<div className='content'>
					<p>{message}</p>
				</div>
				<footer className='footer'>
					<Button onClick={onConfirm}>Okay</Button>
				</footer>
			</Card>
		</>
	);
}

export default ErrorModal;
