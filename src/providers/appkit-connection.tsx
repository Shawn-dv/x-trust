import { useAccount, useChainId, useSwitchChain } from 'wagmi';
import { useEffect } from 'react';

export function WalletConnectionHandler() {
	const { isConnected } = useAccount();
	const chainId = useChainId();
	const { switchChain } = useSwitchChain();
	const envChain = import.meta.env.VITE_CHAIN_ID;

	useEffect(() => {
		if (isConnected && chainId && envChain && chainId !== envChain) {
			console.log(
				'Wrong chain detected. Attempting to switch to the correct network.'
			);
			switchChain({ chainId: envChain });
		}
	}, [isConnected, chainId, envChain, switchChain]);

	return null;
}
