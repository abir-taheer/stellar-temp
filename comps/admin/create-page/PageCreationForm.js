import React, { Component } from 'react';
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
import PageCreateSubmitButton from './PageCreateSubmitButton';

class PageCreationForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			shortTitle: '',
			url: '',
			body: EditorState.createEmpty(),
			head: '',
			coverPic: null,
			includes: {
				marlonBrando: false,
				howToMeasure: false,
			},
		};

		this.onChangeGenerator = this.onChangeGenerator.bind(this);
		this.getSafeUrl = this.getSafeUrl.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleUrlChange = this.handleUrlChange.bind(this);
		this.promptCoverPic = this.promptCoverPic.bind(this);
	}

	onChangeGenerator(name) {
		return (ev) => this.setState({ [name]: ev.target.value });
	}

	getSafeUrl(value) {
		const urlRemovalRegex = /[^A-Za-z0-9-_]/g;
		return value.replace(/ /g, '-').replace(urlRemovalRegex, '');
	}

	handleUrlChange(ev) {
		this.setState({ url: this.getSafeUrl(ev.target.value) });
	}

	handleTitleChange(ev) {
		const autoUrl = this.getSafeUrl(this.state.title.toLowerCase());
		const title = ev.target.value;
		let url = this.state.url;
		if (autoUrl === url) {
			url = this.getSafeUrl(title.toLowerCase());
		}

		this.setState({ title, url });
	}

	async promptCoverPic() {
		const coverPic = await promptPicture();

		if (coverPic) {
			this.setState({ coverPic });
		}
	}

	render() {
		const SubmitButton = this.props.SubmitButton;

		return (
			<div>
				<FormGroup row={true}>
					<TextField
						value={this.state.title}
						onChange={this.handleTitleChange}
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
						value={this.state.url}
						onChange={this.handleUrlChange}
						variant={'outlined'}
						color={'primary'}
						label={'Page URL'}
						helperText={
							<>
								https://stellarcellardoors.com/gallery/
								{this.state.url}
								<br />
								Only letters, numbers, dashes, and underscores
								are allowed
							</>
						}
						placeholder={''}
						className={layout.formInput}
					/>
					{this.state.title.length > 30 && (
						<TextField
							value={this.state.shortTitle}
							onChange={(ev) =>
								this.setState({
									shortTitle: ev.target.value.substr(0, 25),
								})
							}
							variant={'outlined'}
							color={'primary'}
							label={'Short Title'}
							helperText={
								<>
									The primary title is longer than 25
									characters.
									<br />
									Optionally, provide a shorter title here
								</>
							}
							className={layout.formInput}
							disabled={loading}
						/>
					)}
					<TextField
						value={this.state.head}
						onChange={this.onChangeGenerator('head')}
						label={'Page Head (code)'}
						multiline
						variant={'outlined'}
						rows={3}
						helperText={
							<>
								If you have any html meta tags that you'd like
								to place in the head section of the page this is
								the place to put them. <br />
								(This is used to help boost SEO). If you're
								unsure you can leave it empty for now and edit
								it later
							</>
						}
						className={layout.formInput}
					/>
					<PageBodyEditor
						value={this.state.body}
						setValue={(editorState) => {
							this.setState({ editorState });
						}}
						className={layout.formInput}
					/>
					<FormControlLabel
						className={layout.formInput}
						control={
							<Switch
								value={this.state.includes.marlonBrando}
								onChange={() =>
									this.setState((current) => ({
										includes: {
											...current.includes,
											marlonBrando: !current.includes
												.marlonBrando,
										},
									}))
								}
							/>
						}
						label={'Show Marlon Brando Caricature'}
					/>
					<FormControlLabel
						className={layout.formInput}
						control={
							<Switch
								value={this.state.howToMeasure}
								onChange={() =>
									this.setState((current) => ({
										includes: {
											...current.includes,
											howToMeasure: !current.includes
												.howToMeasure,
										},
									}))
								}
							/>
						}
						label={'Show How To Measure Door'}
					/>
				</FormGroup>
				<div className={layout.formInput}>
					<p>Cover Picture:</p>
					<PictureUploadDialog />
					{this.state.coverPic && (
						<>
							<img
								src={this.state.coverPic?.resource?.url || window.URL.createObjectURL(
									this.state.coverPic.file
								)}
								alt={this.state.coverPic.alt}
								style={{
									width: 200,
									borderRadius: 5,
									marginBottom: 5,
								}}
							/>
							<br />
							<Button
								variant={'outlined'}
								onClick={() =>
									this.setState({ coverPic: null })
								}
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
						onClick={this.promptCoverPic}
					>
						Upload {this.state.coverPic && 'New'} Picture
					</Button>
				</div>
				<hr style={{ margin: '1rem' }} />
				<SubmitButton {...this.state}/>
			</div>
		);
	}
}

PageCreationForm.defaultProps = {
	SubmitButton: PageCreateSubmitButton
}

export default PageCreationForm;
