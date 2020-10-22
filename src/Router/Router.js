import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";
import { connect } from "react-redux";
import PublicRouter from "./PublicRouter";
import Home from '../components/Home/Home';
import { MyParkings } from '../store/actions/parkActions';
import { isLogged } from '../store/actions/authActions';

class Router extends Component {

  state = {
    loading: false
  }
  componentDidMount() {
    this.props.isLogged();
    this.props.MyParkings();
  }

  render() {
    let { auth , loading } = this.props;
    console.log(loading);
    if(loading) {
      return <h1>Loading ... </h1>
    }
    else if (auth == true) {
    let comp = <ProtectedRouter />
      return (
          <div>
              <Home childComponent = {comp} />
          </div>
      );
    } else if (auth == false) {
      return (
        <div>
          <Redirect to="/login" />
          <PublicRouter />
        </div>
      );
    }
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    loading: state.auth.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isLogged: () => dispatch(isLogged()),
    MyParkings: () => dispatch(MyParkings())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
