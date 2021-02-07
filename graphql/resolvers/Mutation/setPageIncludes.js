import Page from '../../../models/page';

export default async (root, { includes, pageId }, { adminRequired }) => {
	adminRequired();

	const page = await Page.findByIdOrThrowError(pageId);
	page.includes = includes;
	await page.save();

	return page;
};
