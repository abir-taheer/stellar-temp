import Picture from '../../../models/picture';
import Page from '../../../models/page';
import { randomBytes } from 'crypto';
import uploadPicStream from '../../../utils/cloudinary/uploadPicStream';

export default async (root, { picture, pageId }, { adminRequired }) => {
	adminRequired();

	const page = await Page.findByIdOrThrowError(pageId);
	const randomName = randomBytes(4).toString('hex');
	const publicId = `pages/${page.url}/${randomName}`;
	const pic = await Picture.createFromUpload({ ...picture, publicId });

	page.picIds.push(pic.id);
	await page.save();

	return pic;
};
