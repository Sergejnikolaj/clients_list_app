import React from "react";
import "../index.css";
import { actUser } from "../actions/active";
import { changeUserIsChecked } from "../actions/getData";
import { checkPerson } from "../actions/checkPerson";
import { setModal } from "../actions/modal";
import { useDispatch } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";

export default function Contact(props) {
  const dispatch = useDispatch();
  const {
    personsData = {},
    personsData: {
      general: { avatar, firstName, lastName },
      contact: { phone },
      isChecked,
    },
  } = props;

  const handleClick = () => {
    dispatch(actUser(personsData));
    dispatch(setModal(true));
  };

  const handleChange = (event) => {
	const checkData = {
	  checkPhone: phone,
	};
    dispatch(checkPerson(personsData, event.target.checked));
    dispatch(changeUserIsChecked(checkData));
  };

  return (
    <li className="contact">
      <span className="contact-content" onClick={handleClick}>
        <span className="contact-image">
          <img src={avatar} alt="list-avatar" />
        </span>
        <span className="contact-info">
          <p>
            <b>
              {" "}
              {firstName} {lastName}
            </b>
          </p>
          <p> {phone} </p>
        </span>
      </span>
      <Checkbox
        checked={isChecked}
        onChange={handleChange}
        style={{ position: "absolute", top: "5px", right: "0px" }}
      />
    </li>
  );
}
