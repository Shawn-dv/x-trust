import { useAppKitAccount } from '@reown/appkit/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserPanelViewPage() {
	const navigateTo = useNavigate();
	const { isConnected } = useAppKitAccount();

	useEffect(() => {
		if (isConnected == false) {
			navigateTo('/');
		}
	}, [isConnected]);

	return (
		<div>
			<appkit-button size="md" />
		</div>
	);
}
