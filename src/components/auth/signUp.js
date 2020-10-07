import React , { Component } from "react";
import { signup } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import bg from "../../img/bg.jpg";
import { Link } from 'react-router-dom';
import {
    ArrowRightOutlined
  } from '@ant-design/icons';


class Signup extends Component{
constructor(props)
{
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
        email : "",
        password : ""
    }
}
signup = (e) => {
    e.preventDefault();
    this.props.signup(this.state.email , this.state.password);
}

handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}
render()
{
    return (
      <div className="bg">
        <div className="container">
          <div className="bg-left">
            <div className="bg-text">
              <h3>Try it free Today!</h3>
              <p>No Credit Cards, No Money!</p>
              <Link to="/login" className="form-link">
                LOGIN
              </Link>
            </div>
            <img src={bg} alt="left" className="bg-img" />
          </div>
          <form className="form">
            <h2 className="form-title">Create Account!</h2>
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

            <button onClick={this.signup} className="form-btn">
             Signup
            </button>
          </form>
        </div>
      </div>
    );
}
}
const mapDispatchToProps = dispatch => {
    return {
        signup: (email , pass) => dispatch(signup(email , pass))
    }
}
export default connect(null , mapDispatchToProps)(Signup);

