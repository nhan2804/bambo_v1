import React, { memo } from "react";
import { Route,Redirect } from "react-router";
const ProtectedRoute = ({ path, component: Component, exact, isPrivate, ...rest }:any) => {
    console.log(path);
    
  return (
    <Route
      render={(props:Route) => {
        if (!isPrivate) return <Component {...props} />;
        return <Redirect to="/" />;
      }}
      {...rest}
    />
  );
};

export default memo(ProtectedRoute);
