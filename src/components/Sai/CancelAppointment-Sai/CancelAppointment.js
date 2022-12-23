import React, { useState } from 'react';

import './CancelAppointment.css';

function CancelAppointment() {
    const shoot = () => {
        alert("Appointment Cancelled Successfully");
        window.location.reload();
    }

    return (
        <>
            <div class="reason_for_cancel">
                <div class="reason">
                    <h1>Reason for Cancel of Appointment</h1>
                </div>

                <div class="reasons">
                    &nbsp;&nbsp;<input type="radio" id="reason" name="reason" value="Already Booked" />
                    <label for="Already Booked">Already Booked</label><br></br>
                    <input type="radio" id="reason" name="reason" value="Not available at that time" />
                    <label for="Not available at that time">Not available at that time</label><br></br>
                    &nbsp;&nbsp;<input type="radio" id="reason" name="reason" value="Recovered" />
                    &nbsp;&nbsp;<label for="Recovered">Recovered</label><br></br>
                    &nbsp;&nbsp;<input type="radio" id="reason" name="reason" value="None of the above" />
                    <label for="None of the above">None of the above</label><br></br><br></br>
                    <input type="text" className="text" placeholder="Type the Reason" />
                </div>
                <br></br><br></br>

                <div class="aa">
                    <input type="button" className="button20" value="continue" onClick={shoot} />
                </div>
            </div>


        </>
    )
}
export default CancelAppointment;