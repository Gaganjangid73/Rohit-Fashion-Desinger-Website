import React, { useState } from "react";
import LOGO from "../assets/LOGO.png";
import { IoPerson } from "react-icons/io5";
import { TbLockPassword, TbPassword } from "react-icons/tb";
import BackImg from "../assets/BackImg.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [OTP, setOTP] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    // Simple validation
    if (!email || !password || !OTP) {
      setError("Please enter email, password, and OTP.");
      return;
    }
    // Here you would handle registration logic
    setEmail("");
    setPassword("");
    setOTP("");
    alert("Signup submitted!");
  };

  const handleSendOTP = (e) => {
    e.preventDefault();
    // Here you would handle sending OTP logic
    alert("OTP sent to your email!");
  };

  return (
    <div
      className="w-screen h-screen flex items-center justify-center bg-gray-100"
      style={{
        backgroundImage: `url(${BackImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* signup page */}
      <div className="bg-black w-[800px] p-8 rounded-lg border-2 border-[#E0B876] shadow-lg z-10 relative flex justify-center items-center">
        {/* left side (logo) */}
        <div className="w-[50%] flex flex-col justify-center items-center">
          <img src={LOGO} alt="Logo" />
        </div>
        <hr className="z-10 w-[1px] h-[450px] mx-8 bg-[#E0B876] border-none rounded" />
        {/* right side (form) */}
        <div className="w-[50%] flex flex-col justify-center items-center text-white">
          <div className="space-y-4 font-serif text-[#E0B876] mb-8">
            <h1 className="text-center text-3xl">Create Account</h1>
            <h2 className="text-center">
              Please register using account details below.
            </h2>
          </div>

          <form
            className="w-full flex flex-col items-center"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            {/* user email */}
            <div className="flex items-center bg-white rounded-xl border-[#E0B876] border-2 px-3 py-2 mb-4 w-80">
              <IoPerson className="text-black mr-2" />
              <input
                type="email"
                placeholder="Enter your E-mail"
                className="outline-none bg-transparent w-full text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* password */}
            <div className="flex items-center bg-white rounded-xl border-[#E0B876] border-2 px-3 py-2 mb-4 w-80">
              <TbLockPassword className="text-black mr-2 w-5 h-5" />
              <input
                type="password"
                placeholder="Enter your Password"
                className="outline-none bg-transparent w-full text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* otp and send otp */}
            <div className="flex items-center w-80 mb-4">
              <div className="flex items-center bg-white rounded-xl border-[#E0B876] border-2 px-3 py-2 w-full">
                <TbPassword className="text-black mr-2 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="outline-none bg-transparent w-full text-black"
                  value={OTP}
                  onChange={(e) => setOTP(e.target.value)}
                  required
                />
              </div>
              <button
                className="bg-[#E0B876] text-black px-4 py-[10px] flex flex-row justify-center items-center rounded-lg ml-2 font-medium hover:bg-[#d1a75e] transition-colors duration-200"
                onClick={handleSendOTP}
                type="button"
              >
                <span className="flex flex-row items-center gap-1">
                  Send <span>OTP</span>
                </span>
              </button>
            </div>

            {error && (
              <div className="text-red-400 text-sm mb-2 w-80 text-center">
                {error}
              </div>
            )}
            <div className="flex justify-center items-center w-80 mb-2">
              <button
                type="submit"
                className="bg-[#E0B876] text-black px-6 py-1 w-full rounded-md font-medium hover:bg-[#d1a75e] transition-colors duration-200"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-10 text-center">
            Already have an account?
            <span className="text-[#E0B876] font-medium hover:cursor-pointer ml-1">
              Sign In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
