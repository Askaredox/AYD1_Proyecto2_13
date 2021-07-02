import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import withContext from "../withContext";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      dpi: "",
      direccion: "",
      correo_electronico: "",
      contrasena: ""
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });
/*
  login = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    if (!username || !password) {
      return this.setState({ error: "Fill all fields!" });
    }
    this.props.context.login(username, password)
      .then((loggedIn) => {
        if (!loggedIn) {
          this.setState({ error: "Invalid Credentails" });
        }
      })
  };
*/

  register = (e) => {
    e.preventDefault();

    
    const { nombre, dpi, direccion, correo_electronico, contrasena } = this.state;
    if (!nombre || !dpi || !direccion || !correo_electronico || !contrasena) {
      return this.setState({ error: "Fill all fields!" });
    }
   /* this.props.context.register(correo_electronico, contrasena)
    .then((loggedIn) => {
      if (!loggedIn) {
        this.setState({ error: "Datos Invalidos" });
      }
    }) */  
  };



  render() {
    return !this.props.context.user ? (
      <>
        <div className="hero is-medium is-info ">
          <div className="hero-body container">
            <h4 className="title"><font size="70">Registro</font></h4>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={this.register}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third">
            <div className="field">
                <label className="label">Nombre: </label>
                <input
                  className="input"
                  type="nombre"
                  name="nombre"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">DPI: </label>
                <input
                  className="input"
                  type="dpi"
                  name="dpi"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Dirección: </label>
                <input
                  className="input"
                  type="direccion"
                  name="direccion"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Email: </label>
                <input
                  className="input"
                  type="email"
                  name="correo_electronico"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Password: </label>
                <input
                  className="input"
                  type="password"
                  name="contrasena"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.error && (
                <div className="has-text-danger">{this.state.error}</div>
              )}
              <div className="field is-clearfix">    
              <button
                  className="button is-danger is-outlined is-pulled-right"
                >
                  Registrarse
                </button>          
              </div>
            </div>
          </div>
        </form>
      </>
    ) : (
     <Redirect to="/login" />
    );
  }
}

export default withContext(Register);
