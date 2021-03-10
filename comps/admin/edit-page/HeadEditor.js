import React, { useState } from 'react';
import { TextField, Tooltip } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { gql, useMutation } from '@apollo/client';

const HEAD_MUTATION = gql`
	mutation($pageId: ObjectId!, $head: String!) {
		setPageHead(pageId: $pageId, head: $head) {
			id
			head
		}
	}
`;

const HeadEditor = ({ head, pageId }) => {
	const [value, setValue] = useState(head);
	const [isEditing, setIsEditing] = useState(false);
	const [tooltipOpen, setTooltipOpen] = useState(false);

	const [setHead, { data, loading }] = useMutation(HEAD_MUTATION, {
		variables: {
			head: value,
			pageId,
		},
	});

	const save = async () => {
		try {
			await setHead();
			setIsEditing(false);
		} catch (er) {
			alert(er.message);
		}
	};

	return (
		<div
			style={{
				margin: '2rem 0',
			}}
		>
			<Tooltip
				title={'Click on this to edit the page head'}
				placement={'right-middle'}
				onOpen={() => !isEditing && setTooltipOpen(true)}
				onClose={() => setTooltipOpen(false)}
				open={tooltipOpen && !isEditing}
				onClick={() => {
					setIsEditing(true);
					setTooltipOpen(false);
				}}
			>
				<TextField
					disabled={!isEditing || loading}
					label={'Page Head'}
					helperText={
						'This is code that will show up in the <head> tag of the site.'
					}
					value={value}
					onChange={(ev) => setValue(ev.target.value)}
					multiline
					rows={value.split('\n').length + 1}
					variant={'outlined'}
					style={{
						width: 700,
						maxWidth: '90%',
					}}
					placeholder={`e.g. <meta property="og:description" content="Social preview link description" />`}
				/>
			</Tooltip>

			{isEditing && (
				<div style={{ marginTop: '1rem' }}>
					<Button
						style={{ marginRight: '1rem' }}
						color={'secondary'}
						variant={'contained'}
						onClick={save}
						disabled={
							loading ||
							!value ||
							(data
								? value === data?.setPageHead?.head
								: value === head)
						}
					>
						Save
					</Button>

					<Button
						color={'primary'}
						onClick={() => {
							setIsEditing(false);
							setValue(data?.setPageHead?.head || head);
						}}
						disabled={loading}
					>
						Cancel
					</Button>
				</div>
			)}
		</div>
	);
};

export default HeadEditor;
