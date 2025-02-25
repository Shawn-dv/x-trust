import { useTranslation } from "react-i18next";
import Building from "../../assets/main/building.jpg";
import ImageLoader from "../../components/ImageLoader";
import { useNavItemByKey } from "../../hooks/useNavItemByKey";
import { PageKeys } from "../../store/usePageStore";
import { useAppKitAccount } from "@reown/appkit/react";

export default function MainBanner() {
  const { t } = useTranslation();
  const StartInvestButton = useNavItemByKey(PageKeys.StartInvest);
  const UserPanelButton = useNavItemByKey(PageKeys.UserPanel);
  const { isConnected } = useAppKitAccount();

  return (
    <figure className="w-full relative">
      <ImageLoader
        className="w-full object-cover min-h-[150px] md:h-[300px]"
        src={Building}
      />
      <div className="w-full h-full flex flex-col absolute top-0 left-0 items-center justify-center px-6 bg-gray-950/20 text-white text-center gap-1 md:gap-3">
        <h1>xTrust</h1>
        <p>{t("building-banner")}</p>
        <div className="max-md:scale-75">
          {(isConnected && UserPanelButton) || StartInvestButton}
        </div>
      </div>
    </figure>
  );
}
