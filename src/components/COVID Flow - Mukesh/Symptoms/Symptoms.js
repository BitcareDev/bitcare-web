import React from 'react';
import './Symptoms.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Symptoms() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/DateTime");
      };
    return(
        <div class="container">
            <h1 className="Symptoms-header"><button className="btn-back" onClick={handleClick}><FaArrowLeft/></button> COVID-19 Symptoms</h1> 
            <div className="bg-container">
                <h1 class="sub-header">Select your symptoms</h1>
                <div className="bg-page">
                    <div className="bg-symptoms">
                        <div class="row gy-4 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                        <div class="col">
                            <button type="button" className="btn-symptom" id="symptom">Fever or chills</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn-symptom" id="symptom">New loss of taste or smell</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn-symptom" id="symptom">Cough</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn-symptom" id="symptom">Sore throat</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn-symptom" id="symptom">Shortness of breath or difficulty breathing</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn-symptom" id="symptom">Congestion or runny nose</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="input-page">
                    <div className="input-symptoms">
                    <div className="input-container">
                        <h1 className="input-text">Additional Symptoms</h1>
                        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                        <div class="col">
                        <textarea class="form-control" name="subject" placeholder="Write your symptoms.."></textarea>
                        </div>
                        <div className="input-btn" class="col">
                            <button className="btn-button">Next <FaArrowRight/></button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>     
        </div>
    );
}

export default Symptoms;