import React from "react";
import { Sdata } from "../LocationPage/data";
import './ServicePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

function Service() {
  const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Location");
    };
  return (
    <React.Fragment>
      <div class="container">
        <h1 className="Service-Header"><button className="btn-back" onClick={handleClick}><AiOutlineArrowLeft /></button> COVID-19 Services</h1>
        <div class="bg_container1">
          <h1 className="text-header">Reason for appointment</h1>
          <div className="bg-Service-bg">
            <div className="bg-Service">
              {Sdata.map(function (doc, idx) {
                return (
                  <>
                    <div className="service-container">
                      <div className="service-content">
                        <div className="service-text" >
                          {doc.service ? <h3 className="Sub-content">{doc.service}</h3> : ""}
                          {doc.des ? <h4 className="Sub-text">{doc.des}</h4> : ""}
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
          <div className="service-page">
            <h1 className="input-text">Do you have any COVID-19 related symptoms ??</h1>
            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
              <div class="col">
                <textarea class="form-control" name="subject" placeholder="Write your symptoms.."></textarea>
              </div>
              <div className="input-btn" class="col">
                <NavLink to="/DateTime"><button className="btn-button">Next <FaArrowRight /></button></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Service;