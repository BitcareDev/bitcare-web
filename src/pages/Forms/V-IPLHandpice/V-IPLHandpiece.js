import React from "react";
import './V-IPLHandpiece.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from "react";
import SignaturePad from 'react-signature-canvas';
import jsPDF from 'jspdf';
// import { RxDotFilled } from 'react-icons/rx';
// import { CgShapeRhombus } from 'react-icons/cg';

function VIPLHandpiece() {
    const [clientImageURL, setClientImageURL] = useState(null);
    const [guardianImageURL, setGuardianImageURL] = useState(null);
    const [personnelImageURL, setPersonnelImageURL] = useState(null);
    const generatePdfRef = useRef(null);

    var [date, setDate] = useState(new Date());
    const [active, setActive] = useState("");
    const [surgeries, setSurgeries] = useState("");
    const [medication, setMedication] = useState("");
    const [sensitivity, setSensitivity] = useState("");
    const [allergy, setAllergy] = useState("");
    const [pregnancy, setPregnancy] = useState("");
    const [age, setAge] = useState("");

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
            margin: [40, 20, 79, 10],
            autoPaging: 'text',
        });
    };

    // Client Signature
    let ClintSigPad = useRef({});

    function ClintClear() {
        ClintSigPad.current.clear();
    }
    const ClintTrim = () => {
        setClientImageURL(ClintSigPad.current.getTrimmedCanvas().toDataURL("image/png"))
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
    let PersonnelSigPad = useRef({});

    function PersonnelClear() {
        PersonnelSigPad.current.clear();
    }
    const PersonnelTrim = () => {
        setPersonnelImageURL(PersonnelSigPad.current.getTrimmedCanvas().toDataURL("image/png"))
    }

    const [disabled, setDisabled] = useState(true);
    function handleCheckClick() {
        setDisabled(!disabled);
    }

    const [disabled1, setDisabled1] = useState(true);
    function handleCheckClick1() {
        setDisabled1(!disabled);
    }

    const [disabled2, setDisabled2] = useState(true);
    function handleCheckClick2() {
        setDisabled2(!disabled);
    }

    const [disabled3, setDisabled3] = useState(true);
    function handleCheckClick3() {
        setDisabled3(!disabled);
    }

    const [disabled4, setDisabled4] = useState(true);
    function handleCheckClick4() {
        setDisabled4(!disabled);
    }

    const [disabled5, setDisabled5] = useState(true);
    function handleCheckClick5() {
        setDisabled5(!disabled);
    }

    const [disabled6, setDisabled6] = useState(true);
    function handleCheckClick6() {
        setDisabled6(!disabled);
    }
    return (
        <div>
            <button className="V-IPLGenerate_btn" onClick={handleGeneratePdf}>Generate PDF</button>
            <div ref={generatePdfRef}>
                <div class="container-fluid mt-3">
                    <div className="Bitcare_img">
                        <img src="../../../assets/Bitcare2.png" alt="main" className="image_info" />
                    </div>
                    <div>
                        <h1 class="VIPL_header">Informed consent form for treatment with V-IPL Handpiece</h1>
                    </div>
                    <div class="VIPL_subheader mb-2">Patient Information:</div>
                    <div class="row">
                        <div class="col-sm-12 mb-2">
                            <div class="input-group mt-2">
                                <span class="input-group-text Handpiece-header">First Name and Last Name:</span>
                                <input type="text1" class="form-control VIPL_input" name="name" />
                            </div>
                        </div>
                        <div class="col-sm-12 mb-2">
                            <div class="input-group mt-2">
                                <span class="input-group-text Handpiece-header">Age:</span>
                                <input type="number" class="form-control VIPL_input" name="age" />
                            </div>
                        </div>
                        <div class="col-sm-12 mb-2">
                            <div class="input-group mt-2 mb-3">
                                <span class="input-group-text Handpiece-header">Phone/Mobile:</span>
                                <input type="number" class="form-control VIPL_input" name="phone" />
                            </div>
                        </div>
                    </div>
                    <div class="VIPL_subheader mb-2">Health Questionnaire:</div>
                    <div class="VIPL_container mb-3">
                        <div class="VIPL_content mb-2">Have you today or in the past experienced any of the following:</div>
                        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                            <div class="col mb-2 V_content">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <div className="VIPL_content">Active/Chronic conditions:</div>
                                    </div>
                                    <div class="col-sm-5">
                                        <div><label for="chkPassport" className="Check_box"> <input type="checkbox" id="chkPassport1" onClick={handleCheckClick} checked={active === "Active_Y"} onChange={() => setActive("Active_Y")} /> Y </label>  <label for="chkPassport" className="Check_box"><input type="checkbox" id="chkPassport" checked={active === "Active_N"} onChange={() => setActive("Active_N")} /> N</label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-2">
                                <div class="input-group">
                                    <span class="input-group-text Handpiece-header">Specify:</span>
                                    <input type="text1" class="form-control VIPL_input" disabled={disabled} title="This field is disabled please check the Y checkbox to enable it" name="name" />
                                </div>
                            </div>

                            <div class="col mb-2 V_content">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <div className="VIPL_content">Surgeries/Hospitalization:</div>
                                    </div>
                                    <div class="col-sm-5">
                                        <div><label for="chkPassport" className="Check_box"> <input type="checkbox" id="chkPassport1" onClick={handleCheckClick1} checked={surgeries === "Surgeries_Y"} onChange={() => setSurgeries("Surgeries_Y")} /> Y </label>  <label for="chkPassport" className="Check_box"><input type="checkbox" id="chkPassport" checked={surgeries === "Surgeries_N"} onChange={() => setSurgeries("Surgeries_N")} /> N</label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-2">
                                <div class="input-group">
                                    <span class="input-group-text Handpiece-header">Specify:</span>
                                    <input type="text1" class="form-control VIPL_input" disabled={disabled1} title="This field is disabled please check the Y checkbox to enable it" name="name" />
                                </div>
                            </div>

                            <div class="col mb-2 V_content">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <div className="VIPL_content">Medication Care:</div>
                                    </div>
                                    <div class="col-sm-5">
                                        <div><label for="chkPassport" className="Check_box"> <input type="checkbox" id="chkPassport1" onClick={handleCheckClick2} checked={medication === "Medication_Y"} onChange={() => setMedication("Medication_Y")} /> Y </label>  <label for="chkPassport" className="Check_box"><input type="checkbox" id="chkPassport" checked={medication === "Medication_N"} onChange={() => setMedication("Medication_N")} /> N</label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-2">
                                <div class="input-group">
                                    <span class="input-group-text Handpiece-header">Specify:</span>
                                    <input type="text1" class="form-control VIPL_input" disabled={disabled2} title="This field is disabled please check the Y checkbox to enable it" name="name" />
                                </div>
                            </div>

                            <div class="col mb-2 V_content">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <div className="VIPL_content">Sensitivity to Medication:</div>
                                    </div>
                                    <div class="col-sm-5">
                                        <div><label for="chkPassport" className="Check_box"> <input type="checkbox" id="chkPassport1" onClick={handleCheckClick3} checked={sensitivity === "Sensitivity_Y"} onChange={() => setSensitivity("Sensitivity_Y")} /> Y </label>  <label for="chkPassport" className="Check_box"><input type="checkbox" id="chkPassport" checked={sensitivity === "Sensitivity_N"} onChange={() => setSensitivity("Sensitivity_N")} /> N</label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-2">
                                <div class="input-group">
                                    <span class="input-group-text Handpiece-header">Specify:</span>
                                    <input type="text1" class="form-control VIPL_input" disabled={disabled3} title="This field is disabled please check the Y checkbox to enable it" name="name" />
                                </div>
                            </div>

                            <div class="col mb-2 V_content">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <div className="VIPL_content">Allergy:</div>
                                    </div>
                                    <div class="col-sm-5">
                                        <div><label for="chkPassport" className="Check_box"> <input type="checkbox" id="chkPassport1" onClick={handleCheckClick4} checked={allergy === "Allergy_Y"} onChange={() => setAllergy("Allergy_Y")} /> Y </label>  <label for="chkPassport" className="Check_box"><input type="checkbox" id="chkPassport" checked={allergy === "Allergy_N"} onChange={() => setAllergy("Allergy_N")} /> N</label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-2">
                                <div class="input-group">
                                    <span class="input-group-text Handpiece-header">Specify:</span>
                                    <input type="text1" class="form-control VIPL_input" disabled={disabled4} title="This field is disabled please check the Y checkbox to enable it" name="name" />
                                </div>
                            </div>

                            <div class="col mb-2 V_content">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <div className="VIPL_content">Pregnancy:</div>
                                    </div>
                                    <div class="col-sm-5">
                                        <div><label for="chkPassport" className="Check_box"> <input type="checkbox" id="chkPassport1" onClick={handleCheckClick5} checked={pregnancy === "Pregnancy_Y"} onChange={() => setPregnancy("Pregnancy_Y")} /> Y </label>  <label for="chkPassport" className="Check_box"><input type="checkbox" id="chkPassport" checked={pregnancy === "Pregnancy_N"} onChange={() => setPregnancy("Pregnancy_N")} /> N</label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-2">
                                <div class="input-group">
                                    <span class="input-group-text Handpiece-header">Specify:</span>
                                    <input type="text1" class="form-control VIPL_input" disabled={disabled5} title="This field is disabled please check the Y checkbox to enable it" name="name" />
                                </div>
                            </div>

                            <div class="col mb-2 V_content">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <div className="VIPL_content">Under age of 18:</div>
                                    </div>
                                    <div class="col-sm-5">
                                        <div><label for="chkPassport" className="Check_box"> <input type="checkbox" id="chkPassport1" onClick={handleCheckClick6} checked={age === "Age_Y"} onChange={() => setAge("Age_Y")} /> Y </label>  <label for="chkPassport" className="Check_box"><input type="checkbox" id="chkPassport" checked={age === "Age_N"} onChange={() => setAge("Age_N")} /> N</label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-2">
                                <div class="input-group">
                                    <span class="input-group-text Handpiece-header">Specify:</span>
                                    <input type="text1" class="form-control VIPL_input" disabled={disabled6} title="This field is disabled please check the Y checkbox to enable it" name="name" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="VIPL_subheader mb-2">Exclusion Criteria from treatment (Contraindications):</div>
                    <div class="VIPL_container">
                        <div>Tick any of the boxes that apply to you:</div>
                        <div className="handpiece_container">
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Cardiac pacemaker, defibrillator, or other implanted electronic/metallic device</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Any diseases which may be stimulated by light or heat (such as Herpes Simplex)</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Impaired immune system (such as HIV) or use of immunosuppressive medications</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Hepatitis or liver disease</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> History of bleeding coagulopathies, or use of anticoagulants (blood thinning medications)</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> High or low blood pressure (with medications)</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Epilepsy</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Hormonal disorders or endocrine disorders (such as polycystic ovary syndrome or diabetes), unless under control</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Suffering from Keloid scars or impaired wound healing</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Vitiligo or tendency to hypopigmentation</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Current or history of cancer, any cancer drug therapy (such as Ducabaxine, Fluorouracil, Methotrexate, etc.), pre-cancerous lesions or problematic moles</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> History of local or recurrent skin infection</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Fragile, extra dry and sensitive skin</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Any active skin disease or inflammation (such as Herpes, Psoriasis, Eczema, rash) the treatment area</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Metal implants in the treatment area</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Undiagnosed lesions in the treatment area</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> History or current tattoo or permanent makeup or nevi present in the treatment area</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Any synthetic filler procedures (i.e. silicon) in the treatment area. Please note that some of the fillers are "heat resistant". In these cases, treatments may start two weeks after the filler procedure.</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Deep chemical peel/ laser peel in the past 6 months</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Use of Accutane (Isotretinoin, Roaccutane) within the past 3-6 months</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Childbirth in the past 6 months or nursing in the past 3 months</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Sunburns, exposure to sun or artificial tanning during the past 3-4 weeks prior to treatment</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Use of photosensitive medication or herbs within 2 weeks prior to treatment (such as Isotretinoin, tetracycline, or St. John's Wort.)</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Tretinoin - Retin A in the last 2 weeks</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Meso-threads in the last 2-3 weeks</div>
                            <div class="VIPL_content mb-2"><input type="checkbox" /> Chemical peel or natural fillers in the past 2 weeks</div>
                            <div class="VIPL_content mb-4"><input type="checkbox" /> Botox injections in the past 5-7 days</div>
                            <div class="VIPL_content mb-4">Contraindications should be thoroughly evaluated and confirmed at each patient's visit</div>
                        </div>
                        <li class="VIPL_content mb-4">For patients with chronic herpes simplex virus infections, pretreatment with antiviral medications should be initiated, especially when lesions appear in the site to be treated.. Antiviral treatment typically begins 1 day prior to treatment and continues for a total of 5-7 days.</li>
                        <div class="VIPL_content mb-3" style={{ lineHeight: '20px' }}>1. I <input type="text1" style={{ marginBottom: '5px' }} /> duly authorize <input type="text1" style={{ marginBottom: '5px' }} /> and other specially trained associate technicians of this facility, to perform treatments using the V-ST Handpiece.</div>
                        <div class="VIPL_content mb-3">2. I am hereby undertaking the responsibility of the treatment outcome.</div>
                        <div class="VIPL_content mb-3">3. I hereby commit to inform any change in my medical and health condition.</div>
                        <div class="VIPL_content mb-3">4. I do not suffer from Herpes/ I suffer from Herpes and I agree to initiate preventive treatment with antiviral medications, though I am aware that preventive treatment does not ensure total prevention of Herpes appearance during the treatment.</div>
                        <div class="VIPL_content mb-3">5. I understand the procedure is purely elective and that studies indicate that results vary with each individual according to the skin condition and physiologial attributes as well as the medical condition of the client.</div>
                        <div class="VIPL_content mb-3">6. I understand that a commitment to a series of treatments is required to achieve optimal results and I am aware that the treatment may be performed by diferent Viora's personnel.</div>
                        <div class="VIPL_content mb-3">7. I consent that Viora's clinical department may discontinue the treatment course at any time without prior notice.</div>
                        <div class="VIPL_content mb-3">8. I consent to photographs for the purpose of monitoring response to treatment and for use in medical education research of Viora and the local distributor as long as my anonymity is maintained and my privacy protected.</div>
                        <div class="VIPL_content mb-3">9. I hereby declare that I was informed regarding the following:</div>
                        <div class="handpiece-content">
                            <div class="VIPL_content mb-3">9.1. The versatile treatments available with Viora's light based systems are based on a principle called selective
                                photo thermolysis. The light emitted and absorbed by targeted chromophores (light sensitive molecules) encourages
                                a specific biological process to achieve the desired clinical result.</div>
                            <div class="VIPL_content mb-3">9.2. I have been advised regarding possible risks and side efects of the treatment which may include slight pain,
                                erythema, edema, superficial burn, blister, rash, color changes (hyper or hypo pigmentation), bruising, paradoxical
                                unwanted hair growth. All side effects are transient and mild, however in the event of adverse side effects the treating
                                personnel must be informed and a physician consult may be necessary.</div>
                            <div class="VIPL_content mb-3">9.3. I am aware that exposure to sun 3-4 weeks prior and after treatment are contraindicated to the treatment and
                                may promote side effects. I was advised to use SPF&gt;30 in between treatments.</div>
                            <div class="VIPL_content mb-3">9.4. I was advised about the use of protective goggles and I agree to wear them throughout the duration of the treatment.</div>
                        </div>
                        <div class="VIPL_content mb-3">My questions regarding this procedure have been answered to my satisfaction. I accept all risks of treatment and
                            agree to provide aftercare as directed by this facility.</div>
                    </div>

                    <div class="row mt-4">
                        <div class="col-sm-3">
                            <label className="VIPLhandpiece_content">Client's Name:</label>
                        </div>
                        <div class="col-sm-8">
                            <input type="text1" placeholder="Name" class="form-control VIPL_input" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-3">
                            <label className="VIPLhandpiece_content">Date:</label>
                        </div>
                        <div class="col-sm-8">
                            <input type="text1" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control VIPL_input" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-3">
                            <label className="VIPLhandpiece_content">Signature:</label>
                        </div>
                        <div class="col-sm-8">
                            {clientImageURL !== null ? (
                                <img
                                    src={clientImageURL}
                                    alt="my signature"
                                />
                            ) : (
                                <div>
                                    <div className="bg_VIPL">
                                        <SignaturePad
                                            ref={ClintSigPad}
                                            penColor="black"
                                            backgroundColor='#ffffff'
                                        />
                                    </div>

                                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                                        <div class="col">
                                            <input type="submit" id="clear_bttn" onClick={ClintClear} value="clear" />
                                        </div>
                                        <div class="col">
                                            <input type="submit" id="save_bttn" value="save & continue" onClick={ClintTrim} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div class="VIPL_content mt-4" style={{ fontWeight: "bold" }}>For patients under the age of 18:</div>

                    <div class="row mt-4">
                        <div class="col-sm-3">
                            <label className="VIPLhandpiece_content">Guardian Name:</label>
                        </div>
                        <div class="col-sm-8">
                            <input type="text1" placeholder="Name" class="form-control VIPL_input" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-3">
                            <label className="VIPLhandpiece_content">Relation to patient:</label>
                        </div>
                        <div class="col-sm-8">
                            <input type="text1" placeholder="Name" class="form-control VIPL_input" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-3">
                            <label className="VIPLhandpiece_content">Date:</label>
                        </div>
                        <div class="col-sm-8">
                            <input type="text1" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control VIPL_input" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-3">
                            <label className="VIPLhandpiece_content">Signature:</label>
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

                    <div class="VIPL_content mt-4" style={{ fontWeight: "bold" }}>Treating personnel Declaration:</div>

                    <div class="row mt-4">
                        <div class="col-sm-3">
                            <label className="VIPLhandpiece_content">Treating personnel's Name:</label>
                        </div>
                        <div class="col-sm-8">
                            <input type="text1" placeholder="Name" class="form-control VIPL_input" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-3">
                            <label className="VIPLhandpiece_content">Date:</label>
                        </div>
                        <div class="col-sm-8">
                            <input type="text1" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control VIPL_input" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-3">
                            <label className="VIPLhandpiece_content">Signature:</label>
                        </div>
                        <div class="col-sm-8">
                            {personnelImageURL !== null ? (
                                <img
                                    src={personnelImageURL}
                                    alt="my signature"
                                />
                            ) : (
                                <div>
                                    <div className="bg_VIPL">
                                        <SignaturePad
                                            ref={PersonnelSigPad}
                                            penColor="black"
                                            backgroundColor='#ffffff'
                                        />
                                    </div>

                                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                                        <div class="col">
                                            <input type="submit" id="clear_bttn" onClick={PersonnelClear} value="clear" />
                                        </div>
                                        <div class="col">
                                            <input type="submit" id="save_bttn" value="save & continue" onClick={PersonnelTrim} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div class="VIPL_content mt-4 mb-3" style={{ fontWeight: "bold" }}>This consent was accepted by me, after I explained to the client all of the above and I confirm that all of my explanations were understood by her/him.</div>
                    <div class="VIPL_container">
                        <div class="VIPL_subheader mb-2">IPL PRE-TREATMENT INSTRUCTIONS</div>
                        <div class="VIPL_content mb-2">1. An accurate diagnosis by a physician is necessary prior to the IPL treatment.</div>
                        <div class="VIPL_content mb-2">2. Prior to the treatment, clean the treatment area. The treatment area should be free of any makeup, creams, perfumes and lotions. Male patients should shave just prior to treatment (the pigment in your beard could increase discomfort).</div>
                        <div class="VIPL_content mb-2">3. Discontinue sun tanning, use of tanning beds and any application of sunless tanning products one month before the treatment.</div>
                        <div class="VIPL_content mb-2">4. Always use an SPF 30 or greater sunblock on all exposed treatment areas. Wear sun protective hats and clothing.</div>
                        <div class="VIPL_content mb-2">5. Discontinue the use of exfoliating creams 1 week prior to the entire treatment</div>
                        <div class="VIPL_content mb-2">6. If the patient has a history of herpes outbreaks in the areas being treated, a prescribed medication, like Valtrex is recommended for one week prior to the treatment prior to the treatment to help prevent an outbreak.</div>
                        <div class="VIPL_content mb-2">Patients will need to have:</div>
                        <div style={{ paddingLeft: "20px" }}>
                            <ul>
                                <li class="VIPL_content mb-2"> A mild facial cleanser.</li>
                                <li class="VIPL_content mb-2"> A high quality sunblock SPF 30 (zinc and/or titanium dioxide &gt;10%)</li>
                                <li class="VIPL_content mb-2"> A good moisturizer available for your after-care.</li>
                            </ul>
                        </div>

                        <li class="VIPL_content mb-2"> For discomfort, a pain reliever such as ibuprofen or acetaminophen can be used. If an open area
                            occurs or if the treatment area is inadvertently picked an antibiotic ointment, such as Bacitracin can
                            also be applied.</li>


                        <div class="VIPL_subheader mb-2">IPL POST TREATMENT INSTRUCTIONS</div>
                        <div class="VIPL_content mb-2">1. A <u>mild sunburn-like sensation</u> is expected. This usually lasts 1-2 hours but can persist up to 24 hours, individuals may vary. Mild swelling, tenderness and/or redness may accompany this.</div>
                        <div class="VIPL_content mb-2">2. Apply <u>ice packs or gel packs (do not apply direct ice)</u> to the treated area for 10-15 minute intervals every hour for the next four hours as needed. A topical anti-inflammatory can be used for redness and tenderness. An oral, non-steroidal anti-inflammatory, such as acetaminophen or ibuprofen may be taken to reduce discomfort, use according to the manufacturer's instructions.</div>
                        <div class="VIPL_content mb-2">3. In rare cases, prolonged redness or blistering may occur, if this happens please call the physician’s office. An antibiotic ointment may be applied to the affected areas twice a day until healed. </div>
                        <div class="VIPL_content mb-2">4. Shower as usual. Treated areas may be temperature-sensitive. Avoid soaking in a hot tub of water. Avoid scrubbing, use of exfoliants, scrub brushes and loofah sponges until the treatment area has returned to its pre-treatment condition. </div>
                        <div class="VIPL_content mb-2">5. The pigmented lesions may initially look raised and/or darker with a reddened perimeter, this is normal. It will gradually turn darker over the next 24-48 hours. It may turn dark brown or even black and will begin to flake off in 7-10 days. Rarely would it progress to a scab or crusting phase, if this happens, please call us.</div>
                        <div class="VIPL_content mb-2">6. Veins or vascular lesions may undergo immediate graying or blanching (turning white) or they may exhibit a slight purple or red coloring. If the treated area develops crusting or a scab, it will start to flake off in 7-14 days. The vessels will fully or partially fade in about the same amount of time. Repeat treatment to veins may be every 7-14 days, or when the skin has fully recovered. </div>
                        <div class="VIPL_content mb-2">7. Do not pick, scratch or remove any scabs. Allow them to flake off on their own. Lesions are usually healed in 7-10 days. They will continue to fade over the next 6-8 weeks after treatment. Please keep all follow up appointments and do not hesitate to call our office if you have questions or concerns.</div>
                        <div class="VIPL_content">Until the redness has completely resolved, avoid all of the following:</div>
                        <ul>
                            <li class="VIPL_content">Applying cosmetics to the treated area</li>
                            <li class="VIPL_content">Swimming, especially in pools with chemicals, such as chlorine</li>
                            <li class="VIPL_content">Ocean swimming and Hot Tubs/Jacuzzis</li>
                            <li class="VIPL_content">Excessive perspiration or irritation to the treated area</li>
                            <li class="VIPL_content mb-2">Sun exposure to the treated areas – to prevent skin color change.</li>
                        </ul>
                        <div class="VIPL_content mb-2">8. Call your physician’s office with any questions or concerns you may have after the treatment</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VIPLHandpiece;