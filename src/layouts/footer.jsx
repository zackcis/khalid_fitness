import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import logo from '../assets/img/logo.png';
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
// import 'react-toastify/dist/ReactToastify.min.css'; 

export const Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all fields.", {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }

        emailjs
            .send(
                "service_yxhrxg9",  // Replace with your actual Service ID
                "template_z5idg8v", // Replace with your actual Template ID
                formData,
                "68pQe024jghocpcCR"   // Replace with your actual Public Key
            )
            .then(
                (response) => {
                    toast.success("Message sent successfully!", {
                        position: "top-right",
                        autoClose: 3000,
                    });
                    setFormData({ name: "", email: "", message: "" }); // Clear form
                },
                (error) => {
                    console.log("FAILED...", error);
                    toast.error("Something went wrong. Try again.", {
                        position: "top-right",
                        autoClose: 3000,
                    });
                }
            );
    };

    return (
        <>
            <div className="bg-black lg:p-14 max-[430px]:flex max-[430px]:flex-col max-[430px]:justify-center max-[430px]:items-center">
                <div className="lg:mx-20 max-[430px]:mx-10 flex max-[430px]:flex-col max-[430px]:gap-7 justify-around items-center">
                    <div className="flex flex-col max-[430px]:justify-center max-[430px]:items-center gap-5 lg:w-[50%]">
                        <img src={logo} className="p-0 m-0" width={200} alt="logo" />
                        <p className="text-[#5a5a5a] lg:w-[50%] max-[430px]:text-center">
                            Join Khalid Mardy on your fitness journey. From personalized training to expert nutrition advice, achieve your goals with the guidance of a Moroccan Fitness Champion. Let's build a stronger, healthier you together.
                        </p>

                        <div className="flex gap-9">
                            <a target="_blank" href="https://www.instagram.com/khalidmardy_fit/" className="p-3 border rounded-full hover:bg-yellow-300 cursor-pointer">
                                <FaInstagram className="text-white hover:text-black" />
                            </a>
                            <a target="_blank" href="https://www.instagram.com/khalidmardy_fit/" className="p-3 border rounded-full hover:bg-yellow-300 cursor-pointer">
                                <FaFacebookF className="text-white hover:text-black" />
                            </a>
                            <a target="_blank" href="https://www.instagram.com/khalidmardy_fit/" className="p-3 border rounded-full hover:bg-yellow-300 cursor-pointer">
                                <FaTwitter className="text-white hover:text-black" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-9 lg:w-[30%] max-[430px]:w-[100%]">
                        <p className="text-white text-2xl font-bold">CONTACT US</p>
                        <p className="text-[#5a5a5a]">We'd love to hear from you!</p>

                        <form onSubmit={sendEmail} className="flex flex-col gap-4">
    <input
        className="text-white border border-[#5a5a5a] bg-black p-3 rounded-md placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-300"
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
    />
    <input
        className="text-white border border-[#5a5a5a] bg-black p-3 rounded-md placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-300"
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
    />
    <textarea
        className="text-white border border-[#5a5a5a] bg-black p-3 rounded-md placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-300"
        name="message"
        rows="4"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
    ></textarea>
    <button
        type="submit"
        className="w-full bg-yellow-300 text-black font-bold p-4 rounded-md hover:bg-yellow-600 transition-colors duration-300"
    >
        Send Message
    </button>
</form>
                    </div>
                </div>

                <p className="text-center text-[#5a5a5a] pt-14 max-[430px]:w-[90%] max-[430px]:mb-7">
                    © 2024 Morocco, Designed & Developed by <span className="font-bold">Zakaria Dahar</span>. All rights reserved.
                </p>
            </div>
            <ToastContainer /> {/* Add ToastContainer here */}
        </>
    );
};