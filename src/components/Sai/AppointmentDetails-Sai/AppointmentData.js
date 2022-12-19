import React from "react";
import { NavLink } from 'react-router-dom';
import { FaDirections } from "react-icons/fa";

function AppointmentData(props) {
    return (
        <>
            <div class="heading">

                <div class="full_details"><br></br>
                    <div class="show_details1">
                        {props.data.name ? <h1>{props.data.name}</h1> : ""}
                        {props.data.appointment_time ? <h2>{props.data.appointment_time}</h2> : ""}
                        {props.data.appointment_date ? <h3>{props.data.appointment_date}</h3> : ""}
                        {props.data.appointment_service ? <h5>{props.data.appointment_service}</h5> : ""}
                    </div>
                    <div class="show_details2">
                        <div class="image">
                            {props.data.img1 ? <img src={props.data.img1} className="Victoria" /> : ""}
                        </div>
                        {props.data.provider ? <h1>{props.data.provider}</h1> : ""}
                        {props.data.provider2 ? <h2>{props.data.provider2}</h2> : ""}
                    </div>
                    <div class="show_details3">
                        {props.data.location ? <h1>{props.data.location}</h1> : ""}
                        {props.data.location1 ? <h2>{props.data.location1}</h2> : ""}
                        {props.data.location2 ? <h3>{props.data.location2}</h3> : ""}
                        <a href="https://www.bing.com/maps?osid=a0b3591e-a450-4c76-990c-0eaf85b8ec6c&cp=33.036353~-97.446234&lvl=9&v=2&sV=2&form=S00027">
                            <FaDirections /><input type="button" class="directions" value="Get Directions " /></a>
                    </div><br></br><br></br>

                    <div class="show_details4">
                        <h1>
                            About Your Visit:
                        </h1>
                        <h5>
                            Your primary care team will be your long-term partners on your journey to better health.
                            They will work with you to prevent, diagnose, and treat conditions over time, and they will
                            perform routine screenings and yearly physicals. Depending on your appointment reason,
                            appointments generally last 20 to 30 minutes. Our team looks forward to meeting you and
                            helping you reach your health goals!!
                        </h5><br></br><br></br>

                        <NavLink to="/reshedule"><input type="button" value="Reschedule Appointment" /></NavLink>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <NavLink to="/cancel"><input type="button" value="Cancel Appointment" /></NavLink>

                        <br></br>
                        <br></br>


                    </div>

                    <br></br>


                </div>


            </div>
        </>
    );
}

export default AppointmentData;
