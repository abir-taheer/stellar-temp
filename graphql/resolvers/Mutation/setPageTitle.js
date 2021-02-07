import Page from '../../../models/page';
import { UserInputError } from 'apollo-server-micro';

export default async (root, { pageId, title }, { adminRequired }) => {
	adminRequired();

	if (!title) {
		throw new UserInputError('The title field cannot be left empty');
	}

	const page = await Page.findByIdOrThrowError(pageId);

	page.title = title;
	await page.save();

	return page;
};
