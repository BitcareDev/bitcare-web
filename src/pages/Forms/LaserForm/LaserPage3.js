import React, { useRef, useState } from "react";
import './LaserPage3.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignaturePad from 'react-signature-canvas';
import { RxDotFilled } from 'react-icons/rx';

function LaserConsent() {
    var [date, setDate] = useState(new Date());
    let sigPad = useRef({});
    let data = '';

    function clear() {
        sigPad.current.clear();
    }
    return (
        <div class="container-fluid mt-3">
            <div className="Bitcare_image22">
                <img src="../../../assets/Bitcare2.png" alt="main" className="image_info2" />
            </div>
            <div>
                <h1 class="Laser_header">CLIENT CONSENT FORM</h1>
                <h1 class="Laser_header1">LASER HAIR REMOVAL</h1>
            </div>
            <div className="Laser_container">
                <div class="Laser_content">Laser hair removal involves the use of a non-invasive laser device which targets hair follicles to reduce/remove facial and body hair. This treatment works on hairs that are in the active stage of growth and so, it does not work on dormant hairs. Several sessions are usually required and a hair removal session may vary, depending on the individual's amount of hair, density or color. Laser hair removal is not completely permanent and revisits may be needed for maintenance.</div>
                <div class="Laser_content mt-2 mb-2">Please read and initial the following statements:</div>
                <div class="Laser_content mb-2"><RxDotFilled /> I voluntarily elect to undergo this treatment, having had the nature and purpose of Laser Hair Removal, along with the risks and hazards involved, fully explained to me by "BUSINESS NAME".</div>
                <div class="Laser_content mt-2 mb-2"><RxDotFilled /> I have been advised that Laser Hair Removal treatment can have certain side effects which may include, but is not limited to burning, blistering, flaking of the skin or swelling on the surface of the treated skin areas. I understand that in these cases, it is recommended that the area should heal first prior to undergoing another treatment.</div>
                <div class="Laser_content mt-2 mb-2"><RxDotFilled /> I understand I may experience discomfort during the treatment and that this is a normal occurrence.</div>
                <div class="Laser_content mt-2 mb-2"><RxDotFilled /> I understand there is the possibility of darkening or lightening of the skin during the healing process. I have been advised that this is usually temporary but on rare occasions, it can be permanent.</div>
                <div class="Laser_content mt-2 mb-2"><RxDotFilled /> Because exposure to the eye with lasers can lead to temporary or permanent eye damage, I agree to wear the provided eye protection during the treatment period and will not remove it unless allowed by the Technician.</div>
                <div class="Laser_content mt-2 mb-2"><RxDotFilled /> I have read and understood the post-treatment home care instructions and understand how important it is to follow all instructions given to me for post-treatment care. In the event I may have additional questions or concerns regarding my treatment or post-treatment care, I will consult "BUSINESS NAME immediately.</div>
                <div class="Laser_content mt-2 mb-2"><RxDotFilled /> I have been advised that although rare, scarring may occur if the post treatment care instructions are not complied with.</div>
                <div class="Laser_content mt-2 mb-2"><RxDotFilled /> I understand that I will need to undergo several treatments in order to obtain my desired results, as advised by my Esthetician.</div>
                <div class="Laser_content mt-2 mb-2"><RxDotFilled /> I confirm I have not had any waxing treatments to the area/s to be treated within the last 7 days.</div>
                <div class="Laser_content mt-2 mb-2"><RxDotFilled /> I agree to not have any prolonged sun exposure or any form of tanning (including self-tanners, spray tans, and tanning beds) for two weeks before and two weeks after each of my scheduled appointments. I understand that failure to avoid sun exposure or tanning can result in adverse reactions, such as hyper/hypopigmentation and/or burning of the exposed areas.</div>
                <div class="Laser_content mt-2 mb-2"><RxDotFilled /> The following conditions are recognized as contraindications for Laser Hair Removal treatment and must be disclosed prior to treatment:
                    <div className="Laserform">
                        <div className="Laser_content"><RxDotFilled /> Pregnancy/Breastfeeding</div>
                        <div className="Laser_content"><RxDotFilled /> Photo-sensitivity disorders</div>
                        <div className="Laser_content"><RxDotFilled /> Active Herpes</div>
                        <div className="Laser_content"><RxDotFilled /> Active Shingles</div>
                        <div className="Laser_content"><RxDotFilled /> Bacterial infections</div>
                        <div className="Laser_content"><RxDotFilled /> Use of antibiotics in the last 10 days</div>
                        <div className="Laser_content"><RxDotFilled /> Use of photo/sun sensitivity medication in the last 10 days</div>
                        <div className="Laser_content"><RxDotFilled /> Recent use of Anticoagulants</div>
                        <div className="Laser_content"><RxDotFilled /> Sunburn</div>
                        <div className="Laser_content"><RxDotFilled /> Keloid scarring</div>
                        <div className="Laser_content"><RxDotFilled /> Psoriasis</div>
                        <div className="Laser_content"><RxDotFilled /> Bleeding disorders</div>
                        <div className="Laser_content"><RxDotFilled /> Severe reactions to Histamines</div>
                        <div className="Laser_content"><RxDotFilled /> Any recent chemical peal/laser resurfacing procedure</div>
                        <div className="Laser_content"><RxDotFilled /> Vitiligo</div>
                        <div className="Laser_content"><RxDotFilled /> Open wounds/lesions</div>
                        <div className="Laser_content"><RxDotFilled /> Epilepsy</div>
                        <div className="Laser_content"><RxDotFilled /> Use of Accutane in the past 6 months</div>
                        <div className="Laser_content"><RxDotFilled /> Recent use of retinols, glycolic acids, alpha hydroxy acids (within the last 7 days)</div>
                        <div className="Laser_content"><RxDotFilled /> Waxing of the area to be treated within the past 7 days</div>
                    </div>
                </div>
                <div class="Laser_content mt-2 mb-2"><RxDotFilled /> I confirm that I am not currently under the influence of any alcohol or drugs.</div>
                <div class="Laser_content mt-2 mb-2"><RxDotFilled /> I understand that a topical numbing product may be applied prior to Laser Hair Removal, to minimize any discomfort during treatment.</div>
                <div class="Laser_content mt-2 mb-3"><RxDotFilled /> The information I have provided about my medical history is accurate to the best of my knowledge, including all known allergies and/or prescription drugs/products I am currently ingesting or using topically.</div>
                <div class="Laser_content">I hereby give my informed consent to proceed with Laser Hair Removal. I have read and fully understand this agreement and all information detailed above.</div>
                <div class="Laser_content">I understand the procedure being performed today and accept all possible risks. I have had all contraindications and possible side effects of Laser Hair Removal explained to me and my questions have been answered to my satisfaction.</div>
                <div class="Laser_content mb-3">This agreement will remain in effect for this procedure and all future follow-ups conducted by "BUSINESS NAME".</div>

                <div className="Laser_subheader12">
                    <label className="subheader22"><input type="checkbox" /> I confirm that I am at least 18 years of age and by signing this Consent Form, I agree to waive all liability towards my Technician and "BUSINESS NAME" for any injury or damages incurred due to any misrepresentation of my medical history.</label>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-sm-3">
                    <label className="Laser_content1">Name:</label>
                </div>
                <div class="col-sm-8">
                    <input type="text1" placeholder="Name" class="form-control Laser_input" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-3">
                    <label className="Laser_content1">Date:</label>
                </div>
                <div class="col-sm-8">
                    <input type="text1" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control Laser_input" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-3">
                    <label className="Laser_content1">Signature:</label>
                </div>
                <div class="col-sm-8">
                    <div className="bg_Laser">
                        <SignaturePad
                            ref={sigPad}
                            penColor="black"
                        />
                    </div>
                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                        <div class="col">
                            <button type="button" id="clear_bttn" onClick={clear}><span class="glyphicon glyphicon-remove" ></span> Clear</button>
                        </div>
                        <div class="col">
                            <button type="submit" id="save_bttn"><span class="glyphicon glyphicon-ok"></span> Save & Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LaserConsent;