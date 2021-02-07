import Page from '../../../models/page';
import { UserInputError } from 'apollo-server-micro';
import { randomBytes } from 'crypto';
import Picture from '../../../models/picture';

export default async (
	root,
	{ title, shortTitle, url, head, body, includes, coverPic },
	{ adminRequired }
) => {
	adminRequired();

	if (!title) {
		throw new UserInputError(
			'You need to provide a title to create a page'
		);
	}

	if (!url) {
		throw new UserInputError('You need to provide a url to create a page');
	}

	const existingPage = await Page.findByUrl(url);

	if (existingPage) {
		throw new UserInputError('There is already a page at that url');
	}

	const order = await Page.countDocuments();

	let coverPicId;

	if (coverPic) {
		const randomName = randomBytes(4).toString('hex');
		const publicId = `pages/${url}/${randomName}`;

		const picture = await Picture.createFromUpload({
			...coverPic,
			publicId,
		});

		coverPicId = picture.id;
	}

	return await Page.create({
		title,
		shortTitle,
		body,
		head,
		url,
		includes,
		order,
		coverPicId,
		pictureIds: [],
	});
};
