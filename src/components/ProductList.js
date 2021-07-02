import React from "react";
import ProductItem from "./ProductItem";
import withContext from "../withContext";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const ProductList = props => {
  let { products } = props.context;
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [value, setValue] = React.useState(0);
  const handleChangev = (event, value) => {
    setValue(value);
  };
  products=products.filter(v=>{
    return parseInt(value)===0||v.categoria_id_categoria===parseInt(value)
  })
  return (
    <>
      <div className="hero is-medium is-info">
        <div className="hero-body container">
          <h1 className="title"> <font size="70">Todos Los Productos</font></h1>
        </div>
      </div>
      <br />
      <div className="container">        
        <FormControl component="fieldset">
          <FormLabel component="legend">Categoria</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={parseInt(value)} onChange={handleChangev}>
            <FormControlLabel value={0} control={<Radio />} label="Todos" />
            <FormControlLabel value={1} control={<Radio />} label="TV y Video" />
            <FormControlLabel value={2} control={<Radio />} label="Audio" />
            <FormControlLabel value={3} control={<Radio />} label="Seguridad" />
            <FormControlLabel value={4} control={<Radio />} label="Computación" />
          </RadioGroup>
        </FormControl>
        <div>
          <Typography>Page: {page}</Typography>
          <Pagination count={Math.round(products.length/10)} page={page} onChange={handleChange} />
        </div>
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
              />
            )).slice(10*(page-1),10*(page))
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
          <Pagination count={Math.round(products.length/10)} page={page} onChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export default withContext(ProductList);
