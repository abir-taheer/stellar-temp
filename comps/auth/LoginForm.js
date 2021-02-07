import Card from '@material-ui/core/Card';
import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { gql, useMutation } from '@apollo/client';
import { reloadClientJWT } from '../apollo/useGraphQLClient';

const MUTATION = gql`
	mutation($email: String!, $password: String!) {
		login(email: $email, password: $password)
	}
`;

const LoginForm = () => {
	const user = useContext(UserContext);
	const [login, { loading, error }] = useMutation(MUTATION);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onChangeHelper = (setter) => {
		return (ev) => setter(ev.target.value);
	};

	const attemptLogin = async () => {
		try {
			const { data } = await login({
				variables: { email, password },
			});

			localStorage.setItem('auth-jwt', data.login);
			reloadClientJWT(data.login);
			user.refetch();
		} catch (er) {
			// No need to do anything but include the catch so react doesn't throw an error
		}
	};

	return (
		<Card style={{ textAlign: 'center', padding: '1rem' }}>
			<h2>Login</h2>
			<TextField
				variant={'outlined'}
				color={'primary'}
				onChange={onChangeHelper(setEmail)}
				value={email}
				type={'email'}
				label={'Email Address'}
				disabled={loading}
			/>
			<br />
			<br />
			<TextField
				variant={'outlined'}
				color={'primary'}
				onChange={onChangeHelper(setPassword)}
				value={password}
				type={'password'}
				label={'Password'}
				disabled={loading}
				onKeyDown={(ev) => ev.key === 'enter' && attemptLogin()}
			/>
			<br />
			<p style={{ color: 'red' }}>{error?.message}</p>
			<Button
				color={'primary'}
				fullWidth
				disabled={loading}
				onClick={attemptLogin}
			>
				Sign In
			</Button>
		</Card>
	);
};

export default LoginForm;
