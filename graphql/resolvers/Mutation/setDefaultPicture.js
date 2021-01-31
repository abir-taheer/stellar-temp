import Page from '../../../models/page';
import Picture from '../../../models/picture';
import { UserInputError } from 'apollo-server-micro';

export default async (root, {pageId, pictureId}, {adminRequired}) => {
	adminRequired();

	const page = await Page.findById(pageId);

	if(! page){
		throw new UserInputError("There's no page with that id");
	}

	const picture = await Picture.findById(pictureId);

	if(! picture){
		throw new UserInputError("There's no picture with that id");
	}

	// Now that we've passed the checks we can successfully set the picture
	page.coverPicId = pictureId;
	await page.save();

	return page;
};