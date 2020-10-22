import React, { Component } from "react";
import { logout,  } from "../../store/actions/authActions";
import { connect } from "react-redux";
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
  };
};
export default connect(null, mapDispatchToProps)(Home);
