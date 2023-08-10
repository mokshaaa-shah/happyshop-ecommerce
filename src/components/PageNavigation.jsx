import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <Link to="/">Home/</Link>
      {title}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  padding-left: 1.2rem;
  a {
    font-size: 2rem;
  }
`;
export default PageNavigation;
