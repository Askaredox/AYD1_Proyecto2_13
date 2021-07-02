import React from "react";
import ProductItem from "./ProductItem";
import withContext from "../withContext";

const ProductList = props => {
  const { products } = props.context;

  return (
    <>
      <div className="hero is-medium is-info">
        <div className="hero-body container">
          <h1 className="title"> <font size="70">Todos Los Productos</font></h1>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                Ningun producto!
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default withContext(ProductList);
