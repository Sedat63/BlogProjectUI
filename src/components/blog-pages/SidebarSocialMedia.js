import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";

import React from "react";

export default function SidebarSocialMedia() {
  return (
    <>
      <section className="widget social">
        <nav className="social">
          <ul>
            <li>
              <a
                href="http://twitter.com"
                target="_blank"
                title="Twitter"
                className="socialdark twitter"
              >
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
              </a>
            </li>
            <li>
              <a
                href="http://facebook.com"
                target="_blank"
                title="Facebook"
                className="socialdark facebook"
              >
                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a
                href="http://github.com"
                target="_blank"
                title="Github"
                className="socialdark github"
              >
                <FontAwesomeIcon icon="fa-brands fa-github" />
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
