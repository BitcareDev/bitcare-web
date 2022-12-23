import React, { useState } from "react";
import './ResheduleAppointment.css';
import { TbCalendarTime } from 'react-icons/tb';
import { FiEdit } from 'react-icons/fi';

function Reshedule() {

  const shoot = () => {
    alert("Appointment Resheduled Successfully");
    window.location.reload();
  }
  const [txt, setTxt] = useState('');

  const onInputChange = e => {
    const { value } = e.target;
    console.log('Input value: ', value);

    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setTxt(value);
    }
  }
  return (
    <>

      <div class="reshedule_main">
        <br></br>
        <div class="main_heading">
          <h1><TbCalendarTime className="icon" /> Reshedule your Appointment</h1>
        </div>
        <hr></hr>
        <div class="main_details">

          {/* When is your original Appointment?<br></br>
                <input type="date" id="birthday" name="birthday" />&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" className="phone1" />&nbsp;&nbsp; : &nbsp;&nbsp;
                <input type="number" className="phone2" /><br></br><br></br> */}
          Please select your new Appointment Date and time:<br></br>
          <input type="date" id="birthday" name="birthday" /><br></br>
          <br></br>
          <input type="button" className="time1" value="10:00 AM" />
          <input type="button" className="time1" value="10:30 AM" />
          <input type="button" className="time1" value="11:00 AM" /><br></br><br></br>
          <input type="button" className="time1" value="11:30 AM" />
          <input type="button" className="time1" value="12:00 PM" />
          <input type="button" className="time1" value="12:30 PM" /><br></br><br></br>
          <input type="button" className="time1" value="01:00 PM" />
          <input type="button" className="time1" value="01:30 PM" />
          <input type="button" className="time1" value="02:00 PM" /><br></br><br></br><br></br><br></br>

          <h2>Contact Information &nbsp;<FiEdit className="icon2" /></h2>
          <hr></hr>
          <br></br>
          <br></br>

          Name<br></br>

          <input type="text" placeholder="firstname" className="firstname" value="" onChange={onInputChange} />&nbsp;&nbsp;
          <input type="text" placeholder="lastname" className="lastname" value="" onChange={onInputChange} />
          <br></br>
          <br></br>
          Email<br></br>
          <input type="email" placeholder="enter your email" value="" className="email" /><br></br><br></br>
          Phone Number<br></br>
          <input type="number" placeholder="enter phone no" className="phone" />
          <br></br><br></br>
          Best method for contacting you?<br></br>
          <input type="radio" id="reason" name="reason" value="Email" />
          <label for="Email">Email</label><br></br>
          <input type="radio" id="reason" name="reason" value="Phone" />
          <label for="Phone">Phone</label><br></br>
          <input type="radio" id="reason" name="reason" value="Other" />
          <label for="Other">Other</label><br></br><br></br>

          How can we help you?<br></br>
          <textarea className="message" placeholder="Type here"></textarea><br></br><br></br>

          Additional Notes?<br></br>
          <textarea className="message" placeholder="Type here"></textarea><br></br><br></br>
          <button className="submit" onClick={shoot}>Submit</button>

        </div>
        <br></br>
      </div>

    </>
  )
}

export default Reshedule;