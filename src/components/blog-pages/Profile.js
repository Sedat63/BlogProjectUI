import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Profile() {
  return (
    <section class="author-profile">
      <div
        class="info"
        itemprop="author"
        itemscope=""
        itemtype="http://schema.org/Person"
      >
        <a
          href="https://severn-wp.ecko.me/author/miker/"
          class="profile gravatar"
        >
          <img
            src="https://severn-wp.ecko.me/wp-content/uploads/2017/10/cropped-miker-150x150.jpg"
            itemprop="image"
            alt="Mike Ross"
            data-no-retina="true"
          />
        </a>
        <div class="meta">
          <span class="title">Author</span>
          <a
            href="http://twitter.com/EckoThemes"
            target="_blank"
            class="twittertag"
            rel="noreferrer"
          >
            @EckoThemes
          </a>{" "}
          <h3 itemprop="name">
            <a
              href="https://severn-wp.ecko.me/author/miker/"
              itemprop="url"
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
      <ul class="authorsocial">
        <li>
          <a
            href="http://twitter.com/EckoThemes"
            target="_blank"
            class="socialminimal twitter"
            title="Twitter"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
          </a>
        </li>
        <li>
          <a
            href="http://facebook.com"
            target="_blank"
            class="socialminimal facebook"
            title="Facebook"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
          </a>
        </li>
        <li>
          <a
            href="http://github.com"
            target="_blank"
            class="socialminimal github"
            title="GitHub"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
        </li>
      </ul>
    </section>
  );
}
