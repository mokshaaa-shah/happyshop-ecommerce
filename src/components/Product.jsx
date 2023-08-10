import React from "react";
import { Link } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <div className="card">
      <Link to={`/singleproduct/${id}`}>
        <figure>
          <img src={image} />
          <figcaption className="caption">{category}</figcaption>
        </figure>
      </Link>
      <div className="card-data">
        <div className="card-data-flex">
          <h3>{name}</h3>
          <p className="card-data--price">
            {<FormatPrice price={price}></FormatPrice>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
