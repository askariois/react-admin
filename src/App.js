import React from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import Layout from "./components/admin/layout/layout";

import "./assets/admin/css/bootstrap.min.css";
import "./assets/admin/css/atlantis.min.css";
import "./assets/admin/css/demo.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/dashboard/" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
