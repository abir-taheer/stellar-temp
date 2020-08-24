import '../styles/globals.css';
import { StylesProvider } from '@material-ui/core/styles';
import ThemeProvider from '../comps/ThemeProvider';
import 'react-image-lightbox/style.css';
import Navbar from '../comps/Navbar';
import React from 'react';

function MyApp({ Component, pageProps }) {
	return (
		<StylesProvider injectFirst>
			<ThemeProvider>
				<Navbar />
				<Component {...pageProps} />
			</ThemeProvider>
		</StylesProvider>
	);
}

export default MyApp;
