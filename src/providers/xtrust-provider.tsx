import React, { createContext, useContext } from 'react';
import { useAppKitProvider } from '@reown/appkit/react';
import { createXTrustStore } from '../store/useXTrustStore';

const XTrustContext = createContext<ReturnType<
	typeof createXTrustStore
> | null>(null);

export function XTrustProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const { walletProvider } = useAppKitProvider('eip155');

	const store = React.useMemo(() => {
		// If wallet isn't connected, use fallback
		if (!walletProvider) {
			return createXTrustStore(undefined);
		}
		// Otherwise, use the signer-enabled wallet
		return createXTrustStore(walletProvider);
	}, [walletProvider]);

	return (
		<XTrustContext.Provider value={store}>
			{children}
		</XTrustContext.Provider>
	);
}

export function useXTrustStore() {
	const context = useContext(XTrustContext);
	if (!context) {
		throw new Error(
			'useStakingPoolStore must be used within <StakingPoolProvider>'
		);
	}
	return context;
}
