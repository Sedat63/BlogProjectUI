import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as apiSocialMedia from "../../api/socialmedia-api";
import * as apiUser from "../../api/user-api";

import React,{useEffect,useState} from "react";
import { apiUrl } from "../../helper/constant/api-constant";

export default function Profile() {

  const [socialMedia, setSocialMedia] = useState([]); //initial value
  const [user, setUser] = useState({}); //initial value

  useEffect(() => {
  }, []); //Tek sefer çalış document ready

  useEffect(() => {
    getSocialMedia();
    getUser();
  }, []); //Tek sefer çalış document ready

  const getSocialMedia = () => {
    apiSocialMedia.getList().then((result) => {
      setSocialMedia(result.data);
    });
  };

  const getUser = () => {
    apiUser.get().then((result) => {
      setUser(result.data);
    });
  };

  return (
    <section className="author-profile">
      <div
        className="info"
        itemProp="author"
        itemScope=""
        itemType="http://schema.org/Person"
      >
        <a
          href="#"
          className="profile gravatar"
        >
          <img
            src={apiUrl+user.imagePath}
            itemProp="image"
            alt={user.fullName}
            data-no-retina="true"
          />
        </a>
        <div className="meta">
          <span className="title">Author</span>
          <a
            href="http://twitter.com/EckoThemes"
            target="_blank"
            className="twittertag"
            rel="noreferrer"
          >
           {user.title}
          </a>{" "}
          <h3 itemProp="name">
            <a
              href="https://severn-wp.ecko.me/author/miker/"
              itemProp="url"
              rel="author"
            >
             {user.fullName}
            </a>
          </h3>
        </div>
      </div>
      <hr />
      <p>
        {user.description}
      </p>
      <ul className="authorsocial">
      {
            socialMedia.map(x=>
              <li>
              <a
                href={x.link}
                target="_blank"
                title={x.title}
                className={`socialminimal ${x.className}`}
              >
                <FontAwesomeIcon icon={x.icon} />
              </a>
            </li>
            )
          }
      </ul>
    </section>
  );
}
