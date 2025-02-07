import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Page } from '../../store/usePageStore';
import { useEffect } from 'react';

export default function NavItem({
	page,
	className = '',
	outline = false
}: {
	page: Page;
	className?: string;
	outline?: boolean;
}) {
	const location = useLocation();
	const navigate = useNavigate();

	const isSelected = page.route === location.pathname;

	const handleClick = () => {
		navigate(page.route);
	};

	useEffect(() => {
		if (import.meta.env.VITE_LANGUAGE === 'Fa') {
			import('./style.css');
		}
	}, []);

	return (
		<Button
			className={`!border-2 ${
				import.meta.env.VITE_LANGUAGE == 'Fa' && 'gap-[12px]'
			} ${isSelected && '!font-semibold'} ${className}`}
			onClick={handleClick}
			size="small"
			variant={isSelected || outline ? 'outlined' : 'contained'}
			startIcon={
				<page.Icon
					className={`${
						isSelected ? 'text-primary-500' : 'text-white'
					} lg:text-xl text-sm`}
				/>
			}
		>
			{page.title}
		</Button>
	);
}
