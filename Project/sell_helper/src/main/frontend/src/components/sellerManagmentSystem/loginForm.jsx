import React from "react";
import joi from "joi-browser";
import Form from "../common/form";
import auth from "../services/authService";
import { Redirect } from "react-router-dom";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    error: {},
  };
  schema = {
    //is used to determing how to validate the form input, not reusable
    username: joi.string().required().label("Username"),
    password: joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    // when submit, deal server in here

    try {
      const data = this.state.data;
      // you have to put async and await at both side

      //posted the entered username and password into server, then
      // store the json web token(jwt) into localstorage
      await auth.login(data.username, data.password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/accounts"; //refresh page fully
      // this.props.history.push("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.error };
        errors.username = ex.response.data;
        this.setState({ error: errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUserJWT()) return <Redirect to="/" />;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
