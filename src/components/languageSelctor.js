import { useTranslation } from "react-i18next";
const languages = [
  {
    code: "en",
    lang: "English",
  },
  {
    code: "fr",
    lang: "French",
  },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="text-white ">
      {languages.map((lng) => {
        return (
          <button
            className="bg-yellow-300 cursor-pointer"
            key={lng.code}
            onClick={()=>changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
