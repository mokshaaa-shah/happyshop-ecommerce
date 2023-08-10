import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3> UH! you are lost .</h3>
          <p>
            {" "}
            the page you are looking doesnot exist . how you got here is a
            mystery .but you can click the below button to back to homepage
          </p>
          <Link to="/">
            <Button>hoempage</Button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
  }
  h2 {
    font-size: 10rem;
  }
  h3 {
    font-size: 4.2rem;
  }
  p {
    margin: 2rem 0;
  }
`;
export default ErrorPage;
