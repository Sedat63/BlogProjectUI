import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";

import React from "react";

export default function Subscribe() {
  return (
    <>
      <section className="widget subscribe">
        <div className="inner">
          <h3 className="widget-title">Subscribe</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <FontAwesomeIcon
            id="envelope"
            size="lg"
            icon="fa-regular fa-envelope"
          />
          <div id="mc_embed_signup">
            {" "}
            <form
              action="//ecko.us3.list-manage.com/subscribe/post?u=3400c3c16c4c01c737e9aafdf%26id=831bd8b0f3"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              {" "}
              <div id="mc_embed_signup_scroll">
                {" "}
                <div className="mc-field-group">
                  {" "}
                  <label htmlFor="mce-EMAIL">Email Address </label>{" "}
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    placeholder="Email Address..."
                  />{" "}
                </div>{" "}
                <div id="mce-responses" className="clear">
                  {" "}
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  />{" "}
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  />{" "}
                </div>{" "}
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}{" "}
                <div style={{ position: "absolute", left: "-5000px" }}>
                  <input
                    type="text"
                    name="b_3400c3c16c4c01c737e9aafdf_831bd8b0f3"
                    tabIndex={-1}
                    defaultValue
                  />
                </div>{" "}
                <div className="clear">
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<FontAwesomeIcon icon="fa-solid fa-chevron-right" />}
                    size={"medium"}
                  />
                </div>{" "}
              </div>{" "}
            </form>{" "}
          </div>{" "}
        </div>
      </section>
    </>
  );
}
