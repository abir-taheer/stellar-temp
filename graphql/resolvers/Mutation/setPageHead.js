import Page from '../../../models/page';

export default async (root, { pageId, head }, { adminRequired }) => {
	adminRequired();
	const page = await Page.findByIdOrThrowError(pageId);

	page.head = head;
	await page.save();
	return page;
};
