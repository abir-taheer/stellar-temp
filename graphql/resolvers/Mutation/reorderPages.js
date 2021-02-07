import Page from '../../../models/page';

export default async (root, { order }, { adminRequired }) => {
	adminRequired();
	const idOrderMap = {};

	order.forEach((row) => {
		idOrderMap[row.pageId] = row.order;
	});

	const allIds = Object.keys(idOrderMap);
	const pages = await Page.find({ _id: { $in: allIds } });

	for (let i = 0; i < pages.length; i++) {
		const page = pages[i];

		page.order = idOrderMap[page._id];
		await page.save();
	}

	return pages;
};

