import React from "react";
import "../index.css";
import TextField from "@material-ui/core/TextField";
import { search } from "../actions/search";
import { useDispatch } from "react-redux";

export default function Search() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(search(event.target.value));
  };

  return (
    <div className="search-wrapper">
      <div className="search-holder">
        <TextField
          onChange={handleChange}
          type="search"
          label="Search by name/lastname"
          className="textfield"
        />
      </div>
    </div>
  );
}
