import { Typography, Button, Container, Paper } from "@mui/material";
import TokenTable from "../../components/smart-contract/TokenTable";
import { useTranslation } from "react-i18next"; // Import the translation hook

export default function SmartContractPageView() {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <Container maxWidth={false} className="py-8 bg-gray-50">
      <Paper
        elevation={3}
        className="p-6 max-w-4xl mx-auto flex flex-col gap-5"
      >
        <Typography variant="h4" className="mb-4 !font-bold text-center">
          {t("smartContractOverview")}
        </Typography>

        <Typography variant="body1" className="mb-4">
          {t("smartContractDescription")}
        </Typography>

        <Typography variant="body1" className="mb-4">
          {t("smartContractHistory")}
        </Typography>

        <Typography variant="h5" className="mb-4 font-bold">
          {t("xTrustSmartContract")}
        </Typography>

        <Typography variant="body1" className="mb-4">
          {t("xTrustDescription")}
        </Typography>

        <ul className="list-disc pl-8 mb-4">
          {(t("xTrustOperations", { returnObjects: true }) as string[]).map(
            (operation: string, index: number) => (
              <li key={index}>{operation}</li>
            )
          )}
        </ul>

        <Typography variant="body1" className="mb-4">
          {t("smartContractEnsures")}
        </Typography>

        <ul className="list-disc pl-8 mb-4">
          {(
            t("smartContractGuarantees", { returnObjects: true }) as string[]
          ).map((guarantee: string, index: number) => (
            <li key={index}>{guarantee}</li>
          ))}
        </ul>

        <Typography variant="body1" className="mb-4">
          {t("xTrustDeployed")}
        </Typography>

        <Typography
          variant="body1"
          className="mb-4 font-mono text-sm bg-gray-100 p-2 rounded break-all"
        >
          0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3
        </Typography>

        <Typography variant="body1" className="mb-4">
          {t("greenTickDescription")}
        </Typography>

        <Typography variant="h5" className="mb-4 font-bold">
          {t("supportedTokens")}
        </Typography>

        <TokenTable />

        <Typography variant="body1" className="mt-4">
          {t("tradesDescription")}
        </Typography>

        <Typography
          variant="body1"
          className="mb-4 font-mono text-sm bg-gray-100 p-2 rounded break-all"
        >
          0x55d398326f99059fF775485246999027B3197955
        </Typography>

        <Typography variant="body1" className="mb-4">
          {t("consultExpert")}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          className="mt-4"
          href="https://bscscan.com/address/0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3"
          target="_blank"
        >
          {t("viewOnBscScan")}
        </Button>
      </Paper>
    </Container>
  );
}
