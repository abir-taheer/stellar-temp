import CloudinaryResource from './CloudinaryResource';
import Picture from './Picture';
import Query from './Query';
import Page from './Page';

// Scalars
import ObjectId from 'graphql-scalar-objectid';
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from 'graphql-iso-date';
import Mutation from './Mutation';
import User from "./User";

const Resolvers = {
	CloudinaryResource,
	Picture,
	Query,
	Mutation,
	Page,
	User,
	// Custom Scalar Types
	ObjectId,
	Date: GraphQLDate,
	Time: GraphQLTime,
	DateTime: GraphQLDateTime,
};

export default Resolvers;
