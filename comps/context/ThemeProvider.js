import React from 'react';

import { createMuiTheme, ThemeProvider as Provider } from '@material-ui/core';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#4a69bd',
			contrastText: '#fff',
		},
		secondary: {
			// light: "#ff7961",
			main: '#10ac84',
			// dark: "#ba000d",
			contrastText: '#fff',
		},
	},
	typography: {
		fontFamily: `'Poppins', sans-serif`,
		fontSize: 14,
	},
});

const ThemeProvider = (props) => {
	return <Provider theme={theme}>{props.children}</Provider>;
};

export default ThemeProvider;
