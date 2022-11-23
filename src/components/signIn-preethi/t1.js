import React from "react";
import { FaStethoscope } from "react-icons/fa";
import { VscArrowRight } from "react-icons/vsc";
import 'bootstrap/dist/css/bootstrap.min.css';
import './t1.css';
function Tele1 () {
    return (
      <div>  
          <div className ="app1">
            Telemedicine 
            </div>
              <div class ="total"> 
                <br/>   
                    <h2>Choose your Service</h2>
     
<div class ="scroll">
<div class="row rowcl">

                      <div class="col-xs-6 raww">
                        <p class="ram">< FaStethoscope/> Acute Care Services</p>
                      </div>
                      <div class="col-xs-6 raww">
                        < p class="ram">< FaStethoscope/> Sinus Infection </p>
                      </div>
                      <div class="col-xs-6 raww">
                        <p class="ram">< FaStethoscope/> Seasonal Allergies</p>
                      </div>
                      <div class="col-xs-6 raww">
                        <p class="ram">< FaStethoscope/> Hypertension</p>
                      </div>
                      <div class="col-xs-6 raww">
                        <p class="ram">< FaStethoscope/> Headache</p>
                      </div>
                      <div class="col-xs-6 raww">
                        <p class="ram">< FaStethoscope/> Vertigo</p>
                      </div>
                      <div class="col-xs-6 raww">
                        <p class="ram">< FaStethoscope/> Dizziness</p>
                      </div>
                      <div class="col-xs-6 raww">
                        <p class="ram">< FaStethoscope/> Fever</p>
                      </div>
                      <div class="col-xs-6 raww">
                        <p class="ram">< FaStethoscope/> cold</p>
                      </div>

                    </div>
                    </div>

                                   <h2>Reason for appointment</h2>
                 <div>
                  <input type="text"  class ="ip"   placeholder="write your symptoms(optional)..." />
                 </div>
                 <button>Next <VscArrowRight/>
            </button>
                

</div>
</div>

    );
  
    }

export default Tele1;