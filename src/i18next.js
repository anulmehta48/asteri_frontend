import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects:true,
    resources: {
      en: {
        translation: {
          greeting: "Hello👋",
          description:{
            line1:"Eco-responsible housing",
            line2:"with smart sensors",
            line3:"Optimize the air conditioning of your vacation homes with efficient energy management."
          }
        },
      },
      fr: {
        translation: {
          greeting: "Banjor👋",
          description:{
            line1:"Des logements éco-responsables ",
            line2:"avec des capteurs intelligents",
            line3:"Optimisez la climatisation de vos logements de vacances avec une gestion énergétique efficace.."
          }
        },
      },
    },
  });
