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
import Divider from '@material-ui/core/Divider';
import { withRouter } from "react-router-dom";

import Http from "../service/Http";

import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      password: "",
      correo: "",
    };
  }
  render() {
    return (
      <div>
        <Card className="login-card">
          <CardContent className="login-content">
            <form>
              <Typography color="textSecondary" variant="h4">
                Login
              </Typography>
              <TextField
                id="outlined-basic"
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
                  id="outlined-adornment-password"
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
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <CardActions className="card-action">
                <Button
                  variant="contained"
                  color="primary"
                  className="login-button"
                  onClick={this.loginSubmit}
                >
                  Ingresar
                </Button>
              </CardActions>
              <br/>
              <Divider />
              <br/>
              <Typography color="textSecondary" variant="h4">
                Nuevo usuario
              </Typography>
              <CardActions className="card-action">
                <Button
                  variant="contained"
                  className="login-button"
                  onClick={this.loginRedirect}
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
  loginSubmit = async () => {
    let data = { correo: this.state.correo, password: this.state.password };
    let response = await Http.login(data);
    if(response !== 'fail'){
      localStorage.setItem('user', response);
      this.props.history.push("/");
    }
    else{
      alert('No existe el usuario en la base de datos!');
      this.setState({
        password: "",
        user: "",
      });
    }
  };
  loginRedirect = () => {
    this.props.history.push("/register");
  };
}

export default withRouter(Login);
