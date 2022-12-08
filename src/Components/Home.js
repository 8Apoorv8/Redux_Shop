import React from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
const Home = () => {
  return (
    <m.div className="bg-[#BAB2B5] absolute top-0 w-full h-full -z-10  flex  justify-center  p-6 md:py-6 md:px-40">
      <div className="mt-48 text-center">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold border-b-2 pb-2 border-[#41227e]">
          Shop What <span className="text-4xl md:text-5xl lg:text-6xl font-bold ">You</span> Want Here.
        </p>
        <h1 className="text-2xl my-4">
          We Provide bags, Watches, Shoes you name it we provide it
        </h1>
        <h3 className="my-4 text-xl text-gray-800">
          Checkout our Recent Stocks
        </h3>
        <button className="px-6 py-3 bg-[#a693b5] hover:bg-[#9887a5] transition-all text-xl font-semibold rounded-sm my-4">
          <Link to="/products">Products</Link>
        </button>
        <div>
          <input
            type="text"
            placeholder="Drops your Email"
            className="px-14 py-3 focus:outline-none focus:outline focus:outline-purple-700 rounded-md ring-purple-400 text-center"
          />
        </div>
      </div>
    </m.div>
  );
};

export default Home;
