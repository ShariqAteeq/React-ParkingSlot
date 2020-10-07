import React , {Component} from 'react';
import fire from './config/fire';
import Login from './components/auth/login';
import Signup from './components/auth/signUp';
import Home from './components/Home/Home';
import { connect } from 'react-redux';
import { isLogged } from './store/actions/authActions';
import {BrowserRouter , Route , Switch , Redirect} from 'react-router-dom';
import Sidebar from './components/Home/sidebar';
import Header from './components/Header';
import './App.scss';
import Reserve from './components/parking/Reserve';
import Router from './Router/Router';

class App extends Component{
 
  render(){
    return (
      <BrowserRouter>
      <Router />
      </BrowserRouter>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    auth : state.auth.auth
  }
}
export default connect(mapStateToProps)(App);

