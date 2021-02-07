import layout from '../../styles/Layout.module.css';
import Head from 'next/head';
import BackButton from '../../comps/ui/BackButton';
import SiteAdminRequired from '../../comps/auth/SiteAdminRequired';
import AdminTabBar from '../../comps/admin/AdminTabBar';

export const getServerSideProps = async (context) => {
	return {
		props: {},
		redirect: {
			permanent: false,
			destination: '/admin/pages',
		},
	};
};

export default function Admin() {
	return (
		<SiteAdminRequired>
			<div className={layout.container}>
				<Head>
					<title>Admin | Stellar Cellar Doors</title>
				</Head>
				<main className={layout.main}>
					<BackButton />
					<h1>Admin Panel</h1>
					<AdminTabBar />
				</main>
			</div>
		</SiteAdminRequired>
	);
}
