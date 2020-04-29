import React from "react";
import "../index.css";
import { actUser } from "../actions/active";
import { checkPerson } from "../actions/checkPerson";
import { setModal } from "../actions/modal";
import { useDispatch } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";

export default function Contact(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actUser(props.personsData));
    dispatch(setModal(true));
  };

  const handleChange = (event) => {
    dispatch(checkPerson(props.personsData, event.target.checked));
  };

  return (
    <li className="contact">
      <span className="contact-content" onClick={handleClick}>
        <span className="contact-image">
          <img
            src={props.personsData.general.avatar}
            alt={props.personsData.general.firstName}
          />
        </span>
        <span className="contact-info">
          <p>
            <b>
              {" "}
              {props.personsData.general.firstName}{" "}
              {props.personsData.general.lastName}
            </b>
          </p>
          <p> {props.personsData.contact.phone} </p>
        </span>
      </span>
      <Checkbox
        onChange={handleChange}
        style={{ position: "absolute", top: "5px", right: "0px" }}
      />
    </li>
  );
}
