import { useEffect } from "react";
import Logo from "../assets/aseri.jpeg";
import LanguageSelector from "./languageSelctor";

const Title = () => (
  <a href="/">
    <img className="h-24 p-2 rounded-full " src={Logo} alt="logo" />
  </a>
);

const Header = () => {
  // useEffect(() => {
  //   // Function to load Google Translate script
  //   const addGoogleTranslateScript = () => {
  //     const script = document.createElement("script");
  //     script.src =
  //       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  //     script.async = true;
  //     document.body.appendChild(script);
  //   };

  //   // Function to initialize Google Translate with only English and French
  //   window.googleTranslateElementInit = () => {
  //     new window.google.translate.TranslateElement(
  //       { pageLanguage: "en", includedLanguages: "en,fr", autoDisplay: true },
  //       "google_translate_element"
  //     );
  //   };

  //   addGoogleTranslateScript();
  // }, []);
  return (
    <div className="flex justify-between items-center bg-black">
      <Title />
      {/* <div id="google_translate_element"></div> */}
      <LanguageSelector/>
    </div>
  );
};

export default Header;
