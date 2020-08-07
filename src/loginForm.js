import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login } from './redux-config/actions/auth';

const Container = styled.div`
	width: 100vw;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Submit = styled(Button)`
	width: 100%;
	background: #4890ff;
	color: white;
	margin-top: 20px;
`;

const Login = ({ loginUser }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmail = (event) => {
		event.persist();

		const { value } = event.target;
		setEmail(value);
	};

	const handlePass = (event) => {
		event.persist();

		const { value } = event.target;
		setPassword(value);
	};

	const loginForm = () => {
		if (email === '' || password === '') {
			alert('Missing fields...');
			return;
		}
		loginUser();
	};
	return (
		<Container>
			<Form layout='vertical'>
				<Form.Item
					value={email}
					label='Email'
					onChange={handleEmail}
					help='Enter a valid email'
					hasFeedback
					validateStatus={email === '' ? 'error' : 'success'}
				>
					<Input allowClear placeholder='type email' />
				</Form.Item>
				<Form.Item
					value={password}
					label='Password'
					help='Enter a valid password'
					onChange={handlePass}
					hasFeedback
					validateStatus={password === '' ? 'error' : 'success'}
				>
					<Input.Password allowClear placeholder='type password' />
				</Form.Item>
				<Submit onClick={loginForm}>Login</Submit>
			</Form>
		</Container>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		loginUser: () => dispatch(login()),
	};
};

export default connect(null, mapDispatchToProps)(Login);
