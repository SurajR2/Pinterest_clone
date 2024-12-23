import React, { useEffect, useState } from "react";
import logo from "/pinterest.png";
import AuthModal from "./modal/AuthModal";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    status: false,
    modal: "",
  });

  const handleModalOpen = (modal) => {
    setIsModalOpen((prev) => ({
      status: !prev.status,
      modal: prev.status ? "" : modal,
    }));
  };

  useEffect(() => {
    isModalOpen.status
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [isModalOpen.status]);

  return (
    <div className="fixed top-0 left-0 w-full  flex items-center p-5 bg-white z-50">
      <div className="flex items-center justify-center gap-1 hover:cursor-pointer">
        <img src={logo} alt="logo" className="size-10" />
        <span className="text-xl font-bold text-primary-text">Pinterest</span>
      </div>

      <div>
        <ul className="flex flex-row gap-6 px-6 font-bold text-md">
          <li className="hover:cursor-pointer">
            <a>Watch</a>
          </li>
          <li className="hover:cursor-pointer">
            <a>Explore</a>
          </li>
        </ul>
      </div>
      <div className="ml-auto text-md">
        <ul className="flex flex-row gap-6 px-6 font-bold ">
          <li className="hover:cursor-pointer hover:underline">
            <a>About</a>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <a>Business</a>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <a>Blog</a>
          </li>
        </ul>
      </div>
      <div className="ml-2 flex font-bold gap-2 text-md">
        <button className="px-3 py-2 text-white bg-primary rounded-3xl hover:bg-primary-dark">
          Log In
        </button>
        <button
          className="px-3 py-2 text-black bg-gray rounded-3xl hover:bg-dark-gray"
          onClick={() => handleModalOpen("signup")}
        >
          Sign Up
        </button>
      </div>
      {isModalOpen.status && <AuthModal handleClose={handleModalOpen} />}
    </div>
  );
};

export default Header;
