import { lazy } from "react";
import { Route } from "react-router-dom";

const Login = lazy(() => import("../login/login.index"));

const RouteLogin = [
  { path: "/login", isPrivate: false, exact: true, component: Login },
];

export default RouteLogin;
