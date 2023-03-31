import React from "react";
import './HydraFacial.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from "react";
import SignaturePad from 'react-signature-canvas';
import jsPDF from 'jspdf';

function HydraFacial() {
    const [imageURL, setImageURL] = useState(null);
    const [patientImageURL, setPatientImageURL] = useState(null);
    const [estheticianImageURL, setEstheticianImageURL] = useState(null);
    const generatePdfRef = useRef(null);

    const [qtn, setQtn] = useState("");
    const [qtn1, setQtn1] = useState("");
    const [qtn2, setQtn2] = useState("");
    const [qtn3, setQtn3] = useState("");
    const [qtn4, setQtn4] = useState("");
    const [qtn5, setQtn5] = useState("");
    var [date, setDate] = useState(new Date());

    let data = '';

    //Generate PDF
    const handleGeneratePdf = () => {
        const doc = new jsPDF("p", "mm", [1400, 1400]);

        // Adding the fonts.
        doc.setFont('Inter-Regular', 'normal');

        doc.html(generatePdfRef.current, {
            async callback(doc) {
                await doc.save('document');
            },
            margin: [32, 20, 60, 10],
            autoPaging: 'text',
        });
    };

    let sigPad = useRef({});

    function clear() {
        sigPad.current.clear();
    }

    const trim = () => {
        setImageURL(sigPad.current.getTrimmedCanvas().toDataURL("image/png"))
    }

    // Patient Signature
    let PatientSigPad = useRef({});

    function PatientClear() {
        PatientSigPad.current.clear();
    }
    const PatientTrim = () => {
        setPatientImageURL(PatientSigPad.current.getTrimmedCanvas().toDataURL("image/png"))
    }

    // Esthetician Signature
    let EstheticianSigPad = useRef({});

    function EstheticianClear() {
        EstheticianSigPad.current.clear();
    }
    const EstheticianTrim = () => {
        setEstheticianImageURL(EstheticianSigPad.current.getTrimmedCanvas().toDataURL("image/png"))
    }
    return (
        <div>
            <button className="V-IPLGenerate_btn" onClick={handleGeneratePdf}>Generate PDF</button>
            <div ref={generatePdfRef}>
                <div class="container-fluid mt-3">
                    <div className="Bitcare_image">
                        <img src="../../../assets/Bitcare2.png" alt="main" className="image_info1" />
                    </div>
                    <div>
                        <h1 className="Hydra_header">HydraFacial Client Intake Form</h1>
                    </div>
                    <div>
                        <h1 className="Hydra_subheader">General Information</h1>
                    </div>
                    <form>
                        <div class="row">
                            <div class="col-sm-8">
                                <div class="input-group mt-2">
                                    <span class="input-group-text facial-header">Name</span>
                                    <input type="text1" class="form-control Hydra_input" name="name" />
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="input-group mt-2">
                                    <span class="input-group-text facial-header">Date of Birth</span>
                                    <input type="text1" class="form-control Hydra_input" name="DOB" />
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="input-group mt-3">
                                    <span class="input-group-text facial-header">Address</span>
                                    <input type="text1" class="form-control Hydra_input" name="name" />
                                </div>
                            </div>
                            <div class="col-sm-5">
                                <div class="input-group mt-3">
                                    <span class="input-group-text facial-header">City</span>
                                    <input type="text1" class="form-control Hydra_input" name="name" />
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="input-group mt-3">
                                    <span class="input-group-text facial-header">State</span>
                                    <input type="text1" class="form-control Hydra_input" name="name" />
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="input-group mt-3">
                                    <span class="input-group-text facial-header">Zip Code</span>
                                    <input type="text1" class="form-control Hydra_input" name="name" />
                                </div>
                            </div>
                            <div class="col-sm-5">
                                <div class="input-group mt-3">
                                    <span class="input-group-text facial-header">Phone #</span>
                                    <input type="text1" class="form-control Hydra_input" name="name" />
                                </div>
                            </div>
                            <div class="col-sm-7">
                                <div class="input-group mt-3">
                                    <span class="input-group-text facial-header">Email</span>
                                    <input type="text1" class="form-control Hydra_input" name="name" />
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="input-group mt-3">
                                    <span class="input-group-text facial-header">Occupation</span>
                                    <input type="text1" class="form-control Hydra_input" name="name" />
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="input-group mt-3">
                                    <span class="input-group-text facial-header">Emergency Contact Name</span>
                                    <input type="text1" class="form-control Hydra_input" name="name" />
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="input-group mt-3">
                                    <span class="input-group-text facial-header">Phone #</span>
                                    <input type="text1" class="form-control Hydra_input" name="name" />
                                </div>
                            </div>
                            <div class="col-sm-9">
                                <div class="mt-3">
                                    <span class="input-group-text facial-header">Would you like to be added to our email list for specials and discounts?</span>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="input-group mt-3">
                                    <label class="input_consult">Yes <input type="checkbox" id="chkPassport" className="inp_check" checked={qtn === "Yes"} onChange={() => setQtn("Yes")} /> No <input type="checkbox" id="chkPassport" className="inp_check" checked={qtn === "No"} onChange={() => setQtn("No")} /></label>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="input-group mt-2 mb-3">
                                    <span class="input-group-text facial-header">How did you hear about us?</span>
                                    <input type="text1" class="form-control Hydra_input" name="name" />
                                </div>
                            </div>
                        </div>
                    </form>

                    <div>
                        <h1 className="Hydra_subheader">Medical History</h1>
                        <div className="Hydra1_content">Please check all that apply:</div>
                    </div>

                    <div className="facial">
                        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
                            <div class="col check_facial">
                                <label><input type="checkbox" /> Active Acne</label>
                            </div>
                            <div class="col check_facial">
                                <label><input type="checkbox" /> Epilepsy</label>
                            </div>
                            <div class="col check_facial">
                                <label><input type="checkbox" /> Neurological Disorder</label>
                            </div>
                            <div class="col check_facial">
                                <label><input type="checkbox" /> Active Sunburn</label>
                            </div>
                            <div class="col check_facial">
                                <label><input type="checkbox" /> Hepatitis</label>
                            </div>
                            <div class="col check_facial">
                                <label><input type="checkbox" /> Open Lesion</label>
                            </div>
                            <div class="col check_facial">
                                <label><input type="checkbox" /> Autoimmune Disease</label>
                            </div>
                            <div class="col check_facial">
                                <label><input type="checkbox" /> HIV/AIDS</label>
                            </div>
                            <div class="col check_facial">
                                <label><input type="checkbox" /> Pregnant</label>
                            </div>
                            <div class="col check_facial">
                                <label><input type="checkbox" /> Cold Sore</label>
                            </div>
                            <div class="col check_facial">
                                <label><input type="checkbox" /> Infection</label>
                            </div>
                            <div class="col check_facial">
                                <label><input type="checkbox" /> Rash</label>
                            </div>
                            <div class="col check_facial">
                                <label><input type="checkbox" /> Dermatitis</label>
                            </div>
                            <div class="col check_facial">
                                <label><input type="checkbox" /> Lactating</label>
                            </div>
                            <div class="col check_facial">
                                <label><input type="checkbox" /> Other:</label>
                            </div>
                            <div class="col check_facial">
                                <label><input type="checkbox" /> Eczema</label>
                            </div>
                            <div class="col check_facial">
                                <label><input type="checkbox" /> Melanoma</label>
                            </div>
                            <div class="col check_facial">
                            </div>
                        </div>
                    </div>

                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="Hydra1_content" style={{ paddingTop: "5px" }}>Are you currently taking any medications?</h1>
                        </div>
                        <div class="facial2">
                            <label className="label_facial">Yes <input type="checkbox" checked={qtn1 === "Yes1"} onChange={() => setQtn1("Yes1")} /> No <input type="checkbox" checked={qtn1 === "No1"} onChange={() => setQtn1("No1")} /></label>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="input-group mt-1 mb-1">
                            <span class="input-group-text facial-header">If yes, please list:</span>
                            <input type="text1" class="form-control Hydra_input" name="name" />
                        </div>
                    </div>

                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="Hydra1_content" style={{ paddingTop: "5px" }}>Have you had any facial or dermatology services in the past 30 days?</h1>
                        </div>
                        <div class="facial2">
                            <label className="label_facial">Yes <input type="checkbox" checked={qtn2 === "Yes2"} onChange={() => setQtn2("Yes2")} /> No <input type="checkbox" checked={qtn2 === "No2"} onChange={() => setQtn2("No2")} /></label>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="input-group mt-1 mb-1">
                            <span class="input-group-text facial-header">If yes, please explain:</span>
                            <input type="text1" class="form-control Hydra_input" name="name" />
                        </div>
                    </div>

                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="Hydra1_content" style={{ paddingTop: "5px" }}>Do you have any allergies?</h1>
                        </div>
                        <div class="facial2">
                            <label className="label_facial">Yes <input type="checkbox" checked={qtn3 === "Yes3"} onChange={() => setQtn3("Yes3")} /> No <input type="checkbox" checked={qtn3 === "No3"} onChange={() => setQtn3("No3")} /></label>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="input-group mt-1 mb-1">
                            <span class="input-group-text facial-header">If yes, please explain:</span>
                            <input type="text1" class="form-control Hydra_input" name="name" />
                        </div>
                    </div>

                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="Hydra1_content" style={{ paddingTop: "5px" }}>Have you been under the care of a dermatologist within the past year?</h1>
                        </div>
                        <div class="facial2">
                            <label className="label_facial">Yes <input type="checkbox" checked={qtn4 === "Yes4"} onChange={() => setQtn4("Yes4")} /> No <input type="checkbox" checked={qtn4 === "No4"} onChange={() => setQtn4("No4")} /></label>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="input-group mt-1 mb-1">
                            <span class="input-group-text facial-header">If yes, please explain:</span>
                            <input type="text1" class="form-control Hydra_input" name="name" />
                        </div>
                    </div>

                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="Hydra1_content" style={{ paddingTop: "5px" }}>Have you had aesthetic fillers, injectables or laser treatments in the last 6 months?</h1>
                        </div>
                        <div class="facial2">
                            <label className="label_facial">Yes <input type="checkbox" checked={qtn5 === "Yes5"} onChange={() => setQtn5("Yes5")} /> No <input type="checkbox" checked={qtn5 === "No5"} onChange={() => setQtn5("No5")} /></label>
                        </div>
                    </div>

                    <div className="Hydra_subheader1">
                        <h1 className="subheader2">By signing below, I agree to the following:</h1>
                        <h2 className="subheader3">I have completed this form to the best of my ability and knowledge. I agree to inform the technician of any changes in the above
                            information. I agree that I do not have any condition(s) that would make the requested treatment unsuitable. I agree to waive all
                            liability toward my technician and the salon for any injury or damages incurred due to any misrepresentation of my health.
                        </h2>
                    </div>

                    <div class="row mt-3">
                        <div class="col-sm-3">
                            <label className="facial_content">Name:</label>
                        </div>
                        <div class="col-sm-8">
                            <input type="text1" placeholder="Name" class="form-control Hydra_input" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-3">
                            <label className="facial_content">Date:</label>
                        </div>
                        <div class="col-sm-8">
                            <input type="text1" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control Hydra_input" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-3">
                            <label className="facial_content">Signature:</label>
                        </div>
                        <div class="col-sm-8">
                            {imageURL !== null ? (
                                <img
                                    src={imageURL}
                                    alt="my signature"
                                />
                            ) : (
                                <div>
                                    <div className="bg_hydra">
                                        <SignaturePad
                                            ref={sigPad}
                                            penColor="black"
                                            backgroundColor='#ffffff'
                                        />
                                    </div>

                                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                                        <div class="col">
                                            <input type="submit" id="clear_bttn" onClick={clear} value="clear" />
                                        </div>
                                        <div class="col">
                                            <input type="submit" id="save_bttn" value="save & continue" onClick={trim} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <h1 className="Hydra_header21">HydraFacial Informed Consent Form</h1>
                    </div>
                    <div className="consent8_container">
                        <div class="consent8_content mt-2 mb-2">Please read and initial each of the statements below:</div>
                        <li class="consent8_content">I have voluntarily elected to receive a HydraFacial after the nature and purpose of this treatment have been explained to me.</li>
                        <li class="consent8_content">I understand that a HydraFacial is a type of hydradermabrasion procedure that includes cleansing, exfoliation, extraction, hydration, and antioxidant protection.</li>
                        <li class="consent8_content">I understand that the HydraFacial can be used to diminish the appearance of fine lines and wrinkles, improve texture/tone, reduce pore size, increase hydration and moisture retention, and give skin a smoother appearance. </li>
                        <li class="consent8_content">I understand that I will likely see results immediately after treatment and my skin may feel smooth and hydrated for one to four weeks with appropriate home care to maintain treatment results.</li>
                        <li class="consent8_content">I also recognize there are no guaranteed results and that independent results are dependent upon age, skin condition, and lifestyle, and that there is a possibility may require further treatments of the treated areas to obtain the expected results at an additional cost.</li>
                        <li class="consent8_content">I understand that I may experience tingling and stinging in the treatment area, but that these sensations are normal and generally subside within a few hours.</li>
                        <li class="consent8_content">I understand that my skin may experience temporary irritation, tightness, or redness, following this procedure but these are all normal reactions that typically resolve within 72 hours.</li>
                        <li class="consent8_content">I understand that after treatment, my skin will be more susceptible to sunburn and sun damage. I understand that it is important that I avoid excessive sun exposure and use a minimum of SPF 30 sunscreen.</li>
                        <li class="consent8_content">I have read and understood the post-treatment home care instructions. I understand how important it is to follow all instructions given to me for post-treatment care. In the event that I may have additional questions or concerns regarding my treatment or suggested home product/post-treatment care, I will consult the esthetician immediately.</li>
                        <li class="consent8_content">I understand that must avoid the use of aggressive exfoliation, waxing, and products containing glycolic acids or retinol that are not part of the recommended take-home regimen in the treated areas for a minimum of 2 weeks pre and post-treatment.</li>
                        <div class="consent8_content mb-3"> I have also, to the best of my knowledge, given an accurate account of my medical history, including all known allergies or prescription drugs or products I am currently ingesting or using topically.</div>

                        <div className="Hydra_subheader12">
                            <label className="subheader21"><input type="checkbox" /> I have read and fully understand this agreement and all information detailed above. The information provided has been explained to me and all my questions have been answered to my satisfaction. I understand the HydraFacial procedure, accept the risks, and consent to have the treatment done. I agree I will assume the risk and full responsibility for any and all injuries, losses, side effects, or damages that might occur to me while I am undergoing this procedure. I do not hold the esthetician, whose signature appears below, responsible for any of my conditions that were present, but not disclosed at the time of this skincare procedure, which may be affected by the treatment performed today. This consent form is valid for all future HydraFacial treatments. I will alert the staff if there are any future changes to my medical history.</label>
                        </div>

                        <div class="row mt-3">
                            <div class="col-sm-3">
                                <label className="hydra_content">Name:</label>
                            </div>
                            <div class="col-sm-8">
                                <input type="text1" placeholder="Name" class="form-control Hydra_input1" />
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-sm-3">
                                <label className="hydra_content">Date:</label>
                            </div>
                            <div class="col-sm-8">
                                <input type="text1" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control Hydra_input" />
                            </div>
                        </div>
                        <div class="row mt-3 mb-3">
                            <div class="col-sm-3">
                                <label className="hydra_content">Signature:</label>
                            </div>
                            <div class="col-sm-8">
                                {patientImageURL !== null ? (
                                    <img
                                        src={patientImageURL}
                                        alt="my signature"
                                    />
                                ) : (
                                    <div>
                                        <div className="bg_hydra">
                                            <SignaturePad
                                                ref={PatientSigPad}
                                                penColor="black"
                                                backgroundColor='#ffffff'
                                            />
                                        </div>

                                        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                                            <div class="col">
                                                <input type="submit" id="clear_bttn" onClick={PatientClear} value="clear" />
                                            </div>
                                            <div class="col">
                                                <input type="submit" id="save_bttn" value="save & continue" onClick={PatientTrim} />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div class="row mt-5">
                            <div class="col-sm-3">
                                <label className="hydra_content">Esthetician Name:</label>
                            </div>
                            <div class="col-sm-8">
                                <input type="text1" placeholder="Name" class="form-control Hydra_input1" />
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-sm-3">
                                <label className="hydra_content">Date:</label>
                            </div>
                            <div class="col-sm-8">
                                <input type="text1" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control Hydra_input" />
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-sm-3">
                                <label className="hydra_content">Signature:</label>
                            </div>
                            <div class="col-sm-8">
                                {estheticianImageURL !== null ? (
                                    <img
                                        src={estheticianImageURL}
                                        alt="my signature"
                                    />
                                ) : (
                                    <div>
                                        <div className="bg_hydra">
                                            <SignaturePad
                                                ref={EstheticianSigPad}
                                                penColor="black"
                                                backgroundColor='#ffffff'
                                            />
                                        </div>

                                        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                                            <div class="col">
                                                <input type="submit" id="clear_bttn" onClick={EstheticianClear} value="clear" />
                                            </div>
                                            <div class="col">
                                                <input type="submit" id="save_bttn" value="save & continue" onClick={EstheticianTrim} />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div class="Hydra_header21 mt-3">HydraFacial Aftercare Instructions</div>
                    <div className="Hydra-subheader12">
                        <label className="subheader21">For the first 24 hours after a HydraFacial, avoid the following to prevent skin irritation:</label>
                    </div>
                    <div>
                        <ul>
                            <li className="consent8_content">Touching or scratching the treated area</li>
                            <li className="consent8_content">Hot baths or showers (cool or lukewarm water only 6 hours after treatment)</li>
                            <li className="consent8_content">Saunas, hot tubs, pools, or steam rooms</li>
                            <li className="consent8_content">Massage or friction in the treated area</li>
                            <li className="consent8_content">Exfoliating the treated area</li>
                            <li className="consent8_content">Exercise or other activities which cause you to sweat</li>
                            <li className="consent8_content">Applying products to the treated area (including make-up, toners, lotions, soaps, powders, perfumes, and
                                self-tanning products)</li>
                        </ul>
                    </div>

                    <div className="Hydra-subheader12">
                        <label className="subheader21">For the first 72 hours after a HydraFacial, avoid the following to prevent skin irritation </label>
                    </div>

                    <div>
                        <ul>
                            <li className="consent8_content">Stay away from at-home peels, masks, toners, cleansers, retinol, or anything with salicylic acid</li>
                            <li className="consent8_content">Limit your outdoor activities and exposure to the sun</li>
                        </ul>
                    </div>

                    <div className="Hydra-subheader12">
                        <label className="subheader21">For the first two weeks after a HydraFacial:</label>
                    </div>

                    <div>
                        <ul>
                            <li className="consent8_content">Postpone laser, wax, and exfoliation treatments on the treated area</li>
                            <li className="consent8_content">Postpone tanning (sunbathing, or sunbeds)</li>
                            <li className="consent8_content">Continue to wear a sunscreen of at least 30 SPF</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HydraFacial;