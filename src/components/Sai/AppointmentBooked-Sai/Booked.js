import React from "react";
import './Booked.css';
import CardData1 from "./Card_data1";
import Sdata from "../../../Sdata";

function Booked() {
  return (

    <React.Fragment>
      <h1 className="heading_style"> Appointment Details</h1>

      {Sdata.map(function (d, idx) {
        return (
          <CardData1
            data={d}
          />
        )
      })}
    </React.Fragment>

  );
}

export default Booked;