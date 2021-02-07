import { ForbiddenError } from 'apollo-server-micro';
import { sign } from 'jsonwebtoken';
import User from '../../../models/user';
import { compare } from 'bcrypt';
import getJWTSecret from '../../../utils/jwt/getJWTSecret';

export default async (root, { email, password }, { signedIn }) => {
	if (signedIn) {
		throw new ForbiddenError('You are already signed in.');
	}

	const user = await User.findOne({ email });

	if (!user) {
		throw new ForbiddenError('Those credentials are not correct.');
	}

	const passwordIsCorrect = await compare(password, user.passwordCrypt);

	if (!passwordIsCorrect) {
		throw new ForbiddenError('Those credentials are not correct.');
	}

	const tokenData = {
		user: {
			id: user.id,
			email: user.email,
			firstName: user.firstName,
			lastName: user.lastName,
			adminPrivileges: user.adminPrivileges,
		},
	};

	const secret = await getJWTSecret();

	return sign(tokenData, secret, { expiresIn: '30d' });
};
