import React from "react";
import { NavLink } from 'react-router-dom';

function CardData1(props) {
    return (
        <>
            <div class="abcd">
                <div class="main">
                    <header class="header">

                        {props.data.userDate? <span>{props.data.userDate}</span> : ""}
                        <br></br>
                        {props.data.bookingStatus? <span className="ss">&nbsp;&nbsp;{props.data.bookingStatus}&nbsp;&nbsp;</span> : ""}

                    </header>

                    <div class="image">
                        {props.data.providerImage? <img src={props.data.providerImage} className="Victoria" /> : ""}
                    </div>
                    <div class="details">
                        {props.data.userAppointmentReason? <h3>{props.data.userAppointmentReason}</h3> : ""}
                        {props.data.providerDesc? <h3>{props.data.providerDesc}</h3> : ""}
                        {props.data.providerName? <h3>{props.data.providerName}</h3> : ""}
                        {props.data.userLocation? <h3>{props.data.userLocation}</h3> : ""}       </div>
                    <footer class="footer">
                        <NavLink to='/details'>{props.data.button1 ? <button >{props.data.button1}</button> : ""}</NavLink>
                        <NavLink to='/details2'>{props.data.button2 ? <button >{props.data.button2}</button> : ""}</NavLink>
                        <NavLink to='/passed'>{props.data.button3 ? <button >{props.data.button3}</button> : ""}</NavLink>
                        <NavLink to='/cancelled'>{props.data.button4 ? <button >{props.data.button4}</button> : ""}</NavLink>


                    </footer>


                </div>

                <br></br><br></br>
            </div>
        </>
    );
}

export default CardData1;
