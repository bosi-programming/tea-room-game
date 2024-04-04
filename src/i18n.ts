import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { en } from './translations/en';
import { pt } from './translations/pt';

const resources = {
  en,
  pt,
};

const options = {
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'lng'
}

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt'],
    interpolation: {
      escapeValue: false
    },
    debug: false,
  })
  .catch(e => console.error(e));

export default i18n;
