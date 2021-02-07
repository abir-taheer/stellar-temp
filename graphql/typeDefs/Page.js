import { gql } from 'apollo-server-micro';

export default gql`
	type Page {
		id: ObjectId!
		url: String
		title: String
		description: String
		head: String
		body: String
		pictures: [Picture]
		coverPic: Picture
		visibility: Boolean
		keywords: [String]
		order: Int
	}
`;
