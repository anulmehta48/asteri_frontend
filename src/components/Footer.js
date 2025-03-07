import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black py-16">
      <div className="text-white max-w-6xl mx-auto px-4 space-y-5 ">
        <div className="space-y-10">
          <h1 className="text-3xl md:text-5xl">Prêt à franchir le cap ?</h1>
          <div className="space-y-5">
            <div className="flex flex-col gap-2 md:flex-row ">
              <button className="bg-white font-bold rounded-md text-black py-3 border-black md:p-3 cursor-pointer ">
                <a href="https://forms.gle/5eqSGb5FvqsS6g8z8">
                  {" "}
                  Contactez nous{" "}
                </a>
              </button>

              <button className="bg-black rounded-md text-white font-bold py-3 border md:p-3 cursor-pointer ">
                <a href="mailto:abc@gmail.com"> En savoir plus</a>
              </button>
            </div>
            <p className=" text-xl md:text-2xl font-light">
              Equipez vos logements de nos solutions innovantes. Contribuez à la
              protection de l'environnement et optimisez la rentabilité de votre
              location.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-white space-y-4">
          {/* Social Icons */}
          <div className="flex space-x-10 md:space-x-24 mt-4 md:mt-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook size={35} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTwitter size={35} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaLinkedin size={35} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram size={35} />
            </a>
          </div>
          <div>
            <p className="text-sm">
              © {new Date().getFullYear()} ASERI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
