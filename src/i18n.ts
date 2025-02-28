import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/En/translation.json";
import fa from "./locales/Fa/translation.json";

const resources = {
  En: { translation: en }, // Use lowercase for language codes
  Fa: { translation: fa }, // Use lowercase for language codes
};

i18n.use(initReactI18next).init({
  resources,
  lng: import.meta.env.VITE_LANGUAGE || "En", // Default to 'en'
  fallbackLng: "En", // Use lowercase
  interpolation: {
    escapeValue: false, // React already safely escapes values
  },
});

// Update body direction dynamically
const updateBodyDirection = (language: string) => {
  document.body.dir = language === "Fa" ? "rtl" : "ltr"; // Use lowercase
  document.body.className = language === "Fa" ? "rtl" : "ltr"; // Use lowercase
};

// Set initial body direction based on current language
updateBodyDirection(i18n.language);

// Listen for language changes
i18n.on("languageChanged", updateBodyDirection);

export default i18n;
