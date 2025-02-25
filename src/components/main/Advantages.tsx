import ImageLoader from "../ImageLoader";
import LiquidityImage from "../../assets/main/liquidity.png";
import ProfessionalityImage from "../../assets/main/professionality.png";
import TransparencyImage from "../../assets/main/transparency.png";
import { useTranslation } from "react-i18next";

interface AdvantageItem {
  image: string;
  title: string;
}

const advantageList: Array<AdvantageItem> = [
  {
    image: LiquidityImage,
    title: "liquidity",
  },
  {
    image: TransparencyImage,
    title: "transparency",
  },
  {
    image: ProfessionalityImage,
    title: "professional-team",
  },
];

const AdvantageItem = ({ image, title }: AdvantageItem) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2 p-5 rounded-tl-[1.75rem] rounded-br-[1.75rem] shadow-md">
      <ImageLoader
        className="h-auto object-contain self-center w-[50px] md:w-[80px]"
        src={image}
      />
      <h4 className="text-center mb-2">{t(title)}</h4>
      <p className="small max-w-[300px] text-justify text-[#000000d0] self-center">
        {t(`${title}-desc`)}
      </p>
    </div>
  );
};

export default function MainAdvantages() {
  return (
    <section className="w-full flex flex-col justify-center gap-[2.5rem] md:gap-[5rem] py-[1.5rem] md:flex-row px-[2rem] bg-[#0000000a]">
      {advantageList.map((data) => (
        <AdvantageItem image={data.image} title={data.title} />
      ))}
    </section>
  );
}
