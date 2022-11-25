import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SIgnInPage";
import HomePage from "./pages/HomePage/HomePage";
import Sign from "./components/signIn-preethi/signin";
import Signup from "./components/signIn-preethi/signUp";
import Signfp from "./components/signIn-preethi/forgot";
import Tele2 from "./components/signIn-preethi/t2.js";
import Tele3 from "./components/signIn-preethi/t3.js";





function App() {
  console.log("In app page");
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignInPage />} />
        <Route exact path="home" element={<HomePage />} />
        <Route exact path="/preethi" element={<Sign />} />
        <Route exact path="/preethi1" element={<Signfp />} />
                <Route exact path="/preethi2" element={<Signup />} />
      
                <Route exact path="/preethi5" element={<Tele2 />} />
                <Route exact path="/provider" element={<Tele3 />} />

                
        {/* <Route index element={<SignUp />} /> */}
        {/* {/* <Route path="blogs" element={<Blogs />} /> */}
        {/* <Route exact path="/signup" element={<SignUp />} /> */}
        {/* <Route exact path="*" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
