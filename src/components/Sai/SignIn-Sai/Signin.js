import React from 'react';
import { NavLink } from 'react-router-dom';

import './Signin.css';

const Signin = () => {
  return (
    <div class="flex-container">
      <div class=" content">

        <form >
          <img src="../assets/logo.png" className="logo" />
          <h1>Welcome Back </h1>

          <div class="input">
            <input type="email" name="username" required placeholder="Email" />
          </div>
          <div class="input">
            <input type="password" name="pass" required placeholder="Password" />
          </div>
          <div>
            <NavLink to="/forgot"><h4>Forgot password</h4></NavLink>
          </div>
          <div class="button1">
            <button>Sign In</button>
          </div>
          <div class="side-content">
            <div class="side-content1">Don't have an account?
              <NavLink to="/Signup"><div class="side-content2">Sign up for free</div></NavLink>
            </div>
          </div>
        </form>

      </div>

      <div class="girl-image">
        <div class="fitness-image">
          <img src="../assets/signup-1.png" className="image" />
        </div>
      </div>
    </div>
  );
}

export default Signin;