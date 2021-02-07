import { StylesProvider } from '@material-ui/core/styles';
import ThemeContext from '../comps/context/ThemeContext';
import Navbar from '../comps/ui/Navbar';
import React from 'react';
import Footer from '../comps/ui/Footer';
import 'justifiedGallery/dist/css/justifiedGallery.min.css';
import 'react-awesome-lightbox/build/style.css';
import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import useGraphQLClient from '../comps/apollo/useGraphQLClient';
import { UserProvider } from '../comps/context/UserContext';

function MyApp({ Component, pageProps }) {
	const graphQLClient = useGraphQLClient();

	return (
		<ApolloProvider client={graphQLClient}>
			<UserProvider>
				<StylesProvider injectFirst>
					<ThemeContext>
						<Navbar />
						<Component {...pageProps} />
						<Footer />
					</ThemeContext>
				</StylesProvider>
			</UserProvider>
		</ApolloProvider>
	);
}

export default MyApp;
