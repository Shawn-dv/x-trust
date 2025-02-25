import { IoMailOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const SocialItem = ({ Icon, link }: any) => {
  return (
    <a
      target="_blank"
      href={link || ""}
      className="flex items-center justify-center bg-white rounded-full p-1.5 cursor-pointer"
    >
      <Icon className="text-black text-[1.5rem]" />
    </a>
  );
};

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex justify-between items-center gap-4 bg-secondary-500 p-6 mt-auto">
      <section className="flex gap-2">
        <p>© 2024 - {currentYear}</p>
        <p>{t("copy-right")}</p>
      </section>
      <section className="flex items-center gap-2">
        <SocialItem link={"mailto:contact@xtrust.xyz"} Icon={IoMailOutline} />
        <SocialItem link={"https://t.me/xtrust_xyz"} Icon={FaTelegramPlane} />
        <SocialItem link={"https://x.com/xtrust_xyz"} Icon={FaXTwitter} />
      </section>
    </footer>
  );
}




