import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0.25, y: -20, transition: { duration: 0.5 } },
};

const getTranslateY = (index) => {
  if (index === 0 || index === 6) return "0";
  if (index === 1 || index === 5) return "9rem";
  if (index === 2 || index === 4) return "16rem";
  return "24rem"; // default translate-y for other indices
};

function ImageStagger({ Images, active }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        className="grid grid-cols-7 gap-4 p-24 mt-12 w-fit overflow-hidden"
        initial="hidden"
        animate="show"
        exit="exit"
        variants={{
          hidden: { opacity: 0.2 },
          show: {
            opacity: 1,

            transition: {
              staggerChildren: 0.05,
              duration: 1.0,
            },
          },
          exit: {
            opacity: 0.2,
            transition: {
              staggerChildren: 0.05,
              duration: 1.0,
            },
          },
        }}
      >
        {Images.map((imagePair, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col justify-between gap-4 `}
            variants={cardVariants}
            style={{ translateY: getTranslateY(index) }}
          >
            <motion.img
              src={`${imagePair[0]}`}
              alt={`Food ${index * 2 + 1}`}
              className="w-64 h-[350px] object-cover rounded-2xl"
              variants={cardVariants}
            />
            <motion.img
              src={`${imagePair[1]}`}
              alt={`Food ${index * 2 + 2}`}
              className="w-64 h-[350px] object-cover rounded-2xl"
              variants={cardVariants}
            />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

const Hero = () => {
  const foodImages = [
    ["/food/food_1.jpeg", "/food/food_2.jpeg"],
    ["/food/food_3.jpeg", "/food/food_4.jpeg"],
    ["/food/food_5.jpeg", "/food/food_6.jpeg"],
    ["/food/food_7.jpeg", "/food/food_8.jpeg"],
    ["/food/food_9.jpeg", "/food/food_10.jpeg"],
    ["/food/food_11.jpeg", "/food/food_12.jpeg"],
    ["/food/food_13.jpeg", "/food/food_14.jpeg"],
  ];
  const homeImages = [
    ["/home/home_1.jpeg", "/home/home_2.jpeg"],
    ["/home/home_3.jpeg", "/home/home_4.jpeg"],
    ["/home/home_5.jpeg", "/home/home_6.jpeg"],
    ["/home/home_7.jpeg", "/home/home_8.jpeg"],
    ["/home/home_9.jpeg", "/home/home_10.jpeg"],
    ["/home/home_11.jpeg", "/home/home_12.jpeg"],
    ["/home/home_13.jpeg", "/home/home_14.jpeg"],
  ];
  const clothesImages = [
    ["/clothes/cloth_1.jpeg", "/clothes/cloth_2.jpeg"],
    ["/clothes/cloth_3.jpeg", "/clothes/cloth_4.jpeg"],
    ["/clothes/cloth_5.jpeg", "/clothes/cloth_6.jpeg"],
    ["/clothes/cloth_7.jpeg", "/clothes/cloth_8.jpeg"],
    ["/clothes/cloth_9.jpeg", "/clothes/cloth_10.jpeg"],
    ["/clothes/cloth_11.jpeg", "/clothes/cloth_12.jpeg"],
    ["/clothes/cloth_13.jpeg", "/clothes/cloth_14.jpeg"],
  ];

  const greenImages = [
    ["/green/green_1.jpeg", "/green/green_2.jpeg"],
    ["/green/green_3.jpeg", "/green/green_4.jpeg"],
    ["/green/green_5.jpeg", "/green/green_6.jpeg"],
    ["/green/green_7.jpeg", "/green/green_8.jpeg"],
    ["/green/green_9.jpeg", "/green/green_10.jpeg"],
    ["/green/green_11.jpeg", "/green/green_12.jpeg"],
    ["/green/green_13.jpeg", "/green/green_14.jpeg"],
  ];

  const slideText = [
    { text: "weekend dinner idea", color: "#CDA02F", images: foodImages },
    { text: "home decor idea", color: "#8BAA9E", images: homeImages },
    { text: "new look outfit", color: "#0076D3", images: clothesImages },
    { text: "green thumb idea", color: "#407A57", images: greenImages },
  ];

  const handleScroll = (scrollTo) => {
    const element = document.getElementById(scrollTo);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slideText.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slideText.length]);

  return (
    <div className="grid grid-rows-2 h-screen items-center overflow-hidden snap-start">
      <div className="w-full h-96 flex flex-col items-center gap-6 justify-end">
        <span className="text-6xl font-bold mb-2 z-10 text-center ">
          Get your next
        </span>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="text-6xl font-bold text-center z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            style={{ color: slideText[active].color }}
          >
            {slideText[active].text}
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-4 mt-4 z-10">
          {slideText.map((text, index) => (
            <motion.div
              key={index}
              className="w-4 h-4 rounded-full hover:cursor-pointer"
              style={{
                background:
                  index === active ? slideText[active].color : "#afafaf",
                transition: "background 1s ease",
              }}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>

      <ImageStagger Images={slideText[active].images} active={active} />
      <div className="flex flex-col w-full h-fit justify-center items-center z-40 gap-6">
        <Link
          to="explore"
          smooth={true}
          duration={1000}
          className="cursor-pointer"
        >
          <motion.div
            className="w-12 h-12 rounded-full flex justify-center items-center z-40"
            animate={{
              y: [0, -20, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            style={{
              background: slideText[active].color,
              transition: "background 1s ease-in-out",
            }}
          >
            <FaChevronDown className="text-white" size={22} />
          </motion.div>
        </Link>
        <Link
          to="explore"
          smooth={true}
          duration={1000}
          className="text-center  font-bold p-5 w-full bg-[#fcf392] shadow-[0px_-12px_80px_24px_rgba(255,255,255,1.5)] cursor-pointer"
        >
          <span>
            Here's how it works <FaChevronDown className="inline" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
