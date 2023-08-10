import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
import { useDuctContext, useProductContext } from "./Context/ProductContext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Welcome to our E-commerce",
  };
  return (
    <>
      {myName}
      <HeroSection myData={data} />;
    </>
  );
};

export default About;
