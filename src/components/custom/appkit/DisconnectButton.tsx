import { Button } from "@mui/material";
import {
  useAppKitAccount,
  useAppKitState,
  useDisconnect,
} from "@reown/appkit/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { TbWalletOff } from "react-icons/tb";

export default function DisconnectButton() {
  const { t } = useTranslation();
  const { isConnected } = useAppKitAccount();
  const { open: isOpen } = useAppKitState();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (import.meta.env.VITE_LANGUAGE === "Fa") {
      import("./style.css");
    }
  }, []);
  return (
    <Button
      loading={isOpen}
      loadingPosition="center"
      disabled={!isConnected}
      onClick={() => disconnect()}
      color="error"
      variant="contained"
      size="large"
      className={`${import.meta.env.VITE_LANGUAGE == "Fa" && "gap-[12px]"}`}
      startIcon={<TbWalletOff />}
    >
      {t("disconnect-wallet")}
    </Button>
  );
}
