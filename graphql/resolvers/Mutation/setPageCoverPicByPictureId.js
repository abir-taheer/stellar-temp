import Page from '../../../models/page';
import Picture from '../../../models/picture';

export default async (root, { pageId, pictureId }, { adminRequired }) => {
	adminRequired();

	const page = await Page.findByIdOrThrowError(pageId);

	const picture = await Picture.findByIdOrThrowError(pictureId);

	page.coverPicId = picture.id;
	await page.save();

	return page;
};
