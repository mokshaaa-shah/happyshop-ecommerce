import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../styles/Button";
const HeroSection = ({ myData }) => {
  const { name } = myData;
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">welcome to</p>
            <h1> {name}</h1>
            <p>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
            <Link to="/products">
              <Button> Shop now</Button>
            </Link>
          </div>
          <img src="./images/hero.jpg" />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    max-width: 120rem;
    margin-top: 25px;
  }

  .grid {
    display: grid;
    gap: 9rem;
  }

  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 5px;
  }

  img {
    min-width: 10rem;
    height: 30rem;
  }

  .hero-section-data {
    padding: 10px;
  }
  .hero-button {
    margin-top: 30px;
  }
`;
export default HeroSection;
