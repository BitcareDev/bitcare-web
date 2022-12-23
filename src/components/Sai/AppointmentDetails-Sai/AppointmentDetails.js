import React from "react";
import './AppointmentDetails.css';
import AppointmentData from "./AppointmentData";
import Sdata1 from "../../Sdata1";


function AppointmentDetails() {
  return (

    <React.Fragment>
      <h1 className="heading_style"> Appointment Details</h1>

      {Sdata1.map(function (d, idx) {
        return (
          <AppointmentData
            data={d}

          />

        )
      })}
    </React.Fragment>

  );
}

export default AppointmentDetails;


