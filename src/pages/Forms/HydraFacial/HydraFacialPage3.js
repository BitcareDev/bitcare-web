import React from "react";
import "./HydraFacialPage3.css";
import Logo from  "../assets/BitcareLogo.png";

const HydraFacialForm = () => {
    return (

        <div className="hydrafacial">
            <div className="hydramain">
                <div>
                    <img src={Logo} className="logo"/>
                </div>
                <div className="Main-Heading">HydraFacial Aftercare Instructions</div>
                <div className="content">For the first 24 hours after a HydraFacial, avoid the following to prevent skin irritation:</div>
                    <div>
                        <p className="contentpoints">Touching or scratching the treated area</p>
                        <p className="contentpoints">Hot baths or showers (cool or lukewarm water only 6 hours after treatment)</p>
                        <p className="contentpoints">Saunas, hot tubs, pools, or steam rooms</p>
                        <p className="contentpoints">Massage or friction in the treated area</p>
                        <p className="contentpoints">Exfoliating the treated area</p>
                        <p className="contentpoints">Exercise or other activities which cause you to sweat</p>
                        <p className="contentpoints">Applying products to the treated area (including make-up, toners, lotions, soaps, powders, perfumes, and
                            self-tanning products)</p>
                    </div>
                

                <div className="content">For the first 72 hours after a HydraFacial, avoid the following to prevent skin irritation </div>
                    <div>
                        <p className="contentpoints">Stay away from at-home peels, masks, toners, cleansers, retinol, or anything with salicylic acid</p>
                        <p className="contentpoints">Limit your outdoor activities and exposure to the sun</p>
                    </div>

                <div className="content">For the first two weeks after a HydraFacial:</div>
                    <div>
                        <p className="contentpoints">Postpone laser, wax, and exfoliation treatments on the treated area</p>
                        <p className="contentpoints">Postpone tanning (sunbathing, or sunbeds)</p>
                        <p className="contentpoints">Continue to wear a sunscreen of at least 30 SPF</p>
                    </div>
            </div>
        </div>
    )
}
export default HydraFacialForm;
