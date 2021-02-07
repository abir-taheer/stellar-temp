import layout from '../../../styles/Layout.module.css';
import Head from 'next/head';
import BackButton from '../../../comps/ui/BackButton';
import SiteAdminRequired from '../../../comps/auth/SiteAdminRequired';
import AdminTabBar from '../../../comps/admin/AdminTabBar';
import PagesPreview from '../../../comps/admin/PagesPreview';

export default function AllPagesManager() {
	return (
		<SiteAdminRequired>
			<div className={layout.container}>
				<Head>
					<title>Pages Manager | Stellar Cellar Doors</title>
				</Head>
				<main className={layout.main}>
					<BackButton />
					<h1>Pages | Admin Panel</h1>
					<AdminTabBar />
					<PagesPreview />
				</main>
			</div>
		</SiteAdminRequired>
	);
}
