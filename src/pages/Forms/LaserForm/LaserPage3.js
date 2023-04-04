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

            <div>
                <h1 class="fitzpatrick_header">FITZPATRICK SKIN TYPE SCALE</h1>
            </div>
            <div className="fitzpatrick_container">
                <div className="fitzpatrick_content">This information will help your Esthetician to evaluate your skin type for a more effective laser
                    treatment. Skin type is determined by the color of your eyes, hair, skin and your skin's reaction to sun
                    exposure. Tanning by sun exposure, tanning booths or tanning lotions, can have a major impact on your
                    skin.</div>
            </div>
            <div>
                <div class="content5 mb-3">Please circle which Skin Type applies to you the most</div>
                <table class="table table-bordered table1 mb-4">
                    <thead>
                        <tr>
                            <th className="th1">SKIN TYPE</th>
                            <th className="th1">1</th>
                            <th className="th1">2</th>
                            <th className="th1">3</th>
                            <th className="th1">4</th>
                            <th className="th1">5</th>
                            <th className="th1">6</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="fitzpatrick">What is the color of your eyes?</td>
                            <td className="fitzpatrick_container1" id="time">Light blue, green or grey</td>
                            <td className="fitzpatrick_container1" id="time">Blue, Grey, Green or Brown</td>
                            <td className="fitzpatrick_container1" id="time">Blue, Brown or Green</td>
                            <td className="fitzpatrick_container1" id="time">Dark Brown</td>
                            <td className="fitzpatrick_container1" id="time">Brownish Black</td>
                            <td className="fitzpatrick_container1" id="time">Black</td>
                        </tr>
                        <tr>
                            <td className="fitzpatrick">What is the natural color of your hair?</td>
                            <td className="fitzpatrick_container1" id="time">Red or Blonde</td>
                            <td className="fitzpatrick_container1" id="time">Blonde to Light Brown</td>
                            <td className="fitzpatrick_container1" id="time">Chestnut or Dark Blonde to Brown</td>
                            <td className="fitzpatrick_container1" id="time">Dark Brown</td>
                            <td className="fitzpatrick_container1" id="time">Dark Brown to Black</td>
                            <td className="fitzpatrick_container1" id="time">Black</td>
                        </tr>
                        <tr>
                            <td className="fitzpatrick">What is your skin color?</td>
                            <td className="fitzpatrick_container1" id="time">Pale to very fair, possibly freckled</td>
                            <td className="fitzpatrick_container1" id="time">Very Fair</td>
                            <td className="fitzpatrick_container1" id="time">Pale with Beige Tint</td>
                            <td className="fitzpatrick_container1" id="time">Olive Tone</td>
                            <td className="fitzpatrick_container1" id="time">Dark Brown</td>
                            <td className="fitzpatrick_container1" id="time">Very Dark</td>
                        </tr>
                        <tr>
                            <td className="fitzpatrick">Your skin's reaction to prolonged sun exposure?</td>
                            <td className="fitzpatrick_container1" id="time">Always burns and never tans</td>
                            <td className="fitzpatrick_container1" id="time">Burns easily and rarely tans</td>
                            <td className="fitzpatrick_container1" id="time">Burns sometimes and tans gradually</td>
                            <td className="fitzpatrick_container1" id="time">Rarely burns and tans easily</td>
                            <td className="fitzpatrick_container1" id="time">Rarely burns and skin darkens</td>
                            <td className="fitzpatrick_container1" id="time">Never burns</td>
                        </tr>
                    </tbody>
                </table>

                <div className="fitzpatrick_subcontent">
                    <div className="bq_fitzpetrick">FOR OFFICE USE ONLY</div>
                    <label class="fitzpatrick_content mb-3" style={{ lineHeight: '20px' }}>I have reviewed the client information for <input type="text1" style={{ marginBottom: '5px' }} /> and I believe this person to be a candidate for a series of Laser Hair Removal treatments to be performed by <input type="text1" style={{ marginBottom: '5px' }} /></label>
                    <div class="row mb-4">
                        <div class="col-sm-3">
                            <div className="fitzpatrick_content">Hair to be treated</div>
                        </div>
                        <div class="col-sm-8">
                            <div class="row">
                                <div class="col-sm-2">
                                    <label className="fitzpatrick_content"><input type="checkbox" /> Black</label>
                                </div>
                                <div class="col-sm-2">
                                    <label className="fitzpatrick_content"><input type="checkbox" /> Brown</label>
                                </div>
                                <div class="col-sm-2">
                                    <label className="fitzpatrick_content"><input type="checkbox" /> Blonde</label>
                                </div>
                                <div class="col-sm-2">
                                    <label className="fitzpatrick_content"><input type="checkbox" /> Grey</label>
                                </div>
                                <div class="col-sm-2">
                                    <label className="fitzpatrick_content"><input type="checkbox" /> White</label>
                                </div>
                                <div class="col-sm-2">
                                </div>

                                <div class="col-sm-2">
                                    <label className="fitzpatrick_content"><input type="checkbox" /> Vellus</label>
                                </div>
                                <div class="col-sm-2">
                                    <label className="fitzpatrick_content"><input type="checkbox" /> Coarse</label>
                                </div>
                                <div class="col-sm-2">
                                    <label className="fitzpatrick_content"><input type="checkbox" /> Sparse</label>
                                </div>
                                <div class="col-sm-2">
                                    <label className="fitzpatrick_content"><input type="checkbox" /> Dense</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-sm-3">
                            <label className="fitzpatrick_name">Technician Name:</label>
                        </div>
                        <div class="col-sm-8">
                            <input type="text1" placeholder="Name" class="form-control fitzpatrick_input" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-3">
                            <label className="fitzpatrick_name">Date:</label>
                        </div>
                        <div class="col-sm-8">
                            <input type="text1" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control fitzpatrick_input" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-3">
                            <label className="fitzpatrick_name">Signature:</label>
                        </div>
                        <div class="col-sm-8">
                            <div className="bg_fitzpatrick">
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
            </div>
        </div>
    );
}

export default LaserConsent;