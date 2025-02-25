import { useTranslation } from "react-i18next";
import IntroImage from "../../assets/main/intro.jpg";
import ImageLoader from "../ImageLoader";
import { useNavItemByKey } from "../../hooks/useNavItemByKey";
import { PageKeys } from "../../store/usePageStore";
import React from "react";

export default function MainIntroduction() {
  const { t } = useTranslation();
  const AboutButton = useNavItemByKey(PageKeys.About);

  return (
    <section className="flex px-[1rem] py-[1rem] max-lg:flex-col-reverse gap-[35px] md:gap-[100px] max-lg:items-center justify-center">
      <div className="flex gap-4 md:gap-8 flex-col justify-between max-w-[500px] shadow-xl shadow-gray-300 p-6 rounded-lg">
        <h1>{t("home-introduction-title")}</h1>
        <p className="text-justify">{t("home-introduction-desc")}</p>
        {AboutButton && React.cloneElement(AboutButton, { outline: true })}
      </div>
      <ImageLoader
        hover3D
        className="w-fit self-center object-cover h-[175px] md:h-[250px] shadow-lg shadow-gray-400"
        src={IntroImage}
      />
    </section>
  );
}