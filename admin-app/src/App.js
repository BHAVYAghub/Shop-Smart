import React, { useEffect } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import CustomerSignup from "./containers/Customer/Signup/index";
import customerLogin from "./containers/Customer/Signin/index";
import Profile from "./containers/Customer/Profile";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, getInitialData, getAllCategory } from "./actions";
import Products from "./containers/Products";
import Orders from "./containers/Orders";
import Category from "./containers/Category";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    dispatch(getInitialData());
    dispatch(getAllCategory());
  }, []);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/customer/signup" component={CustomerSignup} />
        <Route path="/customer/signin" component={customerLogin} />
        <PrivateRoute path="/customer/profile" component={Profile} />
        <PrivateRoute path="/category" component={Category} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/orders" component={Orders} />
      </Switch>
    </div>
  );
}

export default App;
