import React from "react";
import "../index.css";
import TextField from "@material-ui/core/TextField";
import { search } from "../actions/search";
import { switchColorTheme } from "../actions/colorTheme";
import { useDispatch, useSelector } from "react-redux";
import Switch from "@material-ui/core/Switch";

export default function Search() {
  const dispatch = useDispatch();
  const colorTheme = useSelector((state) => state.colorTheme.lightTheme);

  const handleChange = (event) => {
    dispatch(search(event.target.value));
  };

  const handleSwitch = (event) => {
    dispatch(switchColorTheme(event.target.checked));
  };

  return (
    <div
      className={`search-wrapper ${!colorTheme ? "white-theme" : "dark-theme"}`}
    >
      <div className="search-holder">
        <TextField
          onChange={handleChange}
          type="search"
          label="Search by name/lastname"
          className="textfield"
        />
      </div>
      <Switch className="switch-color-theme" onChange={handleSwitch} />
    </div>
  );
}
