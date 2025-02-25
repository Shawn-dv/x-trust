import MainAdvantages from "../../components/main/Advantages";
import MainBanner from "../../components/main/Banner";
import MainBenefits from "../../components/main/Benefits";
import MainContract from "../../components/main/Contract";
import MainIntroduction from "../../components/main/Introduction";
import MainTermsConditions from "../../components/main/TermsConditions";

export default function MainPageView() {
  return (
    <main className="flex flex-col gap-10">
      <MainBanner />

      <MainIntroduction />

      <MainAdvantages />

      <MainTermsConditions />

      <MainBenefits />

      <MainContract />
    </main>
  );
}
