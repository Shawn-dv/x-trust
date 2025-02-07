import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/En/translation.json';
import fa from './locales/Fa/translation.json';

const resources = {
  En: { translation: en },
  Fa: { translation: fa },
};

i18n.use(initReactI18next).init({
  resources,
  lng: import.meta.env.VITE_LANGUAGE || 'En',
  fallbackLng: 'En',
  interpolation: {
    escapeValue: false,
  },
});

// Update body direction dynamically
const updateBodyDirection = (language: string) => {
  document.body.dir = language === 'Fa' ? 'rtl' : 'ltr';
  document.body.className = language === 'Fa' ? 'rtl' : 'ltr';
};

updateBodyDirection(import.meta.env.VITE_LANGUAGE || 'En');
i18n.on('languageChanged', updateBodyDirection);

export default i18n;
