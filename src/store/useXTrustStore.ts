import { create } from "zustand";
import { BrowserProvider, Contract, JsonRpcProvider } from "ethers";
import toast from "react-hot-toast";
import XtrustABI from "./xtrust_abi.json";
import BigNumber from "bignumber.js";

type LoadingKeys =
  | keyof Omit<XTrustStore, "xTrustContract" | "loading">
  | "global";

export interface SystemInfo {
  0: number; //users Count
  1: BigNumber; //usdt Amount In
  2: BigNumber; //usdt Amount Out
  3: BigNumber; //equivalent Value
  4: BigNumber; //fee Balance
  5: BigNumber; //fee Sum
  6: BigNumber; //factor
}

interface XTrustStore {
  xTrustContract: Contract;
  loading: Record<LoadingKeys, boolean>;
  setLoading: (key: LoadingKeys, value: boolean) => void;
  setErrorMessage: (error: any) => void;

  // Contract calls
  // withdraw: () => Promise<boolean | void>;
  getSystemInfo: () => Promise<SystemInfo[] | boolean>;
}

/* function unwrapProxies(proxyArray: any[]) {
	return proxyArray.map((proxy) => ({ ...proxy }));
}
*/
function unwrapNormalProxies(proxyArray: any[]) {
  return Array.from(proxyArray).map((item: any) => item.toString());
}

export function createXTrustStore(walletProvider: any) {
  let provider;
  if (walletProvider) {
    provider = new BrowserProvider(walletProvider);
  } else {
    provider = new JsonRpcProvider("https://bsc-dataseed.binance.org");
  }

  console.log(typeof provider);

  return create<XTrustStore>((set, get) => ({
    loading: { global: false } as Record<LoadingKeys, boolean>,
    xTrustContract: new Contract(
      import.meta.env.VITE_CONTRACT_ADDRESS,
      XtrustABI,
      provider
    ),

    // --- Utility setErrorMessage ---
    setErrorMessage: (error: any) => {
      let errorMessage = "An unknown error occurred";
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
          .filter(([k]) => k !== "global")
          .some(([, v]) => v === true);

        return {
          loading: {
            ...updatedLoading,
            global: isGlobalTrue,
          },
        };
      });
    },

    getSystemInfo: async () => {
      const { setLoading, xTrustContract, setErrorMessage } = get();
      try {
        setLoading("getSystemInfo", true);
        const res = await xTrustContract.getSystemInfo();
        return unwrapNormalProxies(res);
      } catch (error) {
        setErrorMessage(error);
        return false;
      } finally {
        setLoading("getSystemInfo", false);
      }
    },

    /* withdraw: async () => {
			try {
				get().setLoading('withdraw', true);
				const signer = await provider.getSigner();
				const contractWithSigner = get().xTrustContract.connect(
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
