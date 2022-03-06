import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en.json';
import bn from './bn.json';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      bn: {
        translation: bn
      }
    },
    lng: "en",
    fallbackLng: "en"
  })