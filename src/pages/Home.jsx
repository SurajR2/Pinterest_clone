import React from "react";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Hero />
      <Explore />
      <Footer />
    </div>
  );
};

export default Home;
