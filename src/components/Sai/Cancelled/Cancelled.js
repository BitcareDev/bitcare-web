import React from "react";
import './Cancelled.css';
import CancelledData from "./CancelledData";
import Sdata1 from "../../Sdata1";

function Cancelled() {
  return (

    <React.Fragment>

      {Sdata1.map(function (d, idx) {
        return (
          <CancelledData
            data={d}

          />


        )
      })}
    </React.Fragment>

  );
}

export default Cancelled;