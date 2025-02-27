import { WagmiProvider } from 'wagmi';
import { createAppKit } from '@reown/appkit/react';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactElement } from 'react';
import { Toaster } from 'react-hot-toast';
import { XTrustProvider } from './xtrust-provider';
import { WalletConnectionHandler } from './appkit-connection';
import { bsc } from '@reown/appkit/networks';

const queryClient = new QueryClient();
const projectId = '0145104ef1bdaabe0414ea54d9b57109';

// Define the BSC network configuration
/* const bscNetwork = {
	id: 56,
	name: 'Binance Smart Chain',
	network: 'bsc',
	rpcUrls: {
		default: { http: ['https://bsc-dataseed.binance.org/'] },
	},
	blockExplorers: {
		default: { name: 'BscScan', url: 'https://bscscan.com' },
	},
	nativeCurrency: {
		name: 'Binance Coin',
		symbol: 'BNB',
		decimals: 18,
	},
}; */

const wagmiAdapter = new WagmiAdapter({
	networks: [bsc],
	projectId,
	ssr: true,
});

createAppKit({
	adapters: [wagmiAdapter],
	projectId,
	networks: [bsc],
	features: {
		socials: false,
		email: false,
	},
});

export function AppKitProvider({ children }: { children: ReactElement }) {
	return (
		<WagmiProvider config={wagmiAdapter.wagmiConfig}>
			<QueryClientProvider client={queryClient}>
				<WalletConnectionHandler />
				<Toaster />
				<XTrustProvider>{children}</XTrustProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}
