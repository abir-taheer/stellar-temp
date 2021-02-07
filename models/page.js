import mongoose from './mongoose';
import findOneLoaderFactory from '../utils/dataloaders/findOneLoaderFactory';
import { UserInputError } from 'apollo-server-micro';

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
	visibility: {
		type: Boolean,
		default: true,
		required: true,
	},
	keywords: [String],
});

PageSchema.statics.idLoader = findOneLoaderFactory('Page');
PageSchema.statics.urlLoader = findOneLoaderFactory('Page', 'url');
PageSchema.statics.findByUrl = (url) => mongoose.models.Page.findOne({ url });
PageSchema.statics.findByIdOrThrowError = async (id) => {
	const page = await mongoose.models.Page.findById(id);

	if (!page) {
		throw new UserInputError("There's no page with that id");
	}

	return page;
};

const Page = mongoose.models.Page || mongoose.model('Page', PageSchema);

export default Page;
