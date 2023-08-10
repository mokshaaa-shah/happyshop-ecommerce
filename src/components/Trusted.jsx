import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper>
      <div className="companies">
        <h3> Trusted By 50+ Companies</h3>
        <img src="./images/companies.jpeg" />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  h3 {
    text-align: center;
    padding-top: 65px;
    color:#5138ee;
    font-size:3rem;
  }
  .companies {
    width: 100%;
    height: 500px;
  background-color:${({ theme }) => theme.colors.bg}
  img {
    margin-top: 20px;
  }
`;
export default Trusted;
