import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { TextField, Tooltip, useTheme } from '@material-ui/core';
import { getSafeUrl } from '../create-page/PageCreationForm';
import Button from '@material-ui/core/Button';

const URL_MUTATION = gql`
	mutation($url: String!, $pageId: ObjectId!) {
		setPageUrl(pageId: $pageId, url: $url) {
			id
			url
		}
	}
`;

const UrlEditor = ({ url, pageId }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [value, setValue] = useState(url);
	const [updateUrl, { loading, data }] = useMutation(URL_MUTATION, {
		variables: { url: value, pageId },
	});
	const theme = useTheme();

	const save = async () => {
		try {
			const response = await updateUrl();
			setValue(response.data.setPageUrl.url);
			setIsEditing(false);
		} catch (e) {
			alert(e.message);
		}
	};

	if (isEditing) {
		return (
			<div style={{ margin: '2rem 0' }}>
				<TextField
					value={value}
					onChange={(ev) => setValue(getSafeUrl(ev.target.value))}
					label={'URL'}
					variant={'outlined'}
					color={'primary'}
					helperText={
						<>
							https://stellarcellardoors.com/{value}
							<br />
							Only letters, numbers and dashes are allowed.
						</>
					}
					style={{ marginBottom: '1rem', marginRight: '1rem' }}
				/>

				<Button
					style={{ height: '3.3rem', marginRight: '1rem' }}
					variant={'contained'}
					color={'secondary'}
					onClick={save}
					disabled={
						loading ||
						!value ||
						(data
							? value === data?.setPageTitle?.url
							: value === url)
					}
				>
					Save
				</Button>
				<Button
					style={{ height: '3.3rem' }}
					onClick={() => {
						// Reset to the original value of the title
						setValue(data?.setPageTitle?.url || url);
						setIsEditing(false);
					}}
					disabled={loading}
					color={'primary'}
				>
					Cancel
				</Button>
			</div>
		);
	}

	return (
		<div
			style={{ margin: '1rem 0', cursor: 'pointer' }}
			onClick={() => setIsEditing(true)}
		>
			<Tooltip
				title={'Click here to change the url'}
				placement={'right-middle'}
			>
				<span
					style={{
						fontWeight: 500,
						color: theme.palette.primary.main,
						fontSize: '1rem',
					}}
				>
					URL:{' '}
					<span style={{ color: 'grey' }}>
						https://stellarcellardoors.com/{value}
					</span>
				</span>
			</Tooltip>
		</div>
	);
};

export default UrlEditor;
