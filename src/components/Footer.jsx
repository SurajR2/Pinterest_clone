import React from "react";
import Signup from "./Signup";

const Footer = () => {
  return (
    <div className="bg-[url('/background.webp')] bg-no-repeat bg-center bg-cover w-screen h-screen snap-start">
      <div className=" relative bg-[rgba(0,0,0,0.6)] w-full h-full grid grid-cols-2">
        <div className=" text-white  flex items-center justify-center">
          <h1 className=" text-7xl font-bold w-96">
            Sign up to get your ideas
          </h1>
        </div>
        <Signup />

        <div className="absolute bottom-2 transform translate-y-2 w-screen p-2 bg-white">
          <p className=" text-center text-sm py-1">
            © 2024 Pinterest. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
