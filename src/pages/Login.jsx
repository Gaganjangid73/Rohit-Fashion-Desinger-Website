import React from "react";
import LOGO from "../assets/LOGO.png";
import { IoPerson } from "react-icons/io5";
import { TbLockPassword } from "react-icons/tb";

const Login = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      {/* login page */}
      <div className="bg-black w-[800px] p-8 rounded-lg border-2 border-[#E0B876] shadow-lg z-10 relative flex justify-center items-center">
        {/* right side */}
        <div className="w-[50%] flex-col justify-center items-center">
          <img src={LOGO} alt="Logo" />
        </div>
        <hr className="z-10 w-[1px] h-[350px] mx-8 bg-[#E0B876] border-none rounded" />
        {/* left side */}
        <div className="w-[50%] flex-col justify-center items-center text-white">
          <div className="space-y-4 font-serif text-[#E0B876]">
          <h1 className="text-center text-3xl ">Login</h1>
          <h2 className="text-center">
            Please login using account detail bellow.
          </h2>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <form className="w-full">
              {/* user email */}
              <div className="flex items-center bg-white rounded-xl border-[#E0B876] border-2 px-3 py-2 mb-4">
                <IoPerson className="text-black mr-2" />
                <input
                  type="text"
                  placeholder="Enter your E-mail"
                  className="outline-none bg-transparent w-full text-black"
                />
              </div>
              {/* password */}
              <div className="flex items-center bg-white rounded-xl border-[#E0B876] border-2 px-3 py-2 mb-4">
                <TbLockPassword  className="text-black mr-2 w-5 h-5" />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="outline-none bg-transparent w-full text-black"
                />
              </div>
            </form>
            
          </div>
          <div className="flex justify-between">
            <button className="bg-[#E0B876] text-black px-6 py-1 rounded-md font-medium hover:bg-[#d1a75e] transition-colors duration-200">Sign In</button>

            <h4 className="hover:cursor-pointer">Forgot your password?</h4>
          </div>
         <div className="mt-10 text-center">Don’t have an account? <span className="text-[#E0B876] font-medium hover:cursor-pointer"> Signup </span></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
