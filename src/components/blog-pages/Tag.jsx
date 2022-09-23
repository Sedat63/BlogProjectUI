import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import * as apiTag from "../../api/tag-api";
import React,{useEffect,useState} from "react";

export default function Tag() {

  //State  //degişken  //deger atama metodu
  const [tags, setTags] = useState([]); //initial value

  useEffect(() => {
    getList();
  }, []); //Tek sefer çalış document ready
  const getList = () => {
    apiTag.getList().then((result) => {
      setTags(result.data);
    });
  };

  return (
    <>
      <section className="widget widget_tag_cloud">
        <h3 className="widget-title">Tags</h3>
        <hr />
        <div className="tagcloud">
          {
            tags.map(x=>
              <a
              className="tag-cloud-link tag-link-7 tag-link-position-1"
              style={{ fontSize: "8pt" }}
              aria-label={`${x.tagName} (1 item)`}
            >
              {x.tagName}
            </a>
            )
          }
        </div>
      </section>
    </>
  );
}
