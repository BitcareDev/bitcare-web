import React from 'react';
import { NavLink } from 'react-router-dom';
import './SignIn.css';
//import logo from '../../../public/assets/img3.jpg';
//import image from '../src/Image/img3.jpg';

function Sign() {
    return (
        <div class="row-main">
            <div class="info-left">
                <div class="info-form">
                    <img src="../../../assets/logo.png" alt="mass" class="bit-logo" />
                    <h1 class="info-content">Welcome back</h1>
                    <div>
                        <input type="email" name="email" placeholder="Email" class="input-email" required />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" class="input-password" required />
                    </div>
                    <NavLink to="/password"><h4 class="info-link">Forgot password</h4></NavLink>
                    <button type="button" class="button">Sign In</button>
                    <div class="sub-info">
                        <div class="Sub-text">Don't have an account? <NavLink to="/signup"><div class="sub-link">Sign up</div></NavLink></div>
                    </div>
                </div>
            </div>
            <div class="info-right">
                <img src="../../../assets/img3.jpg" alt="main" class="image-info" />
            </div>
        </div>
    );
}

export default Sign;