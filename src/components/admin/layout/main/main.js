import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import routes from "../../../../routes/routes";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="main-panel">
        <div className="content">
          <Routes>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => <route.component {...props} />}
                  />
                )
              );
            })}
            <Navigate to="/admin/console" replace={true} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Main;
