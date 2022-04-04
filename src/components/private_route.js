/**
* Private route
*/

import React from "react"
import { navigate } from "gatsby"
import { log_is } from "../services/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!log_is() && location.pathname !== `/app/login`) {
    navigate("/app/login");
    return null;
  }
  return <Component {...rest} />
}
export default PrivateRoute;