import React from "react";
import { useTranslation } from "react-i18next";
import { Typography, Paper, Container } from "@mui/material";

const TermsPageView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth={false} className="py-8 bg-gray-50">
      <Paper
        elevation={3}
        className="py-6 px-8 max-w-4xl mx-auto flex flex-col gap-4"
      >
        <Typography variant="h4" className="text-center !font-bold mb-8">
          {t("terms")}
        </Typography>

        <div className="space-y-6 text-gray-700">
          <Typography variant="body1">{t("terms-termsDescription")}</Typography>

          <ul className="space-y-4 list-disc pl-6 marker:text-primary-400 marker:text-xl">
            <li>
              <Typography variant="body1">
                {t("terms-investmentWithdrawal")}
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                {t("terms-userResponsibility")}
              </Typography>
            </li>
            <li>
              <Typography variant="body1">{t("terms-systemFees")}</Typography>
              <ul className="space-y-2 pl-6 mt-2 list-disc marker:text-primary-400 marker:text-xl">
                <li>
                  <Typography variant="body2">
                    {t("terms-noFeesUpTo300")}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    {t("terms-feesAbove300")}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    {t("terms-referrerFee")}
                  </Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography variant="body1">{t("terms-example")}</Typography>
            </li>
            <li>
              <Typography variant="body1">
                {t("terms-partialWithdrawal")}
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                {t("terms-additionalInvestments")}
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                {t("terms-currencyAndNetwork")}
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                {t("terms-smartContractMethods")}
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                {t("terms-tradingOperations")}
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                {t("terms-withdrawalProcess")}
              </Typography>
            </li>
            <li>
              <Typography variant="body1">{t("terms-securityTips")}</Typography>
            </li>
            <li>
              <Typography variant="body1">
                {t("terms-securityNotices")}
              </Typography>
            </li>
            <li>
              <Typography variant="body1">{t("terms-stayUpdated")}</Typography>
            </li>
          </ul>
        </div>
      </Paper>
      {/* <div className="flex items-center justify-center mt-6">
        <LanguageSwitcher />
      </div> */}
    </Container>
  );
};

export default TermsPageView;
