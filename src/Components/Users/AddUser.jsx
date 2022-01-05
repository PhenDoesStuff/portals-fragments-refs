import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import './AddUser.css';

function AddUser({ onAddUser }) {
	const [enteredUsername, setEnteredUsername] =
		useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const addUserHandler = e => {
		e.preventDefault();

		if (
			enteredUsername.trim().length === 0 ||
			enteredAge.trim().length === 0
		) {
			setError({
				title: 'Invalid input',
				message:
					'Please enter a valid name and age (non-empty values).',
			});
			return;
		}

		if (+enteredAge < 1) {
			setError({
				title: 'Invalid age',
				message: 'Age must be greater than 0.',
			});
			return;
		}

		onAddUser(enteredUsername, enteredAge);

		setEnteredUsername('');
		setEnteredAge('');
	};

	const usernameChangeHandler = e => {
		setEnteredUsername(e.target.value);
	};

	const ageChangeHandler = e => {
		setEnteredAge(e.target.value);
	};

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
				/>
			)}

			<Card className='user'>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						value={enteredUsername}
						onChange={usernameChangeHandler}
					/>
					<label htmlFor='age'>Age (Years)</label>
					<input
						type='number'
						id='age'
						value={enteredAge}
						onChange={ageChangeHandler}
					/>
				</form>
				<Button type='submit'>Add User</Button>
			</Card>
		</>
	);
}

export default AddUser;
