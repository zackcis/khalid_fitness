import React from "react";
import { FaTimes, FaWhatsapp, FaInstagram } from "react-icons/fa";

export const MembershipModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-black">
          <FaTimes size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Become a Member</h2>
        <p className="mb-4">Get in touch with us through:</p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <FaWhatsapp size={24} className="text-green-500" />
            <a href="https://wa.me/+212632672685" className="text-lg text-black font-bold" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaInstagram size={24} className="text-pink-500" />
            <a href="https://instagram.com/khalidmardy_fit/" className="text-lg text-black font-bold" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
