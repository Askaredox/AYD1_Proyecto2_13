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
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

// import Http from "../services/Http";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      confirmPass: "",
      password: "",
      user: "",
    };
  }
  render() {
    return (
      <div>
        <Card className="login-card">
          <CardContent>
            <form action="http://localhost:3000/">
              <Typography color="textSecondary" variant="h4">
                Registrar
              </Typography>
              <TextField
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
                className="login-user"
                value={this.state.user}
                onChange={this.handleChange("user")}
              />
              <TextField
                id="outlined-basic"
                label="Apellido"
                variant="outlined"
                className="login-user"
                value={this.state.user}
                onChange={this.handleChange("user")}
              />
              <TextField
                id="outlined-basic"
                label="DPI"
                variant="outlined"
                className="login-user"
                value={this.state.user}
                onChange={this.handleChange("user")}
              />
              <TextField
                id="outlined-basic"
                label="Correo"
                variant="outlined"
                className="login-user"
                value={this.state.user}
                onChange={this.handleChange("user")}
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
                id="outlined-basic"
                label="Dirección"
                variant="outlined"
                className="login-user"
                value={this.state.user}
                onChange={this.handleChange("user")}
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
  registerSubmit = async() => {
    // if (this.state.password === this.state.confirmPass) {
    //   let new_user = {
    //     usuario: this.state.user,
    //     password: this.state.password,
    //     tipo_usuario: "muni",
    //   };
    //   let response = await Http.registrar(new_user);
    //   if (response === 'ok'){
    //     alert('Usuario ingresado con éxito!');
    //     this.props.history.push("/login");
    //   }
    //   else{
    //     alert('ERROR: No se logró registrar el usuario, intente de nuevo!');
    //     this.setState({
    //       confirmPass: "",
    //       password: "",
    //       user:""
    //     });
    //   }
    // } else {
    //   alert("Las contraseñas no coinciden, intente de nuevo!");
    //   this.setState({
    //     confirmPass: "",
    //     password: "",
    //   });
    // }
    // console.log(this.state);
  };
  registerRedirect = () => {
    this.props.history.push("/login");
  };
}
Register.contextTypes = {
  router: PropTypes.object,
};

export default withRouter(Register);
