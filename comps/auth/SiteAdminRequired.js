import { useContext } from 'react';
import UserContext from '../context/UserContext';
import AuthenticationRequired from './AuthenticationRequired';
import layout from '../../styles/Layout.module.css';
import Head from 'next/head';
import SignOutButton from './SignOutButton';

const SiteAdminRequired = ({ children }) => {
	const user = useContext(UserContext);

	if (!user.signedIn) {
		return <AuthenticationRequired />;
	}

	if (! user.adminPrivileges) {
		return (
			<div className={layout.container}>
				<Head>
					<title>Site Admin Required | Stellar Cellar Doors</title>
				</Head>
				<main className={layout.main} style={{textAlign: "center"}}>
					<h1>Site Admin Required</h1>
					<p>Only site admin are allowed beyond this point.</p>
					<SignOutButton />
				</main>
			</div>
		);
	}

	return children;
};

export default SiteAdminRequired;
