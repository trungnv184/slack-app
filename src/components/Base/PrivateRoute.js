import React, { useState } from "react";
import Login from "../Auth/Login";
import { Route } from "react-router-dom";

const PrivateRoute = ({ component, ...options }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const finalCompoent = isUserAuthenticated ? component : Login;

  return <Route {...options} component={finalCompoent} />;
};

export default PrivateRoute;
