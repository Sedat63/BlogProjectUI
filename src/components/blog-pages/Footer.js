import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as apiSocialMedia from "../../api/socialmedia-api";
import React,{useEffect,useState} from "react";

export default function Footer() {

  const [socialMedia, setSocialMedia] = useState([]); //initial value

  useEffect(() => {
    getList();
  }, []); //Tek sefer çalış document ready

  const getList = () => {
    apiSocialMedia.getList().then((result) => {
      setSocialMedia(result.data);
    });
  };

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
          </p>
        </section>
        <ul className="social">
        {
            socialMedia.map(x=>
              <li>
              <a
                href={x.link}
                target="_blank"
                title={x.title}
                className={`socialbutton ${x.className}`}
              >
                <FontAwesomeIcon icon={x.icon} />
              </a>
            </li>
            )
          }
        </ul>
      </footer>
    </>
  );
}
