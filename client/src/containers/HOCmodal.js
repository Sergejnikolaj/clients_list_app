import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { setModal } from "../actions/modal";

export default function HOCmodal(Component) {
  const isOpen = useSelector((state) => state.modal.modal);
  const dispatch = useDispatch();

  const handleClose = () => {
    isOpen && dispatch(setModal(false));
  };

  return function (props) {
    return (
      <>
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
          <Fade in={true}>
            <div className="modal-wrapper">
              <Component {...props} />
            </div>
          </Fade>
        </Modal>
      </>
    );
  };
}
