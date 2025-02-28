import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

const WithdrawTab: React.FC = () => {
  const [withdrawalAmount, setWithdrawalAmount] = useState<string>("");
  const { t } = useTranslation();

  const handleWithdraw = () => {
    // Handle withdrawal logic here
    console.log("Withdrawing:", withdrawalAmount);
  };

  return (
    <Box
      sx={{
        maxWidth: "600px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      {/* Header */}
      <Typography sx={{ marginBlock: "20px" }} variant="h4" gutterBottom>
        {t("withdraw-tab.title")}
      </Typography>

      {/* Withdrawal Details */}
      <Paper elevation={3} sx={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6" gutterBottom>
          {t("withdraw-tab.maxWithdrawal")} 0 USDT
        </Typography>
        <Typography variant="h6" gutterBottom>
          {t("withdraw-tab.maxReceivable")} 0 USDT
        </Typography>
        <Typography variant="body1" paragraph>
          {t("withdraw-tab.automaticDistribution")}
        </Typography>
      </Paper>

      {/* Withdrawal Form */}
      <Paper elevation={3} sx={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h5" sx={{ marginBottom: "16px !important" }}>
          {t("withdraw-tab.withdrawAmount")}
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "start" }} gutterBottom>
          {t("withdraw-tab.receivableAmount")} 0 USDT
        </Typography>

        <TextField
          fullWidth
          type="number"
          label={t("withdraw-tab.withdrawAmount")}
          value={withdrawalAmount}
          onChange={(e) => setWithdrawalAmount(e.target.value)}
          sx={{ marginBottom: "20px" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleWithdraw}
          disabled={!withdrawalAmount}
        >
          {t("withdraw-tab.sendTransaction")}
        </Button>
      </Paper>
    </Box>
  );
};

export default WithdrawTab;
