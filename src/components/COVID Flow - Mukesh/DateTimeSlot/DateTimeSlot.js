import React from 'react';
import './DateTimeSlot.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function DateTime(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Location");
      };
    return(
        <div class="container">
            <h1 className="header"><button className="btn-back" onClick={handleClick}><FaArrowLeft/></button> Date and Time Slot</h1>
            <div className="bg-datetime">
            <div className="bg-slot">
                <div className="bg-date">
                        <h2 className='date-text'>Select a date</h2>
                        <input type="date" id="birthday" name="birthday"/>
                        <div class="row gy-4 row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">
                        <div class="col">
                            <button type="button" className="btn-time" id="time">10:00 AM</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn-time" id="time">10:30 AM</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn-time" id="time">11:00 AM</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn-time" id="time">11:30 AM</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn-time" id="time">12:00 AM</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn-time" id="time">12:30 AM</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn-time" id="time">1:00 AM</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn-time" id="time">1:30 AM</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn-time" id="time">2:00 AM</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn-time" id="time">2:30 AM</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn-time" id="time">3:00 AM</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn-time" id="time">3:30 AM</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn-time" id="time">4:00 AM</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn-time" id="time">4:30 AM</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn-time" id="time">5:00 AM</button>
                        </div>
                        </div>
                </div>
            </div>
            <div className="btn-next">
            <NavLink to="/symptoms"><button className="next">Next <FaArrowRight/></button></NavLink>
            </div>
            </div>
        </div>
    );
}

export default DateTime;