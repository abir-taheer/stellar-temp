import Picture from '../../../models/picture';

export default (page) =>
	page.coverPicId ? Picture.idLoader.load(page.coverPicId) : null;
