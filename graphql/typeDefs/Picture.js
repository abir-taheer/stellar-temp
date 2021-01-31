import { gql } from 'apollo-server-micro';

export default gql`
	type Picture {
		id: ObjectId!
		title: String
		alt: String
		# Dynamic Props ----
		# Cloudinary Resource Object to facilitate access
		resource: CloudinaryResource
		# The people in the photo
	}
`;
