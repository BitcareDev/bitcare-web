import React from "react";
import './AppointmentDetails.css';
import { FaDirections } from "react-icons/fa";

function AppointmentDetails() {
    return(

        
        <div class="heading">
        <h1>Appointment Details</h1>
        <div class="full_details"><br></br>
            <div class="show_details1">
                <h1>Ric S Kolluri</h1>
                <h2>Friday 10:00 AM PST</h2>
                <h3>December 30,2022</h3>
                <h5>Telemedicine</h5>
            </div>
            <div class="show_details2">
                <div class="image">
                <img src="../assets/Victoria.png" className="Victoria" />
                </div>
                <h1>Victoria De Anda,AGNP</h1>
                <h2>Your Care Provider</h2>
            </div>
            <div class="show_details3">
            <h1>Plano, TX</h1>
            <h2>5700 Tennyson Pkwy Suite 300</h2>
            <h3>Plano,TX 75024, United States</h3>
            <a href="https://www.bing.com/maps?osid=a0b3591e-a450-4c76-990c-0eaf85b8ec6c&cp=33.036353~-97.446234&lvl=9&v=2&sV=2&form=S00027">
            <FaDirections /><input type="button"  class="directions" value=  "Get Directions "  /></a> 
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
               
                <input type="button" value="Reschedule Appointment" />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" value="Cancel Appointment"  />

                <br></br>
                <br></br>
             
             
             </div>

        </div>
</div>
    );
}

export default AppointmentDetails;


