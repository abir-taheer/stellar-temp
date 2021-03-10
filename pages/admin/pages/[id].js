import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import Loading from '../../../comps/ui/Loading';
import layout from '../../../styles/Layout.module.css';
import Head from 'next/head';
import BackButton from '../../../comps/ui/BackButton';
import AdminTabBar from '../../../comps/admin/AdminTabBar';
import SiteAdminRequired from '../../../comps/auth/SiteAdminRequired';
import { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import AdminPageNotFound from '../../../comps/admin/AdminPageNotFound';
import PictureUploadDialog, {
	promptPicture,
} from '../../../comps/utils/PictureUploadDialog';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import TitleEditor from '../../../comps/admin/edit-page/TitleEditor';
import UrlEditor from '../../../comps/admin/edit-page/UrlEditor';
import HeadEditor from '../../../comps/admin/edit-page/HeadEditor';
import BodyEditor from '../../../comps/admin/edit-page/BodyEditor';

const QUERY = gql`
	query($id: ObjectId!) {
		page: pageById(id: $id) {
			id
			url
			title
			head
			body
			pictures {
				title
				alt
				resource {
					url(preset: thumbnailMedium)
				}
			}
			coverPic {
				id
				title
				alt
				resource {
					id
				}
			}
		}
	}
`;

export default function Page() {
	const router = useRouter();
	const { id } = router.query;
	const { data, loading } = useQuery(QUERY, { variables: { id } });
	const [title, setTitle] = useState('');
	const [head, setHead] = useState('');
	const [url, setUrl] = useState('');
	const [body, setBody] = useState('');

	useEffect(() => {
		if (data?.page) {
			const page = data.page;
			setTitle(page.title);
			setHead(page.head);
			setUrl(page.url);
			setBody(page.body);
		}
	}, [data]);

	if (loading) {
		return <Loading />;
	}

	if (!data?.page) {
		return (
			<SiteAdminRequired>
				<AdminPageNotFound />
			</SiteAdminRequired>
		);
	}

	const askForPicture = async () => {
		console.log(await promptPicture());
	};

	return (
		<SiteAdminRequired>
			<div className={layout.container}>
				<Head>
					<title>{title || 'Edit Page'} | Stellar Cellar Doors</title>
				</Head>
				<main className={layout.main}>
					<PictureUploadDialog />
					<BackButton
						text={'Back To Pages Manager'}
						link={'/admin/pages'}
					/>
					<h1>Create Page | Admin Panel</h1>
					<AdminTabBar />
					<Card
						style={{
							width: 1400,
							maxWidth: '95vw',
							padding: '2rem 1rem',
							overflow: 'visible',
						}}
					>
						<TitleEditor pageId={id} title={data.page.title} />
						<UrlEditor pageId={id} url={data.page.url} />
						<HeadEditor pageId={id} head={data.page.head} />
						<BodyEditor body={data.page.body} pageId={id} />
					</Card>
				</main>
			</div>
		</SiteAdminRequired>
	);
}
