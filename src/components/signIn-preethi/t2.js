import React from'react';
import './t2.css';
import { CiStethoscope } from "react-icons/ci";
import { VscArrowRight } from "react-icons/vsc";

function Tele2()
{
  return(
    <div>
    <div class ="firstbg">    
    <div class ="firsth">
    <p>Choose your services </p>
    </div>
    <div class ="secondbg">
      <br></br>
    <div class=" mainbg">
    <div class="row rowcl">
                      <div class="col-xs-6 thirdbx">
                        <p class="ram"><CiStethoscope /> Vertigo </p>
                      </div>
                      <div class="col-xs-6 thirdbx">
                        <p > <CiStethoscope />  Sinus Infections </p>
                      </div>
                      <div class="col-xs-6 thirdbx">
                        <p ><CiStethoscope />  Seasonal Allergies</p>
                      </div>
                      <div class="col-xs-6 thirdbx">
                        <p ><CiStethoscope />  Hypertension</p>
                      </div>
                      <div class="col-xs-6 thirdbx">
                        <p ><CiStethoscope />  Dizziness</p>
                      </div>
                      <div class="col-xs-6 thirdbx">
                        <p><CiStethoscope />  Headache</p>
                      </div>
                      
                    </div>

                    </div>
        
    
    </div>


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