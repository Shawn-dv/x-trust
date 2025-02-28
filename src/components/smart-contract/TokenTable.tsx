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
import ImageLoader from "../ImageLoader";
import TonLogo from "../../assets/coins/ton.png";

interface Token {
  name: string;
  logoUrl?: string;
  description: string;
  contractAddress: string;
}

const TokenTable: React.FC = () => {
  const { t } = useTranslation();

  const tokens: Token[] = [
    {
      name: "BTCB",
      description: t("token-tabel-btcb"),
      contractAddress: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
    },
    {
      name: "ETH",
      description: t("token-tabel-eth"),
      contractAddress: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    },
    {
      name: "TRX",
      description: t("token-tabel-trx"),
      contractAddress: "0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3",
    },
    {
      name: "WMATIC",
      description: t("token-tabel-wmatic"),
      contractAddress: "0xc836d8dC361E44DbE64c4862D55BA041F88Ddd39",
    },
    {
      name: "YFI",
      description: t("token-tabel-yfi"),
      contractAddress: "0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e",
    },
    {
      name: "COMP",
      description: t("token-tabel-comp"),
      contractAddress: "0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8",
    },
    {
      name: "DOGE",
      description: t("token-tabel-doge"),
      contractAddress: "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
    },
    {
      name: "ETC",
      description: t("token-tabel-etc"),
      contractAddress: "0x3d6545b08693daE087E957cb1180ee38B9e3c25E",
    },
    {
      name: "STG",
      description: t("token-tabel-stg"),
      contractAddress: "0xB0D502E938ed5f4df2E681fE6E419ff29631d62b",
    },
    {
      name: "TOKEN",
      description: t("token-tabel-token"),
      contractAddress: "0x4507cEf57C46789eF8d1a19EA45f4216bae2B528",
    },
    {
      name: "WOO",
      description: t("token-tabel-woo"),
      contractAddress: "0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
    },
    {
      name: "TON",
      description: t("token-tabel-ton"),
      contractAddress: "0x76a797a59ba2c17726896976b7b3747bfd1d220f",
      logoUrl: TonLogo,
    },
    {
      name: "FTM",
      description: t("token-tabel-ftm"),
      contractAddress: "0xAD29AbB318791D579433D831ed122aFeAf29dcfe",
    },
  ];

  // Function to generate logo URL using Trust Wallet Assets
  const getLogoUrl = (contractAddress: string) => {
    return `https://assets.trustwalletapp.com/blockchains/smartchain/assets/${contractAddress}/logo.png`;
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead className="bg-gray-100">
          <TableRow>
            <TableCell>Token</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Contract Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tokens.map((token, index) => (
            <TableRow key={index} hover>
              <TableCell>
                <div className="flex items-center gap-2">
                  <ImageLoader
                    width={24}
                    height={24}
                    className="rounded-full overflow-hidden w-[24px] h-[24px]"
                    src={
                      token?.logoUrl
                        ? token?.logoUrl
                        : getLogoUrl(token.contractAddress)
                    }
                    alt={`${token.name} logo`}
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/24";
                    }}
                  />

                  <p>{token.name}</p>
                </div>
              </TableCell>
              <TableCell>{token.description}</TableCell>
              <TableCell>{token.contractAddress}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TokenTable;
