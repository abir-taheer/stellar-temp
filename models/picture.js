import mongoose from './mongoose';
import findOneLoaderFactory from '../utils/dataloaders/findOneLoaderFactory';
import { randomBytes } from 'crypto';
import uploadPicStream from '../utils/cloudinary/uploadPicStream';
import { UserInputError } from 'apollo-server-micro';
import { createWriteStream } from 'fs';

const Schema = mongoose.Schema;

const PictureSchema = new Schema({
	title: String,
	alt: String,
	resourceId: String,
});

PictureSchema.statics.idLoader = findOneLoaderFactory('Picture');
PictureSchema.statics.findByIdOrThrowError = async (id) => {
	const picture = await Picture.findById(id);
	if (!picture) {
		throw new UserInputError("There's no picture with that id");
	}

	return picture;
};
PictureSchema.statics.createFromUpload = async function ({
	file,
	title,
	alt,
	publicId,
}) {
	if (!publicId) {
		publicId = 'uploads/' + randomBytes(4).toString('hex');
	}

	file = await file;
	const resource = await uploadPicStream(file, publicId);

	return await Picture.create({
		title,
		alt,
		resourceId: resource.public_id,
	});
};

const Picture =
	mongoose.models.Picture || mongoose.model('Picture', PictureSchema);

export default Picture;
