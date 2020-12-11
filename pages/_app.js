import { StylesProvider } from '@material-ui/core/styles';
import ThemeProvider from '../comps/context/ThemeProvider';
import Navbar from '../comps/ui/Navbar';
import React from 'react';
import Footer from '../comps/ui/Footer';
import 'justifiedGallery/dist/css/justifiedGallery.min.css';
import 'react-awesome-lightbox/build/style.css';
import '../styles/globals.css';

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
