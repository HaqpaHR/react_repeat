import React, {useContext} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Posts from "../pages/Posts";
import { publicRoutes, privateRoutes } from "../routes";
import Login from "../pages/Login";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, setIsAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <Loader/>
    }

  return isAuth ? (
    <Routes>
      <Route path="*" element={<Posts />} />
      {privateRoutes.map((route) => (
        <Route
          path={route.path}
          element={<route.element />}
          exact={route.exact}
          key={route.path}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          element={<route.element />}
          exact={route.exact}
          key={route.path}
        />
      ))}
        <Route path="*" element={<Navigate to='/login' replace/>} />
    </Routes>
  );
};

export default AppRouter;
