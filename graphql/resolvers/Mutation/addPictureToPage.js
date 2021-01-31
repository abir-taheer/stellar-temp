import Picture from '../../../models/picture';
import Page from "../../../models/page";
import {randomBytes} from "crypto";
import { UserInputError } from 'apollo-server-micro';
import uploadPicStream from '../../../utils/cloudinary/uploadPicStream';

export default async (root, {picture, title, alt, pageId}, {adminRequired}) => {
	adminRequired();

	const page = await Page.findById(pageId);

	if(! page){
		throw new UserInputError("There is no page with that id");
	}

	const picStream = await picture;
	const randomName = randomBytes(4).toString("hex");
	const filePublicId = `pages/${page.url}/${randomName}`;

	await uploadPicStream(picStream, filePublicId);

	const pic = await Picture.create({
		title,
		alt,
		resourceId: filePublicId,
		order: page.picIds.length
	});

	page.picIds.push(pic.id);
	await page.save();

	return pic;
};