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
import Payment from "./components/COVID Flow - Mukesh/PaymentPage/PaymentPage";
import Location from "./components/COVID Flow - Mukesh/LocationPage/LocationPage";
import Service from "./components/COVID Flow - Mukesh/ServicePage/ServicePage";
import {Mapp} from "./components/COVID Flow - Mukesh/LocationPage/demo";
import Location1 from "./components/COVID Flow - Mukesh/Symptoms/location";
import App5 from "./components/SignIn-Mukesh/demo2";
import Rewards from "./components/Rewards/RewardsPage";
import Referral from "./components/Rewards/referralPage";
import Member from "./components/COVID Flow - Mukesh/MemberPage/MemberPage";
import Consent01 from "./components/COVID Flow - Mukesh/ConsentPage/ConsentPage";
import Consent from "./components/ConsentPage1/Consent";
import Consent1 from "./components/ConsentPage1/Consent1";
import Consent2 from "./components/ConsentPage1/Consent2";
import Consent3 from "./components/ConsentPage1/Consent3";
import Consent4 from "./components/ConsentPage1/Consent4";
import Consent5 from "./components/ConsentPage1/Consent5";
import Consent6 from "./components/ConsentPage1/Consent6";
import Consent7 from "./components/ConsentPage1/Consent7";
import List from "./components/ToDoList/ToDoList";
import Demo1 from "./components/ConsentPage1/demo1";
import Consent8 from "./components/ConsentPage1/Consent8";
import Consent9 from "./components/ConsentPage1/Consent9";
import Consult from "./components/ConsentPage1/Consult";

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
        <Route exact path="/consent01" element={<Consent01/>} />
        <Route exact path="/payment" element={<Payment/>} />
        <Route exact path="/location" element={<Location/>} />
        <Route exact path="/service" element={<Service/>} />
        <Route exact path="/demo" element={<Mapp/>} />
        <Route exact path="/location1" element={<Location1/>} />
        <Route exact path="/demo2" element={<App5/>} />
        <Route exact path="/rewards" element={<Rewards/>} />
        <Route exact path="/referral" element={<Referral/>} />
        <Route exact path="/member" element={<Member/>} />
        <Route exact path="/clinic" element={<Consent/>} />
        <Route exact path="/platelet" element={<Consent1/>} />
        <Route exact path="/dermal" element={<Consent2/>} />
        <Route exact path="/emsculpt" element={<Consent3/>} />
        <Route exact path="/cryoskin" element={<Consent4/>} />
        <Route exact path="/intramuscular" element={<Consent5/>} />
        <Route exact path="/oxygen" element={<Consent6/>} />
        <Route exact path="/compression" element={<Consent7/>} />
        <Route exact path="/hydrafacial" element={<Consent8/>} />
        <Route exact path="/aspen" element={<Consent9/>} />
        <Route exact path="/todolist" element={<List/>} />
        <Route exact path="/demo1" element={<Demo1/>} />
        <Route exact path="/consult" element={<Consult/>} />
        {/* <Route index element={<SignUp />} /> */}
        {/* {/* <Route path="blogs" element={<Blogs />} /> */}
        {/* <Route exact path="/signup" element={<SignUp />} /> */}
        {/* <Route exact path="*" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
