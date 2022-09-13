import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="page-footer">
        <section className="widget copyright">
          <p className="main">
            Copyright © <a href="https://severn-wp.ecko.me/">EckoThemes</a>.
            2022 • All rights reserved.
          </p>
          <p className="alt">
            <span className="ecko">
              <a target="_blank" href="http://ecko.me/themes/wordpress/severn/">
                Severn WordPress Theme
              </a>{" "}
              by{" "}
              <a target="_blank" href="http://ecko.me">
                EckoThemes
              </a>
              .
            </span>
            <span className="wordpress">
              Published with{" "}
              <a target="_blank" href="http://wordpress.org">
                WordPress
              </a>
              .
            </span>
          </p>
        </section>
        <ul className="social">
          <li>
            <a
              href="http://twitter.com"
              target="_blank"
              className="socialbutton twitter"
              title="Twitter"
            >
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a
              href="http://dribbble.com"
              target="_blank"
              className="socialbutton dribbble"
              title="Dribbble"
            >
              <i className="fa fa-dribbble" />
            </a>
          </li>
          <li>
            <a
              href="http://facebook.com"
              target="_blank"
              className="socialbutton facebook"
              title="Facebook"
            >
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a
              href="http://google.com/plus"
              target="_blank"
              className="socialbutton google-plus"
              title="Google+"
            >
              <i className="fa fa-google" />
            </a>
          </li>
          <li>
            <a
              href="http://youtube.com"
              target="_blank"
              className="socialbutton youtube"
              title="YouTube"
            >
              <i className="fa fa-youtube" />
            </a>
          </li>
          <li>
            <a
              href="http://instagram.com"
              target="_blank"
              className="socialbutton instagram"
              title="Instagram"
            >
              <i className="fa fa-instagram" />
            </a>
          </li>
          <li>
            <a
              href="http://linkedin.com"
              target="_blank"
              className="socialbutton linkedin"
              title="LinkedIn"
            >
              <i className="fa fa-linkedin" />
            </a>
          </li>
          <li>
            <a
              href="http://github.com"
              target="_blank"
              className="socialbutton github"
              title="GitHub"
            >
              <i className="fa fa-github" />
            </a>
          </li>
          <li>
            <a
              href="http://pinterest.com"
              target="_blank"
              className="socialbutton pinterest"
              title="Pinterest"
            >
              <i className="fa fa-pinterest" />
            </a>
          </li>
          <li>
            <a
              href="http://twitch.tv"
              target="_blank"
              className="socialbutton twitch"
              title="Twitch"
            >
              <i className="fa fa-twitch" />
            </a>
          </li>
          <li>
            <a
              href="http://soundcloud.com"
              target="_blank"
              className="socialbutton soundcloud"
              title="Soundcloud"
            >
              <i className="fa fa-soundcloud" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
