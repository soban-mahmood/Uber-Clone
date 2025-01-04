import React, { useState } from "react";
import logo from "../assets/uber-driver.svg";
import { Link } from "react-router-dom";
const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandel = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 flex justify-between flex-col h-screen">
      <div>
        <img src={logo} alt="Uber" className="w-20 mb-2 " />
        <form action="" onSubmit={submitHandel}>
          <h3 className="text-base font-medium mb-4">What's your's email?</h3>
          <input
            type="text"
            placeholder="email@example.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
            className="w-full mb-5 p-2  bg-[#eeeeee] border-gray-300 rounded-lg text-xl placeholder:text-sm"
          />
          <h3 className="text-base font-medium mb-4">Enter Password</h3>
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3  mb-5 bg-[#eeeeee] border-gray-300 rounded-lg text-xl placeholder:text-sm"
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

export default CaptainLogin;
