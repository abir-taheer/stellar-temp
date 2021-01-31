import { gql } from 'apollo-server-micro';

export default gql`
	input PageOrderInput {
		pageId: ObjectId!
		order: Int!
	}

	input IncludesInput {
		howToMeasure: Boolean!
		marlonBrando: Boolean!
	}

	type Mutation {
		createPage(
			title: String!
			url: String!
			head: String!
			body: String!
			includes: IncludesInput!
		): Page
		editPage(
			id: ObjectId!
			title: String!
			url: String!
			head: String!
			body: String!
			includes: IncludesInput!
		): Page
		deletePage(id: ObjectId!): Boolean
		reorderPages(order: [PageOrderInput]): [Page]

		addPictureToPage(
			picture: Upload!
			title: String!
			alt: String!
			pageId: ObjectId!
		): Picture
		editPicture(id: ObjectId!, title: String!, alt: String!): Picture
		deletePictureFromPage(pageId: ObjectId!, pictureId: ObjectId!): Page
		setDefaultPicture(pictureId: ObjectId!, pageId: ObjectId!): Page

		login(email: String!, password: String!): String!
		forgotPassword(email: String!): Boolean!
		changePassword(currentPassword: String!, newPassword: String!): User!
	}
`;
