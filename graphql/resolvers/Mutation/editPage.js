import Page from '../../../models/page';
import { UserInputError } from 'apollo-server-micro';

export default async (
	root,
	{ id, title, url, head, body, includes },
	{ adminRequired }
) => {
	adminRequired();

	const page = await Page.findByIdOrThrowError(id);

	if (!title) {
		throw new UserInputError('The title field cannot be left empty');
	}

	if (!url) {
		throw new UserInputError('The url cannot be left empty');
	}

	// If the url has changed make sure it doesn't belong to another page
	if (url !== page.url) {
		const pageWithNewUrl = await Page.findByUrl(url);

		if (pageWithNewUrl) {
			throw new UserInputError(
				'There is already another page at that url'
			);
		}
	}

	page.title = title;
	page.url = url;
	page.head = head;
	page.body = body;
	page.includes = includes;

	await page.save();

	return page;
};
