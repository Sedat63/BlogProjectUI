import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "../../style/Navbar.css";
import SearchBar from "./SearchBar";

export default function NavbarResponsive() {
  const [toggleNav, setToggleNav] = useState(false);

  const toggleNavbar = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <>
      <div className="upper">
        <a href="https://severn-wp.ecko.me/" className="logo">
          <img
            src="https://severn-wp.ecko.me/wp-content/uploads/2017/01/logo_textlarge_dark@2x.png"
            className="retina"
            alt="EckoThemes"
            width={0}
            height={0}
          />
        </a>

        <FontAwesomeIcon
          className="show-nav"
          icon={"fa fa-navicon"}
          onClick={toggleNavbar}
        />
      </div>
      {toggleNav && (
        <div className="lower">
          <hr />
          <nav>
            <ul id="menu-main-1" className="menu">
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-736">
                <a href="/shortcodes/">Shortcodes</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-634">
                <a href="#">Post Styles</a>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-723">
                    <a href="/january-photo-trip/">Gallery Format</a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-662">
                    <a href="/mountain-range/">Image Format</a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-637">
                    <a href="/yosemite-time-lapse-video/">Video Format</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-628">
                <a href="#">Features</a>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-629">
                    <a href="/shortcodes/">Shortcodes</a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-748">
                    <a href="/installing-nginx-on-ubuntu-14-04/">
                      Post Contents
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-749">
                    <a href="https://severn-wp.ecko.me/syntax-highlighter/">
                      Syntax Highlighter
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-688">
                    <a href="http://severn-dark-wp.ecko.me">Dark Style</a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-635">
                    <a href="/author/miker/">Author Page</a>
                  </li>
                </ul>
              </li>
            </ul>{" "}
          </nav>
        </div>
      )}
    </>
  );
}
