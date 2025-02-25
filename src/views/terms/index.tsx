import { useTranslation } from "react-i18next";

export default function TermsPageView() {
  const { t } = useTranslation();

  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">
          {t("terms")}
        </h1>

        <div className="space-y-6 text-gray-700">
          <p>{t("terms-termsDescription")}</p>

          <ul className="space-y-4">
            {" "}
            {/* Add padding-left to the <ul> */}
            <li>
              {" "}
              {/* Remove bullet points */}
              {t("terms-investmentWithdrawal")}
            </li>
            <li>{t("terms-userResponsibility")}</li>
            <li>
              {t("terms-systemFees")}
              <ul className="space-y-2 pl-6 mt-2">
                <li>{t("terms-noFeesUpTo300")}</li>
                <li>{t("terms-feesAbove300")}</li>
                <li>{t("terms-referrerFee")}</li>
              </ul>
            </li>
            <li>{t("terms-example")}</li>
            <li>{t("terms-partialWithdrawal")}</li>
            <li>{t("terms-additionalInvestments")}</li>
            <li>{t("terms-currencyAndNetwork")}</li>
            <li>{t("terms-smartContractMethods")}</li>
            <li>{t("terms-tradingOperations")}</li>
            <li>{t("terms-withdrawalProcess")}</li>
            <li>{t("terms-securityTips")}</li>
            <li>{t("terms-securityNotices")}</li>
            <li>{t("terms-stayUpdated")}</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
