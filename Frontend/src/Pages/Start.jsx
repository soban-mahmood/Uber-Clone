import React from "react";
import logo from "../assets/Uber_logo_2018.png";
import Img from "../assets/homeImg.avif";
import { Link } from "react-router-dom";
const Start = () => {
  return (
    <div>
      <div
        className=" h-screen pt-10 flex justify-between flex-col "
        style={{
          backgroundImage: `url(${Img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src={logo} alt="Uber" className="w-16 ml-8" />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bold">Get started with Uber</h2>
          <Link
            className="w-full bg-black text-white py-3 rounded-lg mt-3 flex justify-center items-center"
            to="/login"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
