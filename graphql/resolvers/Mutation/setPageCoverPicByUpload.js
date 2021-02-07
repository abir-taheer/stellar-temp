import Page from '../../../models/page';
import { randomBytes } from 'crypto';
import Picture from '../../../models/picture';

export default async (root, { pageId, picture }, { adminRequired }) => {
	adminRequired();

	const page = await Page.findByIdOrThrowError(pageId);

	const randomName = randomBytes(4).toString('hex');
	const publicId = `pages/${page.url}/${randomName}`;

	const pic = await Picture.createFromUpload({ ...picture, publicId });

	page.coverPicId = pic.id;
	await page.save();
};
