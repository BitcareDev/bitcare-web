import React from'react';
import './t3.css';
import victoria from './victoria.png';
import { CiLocationOn }from "react-icons/ci";
import lauren from './lauren.png';


function Tele3()
{
  return(
    <div>
     <h3> TELEMEDICINE</h3>
    <div class ="firstb">
      
    <div class="provider">

         <div class="secondb">
          <br></br>
          <div class="victoria">
         <img src= {victoria} class="vimage" />
         </div>
         <h4>Dr.Victoriaa De </h4>
         <span>Nurse Practitioner- Adult Health</span>
         <h6> < CiLocationOn />2100 DALLAS PKWY, STE 115, PLANO
</h6>
<input type="button" value="show availabilites"  class ="ip1" />
<br></br>
<br></br>

         </div>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <div class="secondbleft">
          <div class="victoria2">
            <br></br>
         <img src= {lauren} class="vimage2"  />
         </div>
         <h4>Dr.Lauren Thomas</h4>
         <span>Family Medicine</span>

         
         <h6>  < CiLocationOn />20602 Arch Street Pike, Hensley
</h6><br></br>
 
         <input type="button" value="show availabilites" class ="ip2" />
         <br></br>
         <br></br>

         </div>
         </div><br></br><br></br>
            </div>
            </div>
  );
}

export default Tele3;