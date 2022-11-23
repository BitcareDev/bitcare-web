import { NavLink } from 'react-router-dom';
import './SignUp.css';
//import logo from '../src/Image/Bitcare.png';
//import image from '../src/Image/img3.jpg';

function SignUp() {
  return (
    <div class="row-main">
      <div class="info-left">
          <div class="info-form">
          <img src='../../../assets/logo.png' alt="logo" class="bit-logo"/>
          <div>
            <input type="text" name="username" required placeholder="Full name" class="input-email"/>
          </div>
          <div>
            <input type="email" name="email" required placeholder="Email" class="input-email"/>
          </div>
          <div>
            <input type="text" name="username" required placeholder="Phone" class="input-email"/>
          </div>
          <div>
            <input type="password" name="password" required placeholder="Password" class="input-password"/>
          </div>
          <div>
            <input type="password" name="password" required placeholder="Confirm Password" class="input-password"/>
          </div>
          <div>
            <input type="text" name="username" required placeholder="How did you hear about us?" class="input-email"/>
          </div>
          <button type="button" class="button">Sign Up</button>
          <div class="subContent">
          <div class="sub-info">
            <div class="Sub-text">Don't have an account? <NavLink to="/mukesh"><div class="sub-link">Sign in</div></NavLink></div> 
          </div>
          </div>
          </div>
        </div>
        
        <div class="info-right">
          <img src='../../../assets/img3.jpg' alt="main" class="image-info"/>
        </div>
      
    </div>
  );
}

export default SignUp;