import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as apiSocialMedia from "../../api/socialmedia-api";
import React,{useEffect,useState} from "react";

export default function Profile() {

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
    <section className="author-profile">
      <div
        className="info"
        itemProp="author"
        itemScope=""
        itemType="http://schema.org/Person"
      >
        <a
          href="https://severn-wp.ecko.me/author/miker/"
          className="profile gravatar"
        >
          <img
            src="https://severn-wp.ecko.me/wp-content/uploads/2017/10/cropped-miker-150x150.jpg"
            itemProp="image"
            alt="Mike Ross"
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
            @EckoThemes
          </a>{" "}
          <h3 itemProp="name">
            <a
              href="https://severn-wp.ecko.me/author/miker/"
              itemProp="url"
              rel="author"
            >
              Mike Ross
            </a>
          </h3>
        </div>
      </div>
      <hr />
      <p>
        The most brilliant lawyer in New York City doesn't even have a degree.
        Currently employed as Harvey Specters associate.
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
