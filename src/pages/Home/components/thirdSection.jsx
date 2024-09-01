import React, { useState } from "react";
import hero from '../../../assets/img/hero-img.png'
import { FaBars, FaTimes } from "react-icons/fa";

import { MembershipModal } from "../../../layouts/MembershipModal";

export const ThirdSection = ()=>{

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };






    return(
        <>
        <div  className="bg-[#101010] flex justify-center items-center lg:gap-28 p-10 pb-0 max-[430px]:flex-col-reverse ">
        <div className=''>
                    <img src={hero} width={450} alt="" srcset="" />
                </div>
        <div className='lg:w-[40%] flex flex-col gap-10 max-[430px]:items-start '>
                    <div className='flex max-[430px]:justify-center items-center  gap-3'>
                        <div className=' p-[2px] w-[50px] bg-yellow-300'></div>
                        <p className='text-yellow-300'><b>WITH KHALID MARDY</b></p>
                    </div>

                    <p className='text-5xl font-bold text-white'>
                    Train with a Champion Khalid Mardy, the 2024 Moroccan Fitness Champion
                    </p>
                    <div className="flex flex-col  border-l-4 border-yellow-300 pl-7 gap-7">
                    <p className="w-[90%] text-[#919191] ">
                    With over 14 years of experience in athletics and multiple prestigious titles, including the 2024 Moroccan Fitness Champion, Khalid Mardy is dedicated to providing top-notch fitness coaching in Casablanca. His expertise in sports training techniques and detailed progress monitoring helps clients reach their peak performance, whether they train in-person or remotely.                    </p>
                    
                    <button onClick={toggleModal}  className='w-[200px] bg-yellow-300 py-3 text-black font-bold hover:bg-yellow-600'>join with us</button>
                    <MembershipModal isOpen={isModalOpen} onClose={toggleModal} />
                    </div>
                </div>
        </div>
        </>
    )
}