import React from "react";
import './PaymentPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRight } from 'react-icons/fa';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Payment() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Consent");
    };
    return(
        <div class="container">
            <h1 className="payment-header"><button className="btn-back" onClick={handleClick}><AiOutlineArrowLeft /></button> Payment Details</h1>
        </div>
    );
}

export default Payment;