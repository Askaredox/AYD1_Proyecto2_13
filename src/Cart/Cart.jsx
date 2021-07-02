import React from "react";
import { withRouter } from "react-router-dom";

import "./Cart.css";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      password: "",
      user: "",
    };
  }
  componentDidMount() {
    let user = 0//localStorage.getItem("user");
    if (user === null){
      this.props.history.push("/login");
      return;
    }
    let reportes = [];
    // Http.get_reportes().then((res) => {
    //   reportes = res;
    //   this.setState({ reports: res });
    //   console.log(reportes);
    // });
  }
  render() {
    return <h1>Cart</h1>;
  }
}

export default withRouter(Cart);
