import { IMG_HEAD_CDN_URL, IMG_WAR_CDN_URL } from "../config";
import { IMG_TOY_CDN_URL } from "../config";
import { IMG_PROD_CDN_URL } from "../config";
const Body = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${IMG_HEAD_CDN_URL})` }}
        className="py-16 bg-cover bg-center bg-no-repeat "
      >
        <div className="text-white max-w-6xl mx-auto px-4 ">
          <div className="space-y-4 mt-10">
            <h1>Hello👋</h1>
            <h1 className="text-4xl">
              <b>Eco-responsible</b> housing
            </h1>
            <h1 className="text-4xl ">with smart sensors</h1>
            <p className="text-md pb-3 font-light  text-wrap ">
              Optimize the air conditioning of your vacation homes with
              efficient energy management.
            </p>
          </div>
          <div className="flex flex-col gap-2 ">
            <button className="bg-white font-bold  rounded-md text-black py-3 border-black">
              Discover the solutions
            </button>
            <button className="bg-black rounded-md text-white font-bold py-3 border">
              Contact us
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black py-16">
        <div className="text-white max-w-6xl mx-auto px-4">
          <img src={IMG_TOY_CDN_URL} alt="toy" className="" />
          <h1>Comfort and savings through automation</h1>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="text-black max-w-6xl mx-auto px-4">
          <h1>Simple and reliable solutions</h1>
          <div>
            <h1>Full warranty</h1>
          </div>
        </div>
      </div>
      <div className="bg-black py-16">
        <div className="text-white max-w-6xl mx-auto px-4">
          <img src={IMG_PROD_CDN_URL} alt="toy" className="" />
          <h1>Advanced technology, immediate results</h1>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="text-black max-w-6xl mx-auto px-4">
          <h1>Testimonials from our satisfied customers </h1>
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
