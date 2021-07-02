import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Http from "../services/Http";
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




  register = async ( pnombre, pdpi, pdireccion, pcorreo_electronico, pcontrasena) => {


    const { nombre, dpi, direccion, correo_electronico, contrasena } = this.state;
    if (!nombre || !dpi || !direccion || !correo_electronico || !contrasena) {
      return this.setState({ error: "Fill all fields!" });
    }else{
     
      const data = {  nombre:this.state.nombre, dpi:this.state.dpi, direccion:this.state.direccion, correo_electronico:this.state.correo_electronico, contrasena:this.state.contrasena };
      const response = await Http.registrar(data);
      if (response === 'ok'){
        alert('Usuario ingresado con éxito!');    
         
      }
      else{
        alert('ERROR: No se logró registrar el usuario, intente de nuevo!');
      }  

    }

    
    

  }



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
