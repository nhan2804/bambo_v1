import React, { memo, Suspense } from "react";

import { Switch } from "react-router-dom";
import Routes from "../config/route/routeConfig";
import ProtectedRoute from "../components/ProtectedRoute";
import Loading from "../components/Loading";
function GetRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {Routes.map((route:any, indx:any) => {
          const {
            path,
            component,
            isPrivate = false,
           
            exact,
          } = route;
          return (
            <ProtectedRoute
              key={path}
              path={path}
              exact={exact}
              component={component}
              isPrivate={isPrivate}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
}

export default memo(GetRoutes);
