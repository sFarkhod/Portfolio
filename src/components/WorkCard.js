import React, { useState } from "react";
import "./css/Work.css";
import "./css/Modal.css";
import { Tooltip } from "react-tooltip";

export default function WorkCard(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="projects-img shadow">
        <img src={props.image} className="work-image" onClick={toggleModal} />
      </div>

      {/* POPUP Modal */}
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content d_flex">
            <div className="modal-img">
              <img className="modal-portfolio-img" src={props.image} alt="" />
            </div>
            <div className="modal-text right">
              <span>Info About Project</span>
              <h1>{props.title}</h1>
              <p
                data-tooltip-id="item-tooltip"
                data-tooltip-content={props.info}
                data-tooltip-place="top"
                data-tooltip-variant={"dark"}
              >
                {props.info.length > 70
                  ? `${props.info.substring(0, 70)}...`
                  : props.info}
              </p>
              <Tooltip id="item-tooltip" className="TooltipCustom" />
              <div className="f_flex mtop">
                <button className="btn_shadow">
                  LIKE THIS <i className="far fa-thumbs-up"></i>
                </button>
                <button className="btn_shadow">
                  VIEW PROJECT <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <button className="close-modal btn_shadow" onClick={toggleModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
