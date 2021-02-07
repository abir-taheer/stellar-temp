import Page from '../../../models/page';
import { UserInputError } from 'apollo-server-micro';

export default async (root, { pageId, url }, { adminRequired }) => {
	adminRequired();

	if (!url) {
		throw new UserInputError('The url field cannot be left empty');
	}

	const page = await Page.findByIdOrThrowError(pageId);

	const urlExists = await Page.findByUrl(url);

	if (urlExists) {
		throw new UserInputError("There's already a page at that url");
	}

	page.url = url;
	await page.save();

	return page;
};
