import "./style/App.css";
import React from "react";
import "./style/Login.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import AdminLayout from "./components/admin-pages/AdminLayout";
import HomePage from "./components/blog-pages/HomePage";
import AdminTag from "./components/admin-pages/AdminTag";
import AdminSubscribe from "./components/admin-pages/AdminSubscribe";
import AdminSocialMedia from "./components/admin-pages/AdminSocialMedia";
import { adminBaseUrl } from "./helper/constant/route-constant";
import AdminUser from "./components/admin-pages/AdminUser";
import AdminCategory from "./components/admin-pages/AdminCategory";

function AppRoot() {
  // const [token, setToken] = React.useState(apiUser.isLogin());

  // const handleLogin = async () => {
  //   const token = await fakeAuth();

  //   setToken(token);
  // };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path={`${adminBaseUrl}`} element={ <AdminLayout />}>
          <Route path="admin-tag" element={<AdminTag />} />
          <Route path="admin-subscribe" element={<AdminSubscribe />} />
          <Route path="admin-socialmedia" element={<AdminSocialMedia />} />
          <Route path="admin-user" element={<AdminUser />} />
          <Route path="admin-category" element={<AdminCategory />} />
        </Route> 
      </Routes>
   </BrowserRouter>
  );
}

export default AppRoot;


