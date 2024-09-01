import React from "react";
import { LiaDumbbellSolid } from "react-icons/lia";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiMedicinePills } from "react-icons/gi";
import { LuMedal } from "react-icons/lu";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import './secondSection.sass'




export const SecondSection = () => {
    return (
        <div id="services" className="bg-[#101010] flex flex-col justify-center items-center gap-5 lg:p-10 lg:pt-16">
            <h1 className="text-white font-bold text-5xl lg:w-[50%] text-center max-[430px]:py-10 ">Personalized Fitness Training Tailored to Your Goals</h1>
            <div className="flex max-[430px]:flex-col justify-center items-center gap-7 lg:p-10 w-[100%] h-[100%] lg:px-20 ">
                <div className="border border-blue-600 lg:w-[30%] max-[430px]:w-[80%]  p-4 lg:py-10 flex flex-col justify-between items-center max-[430px]:h-60 lg:h-80 card ">
                    <div className="bg-blue-600 p-3 rounded-full heading">
                        <LiaDumbbellSolid className=" rounded-full text-white text-4xl   " />
                    </div>
                    <p className="font-bold text-white">Training Programs</p>
                    <p className="text-[#919191] text-center w-[85%]">Custom fitness programs tailored to your unique goals</p>
                </div>
                <div className="border border-[#55f753] lg:w-[30%] max-[430px]:w-[80%]  p-4 lg:py-10 flex flex-col justify-between items-center max-[430px]:h-60 lg:h-80 card1 ">
                    <div className="bg-[#55f753] p-3 rounded-full">
                        <MdOutlineFoodBank className=" rounded-full text-white text-4xl   " />
                    </div>
                    <p className="font-bold text-white">Nutrition Expertise</p>
                    <p className="text-[#919191] text-center w-[85%]"> Expert nutrition advice for optimized fitness results</p>
                </div>
                <div className="border border-[#daaf53] lg:w-[30%] max-[430px]:w-[80%]  p-4 lg:py-10  flex flex-col justify-between items-center max-[430px]:h-60 lg:h-80 card2 ">
                    <div className="bg-[#daaf53] p-3 rounded-full">
                        <GiMedicinePills className=" rounded-full text-white text-4xl   " />
                    </div>
                    <p className="font-bold text-white">Supplement Guidance</p>
                    <p className="text-[#919191] text-center w-[85%]">Professional supplement advice to enhance workout results</p>
                </div>
                <div className="border border-red-500 lg:w-[30%] max-[430px]:w-[80%]  p-4 lg:py-10 flex flex-col justify-between items-center max-[430px]:h-60 lg:h-80 card3 ">
                    <div className="bg-red-500 p-3 rounded-full">
                        <LuMedal className=" rounded-full text-white text-4xl   " />
                    </div>
                    <p className="font-bold text-white">Competition Preparation</p>
                    <p className="text-[#919191] text-center w-[85%]">Specialized coaching for peak competition performance success</p>

                </div>
                <div className="border border-[#9b1fe8] lg:w-[30%] max-[430px]:w-[80%]  p-4 lg:py-10 flex flex-col justify-between items-center max-[430px]:h-60 lg:h-80 card4 ">
                    <div className="bg-[#9b1fe8] p-3 rounded-full">
                        <PiPersonArmsSpreadFill className=" rounded-full text-white text-4xl   " />
                    </div>
                    <p className="font-bold text-white">Personalized Coaching</p>
                    <p className="text-[#919191] text-center w-[85%]">One-on-one customized coaching for effective fitness improvement</p>
                </div>
            </div>
        </div>
    );
}