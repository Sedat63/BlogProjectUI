import "./style/App.css";
import React from "react";
import "./style/Login.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/admin-pages/AdminLayout";
import HomePage from "./components/blog-pages/HomePage";
import Tag from "./components/admin-pages/AdminTag";
import { adminBaseUrl } from "./helper/constant/route-constant";
import "./helper/icons/font-awesome.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={adminBaseUrl} element={<AdminLayout />}>
          <Route path="admin-tag" element={<Tag />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
