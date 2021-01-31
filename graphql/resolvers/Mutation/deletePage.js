import Page from '../../../models/page';
import { UserInputError } from 'apollo-server-micro';

export default async (root, {id}, {adminRequired}) => {
	adminRequired();
	const page = await Page.findById(id);

	if(! page){
		throw new UserInputError("There's no page with that id");
	}

	await page.remove();

	return true;
};