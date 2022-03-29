import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { Home, MainRoute, ShopperDashboard } from "./constants";

const AuthRouter = () => {
  return (
    <Route path="/auth">
      {/* <Route path={AuthRoute.Login} element={<Suspense fallback={<>...</>}><Login /></Suspense>} /> */}
    </Route>
  );
};

const ShopperDashboardRouter = () => {
  return (
    <Route path="/">
      <Route
        path={MainRoute.shopperDashboard}
        element={
          <Suspense fallback={<>...</>}>
            <ShopperDashboard />
          </Suspense>
        }
      ></Route>
    </Route>
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {AuthRouter()}
        {ShopperDashboardRouter()}
        <Route
          index
          element={
            <Suspense fallback={<>...</>}>
              <Home />
            </Suspense>
          }
        />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    </Routes>
  );
};

export default Router;
