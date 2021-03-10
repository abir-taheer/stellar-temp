import React, { useState } from 'react';
import PageBodyEditor from '../create-page/PageBodyEditor';
import { gql, useMutation } from '@apollo/client';
import Button from '@material-ui/core/Button';

const BODY_MUTATION = gql`
	mutation($body: String!, $pageId: ObjectId!) {
		setPageBody(pageId: $pageId, body: $body) {
			id
			body
		}
	}
`;

const BodyEditor = ({ body, pageId }) => {
	const [value, setValue] = useState(body);
	const [setBody, { data, loading }] = useMutation(BODY_MUTATION, {
		variables: {
			body: value,
			pageId,
		},
	});

	const save = async () => {
		try {
			await setBody();
		} catch (e) {
			alert(e.message);
		}
	};

	return (
		<div>
			<PageBodyEditor value={value} setValue={setValue} disabled={loading} />

			{value !== data?.setBody?.body && value !== body && (
				<>
					<p style={{ color: 'red' }}>
						You've made unsaved changes to the body.
					</p>
					<Button
						onClick={save}
						disabled={loading}
						color={'secondary'}
						variant={'contained'}
						style={{ marginRight: '1rem' }}
					>
						Save
					</Button>
					<Button color={'primary'} disabled={loading}>
						Cancel
					</Button>
				</>
			)}
		</div>
	);
};

export default BodyEditor;
