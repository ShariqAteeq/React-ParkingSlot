import React, { Component } from "react";
import { login } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import bg from "../../img/bg.jpg";

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
        <div className="container">
          <div className="bg-left">
            <div className="bg-text">
              <h3>Try it free Today!</h3>
              <p>No Credit Cards, No Money!</p>
              <Link to="/signup" className="form-link">
                create account
              </Link>
            </div>
            <img src={bg} alt="left" className="bg-img" />
          </div>
          <form className="form">
            <h2 className="form-title">Welcome Back!</h2>
            <p className="form-text">Let's Join us :)</p>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
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
                value={this.state.password}
                className="form-field"
              />
            </div>

            <button onClick={this.login} className="form-btn">
              Login
            </button>
            {this.props.auth ? <Redirect to="/reserve" /> : null}
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, pass) => dispatch(login(email, pass)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
