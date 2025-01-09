import React, { useState } from "react";
import logo from "../assets/Uber_logo_2018.png";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setPickUp(pickUp);
    setDropOff(dropOff);
    console.log(pickUp,dropOff)
    console.log("Form submitted");
  };
  return (
    <div className="h-screen">
      <img src={logo} className="w-20 absolute left-5 top-5" alt="" />
      <div className="h-screen w-screen">
        <img
          src="https://www.uberpeople.net/attachments/369988/"
          className="h-full w-full object-cover"
          alt="MAP"
        />
      </div>
      <div className="absolute h-screen w-full top-0 flex justify-end flex-col">
        <div className="h-[30%] p-5 bg-white relative">
          <h4 className="text-xl font-semibold mb-2">Find a trip</h4>
          <form className="" onSubmit={submitHandler}>
            {/* <div className="line h-16 w-[3px] bg-black absolute bottom-[25%] left-[10%] rounded-full lg:hidden md:hidden"></div> */}
            <input
              type="text"
              placeholder="Add pick-up location"
              className="border p-2 w-full rounded-md mt-2 bg-[#EEEEEE] font-semibold px-8"
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter your destination"
              className="border p-2 w-full rounded-md mt-3 bg-[#EEEEEE] font-semibold px-8"
              value={dropOff}
              onChange={(e) => setDropOff(e.target.value)}
            />
            <input type="submit" className="border p-2 w-1/2 rounded-md mt-3 bg-[#EEEEEE] font-semibold px-8" />
          </form>
        </div>
        <div className="h-[70%] bg-red-800 hidden"></div>
      </div>
    </div>
  );
};

export default Home;
