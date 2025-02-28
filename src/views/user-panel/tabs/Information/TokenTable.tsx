import React from "react";
import { useTranslation } from "react-i18next";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface Token {
  name: string;
  count: number;
  usdt: number;
}

const TokenTable: React.FC = () => {
  const { t } = useTranslation();

  const tokens: Token[] = [
    {
      name: "BTCB",
      count: 0.004,
      usdt: 14920,
    },
    {
      name: "ETH",
      count: 3,
      usdt: 4512,
    },
    {
      name: "TRX",
      count: 61,
      usdt: 61272,
    },
    {
      name: "WMATIC",
      count: 12,
      usdt: 412,
    },
    {
      name: "YFI",
      count: 1,
      usdt: 52,
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead className="bg-gray-100">
          <TableRow>
            <TableCell>{t("token")}</TableCell>
            <TableCell>{t("count")}</TableCell>
            <TableCell>{t("available-tokens.usdt-value")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tokens.map((token, index) => (
            <TableRow key={index} hover>
              <TableCell>{token.name}</TableCell>
              <TableCell>{token.count}</TableCell>
              <TableCell>{Number(token.usdt).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TokenTable;
