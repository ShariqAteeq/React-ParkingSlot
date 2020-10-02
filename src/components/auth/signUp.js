import React , { Component } from "react";
import { signup } from '../../store/actions/authActions';
import { connect } from 'react-redux';
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
            <div>
                <Link to = '/login' className = "form-link">Login <ArrowRightOutlined /></Link>
            </div>
          <form className="form">
          <h2 className = "form-title">Create Account!</h2>
            <p className = "form-text">Let's join us :)</p>
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
  
            <button onClick={this.signup} className = "form-btn">Signup</button>
          </form>
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

