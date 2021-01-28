import Query from "./Query";
import scalars from "./scalars";
import CloudinaryResource from "./CloudinaryResource";
import Picture from "./Picture";
import Page from './Page';

const typeDefs = [CloudinaryResource, Page,  Picture, Query, scalars];

export default typeDefs;
