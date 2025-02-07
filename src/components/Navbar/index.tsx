import { useState } from 'react';
import logo from '../../assets/logo.png';
import { usePageStore } from '../../store/usePageStore';
import ImageLoader from '../ImageLoader';
import { IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { useAppKitAccount } from '@reown/appkit/react';
import NavItem from './NavItem';
import { HiMenu } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
	const { pages } = usePageStore();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const navbarExtend = useMediaQuery('(max-width:1000px)');
	const isMobile = useMediaQuery('(max-width:600px)');
	const { isConnected } = useAppKitAccount();
	const navigateTo = useNavigate();

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};
	return (
		<nav className="w-full flex items-center py-4 px-4 lg:px-8 bg-white sticky top-0 z-50 shadow-md">
			<ImageLoader
				className="cursor-pointer"
				onClick={() => navigateTo('/')}
				style={{ maxHeight: isMobile ? '32px' : '52px' }}
				src={logo}
			/>

			<div className="flex-1 flex gap-3 items-center justify-end">
				{!navbarExtend &&
					pages &&
					pages.length > 0 &&
					pages.map((page) => {
						if (page.noLogin && isConnected) return null;
						if (page.login && !isConnected) return null;
						return <NavItem page={page} key={page.key} />;
					})}
				{navbarExtend && (
					<>
						<IconButton
							className="!ms-1 "
							edge="start"
							color="inherit"
							aria-label="menu"
							onClick={handleMenuOpen}
						>
							<HiMenu className="text-3xl" />
						</IconButton>
						<Menu
							className="ms-3"
							anchorEl={anchorEl}
							open={Boolean(anchorEl)}
							onClose={handleMenuClose}
						>
							{pages &&
								pages.length > 0 &&
								pages.map((page, index) => {
									if (page.login && !isConnected) return null;
									return (
										<MenuItem
											onClick={handleMenuClose}
											key={index}
										>
											<NavItem
												className={
													navbarExtend ? 'w-full' : ''
												}
												page={page}
											/>
										</MenuItem>
									);
								})}
						</Menu>
					</>
				)}
			</div>
		</nav>
	);
}
