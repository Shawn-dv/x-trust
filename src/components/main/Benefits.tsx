import { useTranslation } from "react-i18next";

interface BenefitItem {
  title: string;
  value: string;
}

const benefitList: Array<BenefitItem> = [
  {
    title: "growth",
    value: "100%",
  },
  {
    title: "tether-investment",
    value: "2",
  },
  {
    title: "investor",
    value: "1",
  },
];

const BenefitItem = ({ title, value }: BenefitItem) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2 items-center">
      <h3>{value}</h3>
      <h3 className="flex items-center justify-center text-center max-md:text-[1.2rem]">
        {t(title)}
      </h3>
    </div>
  );
};

export default function MainBenefits() {
  return (
    <section className="w-full flex flex-col justify-center gap-[3rem] md:gap-[10rem] py-[3.25rem] md:flex-row px-[1rem] bg-[#0000000a]">
      {benefitList.map((data) => (
        <BenefitItem value={data.value} title={data.title} />
      ))}
    </section>
  );
}
