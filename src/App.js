import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Login from "./Login/Login";
import Home from './Home/Home';
import Register from './Register/Register';
import Cart from './Cart/Cart';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <Route exact path='/Cart'>
          <Cart/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
