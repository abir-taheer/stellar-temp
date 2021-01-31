import Page from '../../../models/page';
import { UserInputError } from 'apollo-server-micro';

export default async (root, {pictureId, pageId}, {adminRequired}) => {
	adminRequired();

	const page = await Page.findById(pageId);
	if(! page){
		throw new UserInputError("There's no page with that id");
	}

	const pictureIndex = page.pictureIds.indexOf(pictureId);

	if( pictureIndex === -1 ){
		throw new UserInputError("That picture is not a part of this page");
	}

	page.pictureIds.splice(pictureIndex, 1);

	await page.save();

	return page;
};