import React, { Component, useState } from 'react';
import { EditorState } from 'draft-js';
import PageBodyEditor from './PageBodyEditor';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import layout from '../../../styles/Layout.module.css';
import Button from '@material-ui/core/Button';
import PictureUploadDialog, {
	promptPicture,
} from '../../utils/PictureUploadDialog';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

const SUBMIT_MUTATION = gql`
	mutation(
		$title: String!
		$shortTitle: String!
		$url: String!
		$head: String!
		$body: String!
		$includes: IncludesInput!
		$coverPic: PictureInput
	) {
		createPage(
			title: $title
			shortTitle: $shortTitle
			url: $url
			head: $head
			body: $body
			includes: $includes
			coverPic: $coverPic
		) {
			id
		}
	}
`;

function getSafeUrl(text) {
	return text
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^A-Za-z0-9-_]/g, '');
}

export default function PageCreationForm() {
	const router = useRouter();
	const [title, setTitle] = useState('');
	const [url, setUrl] = useState('');
	const [shortTitle, setShortTitle] = useState('');
	const [head, setHead] = useState('');
	const [body, setBody] = useState('');
	const [marlonBrando, setMarlonBrando] = useState(false);
	const [howToMeasure, setHowToMeasure] = useState(true);
	const [coverPic, setCoverPic] = useState(null);

	const [submit, { loading, error }] = useMutation(SUBMIT_MUTATION, {
		variables: {
			title,
			shortTitle,
			url,
			head,
			body,
			includes: {
				howToMeasure,
				marlonBrando,
			},
			coverPic,
		},
	});

	const onSubmit = () => {
		submit()
			.then(async ({ data }) => {
				await router.push('/admin/pages/' + data.createPage.id);
			})
			.catch(() => {});
	};

	return (
		<div>
			<FormGroup row={true}>
				<TextField
					value={title}
					onChange={(ev) => {
						const autoUrl = getSafeUrl(title);

						if (autoUrl === url) {
							setUrl(getSafeUrl(ev.target.value));
						}

						setTitle(ev.target.value);
					}}
					variant={'outlined'}
					color={'primary'}
					label={'Primary Title'}
					helperText={
						'This is what will show up at the top of the page'
					}
					placeholder={''}
					className={layout.formInput}
				/>

				<TextField
					value={url}
					onChange={(ev) => setUrl(getSafeUrl(ev.target.value))}
					variant={'outlined'}
					color={'primary'}
					label={'Page URL'}
					helperText={
						<>
							https://stellarcellardoors.com/gallery/
							{url}
							<br />
							Only letters, numbers, dashes, and underscores are
							allowed
						</>
					}
					placeholder={''}
					className={layout.formInput}
				/>
				{title.length > 30 && (
					<TextField
						value={shortTitle}
						onChange={(ev) => setShortTitle(ev.target.value)}
						variant={'outlined'}
						color={'primary'}
						label={'Short Title'}
						helperText={
							<>
								The primary title is longer than 25 characters.
								<br />
								Optionally, provide a shorter title here
							</>
						}
						className={layout.formInput}
						disabled={loading}
					/>
				)}
				<TextField
					value={head}
					onChange={(ev) => setHead(ev.target.value)}
					label={'Page Head (code)'}
					multiline
					variant={'outlined'}
					rows={3}
					style={{ fontFamily: 'monospace' }}
					helperText={
						<>
							If you have any html meta tags that you'd like to
							place in the head section of the page this is the
							place to put them. <br />
							(This is used to help boost SEO). If you're unsure
							you can leave it empty for now and edit it later
						</>
					}
					className={layout.formInput}
				/>
				<PageBodyEditor
					value={body}
					setValue={setBody}
					className={layout.formInput}
				/>
				<FormControlLabel
					className={layout.formInput}
					control={
						<Switch
							value={marlonBrando}
							onChange={() => setMarlonBrando(!marlonBrando)}
						/>
					}
					label={'Show Marlon Brando Caricature'}
				/>
				<FormControlLabel
					className={layout.formInput}
					control={
						<Switch
							value={howToMeasure}
							onChange={() => setHowToMeasure(!howToMeasure)}
						/>
					}
					label={'Show How To Measure Door'}
				/>
			</FormGroup>
			<div className={layout.formInput}>
				<p>Cover Picture:</p>
				<PictureUploadDialog />
				{coverPic && (
					<>
						<img
							src={
								coverPic?.resource?.url ||
								window.URL.createObjectURL(coverPic.file)
							}
							alt={coverPic.alt}
							style={{
								width: 200,
								borderRadius: 5,
								marginBottom: 5,
							}}
						/>
						<br />
						<Button
							variant={'outlined'}
							onClick={() => setCoverPic(null)}
							style={{ marginBottom: 10 }}
						>
							Clear Selected Picture
						</Button>
						<br />
					</>
				)}
				<Button
					variant={'outlined'}
					color={'primary'}
					onClick={async () => {
						const pic = await promptPicture();
						if (pic) {
							setCoverPic(pic);
						}
					}}
				>
					Upload {coverPic && 'New'} Picture
				</Button>
			</div>
			<hr style={{ margin: '1rem' }} />
			{error && (
				<p style={{ color: 'red', margin: '1rem' }}>{error.message}</p>
			)}
			<Button
				variant={'contained'}
				color={'secondary'}
				className={layout.formInput}
				disabled={loading}
				onClick={onSubmit}
			>
				Create Page
			</Button>
		</div>
	);
}
