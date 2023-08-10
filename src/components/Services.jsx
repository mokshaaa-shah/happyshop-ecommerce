import React from "react";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
const Services = () => {
  return (
    <Wrapper>
      <div className="conatiner">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super fast free delivery</h3>
            </div>
          </div>
          <div className="services-2">
            <div className="services-column-2">
              <div>
                <MdSecurity className="icon"></MdSecurity>
                <h3>non contact delivery</h3>
              </div>
            </div>
            <div className="services-column-2">
              <div>
                <GiReceiveMoney className="icon"></GiReceiveMoney>
                <h3>money back garanteer</h3>
              </div>
            </div>
          </div>
          <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon"></RiSecurePaymentLine>
              <h3>Super secure payment system</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  .container {
    background-color: ${({ theme }) => theme.colors.bg};
  }
  .grid {
    gap: 4.8rem;
  }
  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;

    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 2rem;

    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;
  }
  .services-column-2 {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    flex-direction: column;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .icon {
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
  .h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }
`;
export default Services;
