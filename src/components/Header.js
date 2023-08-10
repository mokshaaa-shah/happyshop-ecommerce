import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <MainHeader>
      <Link to="/">
        <img src="./images/Happy.png" />
      </Link>
      <Navbar />
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
  img {
    width: 63%;
  }
`;
export default Header;
