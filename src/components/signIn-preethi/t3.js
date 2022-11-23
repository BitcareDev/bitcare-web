import React from'react';
import './t3.css';
import { FaStethoscope } from "react-icons/fa";

import { VscArrowRight } from "react-icons/vsc";
import victoria from './victoria.png';

function Tele3()
{
  return(
    <div class ="firstb">
        <div></div>
        <div  class ="flex-container">
        <div class ="flex-item-left"> 
        <div>
        <img src ={victoria}   height="100px"  width="auto"/>
        </div>

        <h2>Dr Victoria De Anda</h2>
        <p>Nurse Practitioner-Adult Healt</p>
            </div>
     
<div class ="flex-item-right">

            </div>
            </div>
            </div>
    

  )
}

export default Tele3;