import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

const UpperHeader = () => {
  return (
    <div className="bg-black flex justify-center w-full border-b-2 " style={{ borderBottomColor: "#E0B876"}}>
    <div className="w-[1400px]  py-2 flex justify-between items-center text-white px-4">
      <div className="text-xs font-semibold font-sans">+91 9521688994</div>
      <div className="flex space-x-6">
        <FaInstagram className="w-4 h-4 inline" />
        <RiYoutubeFill className="w-4 h-4 inline" />
        <FaFacebookF className="w-[15px] h-[15px] inline" />
      </div>
    </div>
    </div>
  );
};

export default UpperHeader;
