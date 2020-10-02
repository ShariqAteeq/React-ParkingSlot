import React , { Component } from "react";
import { signup } from '../../store/actions/authActions';
import { connect } from 'react-redux';

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
    return(
        <div>
            <form>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="enter email address"
                onChange={this.handleChange}
                value={this.state.email}
                />
                <input
                name="password"
                type= "password"
                onChange={this.handleChange}
                id="password"
                placeholder="enter password"
                value={this.state.password}
                />
                <button onClick={this.signup}>Signup</button>
            </form>
        </div>
    )
}
}
const mapDispatchToProps = dispatch => {
    return {
        signup: (email , pass) => dispatch(signup(email , pass))
    }
}
export default connect(null , mapDispatchToProps)(Signup);