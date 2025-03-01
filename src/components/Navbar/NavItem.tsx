import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Page } from "../../store/usePageStore";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function NavItem({
  page,
  title = "",
  className = "",
  outline = false,
}: {
  page: Page;
  title?: string;
  className?: string;
  outline?: boolean;
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const normalizePath = (path: string) => path.replace(/\/+$/, ""); // Removes trailing slashes

  const isSelected =
    normalizePath(`${import.meta.env.BASE_URL}${page.route}`) ===
    normalizePath(location.pathname);

  const handleClick = () => {
    navigate(`${import.meta.env.BASE_URL}${page.route}`);
  };

  useEffect(() => {
    console.log("i18n.language:", i18n.language);

    if (i18n.language === "Fa") {
      import("./style.css");
    }
  }, [i18n.language]);

  return (
    <Button
      className={`!border-2 ${i18n.language == "Fa" && "gap-[12px]"} ${
        isSelected && "!font-semibold"
      } ${className}`}
      onClick={handleClick}
      size="small"
      variant={isSelected || outline ? "outlined" : "contained"}
      startIcon={
        <page.Icon
          className={`${
            isSelected || outline ? "text-primary-500" : "text-white"
          } lg:text-xl text-sm`}
        />
      }
    >
      {title ? t(title) : t(page.title)}
    </Button>
  );
}
