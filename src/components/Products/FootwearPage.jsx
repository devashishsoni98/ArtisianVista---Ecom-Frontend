

import React from "react";
import FootwearData from "../Data/footwearData";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import '../Products/product.css';

const FootwearPage = ({ product }) => {
  return (
    <>
    <div className="p-card-container">

    <div className="p-card">
      <div className="card-img" style={{ backgroundImage: `url(${product.image})` }}></div>
      <div className="card-info">
        <p className="text-title">{product.title}</p>
        {/* <p className="text-body">{product.description}</p> */}
      </div>
      <div className="card-footer">
        <span className="text-title">${product.price}</span>
        <div className="card-button">
          <FaShoppingCart />
        </div>
      </div>
    </div>
    </div>
    
    </>
  );
};

const Footwear = () => {
  return (
    <div className="products">
      {FootwearData.map((product) => (
        <FootwearPage key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Footwear;
