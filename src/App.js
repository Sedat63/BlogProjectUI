import "./style/App.css";
import React from "react";
import "./style/Login.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/admin-pages/AdminLayout";
import HomePage from "./components/blog-pages/HomePage";
import AdminTag from "./components/admin-pages/AdminTag";
import AdminSubscribe from "./components/admin-pages/AdminSubscribe";
import AdminSocialMedia from "./components/admin-pages/AdminSocialMedia";

import { adminBaseUrl } from "./helper/constant/route-constant";
import "./helper/icons/font-awesome.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={adminBaseUrl} element={<AdminLayout />}>
          <Route path="admin-tag" element={<AdminTag />} />
          <Route path="admin-subscribe" element={<AdminSubscribe />} />
          <Route path="admin-socialmedia" element={<AdminSocialMedia />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
