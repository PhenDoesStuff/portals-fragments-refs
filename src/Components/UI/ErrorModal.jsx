import React from 'react';
import Button from './Button';
import Card from './Card';
import './ErrorModal.css';

function ErrorModal({ title, message, onConfirm }) {
	function Backdrop({ onConfirm }) {
		<div className='backdrop' onClick={onConfirm}></div>;
	}

	function ModalOverlay({ title, message }) {
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
		</Card>;
	}

	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={onConfirm} />,
				document.getElementById('backdrop-root')
			)}
		</>
	);
}

export default ErrorModal;
