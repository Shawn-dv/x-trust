import { useTranslation } from "react-i18next";
import TermsImage from "../../assets/main/terms_conditions.jpg";
import ImageLoader from "../ImageLoader";
import { PageKeys } from "../../store/usePageStore";
import { useNavItemByKey } from "../../hooks/useNavItemByKey";

export default function MainTermsConditions() {
  const { t } = useTranslation();
  const TermsButton = useNavItemByKey(PageKeys.Terms);

  return (
    <section className="flex flex-row-reverse px-[1rem] py-[1rem] max-lg:flex-col-reverse gap-[35px] md:gap-[100px] max-lg:items-center justify-center">
      <div className="flex gap-3 flex-col max-w-[500px] shadow-xl shadow-gray-300 p-6 rounded-lg">
        <h1>{t("terms")}</h1>
        <h4 className="!font-medium mt-3">{t("main-terms-items-header")}</h4>
        <table className="flex flex-col gap-2 text-gray-600">
          <li>{t("main-terms-item-1")}</li>
          <li>{t("main-terms-item-2")}</li>
        </table>
        <div></div>
        {TermsButton}
      </div>
      <ImageLoader
        hover3D
        className="w-fit self-center object-cover h-[175px] md:h-[250px] shadow-lg shadow-gray-400"
        src={TermsImage}
      />
    </section>
  );
}
