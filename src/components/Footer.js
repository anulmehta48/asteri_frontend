const Footer = () => {
  return (
    <div className="bg-black py-16">
      <div className="text-white max-w-6xl mx-auto px-4">
        <div className="space-y-10">
          <h1 className="text-3xl md:text-5xl">Ready to take the plunge?</h1>
          <div className="space-y-5">
            <div className="flex flex-col gap-2 md:flex-row ">
              <button className="bg-white font-bold rounded-md text-black py-3 border-black md:p-3 cursor-pointer ">
                Contact us
              </button>
              <button className="bg-black rounded-md text-white font-bold py-3 border md:p-3 cursor-pointer ">
                Learn more
              </button>
            </div>
            <p className=" text-xl md:text-2xl font-light">
              Equip your homes with our innovative solutions. Contribute to
              protecting the environment and optimize the profitability of your
              rental.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
