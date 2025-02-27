import { create } from 'zustand';
import { BrowserProvider, JsonRpcProvider } from 'ethers';
import toast from 'react-hot-toast';

type LoadingKeys =
	| keyof Omit<XTrustStore, 'poolContract' | 'loading'>
	| 'global';

interface XTrustStore {
	//poolContract: Contract;
	loading: Record<LoadingKeys, boolean>;

	// State updaters
	setLoading: (key: LoadingKeys, value: boolean) => void;
	setErrorMessage: (error: any) => void;

	// Contract calls
	// withdraw: () => Promise<boolean | void>;
	// amIOwner: () => Promise<boolean>;
}

/* function unwrapProxies(proxyArray: any[]) {
	return proxyArray.map((proxy) => ({ ...proxy }));
}

function unwrapNormalProxies(proxyArray: any[]) {
	return Array.from(proxyArray).map((item: any) => item.toString());
} */

// Instead of directly referencing window.ethereum,
// you can pass your 'walletProvider' from AppKit into this function.
export function createXTrustStore(walletProvider: any) {
	let provider;
	if (walletProvider) {
		provider = new BrowserProvider(walletProvider);
	} else {
		provider = new JsonRpcProvider('https://bsc-dataseed.binance.org');
	}

	console.log(typeof provider)

	// 2) Return a Zustand store that uses this `provider`
	return create<XTrustStore>((set) => ({
		loading: { global: false } as Record<LoadingKeys, boolean>,
		// Instantiate the contracts with your own environment variables
		/* poolContract: new Contract(
			import.meta.env.VITE_STAKING_POOL_CONTRACT_ADDRESS,
			StakingPoolABI,
			provider
		), */

		// --- Utility setErrorMessage ---
		setErrorMessage: (error: any) => {
			let errorMessage = 'An unknown error occurred';
			if (error?.reason) {
				errorMessage = error.reason;
			} else if (error?.message) {
				errorMessage = error.message;
			}
			toast.error(errorMessage);
		},

		// --- Utility setLoading ---
		setLoading: (key: LoadingKeys, value: boolean) => {
			set((state) => {
				const updatedLoading = { ...state.loading, [key]: value };
				// If any non-global key is set to true => global is true
				const isGlobalTrue = Object.entries(updatedLoading)
					.filter(([k]) => k !== 'global')
					.some(([, v]) => v === true);

				return {
					loading: {
						...updatedLoading,
						global: isGlobalTrue,
					},
				};
			});
		},

		/* amIOwner: async () => {
			try {
				get().setLoading('amIOwner', true);
				const signer = await provider.getSigner();
				return await (
					get().poolContract.connect(signer) as any
				).amIOwner();
			} catch (error) {
				//get().setErrorMessage('amIOwner', error);
				return false;
			} finally {
				get().setLoading('amIOwner', false);
			}
		}, */

		/* withdraw: async () => {
			try {
				get().setLoading('withdraw', true);
				const signer = await provider.getSigner();
				const contractWithSigner = get().poolContract.connect(
					signer
				) as any;

				await contractWithSigner.withdraw.staticCall();
				const tx = await contractWithSigner.withdraw();
				await tx.wait();
				return true;
			} catch (error) {
				get().setErrorMessage('withdraw', error);
				return false;
			} finally {
				get().setLoading('withdraw', false);
			}
		}, */
	}));
}
