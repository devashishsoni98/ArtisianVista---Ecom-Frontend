

import React from "react";
import clothingData from "../Data/allProducts";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import '../Products/product.css';
import allProducts from "../Data/allProducts";

const AllProductsPage = ({ product }) => {
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

const AllProducts = () => {
  return (
    <div className="products" >
      {allProducts.map((product) => (
        <AllProductsPage key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
