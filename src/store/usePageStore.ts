import { create } from "zustand";
import {
  HiHome,
  HiBriefcase,
  HiInformationCircle,
  HiDocumentText,
  HiCode,
  HiUser,
} from "react-icons/hi";
import React from "react";
import { IconType } from "react-icons/lib";
import MainPageView from "../views/main";
import StartInvestPageView from "../views/start-invest";
import UserPanelViewPage from "../views/user-panel";
import AboutPageView from "../views/about";
import TermsPageView from "../views/terms";
import SmartContractPageView from "../views/smart-contract";
import TraderPageView from "../views/trader";

export enum PageKeys {
  Home = "home",
  StartInvest = "start-invest",
  UserPanel = "user-panel",
  About = "about",
  Terms = "terms",
  SmartContract = "smart-contract",
  Trader = "trader",
}

export interface Page {
  noLogin?: boolean;
  login?: boolean;
  route: string;
  title: string;
  key: PageKeys;
  component: React.ComponentType;
  Icon: IconType;
  disablePadding?: boolean;
  highPadding?: boolean;
  pageOnly?: boolean;
}

interface PageStore {
  pages: Page[];
}

export const usePageStore = create<PageStore>(() => ({
  pages: [
    {
      route: "/x-trust",
      title: "home",
      key: PageKeys.Home,
      component: MainPageView,
      Icon: HiHome,
      disablePadding: true,
    },
    {
      noLogin: true,
      route: "/start-invest",
      title: "start-invest",
      key: PageKeys.StartInvest,
      component: StartInvestPageView,
      Icon: HiBriefcase,
    },
    {
      login: true,
      route: "/user-panel",
      title: "user-panel",
      key: PageKeys.UserPanel,
      component: UserPanelViewPage,
      Icon: HiUser,
      highPadding: true,
    },
    {
      route: "/about",
      title: "about",
      key: PageKeys.About,
      component: AboutPageView,
      Icon: HiInformationCircle,
    },
    {
      route: "/terms",
      title: "terms",
      key: PageKeys.Terms,
      component: TermsPageView,
      Icon: HiDocumentText,
      highPadding: true,
    },
    {
      route: "/smart-contract",
      title: "smart-contract",
      key: PageKeys.SmartContract,
      component: SmartContractPageView,
      Icon: HiCode,
      highPadding: true,
    },
    {
      route: "/trader",
      title: "trader",
      key: PageKeys.Trader,
      component: TraderPageView,
      Icon: HiCode,
      pageOnly: true,
    },
  ],
}));
