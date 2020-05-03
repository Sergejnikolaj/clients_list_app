import React, { useState } from "react";
import "../index.css";
import TextField from "@material-ui/core/TextField";
import { search } from "../actions/search";
import { switchColorTheme } from "../actions/colorTheme";
import { useDispatch, useSelector } from "react-redux";
import { isMobile } from "react-device-detect";
import Switch from "@material-ui/core/Switch";

export default function Header() {
  const dispatch = useDispatch();
  const colorTheme = useSelector((state) => state.colorTheme.lightTheme);
  const [visible, showTooltip] = useState(false);

  const handleChange = (event) => {
    dispatch(search(event.target.value));
  };

  const toggleSwitch = (event) => {
    dispatch(switchColorTheme(event.target.checked));
    showTooltip(false);
  };

  return (
    <div className={`${!colorTheme ? "header-light" : "header-dark"}`}>
      <div className="search-holder">
        <TextField
          onChange={handleChange}
          type="search"
          label="Search by name/lastname"
          className="textfield"
        />
      </div>
      <div>
        <Switch
          className="switch-color-theme"
          onChange={toggleSwitch}
          onMouseOver={() => showTooltip(true)}
          onMouseLeave={() => showTooltip(false)}
        />
        {!isMobile && visible && (
          <div className="tooltip">{"switch theme"}</div>
        )}
      </div>
    </div>
  );
}
