import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useEffect, useState } from 'react';
import { createUploadLink } from 'apollo-upload-client';

import EventEmitter from 'events';

const clientEmitter = new EventEmitter();

export const reloadClientJWT = (jwt) => clientEmitter.emit('reload', jwt);

export const cache = new InMemoryCache();

export const useGraphQLClient = () => {
	const currentValue =
		typeof window !== 'undefined'
			? window.localStorage.getItem('auth-jwt')
			: null;

	const [authJWT, setAuthJWT] = useState(currentValue);

	useEffect(() => {
		if (!window) {
			return;
		}

		clientEmitter.on('reload', setAuthJWT);

		return () => clientEmitter.removeListener('reload', setAuthJWT);
	});

	const link = createUploadLink({
		uri: '/api/graphql',
		headers: {
			authorization: authJWT ? 'Bearer ' + authJWT : '',
		},
		credentials: 'same-origin',
	});

	return new ApolloClient({ link, cache });
};

export default useGraphQLClient;
