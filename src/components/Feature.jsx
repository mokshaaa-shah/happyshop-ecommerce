import React from "react";
import { useProductContext } from "../Context/ProductContext";
import styled from "styled-components";
import Product from "./Product";
const Feature = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div>....loading</div>;
  }
  const Wrapper = styled.section`
    padding: 9rem 0;
    background-color: ${({ theme }) => theme.colors.bg};

    .container {
      max-width: 120rem;
    }
    .grid {
      display: grid;
      gap: 9rem;
    }
    .grid-three-column {
      grid-template-columns: repeat(3, 1fr);
    }
    .intro-data {
      margin-bottom: 0;
      text-transform: uppercase;
      color: #5138ee;
      text-align:center;
      font-size:3rem;
    }
    .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-align:center;
      text-transform: capitalize;
    }
    figure {
      width: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      transition: all 0.5s linear;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.2s linear;
        cursor: pointer;
      }
      &:hover::after {
        width: 100%;
      }
      &:hover img {
        transform: scale(1.2);
      }
      img {
        max-width: 90%;
        margin-top: 1.5rem;
        height: 20rem;
        transition: all 0.2s linear;
      }

      .caption {
        position: absolute;
        top: 15%;
        right: 10%;
        text-transform: uppercase;
        background-color: #bdb7fa;
        color:black};
        padding: 0.8rem 2rem;
        font-size: 1.2rem;
        border-radius: 2rem;
      }
    }

    .card {
      background-color: #fff;
      border-radius: 1rem;

      .card-data {
        padding: 0 2rem;
      }

      .card-data-flex {
        margin: 2rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      h3 {
        color: black;
        text-transform: capitalize;
        webkit-text-decoration: underline;
        text-decoration-color: white;
      }

      .card-data--price {
        color: black;
        margin-left: 2px;
      }

      .btn {
        margin: 2rem auto;
        background-color: rgb(0 0 0 / 0%);
        border: 0.1rem solid rgb(98 84 243);
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          background-color: rgb(98 84 243);
        }

        &:hover a {
          color: #fff;
        }
        a {
          
          font-size: 1.4rem;
        
        }
      }
    }
  `;
  return (
    <Wrapper classname="section">
      <div className="container">
        <div className="intro-data">check now</div>
        <div className="common-heading">Our Trendy Men's collection</div>
        <div className="grid grid-three-column">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Feature;
