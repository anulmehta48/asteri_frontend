import { IMG_HEAD_CDN_URL, IMG_WAR_CDN_URL } from "../config";
import { IMG_TOY_CDN_URL } from "../config";
import { IMG_PROD_CDN_URL } from "../config";
const Body = () => {
  return (
    <>
      {/* //container-1 */}
      <div
        style={{ backgroundImage: `url(${IMG_HEAD_CDN_URL})` }}
        className="py-16 bg-cover bg-center bg-no-repeat "
      >
        <div className="text-white max-w-6xl mx-auto px-4 md:pl-14 ">
          <div className="space-y-4 mt-10 md:space-y-8 md:mt-14">
            <h1>Hello👋</h1>
            <h1 className="text-4xl md:text-5xl">
              <b>Eco-responsible</b> housing
            </h1>
            <h1 className="text-4xl md:text-5xl">with smart sensors</h1>
            <p className="text-md pb-3 font-light text-wrap md:font-normal md:font-stretch-50%">
              Optimize the air conditioning of your vacation homes with
              efficient energy management.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row">
            <button className="bg-white font-bold rounded-md text-black py-3 border-black md:p-3 ">
              Discover the solutions
            </button>
            <button className="bg-black rounded-md text-white font-bold py-3 border md:p-3 ">
              Contact us
            </button>
          </div>
        </div>
      </div>
      {/* //container-2 */}
      <div className="bg-black py-16 ">
        <div className="text-white max-w-6xl mx-auto  md:gap-20 md:justify-center lg:flex">
          {/* Image div */}
          <div className="lg:flex  ">
            <img
              src={IMG_TOY_CDN_URL}
              alt="toy"
              className="size-96 md:h-[650] md:w-[440] md:rounded-xl"
            />
          </div>
          {/* Text div */}
          <div className="lg:flex-2 mt-15 mx-6 justify-center items-center ">
            <h1 className="text-3xl md:text-5xl md:font-extralight ">
              Comfort and savings through automation
            </h1>
            <div className="mt-10 md:gap-10  ">
              {/* Item 1 */}
              <div className="flex items-start  ">
                <div className="flex flex-col items-center mr-5">
                  <div className="w-0.5 h-5 bg-gray-600 "></div>
                  <span className="bg-gray-600 text-white text-lg font-bold px-3 py-1 rounded-md   ">
                    1
                  </span>
                  <div className="w-0.5 h-16 bg-gray-600"></div>
                </div>
                <div className="w-15 h-0.5 mt-10 bg-gray-600"></div>
                <div className="space-y-4 ml-5 mt-5 ">
                  <h3 className="text-2xl font-light "> Presence detection</h3>
                  <p className="font-light md:text-wrap md:text-xl  ">
                    Our sensors automatically turn off the air conditioning when
                    vacationers go out.
                  </p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex items-start ">
                <div className="flex flex-col items-center mr-4">
                  <span className="bg-gray-600 text-white text-lg font-bold px-3 py-1 rounded-md">
                    2
                  </span>
                  <div className="w-0.5 h-16 bg-gray-600"></div>
                </div>
                <div className="w-15 h-0.5 mt-5 bg-gray-600"></div>
                <div className="space-y-4 ">
                  <h3 className="text-2xl font-light">Real-time tracking</h3>
                  <p className="font-light md:text-wrap md:text-xl">
                    Track consumption data for each home.
                  </p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="flex items-start ">
                <div className="flex flex-col items-center mr-4">
                  <span className="bg-gray-600 text-white text-lg font-bold px-3 py-1 rounded-md">
                    3
                  </span>
                  <div className="w-0.5 h-5 bg-gray-600 "></div>
                  <div className="w-0.5 h-0 bg-gray-600"></div>
                </div>
                <div className="w-15 h-0.5 mt-5 bg-gray-600"></div>
                <div className="space-y-4 ">
                  <h3 className="text-2xl font-light">Energy savings</h3>
                  <p className="font-light md:text-wrap md:text-xl">
                    Reduce energy consumption by 20 to 30%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //container-3 */}
      <div className="bg-white py-16 md:py-25">
        <div className="text-black max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl mx-7">
            Simple and reliable solutions
          </h1>
          <div className="space-y-10 mt-10 md:flex md:space-x-8 mx-8 md:justify-center">
            <div className="space-y-1.5">
              <h1 className="font-light text-3xl ">Full warranty</h1>
              <p className="font-extralight text-xl text-wrap">
                Replacement of defective equipment for one year, at no
                additional cost.
              </p>
            </div>
            <div className="space-y-1.5">
              <h1 className="font-light text-3xl ">Insurance included</h1>
              <p className="font-extralight text-xl text-wrap">
                Your installation is covered, for lasting peace of mind.
              </p>
            </div>
            <div className="space-y-1.5">
              <h1 className="font-light text-3xl ">Scalable subscription</h1>
              <p className="font-extralight text-xl text-wrap">
                {" "}
                Updates and support included for optimized performance.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*//container-4 */}
      <div className="bg-black md:py-16">
        <div className="max-w-6xl mx-auto md:flex">
          <div className="">
            <img
              src={IMG_PROD_CDN_URL}
              alt="toy"
              className="md:h-[520] md:w-[650] rounded-2xl scale-110"
            />
          </div>
          <div className="text-white mt-10 mx-10">
            <h1 className="text-5xl text-wrap ">
              Advanced technology, immediate results
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
              <div className="flex items-start space-x-3">
                <span className="bg-gray-600 text-white text-lg font-bold px-3 py-1 rounded-md   ">
                  1
                </span>
                <div>
                  <h1 className="text-xl font-semibold">
                    Installation from A to Z
                  </h1>
                  <p className="text-gray-300">
                    Turnkey offer for the intelligent management of your air
                    conditioning
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-gray-600 text-white text-lg font-bold px-3 py-1 rounded-md   ">
                  2
                </span>
                <div>
                  <h1 className="text-xl font-semibold">Intuitive dashboard</h1>
                  <p className="text-gray-300">
                    Remote control via mobile application
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-gray-600 text-white text-lg font-bold px-3 py-1 rounded-md   ">
                  3
                </span>
                <div>
                  <h1 className="text-xl font-semibold">
                    Real-time monitoring
                  </h1>
                  <p className="text-gray-300">
                    Track energy savings in real time.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-gray-600 text-white text-lg font-bold px-3 py-1 rounded-md   ">
                  4
                </span>
                <div>
                  <h1 className="text-xl font-semibold">Detailed reports</h1>
                  <p className="text-gray-300">
                    Analyze consumption data to optimize.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*//container-5 */}
      <div className="bg-white py-5 md:py-16">
        <div className="text-white max-w-6xl mx-2 md:mx-auto md:p-10 bg-black space-y-2.5 rounded-2xl">
          <div className="text-4xl md:text-5xl md:font-normal text-wrap font-medium p-5">
            <h1>Testimonials from our satisfied customers </h1>
          </div>
          <div className="space-y-5 text-wrap p-5 md:justify-between md:space-x-7 md:space-y-0 md:flex md:gap-6">
            <div className="bg-gray-600 rounded-xl p-5 space-y-2">
              <h1 className="text-3xl font-light">Johan</h1>
              <p className="text-xl font-light italic">
                25% reduction on our bills thanks to these sensors.
              </p>
            </div>
            <div className="bg-gray-600 rounded-xl p-5 space-y-2">
              <h1 className="text-3xl font-light">Karen</h1>
              <p className="text-xl font-light italic">
                Return on investment in less than 2 years thanks to cost
                reductions.
              </p>
            </div>
            <div className="bg-gray-600 rounded-xl p-5 space-y-2">
              <h1 className="text-3xl font-light">Heusia</h1>
              <p className="text-xl font-light italic">
                Loyalty of tenants, who really appreciate our ecological
                commitment
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-16">
        <div className="text-white max-w-6xl mx-auto px-4">
          <h1>A profitable and ecological investment</h1>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${IMG_WAR_CDN_URL})` }}
        className="py-16 bg-cover bg-center bg-no-repeat"
      >
        <div className="text-white max-w-6xl mx-auto px-4">
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </div>
      </div>
    </>
  );
};
export default Body;
