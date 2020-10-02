import React, { Component } from "react";
import Signup from "./signUp";
import { login } from "../../store/actions/authActions";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  login = (e) => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <div className="bg">
        <form className="form">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter email address"
              onChange={this.handleChange}
              value={this.state.email}
              className="form-field"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              onChange={this.handleChange}
              id="password"
              placeholder="enter password"
              value={this.state.password}
              className="form-field"
            />
          </div>

          <button onClick={this.login}>Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, pass) => dispatch(login(email, pass)),
  };
};
export default connect(null, mapDispatchToProps)(Login);
