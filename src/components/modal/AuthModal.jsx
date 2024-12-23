import React from "react";
import Signup from "../Signup";
import { IoMdClose } from "react-icons/io";

const AuthModal = ({ modalType, handleClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative">
        <div className="absolute top-5 right-5">
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 hover:bg-slate-200 hover:rounded-full focus:outline-none"
          >
            <IoMdClose size={28} />
          </button>
        </div>
        <Signup />
      </div>
    </div>
  );
};

export default AuthModal;
