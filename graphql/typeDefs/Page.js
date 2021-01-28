import { gql } from 'apollo-server-micro';

export default gql`
	type Page {
		id: ObjectId!
		url: String
		title: String
		head: String
		body: String
		pictures: [Picture]
	}
`;
