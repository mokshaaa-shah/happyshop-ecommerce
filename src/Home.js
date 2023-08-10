import React, { useContext } from "react";
import Services from "./components/Services";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import Feature from "./components/Feature";
import Login from "./components/Login";

const Home = () => {
  const data = {
    name: "Happy Shop",
  };

  return (
    <>
      <HeroSection myData={data}></HeroSection>
      <Feature />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
