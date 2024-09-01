import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/img/logo.png';
import { MembershipModal } from "./MembershipModal";
import { Link } from 'react-scroll';
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-black">
      <div className="flex justify-between items-center p-4 mx-4 md:mx-24 h-20">
        <img onClick={()=>screenTop} className="cursor-pointer" src={logo} width={150} alt="Logo" />
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className={`flex-col max-[430px]:flex max-[430px]:items-start md:flex md:flex-row justify-around items-center gap-4 md:gap-16 bg-black absolute md:relative top-20 md:top-0 left-0 md:left-auto right-0 md:right-auto w-full md:w-auto px-8 md:px-0 py-4 md:py-0 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:transform-none`}>
          <Link to="home" smooth={true} duration={500} className="font-bold text-white cursor-pointer hover:text-yellow-300 max-[430px]:my-3">Home</Link>
          <Link to="services" smooth={true} duration={500} className="font-bold text-white cursor-pointer hover:text-yellow-300 max-[430px]:my-3">Services</Link>
          <Link to="booking" smooth={true} duration={500} className="font-bold text-white cursor-pointer hover:text-yellow-300 max-[430px]:my-3">Booking</Link>
          <Link to="about" smooth={true} duration={500} className="font-bold text-white cursor-pointer hover:text-yellow-300 max-[430px]:my-3">About</Link>
          <Link to="membership" smooth={true} duration={500} className="font-bold text-white cursor-pointer hover:text-yellow-300 max-[430px]:my-3">Membership</Link>
          <button onClick={toggleModal} className="bg-yellow-400 w-full md:w-[200px] font-bold py-4 hover:bg-yellow-600">Become a member</button>
        </div>
      </div>
      <MembershipModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};
