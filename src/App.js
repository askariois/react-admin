import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./components/admin/layout/main/main";
import Login from "./components/frontend/auth/login/login";
import Register from "./components/frontend/auth/register/register";
import Seo from "./components/admin/seo/seo";
import Region from "./components/admin/region/region";
import Home from "./components/admin/home/home";
import Blog from "./components/admin/blog/blog";
import Manager from "./components/admin/manager/manager";
import axios from "axios";

axios.defaults.baseURL = "http://spa-laravel.loc";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />

        <Route path="/admin" element={<Main />}>
          <Route index element={<Home />} exact />
          <Route path="/admin/region" element={<Region />} exact />
          <Route path="/admin/seo" element={<Seo />} exact />
          <Route path="/admin/blog" element={<Blog />} exact />
          <Route path="/admin/manager" element={<Manager />} exact />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
