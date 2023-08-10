import React from "react";
import FormatPrice from "../helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
const ConfirmItem = ({ id, name, image, color, price, amount }) => {
  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      <div className="cart-hide">
        <p>{amount}</p>
      </div>
      <div className="cart-hide1">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div> </div>
    </div>
  );
};

export default ConfirmItem;
