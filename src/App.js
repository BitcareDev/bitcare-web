import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SIgnInPage";
import HomePage from "./pages/HomePage/HomePage";
import Signin from "./components/Sai/SignIn-Sai/Signin.js"
import Forgot from "./components/Sai/SignIn-Sai/Forgot";
import Signup from "./components/Sai/SignIn-Sai/Signup.js";
//import Appointment from "./components/SignIn-Sai/Appointment";
//import Appoint from "./components/SignIn-Sai/Appoint.js";
import Booked from "./components/Sai/AppointmentBooked-Sai/Booked.js";
import AppointmentDetails from "./components/Sai/AppointmentDetails-Sai/AppointmentDetails.js";
import Reshedule from "./components/Sai/Reshedule/ResheduleAppointment";
import AppointmentDetailsLauren from "./components/Sai/AppointmentDetails2.js/AppointmentDetailsLauren";
import Passed from "./components/Sai/Passed/passed";
import Cancelled from "./components/Sai/Cancelled/Cancelled";
import CancelAppointment from "./components/Sai/CancelAppointment-Sai/CancelAppointment.js";

// import Abcd from "./components/Sai/abcd";
// import Hello from "./components/Sai/Demo";


function App() {
  console.log("In app page");
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignInPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/sai" element={<Signin />} />
        <Route exact path="/forgot" element={<Forgot />} />
        <Route exact path="/signup" element={<Signup />} />

        <Route exact path="/booked" element={<Booked />} />
        <Route exact path="/details" element={<AppointmentDetails />} />
        <Route exact path="/details2" element={<AppointmentDetailsLauren />} />
        <Route exact path="/cancel" element={<CancelAppointment />} />

        <Route exact path="/reshedule" element={<Reshedule />} />
        <Route exact path="/passed" element={<Passed />} />
        <Route exact path="/cancelled" element={<Cancelled />} />

        {/* <Route index element={<SignUp />} /> */}
        {/* {/* <Route path="blogs" element={<Blogs />} /> */}
        {/* <Route exact path="/signup" element={<SignUp />} /> */}
        {/* <Route exact path="*" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
