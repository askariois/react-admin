import React from "react";
import { Routes, Route } from "react-router-dom";

import "./assets/admin/css/bootstrap.min.css";
import "./assets/admin/css/atlantis.min.css";
import "./assets/admin/css/demo.css";
import Main from "./components/admin/layout/main/main";
import Login from "./components/frontend/auth/login/login";
import Register from "./components/frontend/auth/register/register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/admin"
          name="Admin"
          render={(props) => <Main {...props} />}
        />

        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
      </Routes>
    </div>
  );
}

export default App;
