import layout from '../../styles/Layout.module.css';
import Head from 'next/head';
import AdminTabBar from './AdminTabBar';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { ArrowLeft } from '@material-ui/icons';

const AdminPageNotFound = () => {
	return (
		<div className={layout.container}>
			<Head>
				<title>Create A New Page | Stellar Cellar Doors</title>
			</Head>
			<main className={layout.main}>
				<h1>Edit Page | Admin Portal</h1>
				<AdminTabBar />
				<h2>That page doesn't exist</h2>
				<Link href={'/admin/pages'}>
					<Button variant={'outlined'}>
						<ArrowLeft /> Return To All Pages
					</Button>
				</Link>
			</main>
		</div>
	);
};

export default AdminPageNotFound;