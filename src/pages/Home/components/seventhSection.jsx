import React, { useState } from "react";
import { MembershipModal } from "../../../layouts/MembershipModal";
export const SeventhSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <>
            <div id="membership" className="bg-[#101010] p-10 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-2">
                    <p className="text-yellow-300 text-center font-bold">GET A MEMBERSHIP</p>
                    <p className="font-bold lg:text-4xl max-[430px]:text-2xl text-center lg:w-[70%] text-white pb-10">WE KEEP IT SIMPLE.NO CATCH.JUST OUTRAGEOUSLY GOOD PRICE.</p>
                </div>
                <div className="w-[100%] flex max-[430px]:flex-col max-[430px]:gap-4 justify-around items-center">
                    {/* CARD 1 START */}
                    <div className=" border border-gray-500 max-[430px]:w-[90%] lg:w-[25%] flex  flex-col h-fit ">
                        <div className="bg-blue-700 p-3">
                            <p className="text-white text-center">MEMBERSHIP</p>
                            <p className="text-white text-2xl text-center font-bold">3 MONTHS</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-5 p-5 pb-8 ">
                            <p className=" my-2 p-2 border-b w-[80%] text-white font-bold text-center">TRAINING PROGRAM</p>
                            <p className=" my-2 p-2 border-b w-[80%] text-white font-bold text-center">Nutrition Expertise</p>
                            <p className=" my-2 p-2 border-b w-[80%] text-white font-bold text-center">Supplement Guidance</p>

                        </div>

                        <button onClick={toggleModal} className="w-[200px] bg-yellow-300 py-3 text-black font-bold self-center my-4">
                            ENROLL NOW
                        </button>
                        <MembershipModal isOpen={isModalOpen} onClose={toggleModal} />

                    </div>
                    {/* CARD 1 END*/}
                    <div className=" border border-gray-500 max-[430px]:w-[90%] lg:w-[25%] flex  flex-col h-fit">
                        <div className="bg-[#ff9000] p-3">
                            <p className="text-white text-center">MEMBERSHIP</p>
                            <p className="text-white text-2xl text-center font-bold">6 MONTHS</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-5 p-5 pb-8">
                            <p className="  p-2 border-b w-[80%] text-white font-bold text-center my-6">TRAINING PROGRAM</p>
                            <p className="  p-2 border-b w-[80%] text-white font-bold text-center my-6">Nutrition Expertise</p>
                            <p className="  p-2 border-b w-[80%] text-white font-bold text-center my-6">Supplement Guidance</p>

                        </div>

                        <button onClick={toggleModal} className="w-[200px] bg-yellow-300 py-3 text-black font-bold self-center my-4">
                            ENROLL NOW
                        </button>
                        <MembershipModal isOpen={isModalOpen} onClose={toggleModal} />

                    </div>

                    <div className=" border border-gray-500 max-[430px]:w-[90%] lg:w-[25%] flex  flex-col h-fit">
                        <div className="bg-[#17a994] p-3">
                            <p className="text-white text-center">MEMBERSHIP</p>
                            <p className="text-white text-2xl text-center font-bold">12 MONTHS</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-5 p-5 pb-8">
                            <p className=" my-2 p-2 border-b w-[80%] text-white font-bold text-center">TRAINING PROGRAM</p>
                            <p className=" my-2 p-2 border-b w-[80%] text-white font-bold text-center">Nutrition Expertise</p>
                            <p className=" my-2 p-2 border-b w-[80%] text-white font-bold text-center">Supplement Guidance</p>

                        </div>

                        <button onClick={toggleModal} className="w-[200px] bg-yellow-300 py-3 text-black font-bold self-center my-4">
                            ENROLL NOW
                        </button>
                        <MembershipModal isOpen={isModalOpen} onClose={toggleModal} />

                    </div>
                </div>


            </div>
        </>
    );
}