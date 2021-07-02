import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { withRouter } from "react-router-dom";

import Http from "../service/Http";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      nombre: "",
      apellido: "",
      dpi: "",
      correo: "",
      direccion: "",
      password: "",
      confirmPass: "",
    };
  }
  render() {
    return (
      <div>
        <Card className="login-card">
          <CardContent>
            <form>
              <Typography color="textSecondary" variant="h4">
                Registrar
              </Typography>
              <TextField
                id="outlined-nombre"
                label="Nombre"
                variant="outlined"
                className="login-user"
                value={this.state.nombre}
                onChange={this.handleChange("nombre")}
              />
              <TextField
                id="outlined-apellido"
                label="Apellido"
                variant="outlined"
                className="login-user"
                value={this.state.apellido}
                onChange={this.handleChange("apellido")}
              />
              <TextField
                id="outlined-dpi"
                label="DPI"
                variant="outlined"
                className="login-user"
                value={this.state.dpi}
                onChange={this.handleChange("dpi")}
              />
              <TextField
                id="outlined-correo"
                label="Correo"
                variant="outlined"
                className="login-user"
                value={this.state.correo}
                onChange={this.handleChange("correo")}
              />
              <FormControl className="login-pass" variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  type={this.state.showPassword ? "text" : "password"}
                  value={this.state.password}
                  onChange={this.handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        edge="end"
                      >
                        {this.state.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className="login-pass" variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Confirm password
                </InputLabel>
                <OutlinedInput
                  type={this.state.showPassword ? "text" : "password"}
                  value={this.state.confirmPass}
                  onChange={this.handleChange("confirmPass")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        edge="end"
                      >
                        {this.state.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <TextField
                id="outlined-direccion"
                label="Dirección"
                variant="outlined"
                className="login-user"
                value={this.state.direccion}
                onChange={this.handleChange("direccion")}
              />
              <CardActions>
                <Button
                  variant="contained"
                  color="secondary"
                  className="login-button"
                  onClick={this.registerRedirect}
                >
                  Atrás
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="login-button"
                  onClick={this.registerSubmit}
                >
                  Registrar
                </Button>
              </CardActions>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };
  handleChange = (prop) => (event) => {
    this.setState({ [prop]: event.target.value });
  };
  registerSubmit = async () => {
    if (this.state.password !== this.state.confirmPass) {
      alert("Las contraseñas no coinciden, intente de nuevo!");
      this.setState({
        confirmPass: "",
        password: "",
      });
    } else if (this.testComplete()) {
      alert("Falta un dato dentro los requisitos, intente de nuevo!");
      this.setState({
        confirmPass: "",
        password: "",
      });
    } else {
      let new_user = {
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        dpi: this.state.dpi,
        correo: this.state.correo,
        direccion: this.state.direccion,
        password: this.state.password
      };
      let response = await Http.registrar(new_user);
      if (response === "ok") {
        alert("Usuario ingresado con éxito!");
        this.props.history.push("/login");
      } else {
        alert("ERROR: No se logró registrar el usuario, intente de nuevo!");
        this.setState({
          confirmPass: "",
          password: "",
        });
      }
    }
    // console.log(this.state);
  };
  registerRedirect = () => {
    this.props.history.push("/login");
  };
  testComplete = () => {
    return this.state.nombre === "" ||
      this.state.apellido === "" ||
      this.state.dpi === "" ||
      this.state.correo === "" ||
      this.state.direccion === "" ||
      this.state.password === "" ||
      this.state.confirmPass === "";
  };
}

export default withRouter(Register);
