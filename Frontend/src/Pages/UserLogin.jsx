import React from "react";

const UserLogin = () => {
  return (
    <div className="p-7">
      <form action="">
        <h3 className="text-xl mb-4">What's your's email?</h3>
        <input
          type="text"
          placeholder="email@example.com"
          name="email"
          required
          autoComplete="off"
          className="w-full p-2 border-2 border-gray-200 rounded-lg text-xl placeholder:text-base"
        />
        <h3>Enter Password</h3>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button className=" w-full bg-black text-white py-3 rounded-lg mt-3 flex justify-center items-center">
        Login
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
