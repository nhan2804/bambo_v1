import { lazy } from "react";
import { RouteProps } from "react-router-dom";
const Home = lazy(() => import("../home.index"));
interface MyRoute extends RouteProps {
  isPrivate?: boolean;
}
const RouteHome: MyRoute[] = [
  { path: "/", isPrivate: false, exact: true, component: Home },
];

export default RouteHome;
