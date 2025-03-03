import { Button, ButtonProps } from "@mui/material";
import {
  useAppKitAccount,
  useAppKitState,
  useDisconnect,
} from "@reown/appkit/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { TbWalletOff } from "react-icons/tb";

type DisconnectButtonProps = ButtonProps;

export default function DisconnectButton(props: DisconnectButtonProps) {
  const { t, i18n } = useTranslation();
  const { isConnected } = useAppKitAccount();
  const { open: isOpen } = useAppKitState();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (i18n.language === "Fa") {
      import("./style.css");
    }
  }, []);

  return (
    <Button
      {...props} // Spread all incoming props to allow overrides
      loading={props.loading ?? isOpen}
      disabled={props.disabled ?? !isConnected}
      onClick={props.onClick ?? disconnect}
      color={props.color ?? "error"}
      variant={props.variant ?? "contained"}
      size={props.size ?? "large"}
      className={`${i18n.language === "Fa" ? "gap-[12px]" : ""} ${props.className || ""}`}
      startIcon={props.startIcon ?? <TbWalletOff />}
    >
      {props.children ?? t("disconnect-wallet")}
    </Button>
  );
}
