import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Button onClick={() => changeLanguage("En")}>English</Button>
      <Button onClick={() => changeLanguage("Fa")}>فارسی</Button>
    </div>
  );
};

export default LanguageSwitcher;
