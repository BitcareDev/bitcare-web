import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SIgnInPage";
import HomePage from "./pages/HomePage/HomePage";
import Sign from "./components/SignIn-Mukesh/SignIn";
import For from "./components/SignIn-Mukesh/password";
import SignUp from "./components/SignIn-Mukesh/SignUp";
import Location from "./components/COVID Flow - Mukesh/LocationPage/LocationPage";
import DateTime from "./components/COVID Flow - Mukesh/DateTimeSlot/DateTimeSlot";
import Symptoms from "./components/COVID Flow - Mukesh/Symptoms/Symptoms";

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
        <Route exact path="/location" element={<Location/>} />
        <Route exact path="/datetime" element={<DateTime/>} />
        <Route exact path="/symptoms" element={<Symptoms/>} />
        {/* <Route index element={<SignUp />} /> */}
        {/* {/* <Route path="blogs" element={<Blogs />} /> */}
        {/* <Route exact path="/signup" element={<SignUp />} /> */}
        {/* <Route exact path="*" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
