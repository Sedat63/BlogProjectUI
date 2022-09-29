import Footer from "./Footer";
import NavbarResponsive from "./NavbarResponsive";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import SidebarSocialMedia from "./SidebarSocialMedia";
import Subscribe from "./Subscribe";
import Tag from "./Tag";
import React,{useState,useEffect} from 'react'
import * as apiArticle from "../../api/article-api";
import {
  Button,
  Table,
  Form,
  Input,
  Modal,
  Tabs,
  Tooltip,
  message,
  Popconfirm,
} from "antd";
import {
  PlusSquareOutlined,
  UserOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import moment from "moment";
  import { setStrLengthLimitByNumber } from '../../helper/helper-methods';
import { apiUrl } from '../../helper/constant/api-constant';
import { useNavigate } from 'react-router-dom';
// import { adminBaseUrl } from '../../helper/constant/route-constant';


export default function HomePage() {
  const [searctText, setSearchText] = useState("");
  const [articles, setArticles] = useState([]); //initial value
  const [pagination,setPagination] = useState({current:1, pageSize:10, defaultCurrent:1,total:0})

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };
  const [articleFilter, setArticleFilter] = useState({
    orderByAsc: false,
    categoryId:0,
    tagId:0,
    search:"",
    pageSize:pagination.pageSize,
    pageNumber:pagination.current
  });

  useEffect(() => {
    getList();
  }, []); //Tek sefer çalış document ready

  const getList = async() => {
   await  apiArticle.getListForWeb(articleFilter).then((result) => {
      if(result.successful) {
        setArticles(result.data.items);
        setPagination({current:result.data.pageNumber,total:result.data.count,pageSize:result.data.pageSize})
      }
    });
  };




  const searchBar = (
    <SearchBar searchText={searctText} handleSearchText={handleSearchText} />
  );

  return (
    <>
      <main className="page-wrapper">
        <aside className="sidebar sidebar-left">
          <div className="sidebar-fixed">
            <Profile />
            <section className="widget">{searchBar}</section>
            <Tag />
          </div>
        </aside>
        <section className="page-body ">
          <section className="page-content">
            <section className="nav-responsive">
              <NavbarResponsive />
              <hr className="separator-10" />
              {searchBar}
            </section>
            <section className="post-list">

              {articles.map(article => {
                    if(article.isBanner) 
                       return(
                        <>
                       <article
                        id="post-328"
                        className="post-standard post-standard-header post-328 post type-post status-publish format-standard has-post-thumbnail hentry category-system-administration tag-project tag-server tag-software tag-web"
                      >
                        <div className="post-header">
                          <a href="https://severn-wp.ecko.me/install-tinc-and-vpn-setup-on-ubuntu-14-04/">
                            <div
                              className="background"
                              style={{
                                backgroundImage:
                                  `url(${apiUrl+article.headerImagePath})`,
                              }}
                            />
                          </a>
                          <a
                            className="category"
                            style={{ background: "#7fbb00" }}
                            href="#"
                          >
                           {article.categories[0].categoryName}
                          </a>{" "}
                        </div>
                        <div className="inner">
                          <h2 style={{margin: "10px 0px 0px 0px" ,fontSize:"30px"}}>
                          <a href="https://severn-wp.ecko.me/responsive-mobile-design/">
                          {article.title}                            
                          </a>
                           
                          </h2>
                          <div className="excerpt">
                            <p>
                             {setStrLengthLimitByNumber(article.contentText,240)} [...]
                            </p>
                          </div>
                          <div className="options">
                            <a
                              href="https://severn-wp.ecko.me/install-tinc-and-vpn-setup-on-ubuntu-14-04/"
                              className="button round gray-outline read-more"
                            >
                              Continue Reading...
                            </a>
                            <a
                              href="https://severn-wp.ecko.me/install-tinc-and-vpn-setup-on-ubuntu-14-04/"
                              className="button round accent-color date"
                            >
                              <time dateTime="2015-05-24">{article.publishDate}</time>
                            </a>
                            <a
                              href="https://severn-wp.ecko.me/author/harveys/"
                              className="button round light-gray author"
                            >
                               {article.tags?.map(x=> `${x.tagName}`)}
                            </a>
                            <span className="button round light-gray issticky">
                              <i className="fa fa-thumb-tack" />
                            </span>
                          </div>
                        </div>
                      </article>
                      <hr /> 
                      </>
                      )
                    else
                      return (<> 
                       <div className="post-half-wrapper inner">
                      <article
                        id="post-52"
                        className="post-standard post-standard-banner post-52 post type-post status-publish format-standard has-post-thumbnail hentry category-frontend-development category-programming-patterns tag-css tag-development tag-frontend tag-html tag-sass"
                      >
                        <div className="inner">
                          <div className="post-banner">
                            <a href="https://severn-wp.ecko.me/responsive-mobile-design/">
                              <div
                                className="background"
                                style={{
                                  backgroundImage:
                                  `url(${apiUrl+article.headerImagePath})`,
                                }}
                              />
                            </a>
                            <a
                              className="category"
                              style={{ background: "#4285f4" }}
                              href="#"
                              >
                               {article.categories[0].categoryName}
                            </a>{" "}
                          </div>
                          <h2 style={{margin:"auto"}}>
                            <a href="https://severn-wp.ecko.me/responsive-mobile-design/">
                                {article.title}                            
                            </a>
                          </h2>
                          <div className="excerpt">
                            <p>
                            {setStrLengthLimitByNumber(article.contentText,240)} [...]
                            </p>
                          </div>
                          <div className="options">
                            <a
                              href="https://severn-wp.ecko.me/responsive-mobile-design/"
                              className="button round gray-outline read-more"
                            >
                              Continue Reading...
                            </a>
                            <a
                              href="https://severn-wp.ecko.me/responsive-mobile-design/"
                              className="button round accent-color date"
                            >
                              <time dateTime="2015-05-14">14th May '15</time>
                            </a>
                            <a
                              href="https://severn-wp.ecko.me/author/miker/"
                              className="button round light-gray author"
                            >
                              Mike Ross
                            </a>
                            <span className="button round light-gray issticky">
                              <i className="fa fa-thumb-tack" />
                            </span>
                          </div>
                        </div>
                      </article>
                      <hr />
                      <article
                        id="post-387"
                        className="post-standard post-standard-banner post-387 post type-post status-publish format-standard has-post-thumbnail hentry category-system-administration tag-development tag-project tag-server tag-software"
                      >
                        <div className="inner">
                          <div className="post-banner">
                            <a href="https://severn-wp.ecko.me/initial-server-setup-with-ubuntu-14-04/">
                              <div
                                className="background"
                                style={{
                                  backgroundImage:
                                    'url("https://severn-wp.ecko.me/wp-content/uploads/2015/05/6108b580-860x573.jpg")',
                                }}
                              />
                            </a>
                            <a
                              className="category"
                              style={{ background: "#7fbb00" }}
                              href="https://severn-wp.ecko.me/category/system-administration/"
                            >
                              System Administration
                            </a>{" "}
                          </div>
                          <h2>
                            <a href="https://severn-wp.ecko.me/initial-server-setup-with-ubuntu-14-04/">
                              Initial Server Configuration &amp; Setup on Debian
                            </a>
                          </h2>
                          <div className="excerpt">
                            <p>
                              Step One — Root Login To log into your server initially,
                              you will need to know your server’s public IP address
                              and the password for the “root” user’s account. For
                              servers on DigitalOcean, you will receive an email with
                              your server credentials and the server’s IP address. The
                              root user is the [...]
                            </p>
                          </div>
                          <div className="options">
                            <a
                              href="https://severn-wp.ecko.me/initial-server-setup-with-ubuntu-14-04/"
                              className="button round gray-outline read-more"
                            >
                              Continue Reading...
                            </a>
                            <a
                              href="https://severn-wp.ecko.me/initial-server-setup-with-ubuntu-14-04/"
                              className="button round accent-color date"
                            >
                              <time dateTime="2015-05-02">2nd May '15</time>
                            </a>
                            <a
                              href="https://severn-wp.ecko.me/author/harveys/"
                              className="button round light-gray author"
                            >
                              Harvey Specter
                            </a>
                            <span className="button round light-gray issticky">
                              <i className="fa fa-thumb-tack" />
                            </span>
                          </div>
                        </div>
                      </article>
                      <hr />
                    </div>
                    <hr /></>)})                
              }
              
            
              {/* 
              <div className="post-list-advrt inner">
                <div className="advrt">
                  <a href="#">
                    <img
                      src="/wp-content/themes/SevernTheme/assets/img/avrt_728.jpg"
                      alt="avrt"
                      data-no-retina="true"
                    />
                  </a>{" "}
                </div>
              </div>
              <hr /> */}
            </section>
            <nav className="pagination">
              <div className="wrapper">
                <ul className="page-numbers">
                  <li>
                    <span aria-current="page" className="page-numbers current">
                      1
                    </span>
                  </li>
                  <li>
                    <a
                      className="page-numbers"
                      href="https://severn-wp.ecko.me/page/2/"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      className="page-numbers"
                      href="https://severn-wp.ecko.me/page/3/"
                    >
                      3
                    </a>
                  </li>
                </ul>
                <a
                  href="https://severn-wp.ecko.me/page/2/"
                  className="button rounded light previous"
                >
                  <span className="main">Older Posts</span>
                  <span className="sub">
                    <i className="fa fa-chevron-right" />
                  </span>
                </a>{" "}
              </div>
            </nav>
          </section>
          {/* #PAGE-CONTENT */}
          <aside className="sidebar sidebar-right">
            <div className="sidebarright-fixed">
              <section className="widget latestposts">
                <h3 className="widget-title">Latest Articles</h3>
                <hr />
                <article className="post">
                  <div className="top">
                    <a
                      href="https://severn-wp.ecko.me/install-tinc-and-vpn-setup-on-ubuntu-14-04/"
                      className="thumbnail"
                    >
                      <i className="fa fa-link" />
                      <span
                        style={{
                          backgroundImage:
                            'url("https://severn-wp.ecko.me/wp-content/uploads/2015/05/photo-1416339684178-3a239570f315-200x150.jpg")',
                        }}
                      />
                    </a>
                    <div className="info">
                      <a
                        href="https://severn-wp.ecko.me/category/system-administration/"
                        className="button rounded grayoutline tiny category"
                      >
                        System Administration
                      </a>{" "}
                      <h5 className="title">
                        <a href="https://severn-wp.ecko.me/install-tinc-and-vpn-setup-on-ubuntu-14-04/">
                          Install Tinc and VPN Setup on Debian &amp; Ubuntu
                        </a>
                      </h5>
                      <section className="meta">
                        <span className="posted">Posted </span>
                        <span className="author">
                          <span>by</span>{" "}
                          <a href="https://severn-wp.ecko.me/author/harveys/">
                            <img
                              src="https://severn-wp.ecko.me/wp-content/uploads/2017/10/cropped-harveys-24x24.jpg"
                              className="gravatarsmall"
                              alt=""
                              data-no-retina="true"
                            />{" "}
                            Harvey Specter
                          </a>
                        </span>
                        <span className="date">
                          <span>on</span>{" "}
                          <a href="https://severn-wp.ecko.me/install-tinc-and-vpn-setup-on-ubuntu-14-04/">
                            <i className="fa fa-clock-o" />{" "}
                            <time dateTime="2015-05-24">24th May '15</time>
                          </a>
                        </span>
                      </section>
                    </div>
                  </div>
                  <p className="excerpt">
                    In this tutorial, we will go over how to use Tinc, an open
                    source Virtual Private Network (VPN) daemon, to create a
                    secure VPN...
                  </p>
                </article>
                <article className="post">
                  <div className="top">
                    <a
                      href="https://severn-wp.ecko.me/responsive-mobile-design/"
                      className="thumbnail"
                    >
                      <i className="fa fa-link" />
                      <span
                        style={{
                          backgroundImage:
                            'url("https://severn-wp.ecko.me/wp-content/uploads/2015/05/beach-sand-stones-pebbles-200x133.jpg")',
                        }}
                      />
                    </a>
                    <div className="info">
                      <a
                        href="https://severn-wp.ecko.me/category/frontend-development/"
                        className="button rounded grayoutline tiny category"
                      >
                        Frontend Development
                      </a>{" "}
                      <h5 className="title">
                        <a href="https://severn-wp.ecko.me/responsive-mobile-design/">
                          Responsive &amp; Mobile Design
                        </a>
                      </h5>
                      <section className="meta">
                        <span className="posted">Posted </span>
                        <span className="author">
                          <span>by</span>{" "}
                          <a href="https://severn-wp.ecko.me/author/miker/">
                            <img
                              src="https://severn-wp.ecko.me/wp-content/uploads/2017/10/cropped-miker-24x24.jpg"
                              className="gravatarsmall"
                              alt=""
                              data-no-retina="true"
                            />{" "}
                            Mike Ross
                          </a>
                        </span>
                        <span className="date">
                          <span>on</span>{" "}
                          <a href="https://severn-wp.ecko.me/responsive-mobile-design/">
                            <i className="fa fa-clock-o" />{" "}
                            <time dateTime="2015-05-14">14th May '15</time>
                          </a>
                        </span>
                      </section>
                    </div>
                  </div>
                  <p className="excerpt">
                    RWD allows easy reading and navigation with a minimum of
                    resizing, panning, and scrolling—across a wide range of
                    devices (from...
                  </p>
                </article>
                <article className="post">
                  <div className="top">
                    <a
                      href="https://severn-wp.ecko.me/initial-server-setup-with-ubuntu-14-04/"
                      className="thumbnail"
                    >
                      <i className="fa fa-link" />
                      <span
                        style={{
                          backgroundImage:
                            'url("https://severn-wp.ecko.me/wp-content/uploads/2015/05/6108b580-200x133.jpg")',
                        }}
                      />
                    </a>
                    <div className="info">
                      <a
                        href="https://severn-wp.ecko.me/category/system-administration/"
                        className="button rounded grayoutline tiny category"
                      >
                        System Administration
                      </a>{" "}
                      <h5 className="title">
                        <a href="https://severn-wp.ecko.me/initial-server-setup-with-ubuntu-14-04/">
                          Initial Server Configuration &amp; Setup on Debia...
                        </a>
                      </h5>
                      <section className="meta">
                        <span className="posted">Posted </span>
                        <span className="author">
                          <span>by</span>{" "}
                          <a href="https://severn-wp.ecko.me/author/harveys/">
                            <img
                              src="https://severn-wp.ecko.me/wp-content/uploads/2017/10/cropped-harveys-24x24.jpg"
                              className="gravatarsmall"
                              alt=""
                              data-no-retina="true"
                            />{" "}
                            Harvey Specter
                          </a>
                        </span>
                        <span className="date">
                          <span>on</span>{" "}
                          <a href="https://severn-wp.ecko.me/initial-server-setup-with-ubuntu-14-04/">
                            <i className="fa fa-clock-o" />{" "}
                            <time dateTime="2015-05-02">2nd May '15</time>
                          </a>
                        </span>
                      </section>
                    </div>
                  </div>
                  <p className="excerpt">
                    Step One — Root Login To log into your server initially, you
                    will need to know your server’s public IP address and...
                  </p>
                </article>
                <article className="post">
                  <div className="top">
                    <a
                      href="https://severn-wp.ecko.me/improve-response-time-with-reverse-proxy-cache/"
                      className="thumbnail"
                    >
                      <i className="fa fa-link" />
                      <span
                        style={{
                          backgroundImage:
                            'url("https://severn-wp.ecko.me/wp-content/uploads/2015/05/photo-1418225043143-90858d2301b4-200x133.jpg")',
                        }}
                      />
                    </a>
                    <div className="info">
                      <a
                        href="https://severn-wp.ecko.me/category/system-administration/"
                        className="button rounded grayoutline tiny category"
                      >
                        System Administration
                      </a>{" "}
                      <h5 className="title">
                        <a href="https://severn-wp.ecko.me/improve-response-time-with-reverse-proxy-cache/">
                          Faster Response Time with Reverse Proxy Cache
                        </a>
                      </h5>
                      <section className="meta">
                        <span className="posted">Posted </span>
                        <span className="author">
                          <span>by</span>{" "}
                          <a href="https://severn-wp.ecko.me/author/miker/">
                            <img
                              src="https://severn-wp.ecko.me/wp-content/uploads/2017/10/cropped-miker-24x24.jpg"
                              className="gravatarsmall"
                              alt=""
                              data-no-retina="true"
                            />{" "}
                            Mike Ross
                          </a>
                        </span>
                        <span className="date">
                          <span>on</span>{" "}
                          <a href="https://severn-wp.ecko.me/improve-response-time-with-reverse-proxy-cache/">
                            <i className="fa fa-clock-o" />{" "}
                            <time dateTime="2015-04-07">7th April '15</time>
                          </a>
                        </span>
                      </section>
                    </div>
                  </div>
                  <p className="excerpt">
                    These resources are then returned to the client as though
                    they originated from the server itself (or servers
                    themselves). While a...
                  </p>
                </article>
              </section>
              <Subscribe />
              <SidebarSocialMedia />{" "}
              {/* <section className="widget advrt">
                <a href="#">
                  <img
                    data-no-retina="true"
                    src="/wp-content/themes/SevernTheme/assets/img/avrt_300.jpg"
                    alt="avrt"
                  />
                </a>{" "}
              </section> */}
              <section className="widget widget_archive">
                <h3 className="widget-title">Archives</h3>
                <hr />
                <ul>
                  <li>
                    <a href="https://severn-wp.ecko.me/2015/05/">May 2015</a>
                  </li>
                  <li>
                    <a href="https://severn-wp.ecko.me/2015/04/">April 2015</a>
                  </li>
                  <li>
                    <a href="https://severn-wp.ecko.me/2015/03/">March 2015</a>
                  </li>
                  <li>
                    <a href="https://severn-wp.ecko.me/2015/02/">
                      February 2015
                    </a>
                  </li>
                  <li>
                    <a href="https://severn-wp.ecko.me/2015/01/">
                      January 2015
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </aside>
        </section>
        {/* #PAGE-BODY */}
      </main>
      {/* #PAGE-WRAPPER */}
      <Footer />
    </>
  );
}
