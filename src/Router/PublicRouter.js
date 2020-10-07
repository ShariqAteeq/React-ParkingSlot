import React from "react";
import { Route} from "react-router-dom";
import Login from '../components/auth/login';
import Signup from '../components/auth/signUp';

const PublicRouter = () => {
  return (
    <div>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </div>
  );
};

export default PublicRouter;
