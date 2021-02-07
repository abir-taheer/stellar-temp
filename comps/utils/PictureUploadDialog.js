import EventEmitter from 'events';
import { createRef, useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { CameraAlt, Close } from '@material-ui/icons';

const pictureDialogEmitter = new EventEmitter();

export function promptPicture() {
	return new Promise((resolve, reject) => {
		pictureDialogEmitter.emit('prompt', { resolve, reject });
	});
}

const PictureUploadDialog = () => {
	const [open, setOpen] = useState(false);
	const [promise, setPromise] = useState(null);
	const [file, setFile] = useState(null);
	const [title, setTitle] = useState('');
	const [alt, setAlt] = useState('');
	const uploadRef = createRef();

	const resetValues = () => {
		setFile(null);
		setPromise(null);
		setTitle('');
		setAlt('');
		setOpen(false);
	};

	const handleClickOut = () => {
		promise.resolve(null);
		setOpen(false);
	};

	const handleCancel = () => {
		promise.resolve(null);
		resetValues();
	};

	const handleConfirm = () => {
		promise.resolve({ file, title, alt });
		resetValues();
	};

	useEffect(() => {
		const handler = (promise) => {
			setPromise(promise);
			setOpen(true);
		};

		pictureDialogEmitter.on('prompt', handler);

		return () => pictureDialogEmitter.removeListener('prompt', handler);
	});

	return (
		<Dialog open={open} onClose={handleClickOut}>
			<DialogTitle>Upload A Picture</DialogTitle>
			<DialogContent>
				{file && (
					<div
						style={{
							width: '300px',
							maxHeight: '400px',
							height: '200px',
							maxWidth: '100%',
						}}
					>
						<img
							src={window.URL.createObjectURL(file)}
							alt={alt}
							style={{
								maxWidth: '100%',
								maxHeight: '100%',
								objectFit: 'contain',
							}}
						/>
						<Button
							style={{ color: 'secondary'}}
							variant={'outlined'}
							onClick={() => setFile(null)}
						>
							<Close /> Clear Uploaded File
						</Button>

					</div>
				)}

				<input
					type={'file'}
					onChange={(ev) => setFile(ev.target.files[0])}
					accept={'image/*'}
					style={{ display: 'none' }}
					ref={uploadRef}
				/>
				{!file && (
					<Button
						variant={'contained'}
						color={'secondary'}
						onClick={() =>
							uploadRef.current && uploadRef.current.click()
						}
						disabled={Boolean(file)}
					>
						<CameraAlt />
						&nbsp;&nbsp;Upload File From Your Device
					</Button>
				)}
				<br />
				<br />

				<TextField
					value={title}
					onChange={(ev) => setTitle(ev.target.value)}
					label={'Title'}
					variant={'outlined'}
					placeholder={'e.g. Rustoleum Blue Gordon Door'}
					helperText={"What's in the image?"}
					fullWidth
				/>
				<br />
				<br />
				<TextField
					value={alt}
					onChange={(ev) => setAlt(ev.target.value)}
					label={'Alt Text'}
					variant={'outlined'}
					placeholder={'e.g. red, door, open, gordon, bilco, 46in'}
					helperText={
						'Describe the features of the image. This will help with SEO and make the images on your site show up on Google search'
					}
					fullWidth
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleCancel} color="primary">
					Cancel
				</Button>
				<Button
					onClick={handleConfirm}
					color="primary"
					autoFocus
					disabled={!Boolean(file)}
				>
					Confirm
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default PictureUploadDialog;
