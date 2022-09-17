import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{useEffect,useState} from "react";
import * as apiSocialMedia from "../../api/socialmedia-api";

export default function SidebarSocialMedia() {

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
      <section className="widget social">
        <nav className="social">
          <ul>
          {
            socialMedia.map(x=>
              <li>
              <a
                href={x.link}
                target="_blank"
                title={x.title}
                className={`socialdark ${x.className}`}
              >
                <FontAwesomeIcon icon={x.icon} />
              </a>
            </li>
            )
          }
         
          </ul>
        </nav>
      </section>
    </>
  );
}
