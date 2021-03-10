import Page from '../../../models/page';

export default async (root, { pageId, body }, { adminRequired }) => {
	adminRequired();

	const page = await Page.findByIdOrThrowError(pageId);

	page.body = body;
	await page.save();

	return page;
};
