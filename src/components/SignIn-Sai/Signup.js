import React from 'react';
import { NavLink } from 'react-router-dom';
//import logo from './logo.png';
//import image from './image.png';
import './Signup.css';

const Signup = () => {

return (
<div class="flex-container">
  <div class="flex-item-left">
<form >
<img src="../assets/logo.png" alt="logo" class="logo"/>

<div class="input-container">
<input type="text" name="fullname" required placeholder="Full name" />
</div>
<div class="input-container">
<input type="email" name="username" required placeholder="Email" />
</div>
<div class="input-container">
<input type="text" name="phoneno" required placeholder="Phone" />
</div>
<div class="input-container">
<input type="password" name="pass" required placeholder="Password" />
</div>
<div class="input-container">
<input type="password" name="pass" required placeholder="Confirm Password" />
</div>
<div class="input-container">
<input type="text" name="text" required placeholder="How did you hear about us?" />
</div>
<div>

</div>
<div class="button3">
<button>Sign up</button>
</div>
<div class="side-content">
<div class="side-content1">Already have an account
<NavLink to="/sai"><div class="side-content2">Sign in here</div></NavLink>
</div>
</div>
</form>
</div>
<div class="flex-item-right">
  <div class="fitness-image">
<img src="../assets/signup-1.png" alt="image" class="image"/>
</div>
</div>

</div>
);
}

export default Signup;