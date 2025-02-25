import { useTranslation } from "react-i18next";
import ContractImage from "../../assets/main/contract.jpg";
import ImageLoader from "../ImageLoader";
import { useNavItemByKey } from "../../hooks/useNavItemByKey";
import { PageKeys } from "../../store/usePageStore";
import React from "react";

export default function MainContract() {
  const { t } = useTranslation();
  const ContractButton = useNavItemByKey(PageKeys.SmartContract);

  return (
    <section className="flex px-[1rem] py-[1rem] max-lg:flex-col-reverse gap-[35px] md:gap-[100px] max-lg:items-center justify-center">
      <div className="flex gap-2 flex-col justify-between max-w-[500px] shadow-xl shadow-gray-300 p-6 rounded-lg">
        <h1>{t("smart-contract")}</h1>
        <p className="text-start mt-6">{t("main-smart-contract-title")}</p>
        <a
          target="_blank"
          href={`https://bscscan.com/address/0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3#code`}
          className="text-primary-400 hover:text-secondary-500 font-semibold break-all"
        >
          0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3
        </a>
        <p className="text-justify">{t("main-smart-contract-desc")}</p>
        <div></div>
        {ContractButton &&
          React.cloneElement(ContractButton, {
            outline: true,
            title: t("more"),
          })}
      </div>
      <ImageLoader
        hover3D
        className="w-fit self-center object-cover h-[175px] md:h-[250px] shadow-lg shadow-gray-400"
        src={ContractImage}
      />
    </section>
  );
}
