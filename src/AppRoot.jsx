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
import { useSelector } from "react-redux";
import Login from "./components/admin-pages/Login";
import AdminArticle from "./components/admin-pages/article/AdminArticle";
import AdminArticleAddOrUpdate from "./components/admin-pages/article/AdminArticleAddOrUpdate";

function AppRoot() {
  
  const isLogin = useSelector(state => state.token)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage /> } />

        {isLogin ?  
        <Route path={`${adminBaseUrl}/*`} element={ <AdminLayout />}>
          <Route path="admin-tag" element={<AdminTag />} />
          <Route path="admin-subscribe" element={<AdminSubscribe />} />
          <Route path="admin-socialmedia" element={<AdminSocialMedia />} />
          <Route path="admin-user" element={<AdminUser />} />
          <Route path="admin-article" element={<AdminArticle />}>
          </Route>
          <Route path="add" element={<AdminArticleAddOrUpdate />} />
          <Route path="admin-user" element={<AdminUser />} />
          <Route path="admin-category" element={<AdminCategory />} />
        </Route>
        :
        <Route path={`${adminBaseUrl}/*`} element={ <Login />}></Route>
      }
      </Routes>
   </BrowserRouter>
  );
}

export default AppRoot;


