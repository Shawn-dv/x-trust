import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Define the custom theme
const theme = createTheme({
	palette: {
		primary: {
			main: '#226759', // Base primary color
			light: '#4da392', // Light variant
			dark: '#1e5d50', // Dark variant
			contrastText: '#ffffff', // Text color on primary
		},
		secondary: {
			main: '#a2c3db', // Base secondary color
			light: '#dbe9f3', // Light variant
			dark: '#8eb0c7', // Dark variant
			contrastText: '#000000', // Text color on secondary
		},
	},
});

// ThemeProvider component
const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

export default MuiThemeProvider;
