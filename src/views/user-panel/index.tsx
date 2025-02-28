import { Container, Typography } from "@mui/material";
import { useAppKitAccount } from "@reown/appkit/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomTabs from "../../components/custom/Tabs";
import DisconnectButton from "../../components/custom/appkit/DisconnectButton";
import { useTranslation } from "react-i18next";
import InformationTab from "./tabs/Information/InformationTab";
import InvestTab from "./tabs/InvestTab";
import WithdrawTab from "./tabs/WithdrawTab";

export default function UserPanelViewPage() {
  const { t } = useTranslation();
  const navigateTo = useNavigate();
  const { isConnected } = useAppKitAccount();

  useEffect(() => {
    if (isConnected == false) {
      navigateTo("/start-invest");
    }
  }, [isConnected]);

  const tabs = [
    {
      label: t("information"),
      value: "1",
      content: <InformationTab />,
    },
    {
      label: t("invest"),
      value: "2",
      content: <InvestTab />,
    },
    {
      label: t("withdraw"),
      value: "3",
      content: <WithdrawTab />,
    },
  ];

  return (
    <Container
      maxWidth={false}
      className="flex flex-col gap-4 py-10 px-4 sm:px-6 lg:px-8"
    >
      <Typography
        variant="h4"
        className="!font-bold mb-8"
        align="center"
        gutterBottom
      >
        {t("user-panel")}
      </Typography>
      <CustomTabs variant="fullWidth" tabs={tabs} defaultValue="1" />

      <div className="flex w-full justify-center mt-6">
        <DisconnectButton />
      </div>
    </Container>
  );
}
