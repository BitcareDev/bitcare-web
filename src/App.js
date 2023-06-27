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
import Consent5 from "./components/ConsentPage1/Consent5";
import Consent6 from "./components/ConsentPage1/Consent6";
import Consent7 from "./components/ConsentPage1/Consent7";
import List from "./components/ToDoList/ToDoList";
import Demo1 from "./components/ConsentPage1/demo1";
import Consent9 from "./components/ConsentPage1/Consent9";
// import Consult from "./components/ConsentPage1/Consult";
// import Consent8 from "./pages/Forms/HydraFacial/HydrafacialPage2";
// import HydraFacial from "./pages/Forms/HydraFacial/HydraFacialPage1";
// import LaserConsent from "./pages/Forms/LaserForm/LaserPage3";
import Cryoskin from "./pages/Forms/Cryoskin/Cryoskin";
import AspenLaser from "./pages/Forms/AspenLaser/AspenLaser";
import VIPLHandpiece from "./pages/Forms/V-IPLHandpice/V-IPLHandpiece";
// import Member from "./components/COVID Flow - Mukesh/MemberPage/MemberPage";
// import HydraFacial from "./pages/Forms/HydraFacial/HydraFacial";
import LaserHairRemoval from "./pages/Forms/LaserForm/LaserHairRemoval";
import LaserHairRemoval1 from "./pages/Forms/LaserForm/LaserPage3";
import CustomerForm from "./pages/AdminDashboard/CustomerPage/CustomerForm";
import CustomerList from "./pages/AdminDashboard/CustomerPage/CustomerList";
import ImportPdf from "./pages/AdminDashboard/HealthEducationPage/Instructions";
import Advertisement from "./pages/AdminDashboard/AdsPage/AdsPage";
import RegistrationDetails from "./pages/AdminDashboard/CustomerPage/RegistrationDetails";
import EmeraldPage1 from "./pages/Forms/EmeraldLaser/EmeraldLaser";
import EmscluptPage1 from "./pages/Forms/EmsculptNeo/EmsculptNeo";
import HydraFacial from "./pages/Forms/HydraFacial/HydraFacial";
import MemberShip from "./pages/AdminDashboard/MemberShipPage/MemberShipPage";
import LocationDetails from "./pages/AdminDashboard/LocationDetails/Locationdetails";

// import Generate from "./components/Generate";
// import ReportTemplate from "./components/Generate";

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
        {/* <Route exact path="/member" element={<Member/>} /> */}
        <Route exact path="/clinic" element={<Consent/>} />
        <Route exact path="/platelet" element={<Consent1/>} />
        <Route exact path="/dermal" element={<Consent2/>} />
        <Route exact path="/emsculpt" element={<Consent3/>} />
        {/* <Route exact path="/cryoskin" element={<Consent4/>} /> */}
        <Route exact path="/intramuscular" element={<Consent5/>} />
        <Route exact path="/oxygen" element={<Consent6/>} />
        <Route exact path="/compression" element={<Consent7/>} />
        {/* <Route exact path="/hydra" element={<Consent8/>} /> */}
        <Route exact path="/aspen" element={<Consent9/>} />
        <Route exact path="/todolist" element={<List/>} />
        <Route exact path="/demo1" element={<Demo1/>} />
        {/* <Route exact path="/consult" element={<Consult/>} /> */}
        {/* <Route exact path="/hydrafacial" element={<HydraFacial/>} /> */}
        {/* <Route exact path="/laserconsent" element={<LaserConsent/>} /> */}
        {/* <Route exact path="/fitzpatrick" element={<LaserPage5/>} /> */}
        {/* <Route index element={<SignUp />} /> */}
        {/* {/* <Route path="blogs" element={<Blogs />} /> */}
        {/* <Route exact path="/signup" element={<SignUp />} /> */}
        {/* <Route exact path="*" element={<SignUp />} /> */}
        <Route exact path="/aspen1" element={<AspenLaser/>} />
        <Route exact path="/cryoskin" element={<Cryoskin/>} />
        <Route exact path="/emerald" element={<EmeraldPage1/>} />
        <Route exact path="/emsculpt1" element={<EmscluptPage1/>} />
        <Route exact path="/hydra" element={<HydraFacial/>} />
        <Route exact path="/laser" element={<LaserHairRemoval/>} />
        <Route exact path="/vipl" element={<VIPLHandpiece/>} />
        <Route exact path="/advertisement" element={<Advertisement/>} />
        <Route exact path="/customerform" element={<CustomerForm/>} />
        <Route exact path="/allcustomers" element={<CustomerList/>} />
        <Route exact path="/customerdetails" element={<RegistrationDetails/>} />
        <Route exact path="/instructions" element={<ImportPdf/>} />
        <Route exact path="/membership" element={<MemberShip/>} />
        <Route exact path="/locationdetails" element={<LocationDetails/>} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   {/* <Advertisement/> */}
    //   <CustomerForm/>
    //   {/* <HydraFacial/> */}
    // </div>
  );
}

export default App;
