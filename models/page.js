import mongoose from "./mongoose";
import findOneLoaderFactory from "../utils/dataloaders/findOneLoaderFactory";

const ObjectId = mongoose.Schema.ObjectId;

const PageSchema = new mongoose.Schema({
  title: String,
  url: String,
  head: String,
  body: String,
  pictureIds: [ObjectId],
  order: Number
});

PageSchema.statics.idLoader = findOneLoaderFactory("Page");
PageSchema.statics.urlLoader = findOneLoaderFactory("Page", "url");

const Page = mongoose.models.Page || mongoose.model("Page", PageSchema);

export default Page;
