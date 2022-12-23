import React from "react";
import './AppointmentDetailsLauren.css';
import AppointmentDataLauren from "./AppointmentDataLauren";
import Sdata1 from "../../Sdata1";


function AppointmentDetailsLauren() {
  return (

    <React.Fragment>
      <h1 className="heading_style"> Appointment Details</h1>

      {Sdata1.map(function (d, idx) {
        return (
          <AppointmentDataLauren
            data={d}
          
          />
        )
      })}
    </React.Fragment>

  );
}

export default AppointmentDetailsLauren;


