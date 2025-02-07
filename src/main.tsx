import './index.css';
import './i18n';
import { createRoot } from 'react-dom/client';
import { AppKitProvider } from './providers/appkit-provider.tsx';
import MuiThemeProvider from './providers/theme-provider.tsx';
import AppWrapper from './App.tsx';

createRoot(document.getElementById('root')!).render(
	<AppKitProvider>
		<MuiThemeProvider>
			<AppWrapper />
		</MuiThemeProvider>
	</AppKitProvider>
);
