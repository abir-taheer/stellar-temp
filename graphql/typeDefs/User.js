import { gql } from 'apollo-server-micro';

export default gql`
	type User {
		id: ObjectId!
		firstName: String
		lastName: String
		name: String

		email: String
		emailVerified: Boolean

		subscription: Boolean
		adminPrivileges: Boolean
		createdAt: DateTime
	}
`;
