import Page from '../../../models/page';

export default async (root, { id }, { adminRequired }) => {
	adminRequired();
	const page = await Page.findByIdOrThrowError(id);

	await page.remove();

	return true;
};
