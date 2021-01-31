import mongoose from './mongoose';
import findOneLoaderFactory from '../utils/dataloaders/findOneLoaderFactory';

const ObjectId = mongoose.Schema.ObjectId;

const PageSchema = new mongoose.Schema({
	title: String,
	url: String,
	head: String,
	body: String,
	coverPicId: String,
	pictureIds: [ObjectId],
	includes: {
		howToMeasure: {
			type: Boolean,
			default: false,
		},
		marlonBrando: {
			type: Boolean,
			default: false,
		},
	},
	order: Number,
});

PageSchema.statics.idLoader = findOneLoaderFactory('Page');
PageSchema.statics.urlLoader = findOneLoaderFactory('Page', 'url');
PageSchema.statics.findByUrl = (url) => mongoose.models.Page.findOne({ url });

const Page = mongoose.models.Page || mongoose.model('Page', PageSchema);

export default Page;
