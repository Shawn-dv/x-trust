import { useAppKitAccount } from "@reown/appkit/react";
import DisconnectButton from "../../components/custom/appkit/DisconnectButton";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function UserInfoComponent() {
  const { address } = useAppKitAccount();
  const { t } = useTranslation();

  return (
    <Card sx={{ textAlign: "center", width: "fit-content", padding: "8px" }}>
      <CardContent className="!pb-0 !pt-2">
        <Typography variant="h6">{t("wallet-address")}:</Typography>
        <Typography variant="body2" color="textSecondary" className="break-all">
          {address}
        </Typography>
      </CardContent>
      <CardActions>
        <DisconnectButton className="!mx-auto" size="small" />
      </CardActions>
    </Card>
  );
}
