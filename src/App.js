import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import Login from './components/Login';
import ProductList from './components/ProductList';
import Register from './components/Register';
import Http from "./service/Http";
import Context from "./Context";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cart: {},
      products: [],
      correo:null
    };
    this.routerRef = React.createRef();
  }

  async componentDidMount() {
    let user = localStorage.getItem("user");
    let cart = localStorage.getItem("cart");

    const products = await axios.get('http://34.69.108.162/producto');
    user = user ? JSON.parse(user) : null;
    cart = cart? JSON.parse(cart) : {};

    this.setState({ user,  products: products.data, cart });
  }

  login = async (email, password) => {


    let data = { correo_electronico: email, contrasena: password };
    let response = await Http.login(data);
    if(response !== 'fail') {
     
       const user = {
         email,
         accessLevel: email === 'admin@example.com' ? 0 : 1
       }
 
       this.setState({ user });
       localStorage.setItem("user", JSON.stringify(user));

       this.setState({
        correo:email
      });

       return true;
     } else {
       return false;
     }
    
   

  }



  logout = e => {
    e.preventDefault();
    this.setState({ user: null });
    localStorage.removeItem("user");
  };

  addProduct = (product, callback) => {
    let products = this.state.products.slice();
    products.push(product);
    this.setState({ products }, () => callback && callback());
  };

  addToCart = cartItem => {
    let cart = this.state.cart;
    if (cart[cartItem.id]) {
      cart[cartItem.id].amount += cartItem.amount;
    } else {
      cart[cartItem.id] = cartItem;
    }
    if (cart[cartItem.id].amount > cart[cartItem.id].product.cantidad) {
      cart[cartItem.id].amount = cart[cartItem.id].product.cantidad;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  removeFromCart = cartItemId => {
    let cart = this.state.cart;
    delete cart[cartItemId];
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  clearCart = () => {
    let cart = {};
    localStorage.removeItem("cart");
    this.setState({ cart });
  };

  checkout = () => {
    if (!this.state.user) {
      this.routerRef.current.history.push("/login");
      return;
    }

    const cart = this.state.cart;

    const products = this.state.products.map(p => {
      if (cart[p.nombre]) {
        p.cantidad = cart[p.nombre].cantidad_prod - cart[p.nombre].amount;

       // alert('Usuario ingresado con ??xito!'+p.id_producto+'  '+p.cantidad); 
        
       
(async () => {

  let data = {
    id_producto: p.id_producto, 
    cantidad:p.cantidad
  };
  let response = await Http.rebajar(data);
  if(response !== 'ok') {
     console.log('Logging result ' + response); 
  } else {
     console.log('What happened? ' + response); 
  }

})();




      }
      return p;
    });

alert('Compra Terminada Gracias!!!!!!!!!'); 
    this.setState({ products });
    this.clearCart();
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          removeFromCart: this.removeFromCart,
          addToCart: this.addToCart,
          login: this.login,
          addProduct: this.addProduct,
          clearCart: this.clearCart,
          checkout: this.checkout
        }}
      >
        <Router ref={this.routerRef}>
        <div className="App">
          <nav
            className="navbar container"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <b className="navbar-item is-size-4 "><h1>E</h1>lectronic !!! <h1>S</h1>hop</b>
              <label
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ showMenu: !this.state.showMenu });
                }}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </label>
            </div>
              <div className={`navbar-menu ${
                  this.state.showMenu ? "is-active" : ""
                }`}>
                <Link to="/products" className="navbar-item">
                  Productos
                </Link>
                {this.state.user && this.state.user.accessLevel < 1 && (
                  <Link to="/add-product" className="navbar-item">
                    Agregar Producto
                  </Link>
                )}
                <Link to="/cart" className="navbar-item">
                  Carrito
                  <span
                    className="tag is-info"
                    style={{ marginLeft: "5px" }}
                  >
                    { Object.keys(this.state.cart).length }
                  </span>
                </Link>
                {!this.state.user ? (
                  <Link to="/login" className="navbar-item">
                    Iniciar Sesi??n
                  </Link>
                ) : (
                  <Link to="/" onClick={this.logout} className="navbar-item">
                    Cerrar Sesi??n
                  </Link>
                )                
                }
                 <Link to="/register" className="navbar-item">
                  Registrarse
                </Link>
              </div>
            </nav>
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/add-product" component={AddProduct} />
              <Route exact path="/products" component={ProductList} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        </Router>
      </Context.Provider>
    );
  }
}
