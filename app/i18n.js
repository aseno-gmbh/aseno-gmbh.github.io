"use client";
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
    // lng: localStorage.getItem('lng') ?  localStorage.getItem('lng') : "de",
    lng: 'de',
    debug: true,
    fallbackLng: "de",

    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    
    

    // react i18next special options (optional)
    // override if needed - omit if ok with defaults
    /*
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
    }
    */
  }, (err, t) => {
    if (err) return console.log('something went wrong loading', err);
    t('key'); // -> same as i18next.t
  });


export default i18n;