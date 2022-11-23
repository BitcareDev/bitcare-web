import React  from "react";
import { NavLink}  from 'react-router-dom';
import './signin.css';
function Sign() {
    return(
<div >
<img src="../assets/logo.png" className="logo1"/>

            <h2>Welcome back</h2>
            <div class="ie">
            <input type="text" placeholder ="email"/>
            </div>
            <div class ="inn">
            <input type="text" placeholder ="password"/>
            </div>

            <div class ="i3">
<NavLink to="/preethi1"><h5>Forgot password</h5></NavLink>
</div> 
 
    <button class = "button  button1">signin</button>

    <div class ="i4">
    <NavLink to="/preethi2"><h4>Don't have an account?SignUp</h4></NavLink>
    </div>

<div>
<img src="../assets/signup-1.png" className="image1" />

            </div>
            
            </div>

    );
}
export default Sign;