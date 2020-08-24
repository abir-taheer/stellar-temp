import '../styles/globals.css';
import { StylesProvider } from '@material-ui/core/styles';
import ThemeProvider from '../comps/ThemeProvider';
import 'react-image-lightbox/style.css';

function MyApp({ Component, pageProps }) {
	return (
		<StylesProvider injectFirst>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</StylesProvider>
	);
}

export default MyApp;
