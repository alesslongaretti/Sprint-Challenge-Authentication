import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...theRest }) => {
  return (
    <Route
      {...theRest}
      render={(props) => {
        if (token) {
          return <Component {...props}/>;
        } else {
          console.log("Rendering: ", Route);
        }
      }}
    />
  );
};

export default ProtectedRoute;
