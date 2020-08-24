import '../styles/globals.css';
import { StylesProvider } from '@material-ui/core/styles';
import ThemeProvider from '../comps/ThemeProvider';
import 'react-image-lightbox/style.css';
import Navbar from '../comps/Navbar';
import React from 'react';
import Footer from '../comps/Footer';

function MyApp({ Component, pageProps }) {
	return (
		<StylesProvider injectFirst>
			<ThemeProvider>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</StylesProvider>
	);
}

export default MyApp;
