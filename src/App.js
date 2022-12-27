import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SIgnInPage";
import HomePage from "./pages/HomePage/HomePage";
import Sign from "./components/SignIn-Mukesh/SignIn";
import For from "./components/SignIn-Mukesh/password";
import SignUp from "./components/SignIn-Mukesh/SignUp";
import DateTime from "./components/COVID Flow - Mukesh/DateTimeSlot/DateTimeSlot";
import Symptoms from "./components/COVID Flow - Mukesh/Symptoms/Symptoms";
import Consent from "./components/COVID Flow - Mukesh/ConsentPage/ConsentPage";
import Payment from "./components/COVID Flow - Mukesh/PaymentPage/PaymentPage";
import Location from "./components/COVID Flow - Mukesh/LocationPage/LocationPage";
import Service from "./components/COVID Flow - Mukesh/ServicePage/ServicePage";
import {Mapp} from "./components/COVID Flow - Mukesh/LocationPage/demo";
import Demo from "./components/COVID Flow - Mukesh/LocationPage/demo1";
import Location1 from "./components/COVID Flow - Mukesh/Symptoms/location";
import App5 from "./components/SignIn-Mukesh/demo2";
import Rewards from "./components/Rewards/RewardsPage";
import Referral from "./components/Rewards/referralPage";
import Member from "./components/COVID Flow - Mukesh/MemberPage/MemberPage";

function App() {
  console.log("In app page");
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignInPage />} />
        <Route exact path="home" element={<HomePage />} />
        <Route exact path="/mukesh" element={<Sign />} />
        <Route exact path="/password" element={<For/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/datetime" element={<DateTime/>} />
        <Route exact path="/symptoms" element={<Symptoms/>} />
        <Route exact path="/consent" element={<Consent/>} />
        <Route exact path="/payment" element={<Payment/>} />
        <Route exact path="/location" element={<Location/>} />
        <Route exact path="/service" element={<Service/>} />
        <Route exact path="/demo" element={<Mapp/>} />
        <Route exact path="/demo1" element={<Demo/>} />\
        <Route exact path="/location1" element={<Location1/>} />
        <Route exact path="/demo2" element={<App5/>} />
        <Route exact path="/rewards" element={<Rewards/>} />
        <Route exact path="/referral" element={<Referral/>} />
        <Route exact path="/member" element={<Member/>} />
        {/* <Route index element={<SignUp />} /> */}
        {/* {/* <Route path="blogs" element={<Blogs />} /> */}
        {/* <Route exact path="/signup" element={<SignUp />} /> */}
        {/* <Route exact path="*" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
