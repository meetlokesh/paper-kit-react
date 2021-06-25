import React from 'react';
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import {
    Button,
    Modal,
  } from "reactstrap";

const PopupModal = () => {
    const [modal, setModal] = React.useState(true);
    const toggleModal = () => {
      setModal(!modal);
    };
    return (
        <Modal isOpen={modal} toggle={toggleModal}>
            <div className="modal-header">
                <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal}
                >
                    <span aria-hidden={true}>×</span>
                </button>
                <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                >
                    Drawings
                </h5>
            </div>
            <div className="modal-body">
            <SectionCarousel/>
            </div>
            <div className="modal-footer">
                <div className="left-side">
                    <Button
                        className="btn-link"
                        color="default"
                        type="button"
                        onClick={toggleModal}
                    >
                        Never mind
                    </Button>
                </div>
                <div className="divider" />
                <div className="right-side">
                    <Button className="btn-link" color="danger" type="button">
                        Learn
                    </Button>
                </div>
            </div>
        </Modal>

    )
};
export default PopupModal;