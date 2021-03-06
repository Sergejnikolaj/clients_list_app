import React, { useState, memo } from "react";
import "../index.css";
import TextField from "@material-ui/core/TextField";
import { search } from "../actions/search";
import { switchColorTheme } from "../actions/colorTheme";
import { useDispatch, useSelector } from "react-redux";
import { isMobile } from "react-device-detect";
import Switch from "@material-ui/core/Switch";
import SearchIcon from "@material-ui/icons/Search";

export const Header = memo(() => {
  const dispatch = useDispatch();
  const colorTheme = useSelector((state) => state.colorTheme.lightTheme);
  const users = useSelector((state) => state.users.users);
  const [visible, showTooltip] = useState(false);
  const [show, showIcon] = useState(true);

  const handleChange = (event) => {
    dispatch(search(event.target.value));
  };

  const handleBlur = () => {
    showIcon(true);
  };

  const handleFocus = () => {
    showIcon(false);
  };

  const toggleSwitch = (event) => {
    dispatch(switchColorTheme(event.target.checked));
    showTooltip(false);
  };

  return (
    <div className={`${!colorTheme ? "header-light" : "header-dark"}`}>
      <div className="search-holder">
        {users.length > 0 && (
          <TextField
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type="search"
            label="Name/Lastname"
            className="textfield"
          />
        )}
        {show && users.length > 0 && <SearchIcon className="search-icon" />}
      </div>
      <div className="switch-holder">
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
});
