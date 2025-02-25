import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const InfoItem = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="flex gap-3 flex-col max-w-[500px] shadow-xl shadow-gray-300 px-6 py-4 rounded-lg">
      <h2>{title}</h2>
      <p className="!font-medium mt-2">{desc}</p>
    </div>
  );
};

export default function AboutPageView() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Get the translated text and replace \n with <br />
  const aboutText = t("about-text").replace(/\n/g, "<br />");

  // Split the text into parts based on placeholders
  const parts = aboutText.split(/({smartContractButton}|{termsButton})/g);

  return (
    <main className="flex flex-col gap-10 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {t("about")} {t("xtrust")}
        </h1>
        <div className="prose prose-lg text-gray-700">
          <p>
            {parts.map((part, index) => {
              if (part === "{smartContractButton}") {
                return (
                  <Button
                    key={index}
                    onClick={() => navigate("/smart-contract")}
                    variant="text"
                    size="small"
                  >
                    {t("smart-contract")}
                  </Button>
                );
              } else if (part === "{termsButton}") {
                return (
                  <Button
                    key={index}
                    onClick={() => navigate("/terms")}
                    variant="text"
                    size="small"
                  >
                    {t("terms")}
                  </Button>
                );
              } else {
                // Render text with <br /> tags using dangerouslySetInnerHTML
                return (
                  <span
                    key={index}
                    dangerouslySetInnerHTML={{ __html: part }}
                  />
                );
              }
            })}
          </p>
        </div>
      </div>
      <section className="flex flex-wrap gap-[5rem] justify-center w-full">
        <InfoItem
          title={t("investment-opportunities")}
          desc={t("investment-opportunities-desc")}
        />
        <InfoItem
          title={t("trading-strategies")}
          desc={t("trading-strategies-desc")}
        />

        <InfoItem title={t("user-benefits")} desc={t("user-benefits-desc")} />
      </section>
    </main>
  );
}
