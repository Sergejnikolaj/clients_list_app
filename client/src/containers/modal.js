import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { setModal } from "../actions/modal";

export const ModalComponent = memo((props) => {
  const isOpen = useSelector((state) => state.modal.modal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModal(false));
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div>
            <div className="active-picture-holder">
              <img src={props.general.avatar} alt={props.general.firstName} />
            </div>
            <div className="active-info-holder color-white">
              <p>
                <b>Name/Lastname: </b>
                {props.general.firsName} / {props.general.lastName}
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
              <span>
                <details className="color-white">
                  <summary className="add-info">Additional info</summary>
                  <p>
                    <b>Phone number: </b>
                    {props.contact.phone}{" "}
                  </p>
                  <p>
                    <b>Job company: </b>
                    {props.job.company}{" "}
                  </p>
                  <p>
                    <b>Street: </b>
                    {props.address.street}
                  </p>
                  <p>
                    <b>ZipCode: </b>
                    {props.address.zipCode}
                  </p>
                  <p>
                    <b>City: </b>
                    {props.address.city}
                  </p>
                </details>
              </span>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
});
