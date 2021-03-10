import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { TextField, useTheme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { gql, useMutation } from '@apollo/client';

const TITLE_MUTATION = gql`
	mutation($pageId: ObjectId!, $title: String!) {
		setPageTitle(pageId: $pageId, title: $title) {
			id
			title
		}
	}
`;

const TitleEditor = ({ title, pageId }) => {
	const [value, setValue] = useState(title);
	const [isEditing, setIsEditing] = useState(false);
	const [updateTitle, { data, loading }] = useMutation(TITLE_MUTATION, {
		variables: { title: value, pageId },
	});
	const theme = useTheme();

	const save = async () => {
		try {
			const response = await updateTitle();
			setValue(response.data.setPageTitle.title);
			setIsEditing(false);
		} catch (e) {
			alert(e.message);
		}
	};

	if (isEditing) {
		return (
			<div>
				<TextField
					variant={'outlined'}
					color={'primary'}
					value={value}
					label={'Title'}
					onChange={(ev) => setValue(ev.target.value)}
					style={{ marginBottom: '1rem', marginRight: '1rem' }}
					disabled={loading}
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
							? value === data?.setPageTitle?.title
							: value === title)
					}
				>
					Save
				</Button>
				<Button
					style={{ height: '3.3rem' }}
					onClick={() => {
						// Reset to the original value of the title
						setValue(data?.setPageTitle?.title || title);
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
		<div>
			<Tooltip title="Click to change the title" placement="right-middle">
				<span
					style={{
						fontWeight: 700,
						fontSize: '1.5rem',
						cursor: 'pointer',
						textAlign: 'center',
					}}
					onClick={() => setIsEditing(true)}
				>
					<span style={{ color: theme.palette.primary.main }}>
						Title:
					</span>{' '}
					{value}
				</span>
			</Tooltip>
		</div>
	);
};

export default TitleEditor;
