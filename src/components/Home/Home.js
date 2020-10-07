import React, { Component } from "react";
import fire from "../../config/fire";
import { logout, bookReserv } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { NavLink , Link } from "react-router-dom";
import { Steps, Button, message } from "antd";
//const { Step } = Steps;
import { DatePicker, TimePicker, Avatar } from "antd";
import Reserve from '../parking/Reserve'; 
import Header from '../Header';
import Sidebar from './sidebar';


class Home extends Component {

  render() {
    return (
      <div className="home">
        <div className="home-container">
          <Sidebar />
          <div className="home-des">
            <Header />
            <div>
            {this.props.childComponent}
              </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    bookReserv: (d) => dispatch(bookReserv(d)),
  };
};
export default connect(null, mapDispatchToProps)(Home);
