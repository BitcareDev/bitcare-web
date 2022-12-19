import React from "react";
import './passed.css';
import PassedData from "./PassedData";
import Sdata1 from "../../Sdata1";

function Passed() {
  return (

    <React.Fragment>

      {Sdata1.map(function (d, idx) {
        return (
          <PassedData
            data={d}
          />
        )
      })}
    </React.Fragment>

  );
}

export default Passed;