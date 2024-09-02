import React, { useState } from "react";
import './fourthSection.sass';
import chest from '../../../assets/img/chest.png';
import back from '../../../assets/img/back.webp';
import leg from '../../../assets/img/legs.png';
import shoulders from '../../../assets/img/shoulders.webp';
import chestbackground from '../../../assets/img/chest-workout.png';
import backbackground from '../../../assets/img/back-worckout.webp';
import legbackground from '../../../assets/img/leg-workout2.PNG';
import shouldersbackground from '../../../assets/img/shoulders-workout.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { MembershipModal } from "../../../layouts/MembershipModal";


export const FourthSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <>
            <div id="booking" className="bg-yellow-300 lg:p-24 max-[430px]:py-20 relative flex flex-col pb-32 lg:justify-start  h-[60vh]">
                <h2 className="text-3xl text-black text-center pb-32 font-bold max-[430px]:w-[100%]">
                    Professional Coaching for Peak Performance
                </h2>

                {/* Desktop Layout */}
                <div className="w-[90%] flex absolute h-[100%] top-48 max-[430px]:hidden">
                    {/* Leg Day */}
                    <div className="leg p-0 flex">
                        <div className="w-[100%] h-[100%] bg-[rgba(27,51,65,0.68)] flex justify-end">
                            <div className="flex flex-col gap-4 pl-9 h-[70%] w-[100%] self-end">
                                <div className="bg-yellow-300 rounded-full w-fit p-4">
                                    <img src={leg} width={50} alt="Leg Day" />
                                </div>
                                <p className="text-white font-bold text-2xl">Leg day</p>
                                <p className="w-[80%] text-[#919191]">Building power and stability through squats</p>
                                <button onClick={toggleModal} className="w-[150px] bg-yellow-300 py-2 text-black font-bold hover:bg-yellow-600">
                                    BOOK NOW
                                </button>
                                <MembershipModal isOpen={isModalOpen} onClose={toggleModal} />

                            </div>
                        </div>
                    </div>

                    {/* Shoulders Day */}
                    <div className="shoulders p-0">
                        <div className="w-[100%] h-[100%] bg-[#1b3341ad] flex justify-end">
                            <div className="flex flex-col gap-4 pl-9 h-[70%] w-[100%] self-end">
                                <div className="bg-yellow-300 rounded-full w-fit p-4">
                                    <img src={shoulders} width={50} alt="Shoulders Day" />
                                </div>
                                <p className="text-white font-bold text-2xl">Shoulders day</p>
                                <p className="w-[80%] text-[#919191]">Enhancing shoulder definition and upper strength.</p>
                                <button onClick={toggleModal} className="w-[150px] bg-yellow-300 py-2 text-black font-bold hover:bg-yellow-600">
                                    BOOK NOW
                                </button>
                                <MembershipModal isOpen={isModalOpen} onClose={toggleModal} />

                            </div>
                        </div>
                    </div>

                    {/* Chest Day */}
                    <div className="chest p-0">
                        <div className="w-[100%] h-[100%] bg-[#1b3341ad] flex justify-end">
                            <div className="flex flex-col gap-4 pl-9 h-[70%] w-[100%] self-end">
                                <div className="bg-yellow-300 rounded-full w-fit p-4">
                                    <img src={chest} width={50} alt="Chest Day" />
                                </div>
                                <p className="text-white font-bold text-2xl">Chest day</p>
                                <p className="w-[80%] text-[#919191]">Strengthening the chest with heavy presses</p>
                                <button onClick={toggleModal} className="w-[150px] bg-yellow-300 py-2 text-black font-bold hover:bg-yellow-600">
                                    BOOK NOW
                                </button>
                                <MembershipModal isOpen={isModalOpen} onClose={toggleModal} />

                            </div>
                        </div>
                    </div>

                    {/* Back Day */}
                    <div className="back p-0">
                        <div className="w-[100%] h-[100%] bg-[#1b3341ad] flex justify-end">
                            <div className="flex flex-col gap-4 pl-9 h-[70%] w-[100%] self-end">
                                <div className="bg-yellow-300 rounded-full w-fit p-4">
                                    <img src={back} width={50} alt="Back Day" />
                                </div>
                                <p className="text-white font-bold text-2xl">Back day</p>
                                <p className="w-[80%] text-[#919191]">Developing a strong, wide back foundation</p>
                                <button onClick={toggleModal} className="w-[150px] bg-yellow-300 py-2 text-black font-bold hover:bg-yellow-600">
                                    BOOK NOW
                                </button>
                                <MembershipModal isOpen={isModalOpen} onClose={toggleModal} />

                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout (Swiper) */}
                <div className="w-[90%] flex absolute justify-center items-center h-[100%] top-48 left-5 lg:hidden">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}  // Show only one item at a time
                        navigation        // Enable navigation buttons
                        modules={[Navigation]} // Import the Navigation module
                    >
                        <SwiperSlide>
                            <div className="leg p-0  flex  ">
                                <div className="w-[100%] h-[100%] bg-[rgba(27,51,65,0.68)] flex justify-end">
                                    <div className="flex flex-col gap-4 pl-9 h-[70%] w-[100%] self-end ">
                                        <div className="bg-yellow-300 rounded-full w-fit p-4 ">
                                            <img src={leg} width={50} alt="Leg Day" />
                                        </div>
                                        <p className="text-white font-bold text-2xl">Leg day</p>
                                        <p className="w-[80%] text-[#919191]">aBuilding power and stability through squats</p>
                                        <button onClick={toggleModal} className="w-[150px] bg-yellow-300 py-2 text-black font-bold hover:bg-yellow-600">
                                            BOOK NOW
                                        </button>
                                        <MembershipModal isOpen={isModalOpen} onClose={toggleModal} />

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="shoulders p-0 flex">
                                <div className="w-[100%] h-[100%] bg-[#1b3341ad] flex justify-end">
                                    <div className="flex flex-col gap-4 pl-9 h-[70%] w-[100%] self-end ">
                                        <div className="bg-yellow-300 rounded-full w-fit p-4 ">
                                            <img src={shoulders} width={50} alt="Shoulders Day" />
                                        </div>
                                        <p className="text-white font-bold text-2xl">Shoulders day</p>
                                        <p className="w-[80%] text-[#919191]">Enhancing shoulder definition and upper strength.</p>
                                        <button onClick={toggleModal} className="w-[150px] bg-yellow-300 py-2 text-black font-bold hover:bg-yellow-600">
                                            BOOK NOW
                                        </button>
                                        <MembershipModal isOpen={isModalOpen} onClose={toggleModal} />

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="chest p-0 flex">
                                <div className="w-[100%] h-[100%] bg-[#1b3341ad] flex justify-end">
                                    <div className="flex flex-col gap-4 pl-9 h-[70%] w-[100%] self-end ">
                                        <div className="bg-yellow-300 rounded-full w-fit p-4 ">
                                            <img src={chest} width={50} alt="Chest Day" />
                                        </div>
                                        <p className="text-white font-bold text-2xl">Chest day</p>
                                        <p className="w-[80%] text-[#919191]">Strengthening the chest with heavy presses</p>
                                        <button onClick={toggleModal} className="w-[150px] bg-yellow-300 py-2 text-black font-bold hover:bg-yellow-600">
                                            BOOK NOW
                                        </button>
                                        <MembershipModal isOpen={isModalOpen} onClose={toggleModal} />

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="back p-0 flex">
                                <div className="w-[100%] h-[100%] bg-[#1b3341ad] flex justify-end">
                                    <div className="flex flex-col gap-4 pl-9 h-[70%] w-[100%] self-end ">
                                        <div className="bg-yellow-300 rounded-full w-fit p-4 ">
                                            <img src={back} width={50} alt="Back Day" />
                                        </div>
                                        <p className="text-white font-bold text-2xl">Back day</p>
                                        <p className="w-[80%] text-[#919191]">Developing a strong, wide back foundation</p>
                                        <button onClick={toggleModal} className="w-[150px] bg-yellow-300 py-2 text-black font-bold hover:bg-yellow-600">
                                            BOOK NOW
                                        </button>
                                        <MembershipModal isOpen={isModalOpen} onClose={toggleModal} />

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}
