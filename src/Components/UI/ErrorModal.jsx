import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';
import Card from './Card';
import './ErrorModal.css';

function Backdrop({ onConfirm }) {
	return (
		<div className='backdrop' onClick={onConfirm}></div>
	);
}

function ModalOverlay({ title, message, onConfirm }) {
	return (
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
	);
}

function ErrorModal({ title, message, onConfirm }) {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={onConfirm} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={title}
					message={message}
					onConfirm={onConfirm}
				/>,
				document.getElementById('overlay-root')
			)}
		</>
	);
}

export default ErrorModal;
