import React from "react";
import './HydraFacial.css';
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

    const date = new Date();

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

    const sigPad = useRef({});

    function clear() {
        sigPad.current.clear();
    }

    const trim = () => {
        setImageURL(sigPad.current.getTrimmedCanvas().toDataURL("image/png"))
    }

    // Patient Signature
    const PatientSigPad = useRef({});

    function PatientClear() {
        PatientSigPad.current.clear();
    }
    const PatientTrim = () => {
        setPatientImageURL(PatientSigPad.current.getTrimmedCanvas().toDataURL("image/png"))
    }

    // Esthetician Signature
    const EstheticianSigPad = useRef({});

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
                <div class="Hydracontainer_fluid">
                    <div>
                        <h1 className="Hydra_Mainheader">HydraFacial Consent Form</h1>
                        <h1 className="Hydra_header">HydraFacial Client Intake Form</h1>
                    </div>

                    {/* General Information */}
                    <div>
                        <h1 className="Hydra_subheader">General Information</h1>
                    </div>
                    <form>
                        <div className="Hydra_data">
                            <div className="HydraName_data">
                                <div className="Hydrainput-group">
                                    <span className="Hydrainput-group-text General_Header">Name</span>
                                    <input type="text" className="Hydra_input" name="name" />
                                </div>
                            </div>
                            <div className="HydraDOB_data">
                                <div className="Hydrainput-group">
                                    <span className="Hydrainput-group-text General_Header">Date of Birth</span>
                                    <input type="text" className="Hydra_input" name="DOB" />
                                </div>
                            </div>
                            <div className="HydraAddress_data">
                                <div className="Hydrainput-group">
                                    <span className="Hydrainput-group-text General_Header">Address</span>
                                    <input type="text" className="Hydra_input" name="name" />
                                </div>
                            </div>
                            <div className="HydraCity_data">
                                <div className="Hydrainput-group">
                                    <span className="Hydrainput-group-text General_Header">City</span>
                                    <input type="text" className="Hydra_input" name="name" />
                                </div>
                            </div>
                            <div className="HydraState_data">
                                <div className="Hydrainput-group">
                                    <span className="Hydrainput-group-text General_Header">State</span>
                                    <input type="text" className="Hydra_input" name="name" />
                                </div>
                            </div>
                            <div className="HydraZipcode_data">
                                <div className="Hydrainput-group">
                                    <span className="Hydrainput-group-text General_Header">Zip Code</span>
                                    <input type="text" className="Hydra_input" name="name" />
                                </div>
                            </div>
                            <div className="HydraPhone_data">
                                <div className="Hydrainput-group">
                                    <span className="Hydrainput-group-text General_Header">Phone #</span>
                                    <input type="text" className="Hydra_input" name="name" />
                                </div>
                            </div>
                            <div className="HydraEmail_data">
                                <div className="Hydrainput-group">
                                    <span className="Hydrainput-group-text General_Header">Email</span>
                                    <input type="text" className="Hydra_input" name="name" />
                                </div>
                            </div>
                            <div className="HydraOccupation_data">
                                <div className="Hydrainput-group">
                                    <span className="Hydrainput-group-text General_Header">Occupation</span>
                                    <input type="text" className="Hydra_input" name="name" />
                                </div>
                            </div>
                            <div className="HydraEname_data">
                                <div className="Hydrainput-group">
                                    <span className="Hydrainput-group-text General_Header">Emergency Contact Name</span>
                                    <input type="text" className="Hydra_input" name="name" />
                                </div>
                            </div>
                            <div className="HydraEphone_data">
                                <div className="Hydrainput-group">
                                    <span className="Hydrainput-group-text General_Header">Phone #</span>
                                    <input type="text" className="Hydra_input" name="name" />
                                </div>
                            </div>
                        </div>
                        <div className="Hydra_data1">
                            <div className="HydraQ_data">
                                <div style={{ marginTop: "20px" }}>
                                    <span className="Hydrainput-group-text General_Header">Would you like to be added to our email list for specials and discounts?</span>
                                </div>
                            </div>
                            <div className="HydraOption_data">
                                <div className="Hydrainput-group">
                                    <label>Yes <input type="checkbox" id="chkPassport" checked={qtn === "Yes"} onChange={() => setQtn("Yes")} /> No <input type="checkbox" id="chkPassport" checked={qtn === "No"} onChange={() => setQtn("No")} /></label>
                                </div>
                            </div>
                        </div>
                        <div className="Hydra_data2">
                            <div className="Hydrainput-group">
                                <span className="Hydrainput-group-text General_Header">How did you hear about us?</span>
                                <input type="text" className="Hydra_input" name="name" />
                            </div>
                        </div>
                    </form>

                    <div>
                        <h1 className="HydraMedical_subheader">Medical History</h1>
                        <div className="HydraMedical_content">Please check all that apply:</div>
                    </div>

                    <div className="facial_Hydra">
                        <div className="HydraMedical_data">
                            <div>
                                <label className="check_facial"><input type="checkbox" /> Active Acne</label>
                            </div>
                            <div>
                                <label className="check_facial"><input type="checkbox" /> Epilepsy</label>
                            </div>
                            <div>
                                <label className="check_facial"><input type="checkbox" /> Neurological Disorder</label>
                            </div>
                            <div>
                                <label className="check_facial"><input type="checkbox" /> Active Sunburn</label>
                            </div>
                            <div>
                                <label className="check_facial"><input type="checkbox" /> Hepatitis</label>
                            </div>
                            <div>
                                <label className="check_facial"><input type="checkbox" /> Open Lesion</label>
                            </div>
                            <div>
                                <label className="check_facial"><input type="checkbox" /> Autoimmune Disease</label>
                            </div>
                            <div>
                                <label className="check_facial"><input type="checkbox" /> HIV/AIDS</label>
                            </div>
                            <div>
                                <label className="check_facial"><input type="checkbox" /> Pregnant</label>
                            </div>
                            <div>
                                <label className="check_facial"><input type="checkbox" /> Cold Sore</label>
                            </div>
                            <div>
                                <label className="check_facial"><input type="checkbox" /> Infection</label>
                            </div>
                            <div>
                                <label className="check_facial"><input type="checkbox" /> Rash</label>
                            </div>
                            <div>
                                <label className="check_facial"><input type="checkbox" /> Dermatitis</label>
                            </div>
                            <div>
                                <label className="check_facial"><input type="checkbox" /> Lactating</label>
                            </div>
                            <div>
                                <label className="check_facial"><input type="checkbox" /> Other:</label>
                            </div>
                            <div>
                                <label className="check_facial"><input type="checkbox" /> Eczema</label>
                            </div>
                            <div>
                                <label className="check_facial"><input type="checkbox" /> Melanoma</label>
                            </div>
                        </div>
                    </div>

                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="HydraMedical_content" style={{ paddingTop: "5px" }}>Are you currently taking any medications?</h1>
                        </div>
                        <div class="facial2">
                            <label className="label_facial">Yes <input type="checkbox" checked={qtn1 === "Yes1"} onChange={() => setQtn1("Yes1")} /> No <input type="checkbox" checked={qtn1 === "No1"} onChange={() => setQtn1("No1")} /></label>
                        </div>
                    </div>
                    <div>
                        <div className="HydraMedicalinput-group" style={{margin: "5px 0px"}}>
                            <span className="HydraMedicalinput-group-text facial-header">If yes, please list:</span>
                            <input type="text" className="HydraMedical_input" name="name" />
                        </div>
                    </div>

                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="HydraMedical_content" style={{ paddingTop: "5px" }}>Have you had any facial or dermatology services in the past 30 days?</h1>
                        </div>
                        <div class="facial2">
                            <label className="label_facial">Yes <input type="checkbox" checked={qtn2 === "Yes2"} onChange={() => setQtn2("Yes2")} /> No <input type="checkbox" checked={qtn2 === "No2"} onChange={() => setQtn2("No2")} /></label>
                        </div>
                    </div>
                    <div>
                        <div className="HydraMedicalinput-group" style={{margin: "5px 0px"}}>
                            <span className="HydraMedicalinput-group-text facial-header">If yes, please explain:</span>
                            <input type="text1" className="HydraMedical_input" name="name" />
                        </div>
                    </div>

                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="HydraMedical_content" style={{ paddingTop: "5px" }}>Do you have any allergies?</h1>
                        </div>
                        <div class="facial2">
                            <label className="label_facial">Yes <input type="checkbox" checked={qtn3 === "Yes3"} onChange={() => setQtn3("Yes3")} /> No <input type="checkbox" checked={qtn3 === "No3"} onChange={() => setQtn3("No3")} /></label>
                        </div>
                    </div>
                    <div>
                        <div className="HydraMedicalinput-group" style={{margin: "5px 0px"}}>
                            <span className="HydraMedicalinput-group-text facial-header">If yes, please explain:</span>
                            <input type="text1" className="HydraMedical_input" name="name" />
                        </div>
                    </div>

                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="HydraMedical_content" style={{ paddingTop: "5px" }}>Have you been under the care of a dermatologist within the past year?</h1>
                        </div>
                        <div class="facial2">
                            <label className="label_facial">Yes <input type="checkbox" checked={qtn4 === "Yes4"} onChange={() => setQtn4("Yes4")} /> No <input type="checkbox" checked={qtn4 === "No4"} onChange={() => setQtn4("No4")} /></label>
                        </div>
                    </div>
                    <div>
                        <div className="HydraMedicalinput-group" style={{margin: "5px 0px"}}>
                            <span className="HydraMedicalinput-group-text facial-header">If yes, please explain:</span>
                            <input type="text" className="HydraMedical_input" name="name" />
                        </div>
                    </div>

                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="HydraMedical_content" style={{ paddingTop: "5px" }}>Have you had aesthetic fillers, injectables or laser treatments in the last 6 months?</h1>
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


                    {/* HydraFacial Informed Consent form */}
                    <div>
                        <h1 className="HydraConsent_subheader">HydraFacial Informed Consent Form</h1>
                    </div>
                    <div className="HydraConsent_container">
                        <div className="HydraConsent_content" style={{ margin: "10px 0px 10px 0px" }}>Please read and initial each of the statements below:</div>
                        <li className="HydraConsent_content">I have voluntarily elected to receive a HydraFacial after the nature and purpose of this treatment have been explained to me.</li>
                        <li className="HydraConsent_content">I understand that a HydraFacial is a type of hydradermabrasion procedure that includes cleansing, exfoliation, extraction, hydration, and antioxidant protection.</li>
                        <li className="HydraConsent_content">I understand that the HydraFacial can be used to diminish the appearance of fine lines and wrinkles, improve texture/tone, reduce pore size, increase hydration and moisture retention, and give skin a smoother appearance. </li>
                        <li className="HydraConsent_content">I understand that I will likely see results immediately after treatment and my skin may feel smooth and hydrated for one to four weeks with appropriate home care to maintain treatment results.</li>
                        <li className="HydraConsent_content">I also recognize there are no guaranteed results and that independent results are dependent upon age, skin condition, and lifestyle, and that there is a possibility may require further treatments of the treated areas to obtain the expected results at an additional cost.</li>
                        <li className="HydraConsent_content">I understand that I may experience tingling and stinging in the treatment area, but that these sensations are normal and generally subside within a few hours.</li>
                        <li className="HydraConsent_content">I understand that my skin may experience temporary irritation, tightness, or redness, following this procedure but these are all normal reactions that typically resolve within 72 hours.</li>
                        <li className="HydraConsent_content">I understand that after treatment, my skin will be more susceptible to sunburn and sun damage. I understand that it is important that I avoid excessive sun exposure and use a minimum of SPF 30 sunscreen.</li>
                        <li className="HydraConsent_content">I have read and understood the post-treatment home care instructions. I understand how important it is to follow all instructions given to me for post-treatment care. In the event that I may have additional questions or concerns regarding my treatment or suggested home product/post-treatment care, I will consult the esthetician immediately.</li>
                        <li className="HydraConsent_content">I understand that must avoid the use of aggressive exfoliation, waxing, and products containing glycolic acids or retinol that are not part of the recommended take-home regimen in the treated areas for a minimum of 2 weeks pre and post-treatment.</li>
                        <div className="HydraConsent_content" style={{ marginBottom: "20px" }}> I have also, to the best of my knowledge, given an accurate account of my medical history, including all known allergies or prescription drugs or products I am currently ingesting or using topically.</div>

                        <div className="HydraConsent_subheader1">
                            <label className="HydraConsent_subheader2"><input type="checkbox" /> I have read and fully understand this agreement and all information detailed above. The information provided has been explained to me and all my questions have been answered to my satisfaction. I understand the HydraFacial procedure, accept the risks, and consent to have the treatment done. I agree I will assume the risk and full responsibility for any and all injuries, losses, side effects, or damages that might occur to me while I am undergoing this procedure. I do not hold the esthetician, whose signature appears below, responsible for any of my conditions that were present, but not disclosed at the time of this skincare procedure, which may be affected by the treatment performed today. This consent form is valid for all future HydraFacial treatments. I will alert the staff if there are any future changes to my medical history.</label>
                        </div>

                        <div className="HydraConsent_Footer">
                            <div className="HydraConsent_Footer1">
                                <label className="HydraConsent_content" style={{ fontWeight: 'bold' }}>Name:</label>
                            </div>
                            <div className="HydraConsent_Footer2">
                                <input type="text" placeholder="Name" className="HydraConsent_input" />
                            </div>
                        </div>
                        <div className="HydraConsent_Footer">
                            <div className="HydraConsent_Footer1">
                                <label className="HydraConsent_content" style={{ fontWeight: 'bold' }}>Date:</label>
                            </div>
                            <div className="HydraConsent_Footer2">
                                <input type="text" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} className="HydraConsent_input" />
                            </div>
                        </div>
                        <div className="HydraConsent_Footer">
                            <div className="HydraConsent_Footer1">
                                <label className="HydraConsent_content" style={{ fontWeight: 'bold' }}>Signature:</label>
                            </div>
                            <div className="HydraConsent_Footer2">
                                {patientImageURL !== null ? (
                                    <img
                                        src={patientImageURL}
                                        alt="my signature"
                                    />
                                ) : (
                                    <div>
                                        <div className="bg_HydraConsent">
                                            <SignaturePad
                                                ref={PatientSigPad}
                                                penColor="black"
                                                backgroundColor='#ffffff'
                                            />
                                        </div>

                                        <div className="HydraConsent_Footerbtn">
                                            <div>
                                                <button className="HydraConsentclear_bttn" onClick={PatientClear}>clear</button>
                                            </div>
                                            <div>
                                                <button className="HydraConsentsave_bttn" onClick={PatientTrim}>save & continue</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="HydraConsent_Footer">
                            <div className="HydraConsent_Footer1">
                                <label className="HydraConsent_content" style={{ fontWeight: 'bold' }}>Esthetician Name:</label>
                            </div>
                            <div className="HydraConsent_Footer2">
                                <input type="text" placeholder="Name" className="HydraConsent_input" />
                            </div>
                        </div>
                        <div className="HydraConsent_Footer">
                            <div className="HydraConsent_Footer1">
                                <label className="HydraConsent_content" style={{ fontWeight: 'bold' }}>Date:</label>
                            </div>
                            <div className="HydraConsent_Footer2">
                                <input type="text" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} className="HydraConsent_input" />
                            </div>
                        </div>
                        <div className="HydraConsent_Footer">
                            <div className="HydraConsent_Footer1">
                                <label className="HydraConsent_content" style={{ fontWeight: 'bold' }}>Signature:</label>
                            </div>
                            <div className="HydraConsent_Footer2">
                                {estheticianImageURL !== null ? (
                                    <img
                                        src={estheticianImageURL}
                                        alt="my signature"
                                    />
                                ) : (
                                    <div>
                                        <div className="bg_HydraConsent">
                                            <SignaturePad
                                                ref={EstheticianSigPad}
                                                penColor="black"
                                                backgroundColor='#ffffff'
                                            />
                                        </div>

                                        <div className="HydraConsent_Footerbtn">
                                            <div>
                                                <button className="HydraConsentclear_bttn" onClick={EstheticianClear}>clear</button>
                                            </div>
                                            <div>
                                                <button className="HydraConsentsave_bttn" onClick={EstheticianTrim}>save & continue</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>


                    {/* HydraFacial Aftercare Instructions */}
                    <div class="HydraInstructions_subheader">HydraFacial Aftercare Instructions</div>
                    <div className="HydraInstructions_subheader1">
                        <label className="HydraInstructions_subheader2">For the first 24 hours after a HydraFacial, avoid the following to prevent skin irritation:</label>
                    </div>
                    <div>
                        <ul>
                            <li className="HydraInstructions_content">Touching or scratching the treated area</li>
                            <li className="HydraInstructions_content">Hot baths or showers (cool or lukewarm water only 6 hours after treatment)</li>
                            <li className="HydraInstructions_content">Saunas, hot tubs, pools, or steam rooms</li>
                            <li className="HydraInstructions_content">Massage or friction in the treated area</li>
                            <li className="HydraInstructions_content">Exfoliating the treated area</li>
                            <li className="HydraInstructions_content">Exercise or other activities which cause you to sweat</li>
                            <li className="HydraInstructions_content">Applying products to the treated area (including make-up, toners, lotions, soaps, powders, perfumes, and
                                self-tanning products)</li>
                        </ul>
                    </div>

                    <div className="HydraInstructions_subheader1">
                        <label className="HydraInstructions_subheader2">For the first 72 hours after a HydraFacial, avoid the following to prevent skin irritation </label>
                    </div>

                    <div>
                        <ul>
                            <li className="HydraInstructions_content">Stay away from at-home peels, masks, toners, cleansers, retinol, or anything with salicylic acid</li>
                            <li className="HydraInstructions_content">Limit your outdoor activities and exposure to the sun</li>
                        </ul>
                    </div>

                    <div className="HydraInstructions_subheader1">
                        <label className="HydraInstructions_subheader2">For the first two weeks after a HydraFacial:</label>
                    </div>

                    <div>
                        <ul>
                            <li className="HydraInstructions_content">Postpone laser, wax, and exfoliation treatments on the treated area</li>
                            <li className="HydraInstructions_content">Postpone tanning (sunbathing, or sunbeds)</li>
                            <li className="HydraInstructions_contentt">Continue to wear a sunscreen of at least 30 SPF</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HydraFacial;