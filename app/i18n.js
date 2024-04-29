import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from "../public/locales/en/translation.json";
import translationDE from "../public/locales/de/translation.json";

const resources = {
    en: {
      translation: translationEN,
    },
    de: {
      translation: translationDE,
    },
  };
i18n
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    resources,
    lng: localStorage.getItem('lng') ?  localStorage.getItem('lng') : "de",
    debug: true,
    fallbackLng: "de",

    interpolation: {
      escapeValue: false, // not needed for react!!
    }
  });


export default i18n;