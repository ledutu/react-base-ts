import { lazy } from "react";

//Auth
// const Login = lazy(() => import('../pages/Auth/LoginModal'));

//Main
const ShopperDashboard = lazy(() => import("../pages/ShopperDashboard"));
const Home = lazy(() => import("../pages/Home"));

export {
  //Auth
  // Login,

  //Main
  Home,
  ShopperDashboard,
};

export const MainRoute = {
  Home: "/",

  shopperDashboard: "/shopper-dashboard",
};

export const AuthRoute = {
  Login: "/login",
};
