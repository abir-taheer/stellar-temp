import React from 'react';
import dynamic from 'next/dynamic';
import { gql, useMutation } from '@apollo/client';
import layout from '../../../styles/Layout.module.css';

const Editor = dynamic(
	() => import('react-draft-wysiwyg').then((mod) => mod.Editor),
	{ ssr: false }
);

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
				disabled={disabled}
				wrapperClassName={layout.editorWrapper}
				toolbarClassName={layout.editorToolbar}
				editorClassName={layout.editor}
				placeholder={"Enter your desired body content here"}
				currentState={value}
				onChange={editorState => setValue(editorState)}
				toolbar={{
					image: {
						uploadEnabled: true,
						alignmentEnabled: true,
						uploadCallback: async (file) => {
							const { data } = await uploadPicture({
								variables: { file },
							});

							return {
								data: {
									link: data?.uploadPicture?.resource?.url,
								},
							};
						},
						previewImage: true,
						inputAccept:
							'image/gif,image/jpeg,image/jpg,image/png,image/svg',
						alt: {
							present: true,
							mandatory: false,
						},
						defaultSize: {
							height: 'auto',
							width: '400',
						},
					},
				}}
			/>
			<p style={{fontSize: "0.75rem", color:"grey"}}>
				Add your own content to the page. This can be a simple message
				or any information you'd like. <br/>You may also leave it empty if
				you want the page to just contain the gallery
			</p>
		</div>
	);
};

export default PageBodyEditor;
