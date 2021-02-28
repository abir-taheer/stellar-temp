import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { Editor } from '@tinymce/tinymce-react';

const UPLOAD_MUTATION = gql`
	mutation($file: Upload!) {
		uploadPicture(picture: { alt: "", title: "", file: $file }) {
			id
			resource {
				url(preset: previewLarge)
			}
		}
	}
`;

const PageBodyEditor = ({ value, setValue, className, disabled }) => {
	const [uploadPicture] = useMutation(UPLOAD_MUTATION);

	return (
		<div className={className}>
			<p>Page Body:</p>
			<Editor
				value={value}
				apiKey={process.env.NEXT_APP_TINYMCE_APIKEY}
				init={{
					height: 500,
					menubar: true,
					plugins: [
						'advlist autolink lists link image charmap print preview anchor',
						'searchreplace visualblocks code fullscreen',
						'insertdatetime media table paste code help wordcount',
					],
					toolbar:
						'undo redo | formatselect | bold italic forecolor backcolor | \
						alignleft aligncenter alignright alignjustify | \
						bullist numlist outdent indent | removeformat | image | help',
					automatic_uploads: true,
					images_upload_handler: (file, success, failure) => {
						uploadPicture({
							variables: { file: file.blob() },
						})
							.then(({ data }) =>
								success(data?.uploadPicture?.resource?.url)
							)
							.catch(failure);
					},
					images_upload_url: false,
				}}
				onEditorChange={(newValue) => setValue(newValue)}
			/>
			<p style={{ fontSize: '0.75rem', color: 'grey' }}>
				Add your own content to the page. This can be a simple message
				or any information you'd like. <br />
				You may also leave it empty if you want the page to just contain
				the gallery
			</p>
		</div>
	);
};

export default PageBodyEditor;
