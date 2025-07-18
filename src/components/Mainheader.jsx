import React from "react";
import Logo from "../assets/LOGO.png";
import { IoIosSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

const Mainheader = () => {
  return (

    <div className="w-[1450px] flex justify-around items-center space-x-28">
      <div>
        <img  className="w-[150px] h-[60px]" src={Logo} alt="Logo" />
      </div>
      <div className="text-[#E0B876] flex justify-center items-center font-serif text-base">
        <ul className="flex space-x-9 ">
          <li className="hover:text-white hover:border-b border-black ">Home </li>
          <li className="hover:text-white hover:border-b border-black ">ABOUT US </li>
          <li className="flex items-center gap-1 hover:text-white hover:border-b border-black "> HERTIAGE WEAR <FaChevronDown className="inline w-3 h-3" /></li>
          <li className="flex items-center gap-1 hover:text-white hover:border-b border-black "> WEDDING WEAR  <FaChevronDown className="inline w-3 h-3"/></li>
          <li className="hover:text-white hover:border-b border-black "> CONTACT </li>
        </ul>
      </div>
      <div className="flex space-x-9 justify-center items-center">
      <IoIosSearch className="w-5 h-5"/>
      <IoPerson className="w-5 h-5"/>
      <IoMdHeartEmpty className="w-5 h-5"/>
      <MdShoppingCart className="w-5 h-5"/>
      </div>
    </div>

  );
};

export default Mainheader;
