import { create } from 'zustand';
import {
	HiHome,
	HiBriefcase,
	HiInformationCircle,
	HiDocumentText,
	HiCode,
	HiUser,
} from 'react-icons/hi';
import React from 'react';
import { IconType } from 'react-icons/lib';
import MainPageView from '../views/main';
import i18n from '../i18n';
import StartInvestPageView from '../views/start-invest';
import UserPanelViewPage from '../views/user-panel';
import AboutPageView from '../views/about';

export enum PageKeys {
	Home = 'home',
	StartInvest = 'start-invest',
	UserPanel = 'user-panel',
	About = 'about',
	Terms = 'terms',
	SmartContract = 'smart-contract',
}

export interface Page {
	noLogin?: boolean;
	login?: boolean;
	route: string;
	title: string;
	key: PageKeys;
	component: React.ComponentType;
	Icon: IconType;
}

interface PageStore {
	pages: Page[];
}

export const usePageStore = create<PageStore>(() => ({
	pages: [
		{
			route: '/',
			title: i18n.t('home'),
			key: PageKeys.Home,
			component: MainPageView,
			Icon: HiHome,
		},
		{
			noLogin: true,
			route: '/start-invest',
			title: i18n.t('start-invest'),
			key: PageKeys.StartInvest,
			component: StartInvestPageView,
			Icon: HiBriefcase,
		},
		{
			login: true,
			route: '/user-panel',
			title: i18n.t('user-panel'),
			key: PageKeys.UserPanel,
			component: UserPanelViewPage,
			Icon: HiUser,
		},
		{
			route: '/about',
			title: i18n.t('about'),
			key: PageKeys.About,
			component: AboutPageView,
			Icon: HiInformationCircle,
		},
		{
			route: '/terms',
			title: i18n.t('terms'),
			key: PageKeys.Terms,
			component: MainPageView,
			Icon: HiDocumentText,
		},
		{
			route: '/smart-contract',
			title: i18n.t('smart-contract'),
			key: PageKeys.SmartContract,
			component: MainPageView,
			Icon: HiCode,
		},
	],
}));
