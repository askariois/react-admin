import React from "react";
import Home from "../home/home";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";

const Layout = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <Home />  
    </div>
  );
};

export default Layout;
