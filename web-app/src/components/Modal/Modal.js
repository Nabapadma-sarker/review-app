import React from "react";
import "./Modal.css";

const Modal = ({ closeModal, children, title }) => {
  return (
    <>
      <div className="modal-back-drop"></div>
      <div className="modal-main-review">
        <div className="modal-content-review">
          <div className="modal-header-review">{title}</div>
          <div className="modal-body-review">{children}</div>
          <div className="modal-footer-review">
            <button className="btn btn-close" onClick={closeModal}>
              Close
            </button>
            <button className="btn btn-edit" onClick={closeModal}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
