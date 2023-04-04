import React from 'react';
import './DateTimeSlot.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRight } from 'react-icons/fa';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Dtdata } from '../LocationPage/data';

function DateTime(props) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Service");
    };
    return (
        <React.Fragment>
            <div class="container">
                <h1 className="header"><button className="btn-back" onClick={handleClick}><AiOutlineArrowLeft /></button> Date and Time Slot</h1>
                <div className="bg-datetime">
                    <div className="bg-slot">
                        <div className="bg-date">
                            <h2 className='date-text'>Select a date</h2>
                            <input type="date" id="birthday" name="birthday" />
                            <div class="row gy-4 row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">                        
                            {Dtdata.map(function (doc, idx) {
                                return (
                                    <>
                                        <div class="col">
                                            {doc.timeslot1 ? <div type="button" className="btn-time" id="time">{doc.timeslot1}</div> : ""}
                                        </div>
                                    </>
                                )
                            })}
                            </div>
                        </div>

                    </div>
                    <div className="btn-next">
                        <NavLink to="/consent1"><button className="next">Next <FaArrowRight /></button></NavLink>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DateTime;