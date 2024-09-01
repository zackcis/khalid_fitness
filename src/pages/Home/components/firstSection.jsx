
import { useContext, useState } from 'react';
import { MyContext } from '../../../utils/contextProvider';
import hero from '../../../assets/img/hero-hero.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { MembershipModal } from "../../../layouts/MembershipModal";


export const FirstSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };
    const [test, setTest] = useContext(MyContext)
    return (
        <>
            <div id="home" className='flex max-[430px]:flex-col  justify-center items-center lg:gap-20 bg-black'>
                <div className='lg:w-[25%] flex flex-col gap-10 max-[430px]:justify-center max-[430px]:items-center'>
                    <div className='flex items-center gap-3 max-[430px]:w-fit'>
                        <div className=' p-[2px] w-[50px] bg-yellow-300'></div>
                        <p className='text-yellow-300'><b>WITH KHALID MARDY</b></p>
                    </div>

                    <p className='text-5xl font-bold text-white max-[430px]:text-center'>
                        Transform your body Join Khalid Fit today!
                    </p>
                    <button onClick={toggleModal} className='w-[200px] bg-yellow-300 py-3 text-black font-bold hover:bg-yellow-600'>join with us</button>
                    <MembershipModal isOpen={isModalOpen} onClose={toggleModal} />
                </div>
                <div className=''>
                    <img src={hero} width={450} alt="" srcset="" />
                </div>
            </div>
        </>
    );
}
