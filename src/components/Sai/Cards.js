import React from "react";
import { NavLink } from 'react-router-dom';

function Card(props) {
   // console.log(props);

     return(
        <>
        <div className="cards">
            <div className="card">
                
                <div className="card_info">
                    
                {props.data.userDate?<span className="card_date">{props.data.userDate}</span>:""}

             {props.data.providerImage?<img src= {props.data.providerImage} className="card_image"/>:""} 
                <div className="card_info1">

                {props.data.userAppointmentReason?<h3 className="card_service">{props.data.userAppointmentReason}</h3>:""}
                 
                {props.data.userBookingType?<h3 className="card_specialist">{props.data.userBookingType}</h3>:""}
                {props.data.providerName?<h3 className="card_providername">{props.data.providerName}</h3>:""}
                {props.data.userLocation?<h3 className="card_location">{props.data.userLocation}</h3>:""}
                 {props.data.bookingStatus?<h3 className="card_status">{props.data.bookingStatus}</h3>:""}  
                </div>
                    {/* <a href={props.data.links} target="_blank">
                     
                                                
                    </a> */}
                       <NavLink to='/details'><button className="watch">Show Details</button></NavLink>
                </div>
                
            </div>
            <br></br><br></br>
        </div>
        
        </>
    );
}
export default Card;
