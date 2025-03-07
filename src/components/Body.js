import { useTranslation } from "react-i18next";
import {
  IMG_HEAD_CDN_URL,
  IMG_WAR_CDN_URL,
  POWER_SVG_URL,
  PROFIT_SVG_URL,
  SUSTAIN_SVG_URL,
  SUTISFY_SVG_URL,
  IMG_TOY_CDN_URL,
  IMG_PROD_CDN_URL,
} from "../config";
import { useEffect } from "react";

const Body = () => {
  // const { t } = useTranslation();
  // const {line1,line2}=t("description")

  useEffect(() => {
    getMymessages();
  }, []);

  async function getMymessages() {
    try {
      const response = await fetch("http://localhost:3000/getmessage", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json(); // Parse response JSON
      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      {/* //container-1 */}
      <div
        style={{ backgroundImage: `url(${IMG_HEAD_CDN_URL})` }}
        className="relative py-16 bg-cover bg-center bg-no-repeat  "
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative text-white max-w-6xl mx-auto px-4 md:pl-14 ">
          <div className="space-y-4 mt-10 md:space-y-8 md:mt-14">
            <h1>Bonjour 👋</h1>
            <h1 className="text-4xl md:text-5xl">
              Des logements <strong>éco-responsables </strong>
            </h1>
            <h1 className="text-4xl md:text-5xl">
              avec des capteurs intelligents
            </h1>
            <p className="text-md pb-3 font-light text-wrap md:font-normal md:font-stretch-50%">
              Optimisez la climatisation de vos logements de vacances avec une
              gestion énergétique efficace.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row">
            <button className="bg-white font-bold rounded-md text-black py-3 border-black md:p-3 cursor-pointer">
              <a href="mailto:abc@gmail.com"> Découvrir les solutions</a>
            </button>

            <button className="bg-black rounded-md text-white font-bold py-3 border md:p-3 cursor-pointer ">
              <a href="https://forms.gle/5eqSGb5FvqsS6g8z8"> Contactez-nous</a>
            </button>
          </div>
        </div>
      </div>
      {/* //container-2 */}
      <div className="bg-black py-16 ">
        <div className="text-white max-w-6xl mx-auto  md:gap-20 md:justify-center md:flex">
          {/* Image div */}
          <div className="lg:flex md:mx-10 ">
            <img
              src={IMG_TOY_CDN_URL}
              alt="toy"
              className="size-96 md:h-[650] md:w-[440] md:rounded-xl "
            />
          </div>
          {/* Text div */}
          <div className="lg:flex-2 mt-15 mx-6 justify-center items-center ">
            <h1 className="text-4xl md:text-5xl md:font-extralight ">
              Confort et économies grâce à l'automatisation
            </h1>
            <div className="mt-10 md:gap-10  ">
              {/* Item 1 */}
              <div className="flex items-start  ">
                <div className="flex flex-col items-center mr-5">
                  <div className="w-0.5 h-5 bg-gray-600 "></div>
                  <span className="bg-gray-600 text-white text-lg md:text-2xl  font-bold px-3 py-1 rounded-md   ">
                    1
                  </span>
                  <div className="w-0.5 h-16 bg-gray-600"></div>
                  <div className="w-0.5 h-16 bg-gray-600"></div>
                </div>
                <div className="w-15 h-0.5 mt-10 bg-gray-600"></div>
                <div className="w-15 h-0.5 mt-10 bg-gray-600"></div>
                <div className="space-y-4 mt-5 ">
                  <h3 className="text-2xl font-light ">
                    {" "}
                    Détection de présence
                  </h3>
                  <p className="font-light md:text-wrap md:text-xl  ">
                    Nos capteurs coupent automatiquement la climatisation quand
                    les vacanciers sortent.
                  </p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex items-start ">
                <div className="flex flex-col items-center mr-4">
                  <span className="bg-gray-600 text-white text-lg md:text-2xl font-bold px-3 py-1 rounded-md">
                    2
                  </span>
                  <div className="w-0.5 h-16 bg-gray-600"></div>
                  <div className="w-0.5 h-16 bg-gray-600"></div>
                </div>
                <div className="w-15 h-0.5 mt-5 bg-gray-600"></div>
                <div className="space-y-4 ">
                  <h3 className="text-2xl font-light">Suivi en temps réel</h3>
                  <p className="font-light md:text-wrap md:text-xl">
                    Suivez les données de consommation de chaque logement.
                  </p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="flex items-start ">
                <div className="flex flex-col items-center mr-4">
                  <span className="bg-gray-600 text-white text-lg md:text-2xl  font-bold px-3 py-1 rounded-md">
                    3
                  </span>
                  <div className="w-0.5 h-5 bg-gray-600 "></div>
                  <div className="w-0.5 h-0 bg-gray-600"></div>
                </div>
                <div className="w-15 h-0.5 mt-5  bg-gray-600"></div>
                <div className="space-y-4 ">
                  <h3 className="text-2xl font-light">Économies d'énergie</h3>
                  <p className="font-light md:text-wrap md:text-xl">
                    Réduisez la consommation énergétique de 20 à 30%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //container-3 */}
      <div className="bg-gray-100 py-16 md:py-25">
        <div className="text-black max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl mx-7">
            Des solutions simples et fiables
          </h1>
          <div className="space-y-10 mt-10 md:flex md:space-x-8 mx-8 md:justify-center">
            <div className="space-y-1.5">
              <h1 className="font-light text-3xl ">Garantie complète</h1>
              <p className="font-extralight text-xl text-wrap">
                Remplacement d'équipement défectueux pendant un an, sans frais
                supplémentaire.
              </p>
            </div>
            <div className="space-y-1.5">
              <h1 className="font-light text-3xl ">Assurance incluse</h1>
              <p className="font-extralight text-xl text-wrap">
                Votre installation est couverte, pour une tranquillité d'esprit
                durable.
              </p>
            </div>
            <div className="space-y-1.5">
              <h1 className="font-light text-3xl ">Abonnement évolutif</h1>
              <p className="font-extralight text-xl text-wrap">
                Mises à jour et assistance inclus pour des performances
                optimisées.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*//container-4 */}
      <div className="bg-black md:py-16">
        <div className="max-w-6xl mx-auto md:flex md:gap-4">
          <div className="">
            <img
              src={IMG_PROD_CDN_URL}
              alt="toy"
              className="md:h-[620] md:w-[950] md:rounded-xl object-cover"
            />
          </div>
          <div className="text-white mt-10 mx-10 ">
            <h1 className="text-5xl text-wrap ">
              Technologie avancée, résultats immédiats
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14">
              <div className="flex items-start space-x-3">
                <span className="bg-gray-600 text-white text-lg md:text-2xl font-bold px-3 py-1 rounded-md   ">
                  1
                </span>
                <div className="space-y-4">
                  <h1 className="text-xl font-semibold">
                    Installation <strong>de A à Z</strong>
                  </h1>
                  <p className="text-gray-300 text-xl">
                    Offre clé en main pour la gestion intelligente de vos
                    climatisations
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-gray-600 text-white text-lg  md:text-2xl  font-bold px-3 py-1 rounded-md   ">
                  2
                </span>
                <div className="space-y-4">
                  <h1 className="text-xl font-semibold">
                    <strong>intuitif</strong> Tableau de bord
                  </h1>
                  <p className="text-gray-300 text-xl">
                    Contrôle à distance via application mobile,
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-gray-600 text-white text-lg  md:text-2xl font-bold px-3 py-1 rounded-md   ">
                  3
                </span>
                <div className="space-y-4">
                  <h1 className="text-xl font-semibold">
                    <strong> temps réel</strong> Surveillance en
                  </h1>
                  <p className="text-gray-300 text-xl">
                    Suivez les économies d'énergie en temps réel.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-gray-600 text-white text-lg  md:text-2xl  font-bold px-3 py-1 rounded-md   ">
                  4
                </span>
                <div className="space-y-4">
                  <h1 className="text-xl font-semibold">
                    <strong>détaillés</strong> Rapports
                  </h1>
                  <p className="text-gray-300 text-xl">
                    Analysez les données de consommation pour optimiser.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*//container-5*/}
      <div className="bg-black py-16">
        <div className="text-white max-w-6xl mx-auto px-4">
          <div className="w-full flex justify-center items-center flex-col ">
            <video className="w-full md:h-[700px] " autoPlay loop muted>
              <source
                src="https://tecdn.b-cdn.net/img/video/Tropical.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>

      {/*//container-6 */}
      <div className="bg-white py-5 md:py-16">
        <div className="text-white max-w-6xl mx-2 md:mx-auto md:p-10 bg-black space-y-2.5 rounded-2xl">
          <div className="text-4xl md:text-5xl md:font-normal text-wrap font-medium p-5">
            <h1>Témoignages de nos clients satisfaits </h1>
          </div>
          <div className="space-y-5 text-wrap p-5 grid grid-cols-1 md:grid-cols-3 md:gap-6">
            <div className="bg-gray-600 rounded-xl p-5 space-y-2 md:h-full">
              <h1 className="text-3xl font-light">Johan</h1>
              <p className="text-xl font-light italic">
                Réductions de 25% sur nos factures grâce à ces capteurs.
              </p>
            </div>
            <div className="bg-gray-600 rounded-xl p-5 space-y-2 md:h-full">
              <h1 className="text-3xl font-light">Karen</h1>
              <p className="text-xl font-light italic">
                Retour sur investissement.en moins de 2 ans grâce aux réductions
                de coûts.
              </p>
            </div>
            <div className="bg-gray-600 rounded-xl p-5 space-y-2 md:h-full">
              <h1 className="text-3xl font-light">Heusia</h1>
              <p className="text-xl font-light italic">
                Fidélisation des locataires, qui apprécient vraiment notre
                engagement écologique
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*//container-7 */}
      <div className="bg-black py-16">
        <div className="text-white max-w-6xl mx-auto px-4">
          <div className=" text-4xl p-5 md:text-5xl text-wrap">
            <h1>Un investissement rentable et écologique</h1>
          </div>
          <div className="p-5 text-wrap space-y-10 grid grid-cols-1 md:grid-cols-4 md:gap-5 ">
            <div className=" md:h-full">
              <img
                src={POWER_SVG_URL}
                alt="power"
                className="h-10 invert brightness-0 mb-4"
              />
              <h1 className="text-3xl">Économies</h1>
              <p className="text-2xl font-light">
                Factures d'électricité réduites
              </p>
            </div>
            <div className="  md:h-full">
              <img
                src={SUSTAIN_SVG_URL}
                alt="sustain"
                className="h-10 invert brightness-0 mb-4"
              />
              <h1 className="text-3xl">Durabilité</h1>
              <p className="text-2xl font-light">
                Empreinte environnementale diminuée
              </p>
            </div>
            <div className="  md:h-full">
              <img
                src={SUTISFY_SVG_URL}
                alt="sutisfy"
                className="h-10 invert brightness-0 mb-4"
              />
              <h1 className="text-3xl">Satisfaction</h1>
              <p className="text-2xl font-light">
                Attentes des clients comblées, fidélité renforcée
              </p>
            </div>
            <div className="  md:h-full">
              <img
                src={PROFIT_SVG_URL}
                alt="profit"
                className="h-10 invert brightness-0 mb-4"
              />
              <h1 className="text-3xl">Rentabilité</h1>
              <p className="text-2xl font-light">
                Retour sur investissement en moins de 2 ans
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*//container-8 */}
      <div
        style={{ backgroundImage: `url(${IMG_WAR_CDN_URL})` }}
        className="relative py-16 bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-4xl mx-auto ">
          <h2 className="relative text-4xl text-white mb-10 mx-5 md:mx-auto">
            Démarrez maintenant votre transition écologique
          </h2>
          <div className="relative  space-y-5 mx-5 md:mx-auto">
            {/* Step 1 */}
            <div className=" flex items-start gap-6">
              <div className="relative flex flex-col items-center text-white font-bold text-xl">
                <svg
                  width="80"
                  height="160"
                  viewBox="0 0 80 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-gray-600"
                >
                  <path d="M 0 138.59375 L 40 154.59375 L 80 138.59375 L 80 0 L 40 16 L 0 0 Z" />
                </svg>
                <span className="absolute top-[50%] translate-y-[-50%] text-white">
                  1
                </span>
              </div>
              <div className=" text-white space-y-2">
                <h3 className="text-xl font-semibold">
                  Évaluation des besoins
                </h3>
                <p>
                  Analyse de votre parc immobilier : nous réalisons une{" "}
                  <strong>visite sur place </strong>pour évaluer les besoins
                  spécifiques des logements.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex items-start gap-6">
              <div className="relative flex flex-col items-center text-white font-bold text-xl">
                <svg
                  width="80"
                  height="160"
                  viewBox="0 0 80 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-gray-600"
                >
                  <path d="M 0 138.59375 L 40 154.59375 L 80 138.59375 L 80 0 L 40 16 L 0 0 Z" />
                </svg>
                <span className="absolute top-[50%] translate-y-[-50%] text-white">
                  2
                </span>
              </div>
              <div className=" text-white space-y-2">
                <h3 className="text-xl font-semibold">
                  Installation des capteurs et définitions des scenarii
                </h3>
                <ul className="list-disc ">
                  <li>Mise en place rapide et discrète.</li>
                  <li>
                    Programmation selon les habitudes de vie et configuration
                    des plages horaires d’allumage et d’extinction
                  </li>
                  <li>
                    Intégration avec d'autres systèmes domotiques (éclairage,
                    sécurité).
                  </li>
                </ul>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex items-start gap-6">
              <div className="relative flex flex-col items-center text-white font-bold text-xl">
                <svg
                  width="80"
                  height="160"
                  viewBox="0 0 80 160"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-gray-600"
                >
                  <path d="M 0 138.59375 L 40 154.59375 L 80 138.59375 L 80 0 L 40 16 L 0 0 Z" />
                </svg>
                <span className="absolute top-[50%] translate-y-[-50%] text-white">
                  3
                </span>
              </div>
              <div className=" text-white space-y-2">
                <h3 className="text-xl font-semibold">
                  Optimisation continue de vos scenarii
                </h3>
                <p>Surveillance et ajustements permanents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;
