import { lazy } from "react";

import RouteHome from '../../modules/home/route'
import RouteLogin from '../../modules/auth/route';
const Routes = [
 ...RouteHome,
...RouteLogin
];

export default Routes;
