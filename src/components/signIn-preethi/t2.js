import React from'react';
import './t2.css';
import { FaStethoscope } from "react-icons/fa";

import { VscArrowRight } from "react-icons/vsc";

function Tele2()
{
  return(
    <div>
    <div class ="firstbg">    
    <div class ="firsth">
    <p>Choose your services </p>

    </div>
    
    <div class = "auto">
      <br></br>
    <div class="row rowcl">

<div class="col-xs-6 thirdbg">
  <p class="main">< FaStethoscope/> Acute Care Services</p>
</div>
<div class="col-xs-6 thirdbg">
  < p class="main">< FaStethoscope/> Sinus Infection </p>
</div>
<div class="col-xs-6  thirdbg">
  <p class="main">< FaStethoscope/> Seasonal Allergies</p>
</div>
<div class="col-xs-6 thirdbg">
  <p class="main">< FaStethoscope/> Hypertension</p>
</div>
<div class="col-xs-6 thirdbg">
  <p class="main">< FaStethoscope/> Headache</p>
</div>
<div class="col-xs-6 thirdbg">
  <p class="main">< FaStethoscope/> Vertigo</p>
</div>
<div class="col-xs-6 thirdbg">
  <p class="main">< FaStethoscope/> Dizziness</p>
</div>
<div class="col-xs-6 thirdbg">
  <p class="main">< FaStethoscope/> Fever</p>
</div>

</div>
</div>
<br></br>

    <div class ="secondh">   
     <p>Reason for appointment</p>
    </div>
    <div >
      <input type="text"   class ="firstip" placeholder="Write your symptopms (optional...) " />

    </div>
    <button className ="btn-next">Next< VscArrowRight/></button>
    </div>

</div>
    

  )
}

export default Tele2;