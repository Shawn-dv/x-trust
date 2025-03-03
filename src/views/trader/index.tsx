import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  TextField,
  Button,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Radio,
} from "@mui/material";

const TradePageView: React.FC = () => {
  const { t } = useTranslation();

  const tokens = [
    {
      token: "USDT",
      balance: 1000,
      buyPrice: 1.0,
      sellPrice: 0.99,
      balanceValue: 1000,
    },
    {
      token: "BTC",
      balance: 0.5,
      buyPrice: 30000,
      sellPrice: 29900,
      balanceValue: 15000,
    },
    {
      token: "ETH",
      balance: 2,
      buyPrice: 2000,
      sellPrice: 1990,
      balanceValue: 4000,
    },
  ];

  const [selectedToken, setSelectedToken] = useState(tokens[0]);

  return (
    <Box className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <Typography
        variant="h4"
        className="!font-bold mb-8"
        align="center"
        gutterBottom
      >
        {t("trader.title")}
      </Typography>
      <Box className="mb-8">
        <Typography variant="h6" className="!mb-4">
          {t("trader.selectToken.title")}
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className="bg-gray-100">
                <TableCell size="small"></TableCell>
                <TableCell size="small">
                  {t("trader.selectToken.token")}
                </TableCell>
                <TableCell size="small" className="text-end">
                  {t("trader.selectToken.balance")}
                </TableCell>
                <TableCell size="small" className="text-end">
                  {t("trader.selectToken.buyPrice")}
                </TableCell>
                <TableCell size="small" className="text-end">
                  {t("trader.selectToken.sellPrice")}
                </TableCell>
                <TableCell size="small" className="text-end">
                  {t("trader.selectToken.balanceValue")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tokens.map((row) => (
                <TableRow key={row.token} onClick={() => setSelectedToken(row)}>
                  <TableCell size="small">
                    <Radio
                      className="!p-0"
                      checked={selectedToken.token === row.token}
                    />
                  </TableCell>
                  <TableCell size="small">{row.token}</TableCell>
                  <TableCell size="small" className="text-end">
                    {row.balance}
                  </TableCell>
                  <TableCell size="small" className="text-end">
                    {row.buyPrice}
                  </TableCell>
                  <TableCell size="small" className="text-end">
                    {row.sellPrice}
                  </TableCell>
                  <TableCell size="small" className="text-end">
                    {row.balanceValue}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box className="flex flex-col md:flex-row gap-8">
        <Box className="flex flex-col gap-3.5 flex-1 p-6 border border-gray-200 rounded-lg">
          <Typography variant="h6" className="mb-4">
            {t("trader.buy.title")}
          </Typography>
          <TextField
            fullWidth
            size="small"
            label={t("trader.buy.tokenName")}
            variant="outlined"
            value={selectedToken.token}
            slotProps={{ input: { readOnly: true } }}
          />
          <TextField
            fullWidth
            size="small"
            label={t("trader.buy.usdtAmount")}
            variant="outlined"
            type="number"
            defaultValue="0"
          />
          <TextField
            fullWidth
            size="small"
            label={t("trader.buy.buyPrice")}
            type="number"
            variant="outlined"
            value={selectedToken.buyPrice}
            slotProps={{ input: { readOnly: true } }}
          />
          <TextField
            fullWidth
            size="small"
            label={t("trader.buy.slippage")}
            variant="outlined"
            defaultValue="2"
            type="number"
          />
          <TextField
            fullWidth
            size="small"
            label={t("trader.buy.minTokenAmount")}
            variant="outlined"
            defaultValue="0"
            type="number"
          />
          <Button variant="contained" color="success" fullWidth size="small">
            {t("trader.buy.buyButton")}
          </Button>
        </Box>

        <Box className="flex flex-col gap-3.5 flex-1 p-6 border border-gray-200 rounded-lg">
          <Typography variant="h6" className="mb-4">
            {t("trader.sell.title")}
          </Typography>
          <TextField
            fullWidth
            size="small"
            label={t("trader.sell.tokenName")}
            variant="outlined"
            value={selectedToken.token}
            slotProps={{ input: { readOnly: true } }}
          />
          <TextField
            fullWidth
            size="small"
            label={t("trader.sell.tokenAmount")}
            variant="outlined"
            type="number"
            defaultValue="0"
          />
          <TextField
            fullWidth
            size="small"
            label={t("trader.sell.sellPrice")}
            type="number"
            variant="outlined"
            value={selectedToken.sellPrice}
            slotProps={{ input: { readOnly: true } }}
          />
          <TextField
            fullWidth
            size="small"
            label={t("trader.sell.slippage")}
            variant="outlined"
            defaultValue="2"
            type="number"
          />
          <TextField
            fullWidth
            size="small"
            label={t("trader.sell.minUsdtAmount")}
            variant="outlined"
            defaultValue="0"
            type="number"
          />
          <Button variant="contained" color="error" fullWidth size="small">
            {t("trader.sell.sellButton")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TradePageView;
