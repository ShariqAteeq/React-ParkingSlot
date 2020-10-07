import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";
import { connect } from "react-redux";
import PublicRouter from "./PublicRouter";
import Home from '../components/Home/Home';
import { isLogged } from '../store/actions/authActions';

class Router extends Component {
  componentDidMount() {
    this.props.isLogged();
  }

  render() {
    let { auth } = this.props;
    if (auth == true) {
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isLogged: () => dispatch(isLogged()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
