import React from "react";
import logo from "../assets/uber-driver.svg";
import { Link } from "react-router-dom";
const UserSignup = () => {
  return (
    <div className="p-7 flex justify-between flex-col h-screen">
      <div>
        <img src={logo} alt="Uber" className="w-20 mb-2  " />
        <form action="">
          <h3 className="text-lg font-medium mb-4">What's your's Name</h3>
          <div className="flex gap-4">
          <input
            type="text"
            placeholder="First name"
            name="firstname"
            required
            autoComplete="off"
            className="w-full mb-5 p-2  bg-[#eeeeee] border-gray-300 rounded-lg text-xl placeholder:text-[#201c1c33]"
          />  <input
          type="text"
          placeholder="Last name"
          name="lastname"
          required
          autoComplete="off"
          className="w-full mb-5 p-2  bg-[#eeeeee] border-gray-300 rounded-lg text-xl placeholder:text-[#201c1c33]"
        />
          </div>
          <h3 className="text-lg font-medium mb-4">What's your's email?</h3>
          <input
            type="text"
            placeholder="email@example.com"
            name="email"
            required
            autoComplete="off"
            className="w-full mb-7 p-2  bg-[#eeeeee] border-gray-300 rounded-lg text-xl placeholder:text-[#201c1c33]"
          />
          <h3 className="text-lg font-medium mb-4">Enter Password</h3>
          <input
            type="password"
            name="password"
            placeholder="password"
            required
         
            className="w-full p-3  mb-7 bg-[#eeeeee] border-gray-300 rounded-lg text-xl placeholder:text-base"
          />
          <button className=" w-full bg-black text-white py-3 rounded-lg mt-3 flex justify-center items-center">
            Login
          </button>
          <p className=" text-center mt-4">
            Join a fleet?
            <Link to="/captain-signup" className=" text-blue-600">
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>
      <div className="text-center">
        <Link
          to="/login"
          className="w-full bg-[#df622d] text-white py-3 rounded-lg mt-3 flex justify-center items-center"
        >
          Sign in as user
        </Link>
      </div>
    </div>
  );
};

export default UserSignup;
