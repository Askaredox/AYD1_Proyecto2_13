import React from "react";
import ProductItem from "./ProductItem";
import withContext from "../withContext";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";




const ProductList = props => {
  const { products } = props.context;
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const t = [];
  t.slice()

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
            )).slice(Math.round(products.length/10)*(page-1),Math.round(products.length/10)*(page))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                Ningun producto!
              </span>
            </div>
          )}
        </div>
        <div>
          <Typography>Page: {page}</Typography>
          <Pagination count={10} page={page} onChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export default withContext(ProductList);
