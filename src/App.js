import React , {Component} from 'react';
import fire from './config/fire';
import Login from './components/auth/login';
import Signup from './components/auth/signUp';
import Home from './components/Home/Home';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import './App.scss';

class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      user : {}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }

  render(){
    return (
      <BrowserRouter>
      {/* <div className="App">
        {this.state.user ? (<Home/>) : (<Login/>)}
      </div> */}
      <Switch>
          <Route path = '/login' component = {Login} />
          <Route path = '/signup' component = {Signup} />
      </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
