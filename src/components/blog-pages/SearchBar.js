import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Row, Col, Input, Form, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import "../../style/SearchBar.css";
import React, { useState } from "react";

export default function SearchBar(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const rangeOfItem = { marginBottom: "10px" };
  const [searchBarForm] = Form.useForm();

  return (
    <>
      <form
        role="search"
        method="get"
        className="searchform"
        action="https://severn-wp.ecko.me/"
      >
        <input
          type="text"
          name="s"
          value={props.searchText}
          className={isMobile ? "query-mobile" : "query"}
          onChange={props.handleSearchText}
          placeholder="Ara..."
        />
        <FontAwesomeIcon
          className={`fa ${isMobile ? "fa-search-mobile" : "fa-search"}`}
          icon={"fa fa-search"}
        />
        <FontAwesomeIcon
          className={`fa fa-chevron-circle-right ${
            isMobile ? "submit-mobile" : "submit"
          }`}
          icon={"fa fa-chevron-circle-right"}
        />
      </form>
    </>
  );
}
