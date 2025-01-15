import React, { useState } from "react";
import logo from "../assets/uber-driver.svg";
import { Link } from "react-router-dom";
const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  return (
    <div className="p-7 flex justify-between flex-col h-screen">
      <div>
        <img src={logo} alt="Uber" className="w-20 mb-2  " />
        <form action="" onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-4">
            What's our Captain's name..
          </h3>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              autoComplete="off"
              className="w-full mb-5 p-2  bg-[#eeeeee] border-gray-300 rounded-lg text-lg placeholder:text-sm"
            />{" "}
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              autoComplete="off"
              className="w-full mb-5 p-2  bg-[#eeeeee] border-gray-300 rounded-lg text-lg placeholder:text-sm"
            />
          </div>
          <h3 className="text-base font-medium mb-2">
            What's our Captain's email..
          </h3>
          <input
            type="text"
            placeholder="email@example.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
            className="w-full mb-5 p-2  bg-[#eeeeee] border-gray-300 rounded-lg text-lg placeholder:text-sm"
          />
          <h3
            className="text-base font-medium mb-2
          "
          >
            Enter Password
          </h3>
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3  mb-5 bg-[#eeeeee] border-gray-300 rounded-lg text-lg placeholder:text-sm"
          />
          <button className=" w-full bg-black text-white py-3 rounded-lg mt-3 flex justify-center items-center">
            Login
          </button>
          <p className=" text-center mt-4">
            Already have an account?
            <Link to="/captain-login" className=" text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div className="text-center">
        <div>
          <p className="text-[10px] leading-tight">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
