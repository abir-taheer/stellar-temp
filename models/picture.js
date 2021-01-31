import mongoose from './mongoose';
import findOneLoaderFactory from '../utils/dataloaders/findOneLoaderFactory';

const Schema = mongoose.Schema;

const PictureSchema = new Schema({
	title: String,
	alt: String,
	resourceId: String,
	order: Number,
});

PictureSchema.statics.idLoader = findOneLoaderFactory('Picture');

const Picture =
	mongoose.models.Picture || mongoose.model('Picture', PictureSchema);

export default Picture;
