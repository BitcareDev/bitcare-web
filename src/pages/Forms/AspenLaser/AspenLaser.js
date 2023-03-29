import React, { useRef, useState } from "react";
import './AspenLaser.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignaturePad from 'react-signature-canvas';
import jsPDF from 'jspdf';

function AspenLaser() {

    const [patientImageURL, setPatientImageURL] = useState(null);
    const [guardianImageURL, setGuardianImageURL] = useState(null);
    const [professionalImageURL, setProfessionalImageURL] = useState(null);
    const generatePdfRef = useRef(null);
    
    const [qtn, setQtn] = useState("");
    const [qtn1, setQtn1] = useState("");
    const [qtn2, setQtn2] = useState("");
    const [qtn3, setQtn3] = useState("");
    const [qtn4, setQtn4] = useState("");
    const [qtn5, setQtn5] = useState("");
    const [qtn6, setQtn6] = useState("");
    const [qtn7, setQtn7] = useState("");
    const [qtn8, setQtn8] = useState("");
    const [qtn9, setQtn9] = useState("");
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
            margin: [40, 20, 40, 10],
            autoPaging: 'text',
        });
    };

    // Patient Signature
    let PatientSigPad = useRef({});

    function PatientClear() {
        PatientSigPad.current.clear();
    }
    const PatientTrim = () => {
        setPatientImageURL(PatientSigPad.current.getTrimmedCanvas().toDataURL("image/png"))
    }

    // Guardian Signature
    let GuardianSigPad = useRef({});

    function GuardianClear() {
        GuardianSigPad.current.clear();
    }
    const GuardianTrim = () => {
        setGuardianImageURL(GuardianSigPad.current.getTrimmedCanvas().toDataURL("image/png"))
    }

    // Treating personnel Sigature
    let ProfessionalSigPad = useRef({});

    function ProfessionalClear() {
        ProfessionalSigPad.current.clear();
    }
    const ProfessionalTrim = () => {
        setProfessionalImageURL(ProfessionalSigPad.current.getTrimmedCanvas().toDataURL("image/png"))
    }
    return (
        <div>
        <button className="AspenGenerate_btn" onClick={handleGeneratePdf}>Generate PDF</button>
        <div ref={generatePdfRef}>
        <div class="container-fluid mt-3">
            <div className="Bitcare_img2">
                <img src="../../../assets/Bitcare2.png" alt="main" className="image_info2" />
            </div>
            <div className="Aspenlaser-header">
                <h1 class="Aspen_header">LASER THERAPY CONSENT & CONTRAINDICATION FORM</h1>
                <h1 class="Aspen_header">Aspen Class IV Laser Therapy Treatment</h1>
            </div>
            <div className="Aspen_container">
                <div class="Aspen-content mb-4"><b>I here by authorize and provide permission to perform an Aspen Class IV Laser Therapy treatment.</b></div>

                <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 mb-4">
                    <div class="col mt-2">
                        <div className="Aspen-content1">I understand that the Aspen Class IV Laser Therapy is a safe and non-invasive treatment and has been cleared by the FDA to emit photon energy for the relief of minor muscle and joint pain, muscle spasm, pain and stiffness associated with minor arthritis, promoting relaxation of muscle tissue, and increase local blood circulation.</div>
                        <div className="Aspen-content1">I understand that every individual responds uniquely to laser therapy treatments. Some patients may see immediate results after the first treatment or depending on the severity of their condition, may require several treatments before they begin to feel results. Most patients experience a decrease in pain and an increase in range of motion within the first few hours (and up to 36 hours) from the first treatment.</div>
                        <div className="Aspen-content1">Note: Increased soreness may occur after your first laser therapy treatment session. This is a normal healing phenomenon known as retracing. If soreness occurs following your treatment, use ice for 5 minutes every 30 minutes, and no more than 5 minutes every 30 minutes. Repeat the icing as necessary If soreness persists after icing, please contact this office</div>
                    </div>
                    <div class="col">
                        <div className="Aspen_subheader">CONTRAINDICATIONS:</div>
                        <div className="Aspen-content">To the best of my knowledge, I may have, or am, one or more of the following:</div>
                        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 mt-2">
                            <div class="col">
                                <li className="Aspen-content"> Are you pregnant?</li>
                            </div>
                            <div class="col C1">
                                <div><label for="chkPassport" className="Check_box">Yes <input type="checkbox" id="chkPassport1" checked={qtn5 === "Yes5"} onChange={() => setQtn5("Yes5")} /> </label>  <label for="chkPassport" className="Check_box"> No <input type="checkbox" id="chkPassport" checked={qtn5 === "No5"} onChange={() => setQtn5("No5")} /></label></div>
                            </div>
                        </div>
                        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 mt-2">
                            <div class="col">
                                <li className="Aspen-content"> Do you have cancer?</li>
                            </div>
                            <div class="col C1">
                                <div><label for="chkPassport" className="Check_box">Yes <input type="checkbox" id="chkPassport1" checked={qtn6 === "Yes6"} onChange={() => setQtn6("Yes6")} /> </label>  <label for="chkPassport" className="Check_box"> No <input type="checkbox" id="chkPassport" checked={qtn6 === "No6"} onChange={() => setQtn6("No6")} /></label></div>
                            </div>
                        </div>
                        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 mt-2">
                            <div class="col">
                                <li className="Aspen-content"> Have you had cancer within the past 12 months?</li>
                            </div>
                            <div class="col C1">
                                <div><label for="chkPassport" className="Check_box">Yes <input type="checkbox" id="chkPassport1" checked={qtn7 === "Yes7"} onChange={() => setQtn7("Yes7")} /> </label>  <label for="chkPassport" className="Check_box"> No <input type="checkbox" id="chkPassport" checked={qtn7 === "No7"} onChange={() => setQtn7("No7")} /></label></div>
                            </div>
                        </div>
                        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 mt-2">
                            <div class="col">
                                <li className="Aspen-content"> Are you currently taking photosensitizing medications?</li>
                            </div>
                            <div class="col C1">
                                <div><label for="chkPassport" className="Check_box">Yes <input type="checkbox" id="chkPassport1" checked={qtn8 === "Yes8"} onChange={() => setQtn8("Yes8")} /> </label>  <label for="chkPassport" className="Check_box"> No <input type="checkbox" id="chkPassport" checked={qtn8 === "No8"} onChange={() => setQtn8("No8")} /></label></div>
                            </div>
                        </div>
                        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 mt-2">
                            <div class="col">
                                <li className="Aspen-content"> If yes, can you be in the sun for 10 min. without having itchiness, redness, blotchiness or pigmentation issues?</li>
                            </div>
                            <div class="col C1">
                                <div><label for="chkPassport" className="Check_box">Yes <input type="checkbox" id="chkPassport1" checked={qtn9 === "Yes9"} onChange={() => setQtn9("Yes9")} /> </label>  <label for="chkPassport" className="Check_box"> No <input type="checkbox" id="chkPassport" checked={qtn9 === "No9"} onChange={() => setQtn9("No9")} /></label></div>
                            </div>
                        </div>

                        <div class="Aspen_subheader mt-3">PRECAUTIONS:</div>
                        <div>To the best of my knowledge, I may have one or more of the following:</div>
                        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 mt-2">
                            <div class="col">
                                <li className="Aspen-content"> Do you have a pacemaker or other implanted medical devie (morphine pump, neurostimulator, etc)?</li>
                            </div>
                            <div class="col C1">
                                <div><label for="chkPassport" className="Check_box">Yes <input type="checkbox" id="chkPassport1" checked={qtn1 === "Yes1"} onChange={() => setQtn1("Yes1")} /> </label>  <label for="chkPassport" className="Check_box"> No <input type="checkbox" id="chkPassport" checked={qtn1 === "No1"} onChange={() => setQtn1("No1")} /></label></div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-12">
                                <div class="input-group mt-2">
                                    <span class="input-group-text Aspen-header1">If yes, where is it located?</span>
                                    <input type="text1" class="form-control Aspen_input" name="name" />
                                </div>
                            </div>
                        </div>
                        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 mt-2">
                            <div class="col">
                                <li className="Aspen-content"> Have you had steroid injection(s) within the past 7 days?</li>
                            </div>
                            <div class="col C1">
                                <div><label for="chkPassport" className="Check_box">Yes <input type="checkbox" id="chkPassport1" checked={qtn2 === "Yes2"} onChange={() => setQtn2("Yes2")} /> </label>  <label for="chkPassport" className="Check_box"> No <input type="checkbox" id="chkPassport" checked={qtn2 === "No2"} onChange={() => setQtn2("No2")} /></label></div>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="input-group mt-2">
                                <span class="input-group-text Aspen-header1">If yes, where?</span>
                                <input type="text1" class="form-control Aspen_input" name="name" />
                            </div>
                        </div>
                        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 mt-2">
                            <div class="col">
                                <li className="Aspen-content"> Is your pain directly over an epiphyseal plate (growth plate) in children under 15 years of age.</li>
                            </div>
                            <div class="col C1">
                                <div><label for="chkPassport" className="Check_box">Yes <input type="checkbox" id="chkPassport1" checked={qtn3 === "Yes3"} onChange={() => setQtn3("Yes3")} /> </label>  <label for="chkPassport" className="Check_box"> No <input type="checkbox" id="chkPassport" checked={qtn3 === "No3"} onChange={() => setQtn3("No3")} /></label></div>
                            </div>
                        </div>
                        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 mt-2">
                            <div class="col">
                                <li className="Aspen-content"> Is your pain over the Ovaries, Thyroid Gland or Testes?</li>
                            </div>
                            <div class="col C1">
                                <div><label for="chkPassport" className="Check_box">Yes <input type="checkbox" id="chkPassport1" checked={qtn4 === "Yes4"} onChange={() => setQtn4("Yes4")} /> </label>  <label for="chkPassport" className="Check_box"> No <input type="checkbox" id="chkPassport" checked={qtn4 === "No4"} onChange={() => setQtn4("No4")} /></label></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="Aspen_subheader mt-4">EYE SAFETY</div>
                <div class="Aspen-content mt-2 mb-2">I understand that Class IV Therapy Lasers emit both visible and invisible light. Protective eyewear is necessary at all times during the treatment. I will not remove the Safety Goggles until the administrator of the laser has turned off the laser treatment and provided notification that it is safe to remove them. You may be asked to remove reflective objects, such as rings, metal watchbands, and jewelry prior to treatment with the laser.</div>
                <div class="Aspen_subheader mt-4">ACKNOWLEDGEMENT</div>
                <div class="Aspen-content mt-2 mb-2">I have read and understand the foregoing. This Laser Therapy Consent Form applies to subsequent visits and treatments. I understand that there is no promise or guarantee regarding the results of the treatment, and that to achieve maximum clinical results, I may need multiple treatments.</div>
            </div>

            <div class="row mt-4">
                <div class="col-sm-3">
                    <label className="Aspen_content2">Patient Name:</label>
                </div>
                <div class="col-sm-8">
                    <input type="text1" placeholder="Name" class="form-control Aspen_input" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-3">
                    <label className="Aspen_content2">Date:</label>
                </div>
                <div class="col-sm-8">
                    <input type="text1" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control Aspen_input" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-3">
                    <label className="Aspen_content2">Patient Signature:</label>
                </div>
                <div class="col-sm-8">
                {patientImageURL !== null ? (
                                <img
                                    src={patientImageURL}
                                    alt="my signature"
                                />
                            ) : (
                                <div>
                                    <div className="bg_VIPL">
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

            <div class="row mt-4">
                <div class="col-sm-3">
                    <label className="Aspen_content2">Guardian Name:</label>
                </div>
                <div class="col-sm-8">
                    <input type="text1" placeholder="Name" class="form-control Aspen_input" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-3">
                    <label className="Aspen_content2">Date:</label>
                </div>
                <div class="col-sm-8">
                    <input type="text1" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control Aspen_input" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-3">
                    <label className="Aspen_content2">Guardian Signature:</label>
                </div>
                <div class="col-sm-8">
                {guardianImageURL !== null ? (
                                <img
                                    src={guardianImageURL}
                                    alt="my signature"
                                />
                            ) : (
                                <div>
                                    <div className="bg_VIPL">
                                        <SignaturePad
                                            ref={GuardianSigPad}
                                            penColor="black"
                                            backgroundColor='#ffffff'
                                        />
                                    </div>

                                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                                        <div class="col">
                                            <input type="submit" id="clear_bttn" onClick={GuardianClear} value="clear" />
                                        </div>
                                        <div class="col">
                                            <input type="submit" id="save_bttn" value="save & continue" onClick={GuardianTrim} />
                                        </div>
                                    </div>
                                </div>
                            )}
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-sm-3">
                    <label className="Aspen_content2">Health Care Professional:</label>
                </div>
                <div class="col-sm-8">
                    <input type="text1" placeholder="Name" class="form-control Aspen_input" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-3">
                    <label className="Aspen_content2">Date:</label>
                </div>
                <div class="col-sm-8">
                    <input type="text1" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control Aspen_input" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-3">
                    <label className="Aspen_content2">Health Care Professional Signature:</label>
                </div>
                <div class="col-sm-8">
                {professionalImageURL !== null ? (
                                <img
                                    src={professionalImageURL}
                                    alt="my signature"
                                />
                            ) : (
                                <div>
                                    <div className="bg_VIPL">
                                        <SignaturePad
                                            ref={ProfessionalSigPad}
                                            penColor="black"
                                            backgroundColor='#ffffff'
                                        />
                                    </div>

                                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                                        <div class="col">
                                            <input type="submit" id="clear_bttn" onClick={ProfessionalClear} value="clear" />
                                        </div>
                                        <div class="col">
                                            <input type="submit" id="save_bttn" value="save & continue" onClick={ProfessionalTrim} />
                                        </div>
                                    </div>
                                </div>
                            )}
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default AspenLaser;