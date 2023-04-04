import React, { useRef } from "react";
import SignaturePad from 'react-signature-canvas';
import './ConsentPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRight } from 'react-icons/fa';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Consent01() {   
    let sigPad = useRef({});
    let data = '';

    function clear(){
        sigPad.current.clear();
      }

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/DateTime");
    };
    return (
        <div class="container">
            <h1 className="consent-header"><button className="btn-back" onClick={handleClick}><AiOutlineArrowLeft /></button> Consent Form</h1>
            <div className="bg-consent">
                <h1 class="consent-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                <div class="checkbox">
                    <label><input type="checkbox" class="balk" name="remember" /> I accept</label>
                </div>
                <div className="bg-consentform">
                <SignaturePad
                    ref={sigPad}
                    penColor="black"
                />
                </div>
                <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                    <div class="col">
                        <button type="button" id="clear_btn"  onClick={clear}><span class="glyphicon glyphicon-remove" ></span> Clear</button>
                    </div>
                    <div class="col">
                    <NavLink to="/payment"><button type="submit" id="save_btn"><span class="glyphicon glyphicon-ok"></span> Save & Continue</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Consent01;