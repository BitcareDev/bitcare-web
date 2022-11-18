import React  from "react";
import { NavLink } from 'react-router-dom';
import './signUp.css';

function Signup() {
    return(
        <div>
            <form>
<img src="../assets/logo.png" className="logo2" />


                         <div class="i1">
                         <input type="text" placeholder ="FullName" width="300px"/>
                         </div>
                        <div class="i2">
                        <input type="text" placeholder ="Email"/>
                        </div>
                        <div class="i3">
                        <input type="text" placeholder ="Phone"/>
                        </div>
                        <div class="i4">
                        <input type="text" placeholder ="password"/>
                        </div>
                        <div class="i6">
                        <input type="text" placeholder ="Confirm password"/>
                        </div>
                        <div class="i7">
                        <input type="text" placeholder ="How did you hear about us?"/>
                        </div>
    <button>signUp</button>
    <br></br>
    <br></br>

    <NavLink to="/"><h6>Already have an account?SignIn here</h6></NavLink>
</form>

<img src="../assets/signup-1.png" className="image2" />

         
    </div>

    

    );
}
export default Signup;