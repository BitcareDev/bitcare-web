import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SIgnInPage";
import HomePage from "./pages/HomePage/HomePage";
import Signin from "./components/SignIn-Sai/Signin.js"
import Forgot from "./components/SignIn-Sai/Forgot";
import Signup from "./components/SignIn-Sai/Signup.js";


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
   

       
        {/* <Route index element={<SignUp />} /> */}
        {/* {/* <Route path="blogs" element={<Blogs />} /> */}
        {/* <Route exact path="/signup" element={<SignUp />} /> */}
        {/* <Route exact path="*" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
