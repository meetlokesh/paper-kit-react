import React from "react";
import { useHistory } from "react-router-dom";
// nodejs library that concatenates strings
import EventBookingForm from "./EventBookingForm.js";

// reactstrap components
import {
    Button,
    Card,
} from "reactstrap";

const EventsAndClasses = () => {
    const [isOpen, setModal] = React.useState(false);
    let history = useHistory();

    const handleRoute = (routeTo) => {
        history.push(routeTo);
    }
    const handleBookingForm = () => {
        setModal(!isOpen);
      }
    return (
        <div className="card-wrapper">
            <Card className="card-row">
                <div className="card-img size-33">
                    <a href="/pablo" onClick={(e) => e.preventDefault()}>
                        <img
                            alt="..."
                            src={
                                require("assets/img/classes/class-img.jpg")
                                    .default
                            }
                        />
                    </a>
                </div>
                <div className="class-body">
                    <div className="lh-content">
                        <h5>
                            <a onClick={e => handleRoute('classes')}>
                                <span className="CenterName upper-case" >
                                    Make Your Kids Digital Ready </span>
                            </a>
                        </h5>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td><i className="fa fa-calendar" aria-hidden="true"></i></td>
                                    <td className="tl-right">
                                        23 Jun - 14 Jul
                                    </td>
                                    <td><i className="fa fa-user" aria-hidden="true"></i></td>
                                    <td className="tl-right">9 - 12 Yrs</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr className="feeTR">
                                    <td><i className="fa fa-inr" aria-hidden="true"></i></td>
                                    <td colSpan="2" className="tl-right">50</td>
                                    <td>
                                        <Button onClick={handleBookingForm} color="primary">Book</Button>
                                    </td>
                                    <div className='time-col'>
                                        <i class="fa fa-clock-o fa-2x"></i>
                                        <p>10:30 am</p>
                                    </div>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Card>
            { isOpen && <EventBookingForm isOpen={isOpen} />}
        </div>
    );
}

export default EventsAndClasses;
