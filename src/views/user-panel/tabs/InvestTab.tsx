import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Paper,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const InvestmentPage: React.FC = () => {
  const [investmentAmount, setInvestmentAmount] = useState<string>("");
  const { t } = useTranslation();

  const handleInvest = () => {
    // Handle investment logic here
    console.log("Investing:", investmentAmount);
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
        {t("invest-tab.title")}
      </Typography>

      {/* Investment Form */}
      <Paper elevation={3} sx={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6" gutterBottom>
          {t("invest-tab.amount")}
        </Typography>
        <TextField
          fullWidth
          type="number"
          label={t("invest-tab.amount")}
          value={investmentAmount}
          onChange={(e) => setInvestmentAmount(e.target.value)}
          sx={{ marginBottom: "20px" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleInvest}
          disabled={!investmentAmount}
        >
          {t("invest-tab.sendTransaction")}
        </Button>
      </Paper>

      {/* Transaction Details */}
      <Paper elevation={3} sx={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6" gutterBottom>
          {t("invest-tab.transactionProcess")}
        </Typography>
        <Typography variant="body1">{t("invest-tab.step1")}</Typography>
        <Typography variant="body1">{t("invest-tab.step2")}</Typography>
        <Typography variant="body1">
          {t("invest-tab.transactionWarning")}
        </Typography>
      </Paper>

      {/* Security Tips */}
      <Paper elevation={3} sx={{ padding: "20px" }}>
        <Typography variant="h6" gutterBottom>
          {t("invest-tab.securityTips")}
        </Typography>
        <Alert severity="warning" sx={{ marginBottom: "10px" }}>
          {t("invest-tab.securityWarning")}
        </Alert>
        <Typography variant="body1">{t("invest-tab.requiredFunds")}</Typography>
        <Typography variant="body1">{t("invest-tab.usdtTokens")}</Typography>
        <Typography variant="body1">{t("invest-tab.bnbTokens")}</Typography>
      </Paper>
    </Box>
  );
};

export default InvestmentPage;
