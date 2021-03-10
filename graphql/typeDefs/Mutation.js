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

	input PictureInput {
		file: Upload!
		title: String!
		alt: String!
	}

	type Mutation {
		createPage(
			title: String!
			url: String!
			head: String!
			body: String!
			includes: IncludesInput!
			coverPic: PictureInput
		): Page
		editPage(
			id: ObjectId!
			title: String!
			url: String!
			head: String!
			body: String!
			includes: IncludesInput!
		): Page

		setPageTitle(title: String!, pageId: ObjectId!): Page
		setPageUrl(url: String!, pageId: ObjectId!): Page
		setPageHead(head: String!, pageId: ObjectId!): Page
		setPageBody(body: String!, pageId: ObjectId!): Page
		setPageIncludes(includes: IncludesInput!, pageId: ObjectId!): Page
		setPageCoverPicByUpload(
			coverPic: PictureInput!
			pageId: ObjectId!
		): Page
		setPageCoverPicByPictureId(
			pictureId: ObjectId!
			pageId: ObjectId!
		): Page

		deletePage(id: ObjectId!): Boolean
		reorderPages(order: [PageOrderInput!]!): [Page]

		addPictureToPage(picture: PictureInput!, pageId: ObjectId!): Picture
		editPicture(id: ObjectId!, title: String!, alt: String!): Picture
		deletePictureFromPage(pageId: ObjectId!, pictureId: ObjectId!): Page

		uploadPicture(picture: PictureInput!): Picture

		login(email: String!, password: String!): String!
		requestPasswordResetEmail(email: String!): Boolean!
		changePassword(currentPassword: String!, newPassword: String!): User!
	}
`;
