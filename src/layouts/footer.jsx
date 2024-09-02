import React from "react";
import logo from '../assets/img/logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";




export const Footer = () => {
    return (
        <>
            <div className="bg-black lg:p-14 max-[430px]:flex max-[430px]:flex-col max-[430px]:justify-center max-[430px]:items-center ">
                <div className="lg:mx-20 max-[430px]:mx-10 flex max-[430px]:flex-col max-[430px]:gap-7 justify-around items-center">
                    <div className="flex flex-col max-[430px]:justify-center max-[430px]:items-center gap-5 lg:w-[50%]">
                        <img src={logo} className="p-0 m-0" width={200} alt="" srcset="" />
                        <p className="text-[#5a5a5a] lg:w-[50%] max-[430px]:text-center">Join Khalid Mardy on your fitness journey. From personalized training to expert nutrition advice, achieve your goals with the guidance of
                             a Moroccan Fitness Champion. Let's build a stronger, healthier you together.</p>

                        <div className="flex gap-9">
                            <a target="_blank" href="https://www.instagram.com/khalidmardy_fit/" className="p-3 border rounded-full hover:bg-yellow-300 cursor-pointer">
                                <FaInstagram className="text-white hover:text-black " />
                            </a>
                            <a target="_blank" href="https://www.instagram.com/khalidmardy_fit/" className="p-3 border rounded-full hover:bg-yellow-300 cursor-pointer">
                                <FaFacebookF className="text-white hover:text-black " />
                            </a>
                            <a target="_blank" href="https://www.instagram.com/khalidmardy_fit/" className="p-3 border rounded-full hover:bg-yellow-300 cursor-pointer">
                                <FaTwitter className="text-white hover:text-black " />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-9 lg:w-[30%] max-[430px]:w-[100%]">
                        <p className="text-white text-2xl font-bold">NEWSLETTER</p>
                        <p className="text-[#5a5a5a] ">For latest updates Sign up</p>
                        <input className="text-[#5a5a5a] border border-[#5a5a5a] p-2 bg-black" type="text" placeholder="Enter email here" />
                        <button className="w-full bg-yellow-300 p-4 hover:bg-yellow-600">Subscribe</button>
                    </div>
                </div>
                <p className="text-center text-[#5a5a5a] pt-14 max-[430px]:w-[90%] max-[430px]:mb-7">	&copy; 2024 Morocco,Disigned & Developed by <span className="font-bold"> Zakaria Dahar</span>. All rights reserved</p>
            </div>
        </>
    )
}