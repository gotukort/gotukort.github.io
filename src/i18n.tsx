import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './translations/en.json';
import translationIS from './translations/is.json';
import artWalkOneIS from './translations/artwalkone_is.json';
import artWalkTwoIS from './translations/artwalktwo_is.json';
import artWalkThreeIS from './translations/artwalkthree_is.json';
import artWalkFourIS from './translations/artwalkfour_is.json';
import beachWalks from './translations/beachwalks.json';
import running from './translations/running.json';
import bike from './translations/bike.json';

// the translations
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: translationEN,
  },
  is: {
    translation: {
      ...translationIS,
      ...artWalkOneIS,
      ...artWalkTwoIS,
      ...artWalkThreeIS,
      ...artWalkFourIS,
      ...beachWalks,
      ...running,
      ...bike,
    },
  },
};

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'is',
    debug: true,
    resources,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
