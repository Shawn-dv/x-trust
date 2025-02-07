import { useAppKitAccount } from '@reown/appkit/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StartInvestPageView() {
	const navigateTo = useNavigate();
	const { isConnected } = useAppKitAccount();

	useEffect(() => {
		if (isConnected == true) {
			navigateTo('/user-panel');
		}
	}, [isConnected]);

	return (
		<div>
			<appkit-button size="md" />
			{/* <div
				className={`items-center w-fit h-fit rounded-[5rem] ${
					isConnected && 'bg-primary-500'
				} ms-auto hidden lg:flex`}
			>
				<appkit-button size="md" balance="show" />
			</div>
			<div
				className={`ms-auto lg:hidden flex items-center w-fit h-fit rounded-[5rem] ${
					isConnected && 'bg-primary-500'
				}`}
			>
				<appkit-button size="sm" balance="hide" />
			</div> */}
		</div>
	);
}
