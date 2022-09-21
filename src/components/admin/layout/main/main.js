import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";

import "../../../../assets/admin/css/custom.css";
import "../../../../assets/admin/css/bootstrap.min.css";
import "../../../../assets/admin/css/atlantis.min.css";
import "../../../../assets/admin/css/demo.css";

const Main = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="main-panel">
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Main;
