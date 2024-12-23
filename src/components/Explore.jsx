import React from "react";
import { BiSearch } from "react-icons/bi";

const Explore = () => {
  return (
    <div
      className="bg-[#fffd92] w-full h-screen grid grid-cols-2 snap-start"
      id="explore/"
    >
      <div className="flex w-full h-full justify-center items-center">
        <div className="relative w-2/3 h-2/3">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
            <img
              src="/food/food_9.jpeg"
              alt="food"
              className="w-64 h-[350px] rounded-2xl aspect-auto"
            />
          </div>
          <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <img
              src="/food/food_6.jpeg"
              alt="food"
              className="w-fit h-64 rounded-2xl object-fill"
            />
          </div>
          <div className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <img
              src="/food/food_7.jpeg"
              alt="food"
              className="w-fit h-36 rounded-2xl object-cover"
            />
          </div>
          <div className="absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img
              src="/food/food_13.jpeg"
              alt="food"
              className="w-fit h-36 rounded-2xl object-cover"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 bg-slate-100 w-fit h-24 flex justify-center items-center rounded-full p-6 gap-4 cursor-pointer">
            <BiSearch className="w-8 h-8" />
            <span className="font-ubuntu text-2xl font-bold text-primary-dark">
              easy momo recipe
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-6xl font-bold text-primary-dark p-4">
          Search for an idea
        </p>
        <p className="w-[400px] text-2xl text-primary text-center pb-4">
          What do you want to try next? Think of something you’re into—like
          “easy chicken dinner”—and see what you find.
        </p>

        <button className="px-3 py-2 text-white bg-primary rounded-3xl hover:bg-primary-dark">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Explore;
