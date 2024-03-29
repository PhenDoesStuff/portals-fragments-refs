import React, { useRef, useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import './AddUser.css';

function AddUser({ onAddUser }) {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [error, setError] = useState();

	const addUserHandler = e => {
		e.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredUserAge = nameInputRef.current.value;

		if (
			enteredName.trim().length === 0 ||
			enteredUserAge.trim().length === 0
		) {
			setError({
				title: 'Invalid input',
				message:
					'Please enter a valid name and age (non-empty values).',
			});
			return;
		}

		if (+enteredUserAge < 1) {
			setError({
				title: 'Invalid age',
				message: 'Age must be greater than 0.',
			});
			return;
		}

		onAddUser(enteredName, enteredUserAge);

		nameInputRef.current.value = '';
		enteredUserAge.cuurent.value = '';
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}

			<Card className='user'>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input id='username' ref={nameInputRef} />
					<label htmlFor='age'>Age (Years)</label>
					<input type='number' id='age' ref={ageInputRef} />
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</>
	);
}

export default AddUser;
