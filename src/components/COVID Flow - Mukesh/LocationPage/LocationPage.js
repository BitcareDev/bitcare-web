import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAngleRight } from 'react-icons/fa';
import './LocationPage.css';
import React from "react";
import { NavLink } from 'react-router-dom';

function Location() {
    return (
        <div class="container">
            <h1 className="Header">Choose your location</h1>
            <div className="bg-secondary-bg">
                <div className="bg-location">
                    <NavLink to="/datetime" style={{ textDecoration: 'none' }}><div className="location-container" style={{ paddingLeft: 13 }}>
                        <div className="location-image">
                            <img src="../../../assets/hospital.svg" width="80px" height="80px" />
                        </div>
                        <div className="location-content">
                            <div className="location-text">
                                <h3 className="Sub-content">Plano, TX</h3>
                                <h4 className="Sub-text">2100 Dallas Pkwy Suite 115, Plano, TX 75093</h4>
                            </div>
                            <div className="Right-icon">
                                <span className="icon-text"><FaAngleRight /></span>
                            </div>
                        </div>
                    </div></NavLink>
                    <NavLink to="/datetime" style={{ textDecoration: 'none' }}><div className="location-container" style={{ paddingLeft: 13 }}>
                        <div className="location-image">
                            <img src="../../../assets/hospital.svg" width="80px" height="80px" />
                        </div>
                        <div className="location-content">
                            <div className="location-text">
                                <h3 className="Sub-content">Hensley, AR</h3>
                                <h4 className="Sub-text">20602 Arch St, Little Rock, AR 72206</h4>
                            </div>
                            <div className="Right-icon">
                                <span className="icon-text"><FaAngleRight /></span>
                            </div>
                        </div>
                    </div></NavLink>
                    <NavLink to="/datetime" style={{ textDecoration: 'none' }}><div className="location-container" style={{ paddingLeft: 13 }}>
                        <div className="location-image">
                            <img src="../../../assets/hospital.svg" width="80px" height="80px" />
                        </div>
                        <div className="location-content">
                            <div className="location-text">
                                <h3 className="Sub-content">Frisco, TX</h3>
                                <h4 className="Sub-text">8837 Lebanon Rd suite 200 Frisco, TX 75034</h4>
                            </div>
                            <div className="Right-icon">
                                <span className="icon-text"><FaAngleRight /></span>
                            </div>
                        </div>
                    </div></NavLink>
                    <div className="location-disabled">
                        <div className="location-image">
                            <img src="../../../assets/hospital.svg" width="80px" height="80px" />
                        </div>
                        <div className="location-content">
                            <div className="location-text1">
                                <h3 className="Sub-content">Southlake, TX</h3>
                                <h4 className="Sub-text">(Coming soon)</h4>
                            </div>
                            <div className="Right-icon">
                                <span className="icon-text"><FaAngleRight /></span>
                            </div>
                        </div>
                    </div>
                    <div className="location-disabled">
                        <div className="location-image">
                            <img src="../../../assets/hospital.svg" width="80px" height="80px" />
                        </div>
                        <div className="location-content">
                            <div className="location-text1">
                                <h3 className="Sub-content">Houston, TX</h3>
                                <h4 className="Sub-text">(Coming soon)</h4>
                            </div>
                            <div className="Right-icon">
                                <span className="icon-text"><FaAngleRight /></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div>
            </div>
        </div>
    );
}

export default Location;