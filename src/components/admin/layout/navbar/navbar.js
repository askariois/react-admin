import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Navbar = () => {
  const navigate = useNavigate();

  const logoutSubmit = (e) => {
    e.preventDefault();
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post("/api/logout").then((res) => {
        if (res.data.status === 200) {
          localStorage.removeItem("auth_token");
          localStorage.removeItem("auth_name");
          swal("Успешно", res.data.message, "success");
          navigate("/admin");
        }
      });
    });
  };
  return (
    <div className="main-header">
      <div className="logo-header" data-background-color="dark2">
        <Link to="#" className="logo">
          <img src="#" alt="navbar brand" className="navbar-brand" />
        </Link>
        <button
          className="navbar-toggler sidenav-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="icon-menu"></i>
          </span>
        </button>
        <button className="topbar-toggler more">
          <i className="icon-options-vertical"></i>
        </button>
        <div className="nav-toggle">
          <button className="btn btn-toggle toggle-sidebar">
            <i className="icon-menu"></i>
          </button>
        </div>
      </div>
      <nav
        className="navbar navbar-header navbar-expand-lg"
        data-background-color="dark"
      >
        <div className="container-fluid">
          <Link to="#" onClick={logoutSubmit} className="logo ml-auto logout">
            Выйти
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
