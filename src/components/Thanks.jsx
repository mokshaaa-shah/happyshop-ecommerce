import React from "react";
import styled from "styled-components";
import ConfirmItem from "./ConfirmItem";
import { useCartContext } from "../Context/cart_context";
import FormatPrice from "../helpers/FormatPrice";
import { useState } from "react";
import { Button } from "../styles/Button";
const Thanks = () => {
  const { cart, shipping_fee, total_price, clearCart } = useCartContext();

  const [showPrompt, setShowPrompt] = useState(false);
  const [address, setAddress] = useState("");

  const handleShowPrompt = () => {
    setShowPrompt(true);
  };
  const handlePromptOK = (address) => {
    setAddress(address);
    setShowPrompt(false);
  };

  const handlePromptCancel = () => {
    setShowPrompt(false);
  };
  const handleShopping = () => {
    window.location = "/products";
    clearCart();
  };
  return (
    <Wrapper>
      <div>
        <h1>Thanks for shopping with us</h1>
        <div className="card-item">
          {cart.map((curElem) => {
            return <ConfirmItem key={curElem.id} {...curElem}></ConfirmItem>;
          })}
        </div>
        <p className="shipping">+ shipping fee</p>
        <hr />
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>subtotal:</p>
              <p>
                <FormatPrice price={total_price + shipping_fee} />
              </p>
            </div>
          </div>
        </div>
        <Button className="confirm" onClick={handleShowPrompt}>
          Confirm Order
        </Button>
        {address && (
          <div className="adress">
            Your items will be delivered to {address}
          </div>
        )}
        {showPrompt && (
          <div className="custom-prompt">
            <div className="custom-prompt-content">
              <span>Enter your address:</span>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <button onClick={() => handlePromptOK(address)}>OK</button>
              <br />
              <button onClick={handlePromptCancel}>Cancel</button>
            </div>
          </div>
        )}
        <Button className="confirm2" onClick={handleShopping}>
          Continue Shopping
        </Button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
 padding: 9rem 0;
 /* OrderConfirmation.css */
 .confirm{
    margin-left:1000px;
    padding: 15px
 }
 .confirm2{
    margin-top: 30px;
    margin-left:600px;
 }
 .adress { margin-left: 500px;
 margin-top: 50px;
 font-size: 2rem;
 }
 
.custom-prompt {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.custom-prompt-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.custom-prompt-content input {
  width: 100%;
  margin-bottom: 10px;
}

.custom-prompt-content button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
}

.btn-clear {
  background-color: #e74c3c;
  margin-right: 70px;
}
.shipping{
    margin-left:810px;
}
.grid-four-column {
  grid-template-columns: repeat(4, 1fr);
}

.grid-five-column {
  grid-template-columns: repeat(4, 1fr) 0.3fr;
  text-align: center;
  align-items: center;
  margin-left: 20px;
}
.cart-heading {
  text-align: center;
  text-transform: uppercase;
}
hr {
 
  width: 110px;
  margin-left: 800px
}
.cart-item {
    margin-left : 20px;
  padding: 3.2rem 0;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
}

.cart-user--profile {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 5.4rem;

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }
  h2 {
    font-size: 2.4rem;
  }
}
.cart-user--name {
  text-transform: capitalize;
}
.cart-image--name {
  /* background-color: red; */
  align-items: center;
  display: grid;
  gap: 1rem;
  grid-template-columns: 0.4fr 1fr;
  text-transform: capitalize;
  text-align: left;
  img {
    max-width: 5rem;
    height: 5rem;
    object-fit: contain;
    color: transparent;
  }

  .color-div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    .color-style {
      width: 1.4rem;
      height: 1.4rem;

      border-radius: 50%;
    }
  }
}

.cart-two-button {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;

  .btn-clear {
    background-color: #e74c3c;
  }
}

.amount-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  font-size: 1.4rem;

  button {
    border: none;
    background-color: #fff;
    cursor: pointer;
  }

  .amount-style {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.btn};
  }
}

.remove_icon {
  font-size: 1.6rem;
  color: #e74c3c;
  cursor: pointer;
}

.order-total--amount {
  width: 100%;
  margin: 0  0;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  .order-total--subdata {
    
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    padding: 0.2rem;
    margin-right: 580px
  }
 x
  div {
    display: flex;
    gap: 3.2rem;
    justify-content: space-between;
  }

  div:last-child {
    background-color: #fafafa;
  }

  div p:last-child {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.heading};
  }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid-five-column {
    grid-template-columns: 1.5fr 1fr 0.5fr;
  }
  .cart-hide {
    display: none;
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    gap: 2.2rem;
  }

  .order-total--amount {
    width: 100%;
    text-transform: capitalize;
    justify-content: flex-start;
    align-items: flex-start;

    .order-total--subdata {
      width: 100%;
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
  }`;
export default Thanks;
