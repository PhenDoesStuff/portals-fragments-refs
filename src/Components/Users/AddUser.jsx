import React from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import './AddUser.css';

function AddUser(props) {
	const addUserHandler = e => {
		e.preventDefault();
	};

	return (
		<Card className='user'>
			<form onSubmit={addUserHandler}>
				<label htmlFor='username'>Username</label>
				<input id='username' />
				<label htmlFor='age'>Age (Years)</label>
				<input type='number' id='age' />
			</form>
			<Button type='submit'>Add User</Button>
		</Card>
	);
}

export default AddUser;
