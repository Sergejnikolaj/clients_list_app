import React from "react";
import "../index.css";

export default function ActiveContact(props) {
  return (
    <React.Fragment>
      <div className="active-picture-holder">
        <img src={props.general.avatar} alt={props.general.firstName} />
      </div>
      <div className="active-info-holder">
        <p>
          <b>Name/Lastname: </b>
          {props.general.firstName} / {props.general.lastName}
        </p>
        <p>
          <b>Email: </b>
          {props.contact.email}
        </p>
        <p>
          <b>Job title: </b>
          {props.job.title}
        </p>
        <p>
          <b>Country: </b>
          {props.address.country}
        </p>
        <p>
          <b>Phone number: </b>
          {props.contact.phone}{" "}
        </p>
        <p>
          <b>Job company: </b>
          {props.job.company}{" "}
        </p>
        <p>
          <b>City: </b>
          {props.address.city}
        </p>
        <p>
          <b>Street: </b>
          {props.address.street}
        </p>
        <p>
          <b>ZipCode: </b>
          {props.address.zipCode}
        </p>
      </div>
    </React.Fragment>
  );
}
