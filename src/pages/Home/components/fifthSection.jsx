import React from "react";

export const FifthSection = () => {
    return (
        <>

            <div className="bg-[#101010] pt-48 lg:p-10 max-[430px]:p-5 max-[430px]:pt-48  flex max-[430px]:flex-col max-[430px]:gap-4  lg:items-center justify-around">
                <div className="flex flex-col py-5">
                    <p className="text-yellow-300">Get A FREE CALL</p>
                    <p className="text-white text-5xl font-bold">GET A 1 FREE CALL ANYTIME.</p>
                </div>
                <div className="">
                    <p className="text-yellow-300  ">Call Us</p>
                    <p className="text-white text-2xl">00 212 699 3136</p>
                </div>
                <button className="w-[200px] bg-yellow-300 py-3 text-black font-bold hover:bg-yellow-600">
                    CALL US NOW
                </button>
            </div>
        </>
    );
}