import React from "react";
import { Route} from "react-router-dom";
import Reserve from "../components/parking/Reserve";
import Home from '../components/Home/Home';
import MyParking from "../components/parking/MyParking";

const ProtectedRouter = () => {
  return (
    <div>
        <Route path = '/home' component = {Home} />
      <Route path="/reserve" component={Reserve} />
      <Route path="/my" component={MyParking} />
    </div>
  );
};

export default ProtectedRouter;
