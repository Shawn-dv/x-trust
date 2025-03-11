import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useXTrustStore } from "../../providers/xtrust-provider";
import { SystemInfo } from "../../store/useXTrustStore";
import { LoaderIcon } from "react-hot-toast";
import { transformIntoNormalNumber } from "../../utility/utils";

interface BenefitItem {
  title: string;
  value: number | string;
  systemData?: any;
}

const benefitList: Array<BenefitItem> = [
  {
    title: "growth",
    value: 6,
  },
  {
    title: "tether-investment",
    value: 1,
  },
  {
    title: "investor",
    value: 0,
  },
];

const BenefitItem = ({ title, value, systemData }: BenefitItem) => {
  const { t } = useTranslation();

  if (title == "growth") {
    value = String(systemData?.[value]).slice(0, 3) + "%";
  } else if (title == "tether-investment") {
    value = systemData?.[value] ? transformIntoNormalNumber(systemData?.[value]) : "";
  } else if (title == "investor") {
    value = systemData?.[value];
  }

  return (
    <div className="flex flex-col gap-2 items-center">
      <h3>
        {systemData ? (
          value
        ) : (
          <LoaderIcon
            style={{ width: "20px", height: "20px", borderWidth: "3px" }}
          />
        )}
      </h3>
      <h3 className="flex items-center justify-center text-center max-md:text-[1.2rem]">
        {t(title)}
      </h3>
    </div>
  );
};

export default function MainBenefits() {
  const xTrustStore = useXTrustStore();
  const [systemData, setSystemData] = useState<SystemInfo>();
  const { getSystemInfo } = xTrustStore((state) => state);

  useEffect(() => {
    async function fetchData() {
      const res = await getSystemInfo();
      setSystemData(res as any);
    }
    fetchData();
  }, []);

  return (
    <section className="w-full flex flex-col justify-center gap-[3rem] md:gap-[10rem] py-[3.25rem] md:flex-row px-[1rem] bg-[#0000000a]">
      {benefitList.map((data) => (
        <BenefitItem
          value={data.value}
          title={data.title}
          systemData={systemData}
        />
      ))}
    </section>
  );
}
