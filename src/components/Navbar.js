import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { useCartContext } from "../Context/cart_context";
const Navbar = () => {
  const { total_item } = useCartContext();
  console.log(total_item);
  const { loginWithRedirect } = useAuth0();
  const Nav = styled.nav`
    .links {
      display: flex;
      gap: 4.8rem;
      align-items: center;
    }
     

    .links {
      margin-left: 120px;
    }
    .navbar ul li {
      list-style: none;
      display: inline-block;
      margin: 0 20px;
    }

    .navbar ul li a {
      text-decoration: none;
      color: black;
      text-transform: uppercase;
      padding: 15px;
      font-size: 15px;
    }
    .navbar ul li a,
    .navbar ul li a:after,
    .navbar ul li a:before {
      transition: all 0.5s;
    }

    .navbar ul li a:hover {
      color: rgb(98 84 243);
    }

    .navbar ul li a {
      position: relative;
      z-index: 1;
    }
    ${
      "" /* 
    .navbar ul li a:hover {
      color: #ffffff;
    } */
    }

    .navbar ul li a:after {
      ${
        "" /* display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      width: 100%;
      height: 1px;
      content: ".";
      color: transparent;
      background: #966ee6;
      visibility: none;
      opacity: 0;
      z-index: -1; */
      }
    }

    .navbar ul li a:hover:after {
      opacity: 1;
      visibility: visible;
      height: 100%;
    }

    .cart-trolly {
      font-size: 25px;
      position: relative;
    }

    .cart-total-item {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      background-color: rgb(98 84 243);
      color: black;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -20%;
      left: 70%;
    }
    button {
    text-decoration: none;
    max-width: auto;
    background-color: rgb(98 84 243);
    color: rgb(255 255 255);
    padding: 10px;
    border: none;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
}
<style>
p, button {
    font-size: 1.65rem;
    line-height: 1.5;
    font-weight: 400;
    margin-bottom: 20px;
    -webkit-text-decoration: none;
    text-decoration: none;
}
    }
  `;
  return (
    <Nav>
      <div className="navbar">
        <ul class="links">
          <li class="active">
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart className="cart-trolly"></FaShoppingCart>
              <span className="cart-total-item">{total_item}</span>
            </Link>
          </li>
          <li>
            <button onClick={() => loginWithRedirect()}>Log In</button>;
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
