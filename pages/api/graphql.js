import { ApolloServer, ForbiddenError } from 'apollo-server-micro';
import typeDefs from '../../graphql/typeDefs';
import resolvers from '../../graphql/resolvers';
import getJWTData from '../../utils/jwt/getJWTData';
import User from '../../models/user';

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	context: async ({ req }) => {
		let user, signedIn;

		const jwt =
			req.cookies['auth-jwt'] ||
			req.headers['x-access-token'] ||
			req.headers['authorization'];

		if (jwt) {
			const data = await getJWTData(jwt);

			if (data) {
				user = await User.findById(data.user.id);
			}

			signedIn = Boolean(user);
		}

		function authenticationRequired() {
			if (!signedIn) {
				throw new ForbiddenError(
					'You must be signed in to use this endpoint'
				);
			}
		}

		function adminRequired() {
			authenticationRequired();
			if (!user.adminPrivileges) {
				throw new ForbiddenError(
					'You must have admin privileges to use this endpoint'
				);
			}
		}

		return {
			user,
			signedIn,
		};
	},
	playground: {
		settings: {
			'schema.polling.enable': false,
			'request.credentials': 'same-origin',
			'prettier.useTabs': true,
		},
	},
	introspection: true,
});

export const config = {
	api: {
		bodyParser: false,
	},
};

export default apolloServer.createHandler({
	path: '/api/graphql',
	disableHealthCheck: true,
});
