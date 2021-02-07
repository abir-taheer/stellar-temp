import { useContext } from 'react';
import UserContext from '../context/UserContext';
import layout from '../../styles/Layout.module.css';
import Head from 'next/head';
import BackButton from '../ui/BackButton';
import LoginForm from './LoginForm';

const AuthenticationRequired = ({children}) => {
	const user = useContext(UserContext);

	if(user.signedIn){
		return children;
	}

	return (
		<div className={layout.container}>
			<Head>
				<title>Authentication Required | Stellar Cellar Doors</title>
			</Head>
			<main className={layout.main}>
				<BackButton />
				<h1>Authentication Required</h1>
				<p>You need to be signed in to view this page</p>

				<LoginForm />
			</main>
		</div>
	);
};

export default AuthenticationRequired;