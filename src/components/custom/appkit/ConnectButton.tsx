import { Button } from "@mui/material";
import {
  useAppKit,
  useAppKitAccount,
  useAppKitState,
} from "@reown/appkit/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaWallet } from "react-icons/fa";

export default function ConnectButton() {
  const { t } = useTranslation();
  const { open } = useAppKit();
  const { isConnected } = useAppKitAccount();
  const { open: isOpen } = useAppKitState();

  useEffect(() => {
    if (import.meta.env.VITE_LANGUAGE === "Fa") {
      import("./style.css");
    }
  }, []);
  return (
    <Button
      loading={isOpen}
      loadingPosition="center"
      disabled={isConnected}
      onClick={() => open()}
      color="primary"
      variant="contained"
      size="large"
      className={`${import.meta.env.VITE_LANGUAGE == "Fa" && "gap-[12px]"}`}
      startIcon={<FaWallet />}
    >
      {t("connect-wallet")}
    </Button>
  );
}
