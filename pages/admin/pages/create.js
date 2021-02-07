import React from 'react';
import layout from '../../../styles/Layout.module.css';
import Head from 'next/head';
import BackButton from '../../../comps/ui/BackButton';
import AdminTabBar from '../../../comps/admin/AdminTabBar';
import SiteAdminRequired from '../../../comps/auth/SiteAdminRequired';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import dynamic from 'next/dynamic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import PageBodyEditor from '../../../comps/admin/create-page/PageBodyEditor';
import PageCreationForm from '../../../comps/admin/create-page/PageCreationForm';

const Editor = dynamic(
	() => import('react-draft-wysiwyg').then((mod) => mod.Editor),
	{ ssr: false }
);

const Create = () => {
	return (
		<SiteAdminRequired>
			<div className={layout.container}>
				<Head>
					<title>Create A New Page | Stellar Cellar Doors</title>
				</Head>
				<main className={layout.main}>
					<BackButton
						text={'Back To Pages Manager'}
						link={'/admin/pages'}
					/>
					<h1>Create Page | Admin Panel</h1>
					<AdminTabBar />
					<Card
						style={{
							padding: '1rem',
							minHeight: 400,
							overflow: 'visible',
						}}
					>
						<PageCreationForm />
					</Card>
				</main>
			</div>
		</SiteAdminRequired>
	);
};

export default Create;
