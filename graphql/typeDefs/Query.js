import { gql } from 'apollo-server-micro';

export default gql`
	type Query {
		authenticatedUser: User
		
		pageById(id: ObjectId!): Page
		pageByUrl(url: String!): Page

		pictureById(id: ObjectId!): Picture
		
		pages: [Page]
	}
`;
