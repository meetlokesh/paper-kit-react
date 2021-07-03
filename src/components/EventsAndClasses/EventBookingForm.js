import React from "react";
import {
    Button,
    Modal,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
} from "reactstrap";

const EventBookingForm = () => {
    const [modal, setModal] = React.useState(true);
    const toggleModal = () => {
        setModal(!modal);
    };
    
    const handleSubmit= ()=>{
        console.log("submit button clicked");
        setModal(!modal);
    }
    return (
        <Modal isOpen={modal} toggle={toggleModal}>
            <div className="modal-header bg-info">
                <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal}
                >
                <span aria-hidden={true}>×</span>
                </button>
                <h5
                    className="modal-title text-center text-danger font-bold"
                    id="exampleModalLabel"
                >
                    EVENT BOOKING FORM
                </h5>
            </div>
            <div className="modal-body">
                <Form className="">
                    <Row sm="12" className='mr-btm'>
                        <label>Parent Name</label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="fa fa-user" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Name" type="text" />
                        </InputGroup>
                    </Row>
                    <Row sm="12" className='mr-btm'>
                        <label> Parent Email</label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="fa fa-envelope-o" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Email" type="text" />
                        </InputGroup>
                    </Row>
                    <Row sm="12" className='mr-btm'>
                        <label>Child Name</label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="fa fa-child" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Name" type="text" />
                        </InputGroup>
                    </Row>
                    <Row sm="12" className='mr-btm'>
                        <label>Child Age</label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="fa fa-birthday-cake" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Child Age" type="Number" />
                        </InputGroup>
                    </Row>
                    <Row sm="12" className='mr-btm'>
                        <label>Your Mobile Number</label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="fa fa-mobile" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Mobile Number" type="Number" />
                        </InputGroup>
                    </Row>
                </Form>
            </div>
            <div className="modal-footer">
                <Row>
                    <Button className="btn-fill" color="danger" size="lg" type="button" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Row>
            </div>
        </Modal>
    );
};
export default EventBookingForm;
