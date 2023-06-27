import React, { useRef, useState } from "react";
import './V-IPLHandpiece.css';
import SignaturePad from 'react-signature-canvas';
import jsPDF from 'jspdf';

function VIPLHandpiece() {
    const [clientImageURL, setClientImageURL] = useState(null);
    const [guardianImageURL, setGuardianImageURL] = useState(null);
    const [personnelImageURL, setPersonnelImageURL] = useState(null);
    const generatePdfRef = useRef(null);

    //Current Date
    const date = new Date();

    //Yes or No Functionality
    const [active, setActive] = useState("");
    const [surgeries, setSurgeries] = useState("");
    const [medication, setMedication] = useState("");
    const [sensitivity, setSensitivity] = useState("");
    const [allergy, setAllergy] = useState("");
    const [pregnancy, setPregnancy] = useState("");
    const [age, setAge] = useState("");

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
    const ClintSigPad = useRef({});

    function ClintClear() {
        ClintSigPad.current.clear();
    }
    const ClintTrim = () => {
        setClientImageURL(ClintSigPad.current.getTrimmedCanvas().toDataURL("image/png"))
    }

    // Guardian Signature
    const GuardianSigPad = useRef({});

    function GuardianClear() {
        GuardianSigPad.current.clear();
    }
    const GuardianTrim = () => {
        setGuardianImageURL(GuardianSigPad.current.getTrimmedCanvas().toDataURL("image/png"))
    }

    // Treating personnel Sigature
    const PersonnelSigPad = useRef({});

    function PersonnelClear() {
        PersonnelSigPad.current.clear();
    }
    const PersonnelTrim = () => {
        setPersonnelImageURL(PersonnelSigPad.current.getTrimmedCanvas().toDataURL("image/png"))
    }
    return (
        <div>
            <button className="V-IPLGenerate_btn" onClick={handleGeneratePdf}>Generate PDF</button>
            <div ref={generatePdfRef}>
                <div className="viplcontainer-fluid">
                    <div>
                        <h1 className="VIPL_Mainheader">V-IPL Handpiece Consent Form</h1>
                        <h1 className="VIPL_header">Informed consent form for treatment with V-IPL Handpiece</h1>
                    </div>


                    {/* Patient Information */}
                    <div className="VIPLPatient_subheader">Patient Information:</div>
                    <div>
                        <div style={{marginBottom: "20px"}}>
                            <div className="VIPLPatientinput-group">
                                <span className="VIPLPatientinput-group-text HandpiecePatient-header">First Name and Last Name:</span>
                                <input type="text" className="VIPLPatient_input" name="name" />
                            </div>
                        </div>
                        <div style={{marginBottom: "20px"}}>
                            <div className="VIPLPatientinput-group">
                                <span className="VIPLPatientinput-group-text HandpiecePatient-header">Age:</span>
                                <input type="number" className="VIPLPatient_input" name="age" />
                            </div>
                        </div>
                        <div style={{marginBottom: "20px"}}>
                            <div className="VIPLPatientinput-group">
                                <span className="VIPLPatientinput-group-text HandpiecePatient-header">Phone/Mobile:</span>
                                <input type="number" className="VIPLPatient_input" name="phone" />
                            </div>
                        </div>
                    </div>


                    {/* Health Questionnaire */}
                    <div className="VIPLhealth_subheader">Health Questionnaire:</div>
                    <div className="VIPLhealth_container">
                        <div className="VIPLhealth_content">Have you today or in the past experienced any of the following:</div>
                        <div className="VIPL_data">
                            <div className="V_content">
                                <div className="VIPLhealth_data">
                                    <div className="VIPLhealth_data1">
                                        <div className="VIPL_content">Active/Chronic conditions:</div>
                                    </div>
                                    <div className="VIPLhealth_data2">
                                        <div><label for="chkPassport" className="VIPLcheck_box"> <input type="checkbox" id="chkPassport" checked={active === "Active_Y"} onChange={() => setActive("Active_Y")} /> Y </label>  <label for="chkPassport" className="VIPLcheck_box"><input type="checkbox" id="chkPassport" checked={active === "Active_N"} onChange={() => setActive("Active_N")} /> N</label></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="VIPLhealthinput-group">
                                    <span className="VIPLhealthinput-group-text Handpiecehealth-header">Specify:</span>
                                    <input type="text" className="VIPLhealth_input" title="This field is disabled please check the Y checkbox to enable it" name="name" />
                                </div>
                            </div>

                            <div className="V_content">
                                <div className="VIPLhealth_data">
                                    <div className="VIPLhealth_data1">
                                        <div className="VIPLhealth_content">Surgeries/Hospitalization:</div>
                                    </div>
                                    <div className="VIPLhealth_data2">
                                        <div><label for="chkPassport" className="VIPLcheck_box"> <input type="checkbox" id="chkPassport1" checked={surgeries === "Surgeries_Y"} onChange={() => setSurgeries("Surgeries_Y")} /> Y </label>  <label for="chkPassport" className="VIPLcheck_box"><input type="checkbox" id="chkPassport" checked={surgeries === "Surgeries_N"} onChange={() => setSurgeries("Surgeries_N")} /> N</label></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="VIPLhealthinput-group">
                                    <span className="VIPLhealthinput-group-text Handpiecehealth-header">Specify:</span>
                                    <input type="text" className="VIPLhealth_input" title="This field is disabled please check the Y checkbox to enable it" name="name" />
                                </div>
                            </div>

                            <div className="V_content">
                                <div className="VIPLhealth_data">
                                    <div className="VIPLhealth_data1">
                                        <div className="VIPLhealth_content">Medication Care:</div>
                                    </div>
                                    <div className="VIPLhealth_data2">
                                        <div><label for="chkPassport" className="VIPLcheck_box"> <input type="checkbox" id="chkPassport1" checked={medication === "Medication_Y"} onChange={() => setMedication("Medication_Y")} /> Y </label>  <label for="chkPassport" className="VIPLcheck_box"><input type="checkbox" id="chkPassport" checked={medication === "Medication_N"} onChange={() => setMedication("Medication_N")} /> N</label></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="VIPLhealthinput-group">
                                    <span className="VIPLhealthinput-group-text Handpiecehealth-header">Specify:</span>
                                    <input type="text" className="VIPLhealth_input" title="This field is disabled please check the Y checkbox to enable it" name="name" />
                                </div>
                            </div>

                            <div className="V_content">
                                <div className="VIPLhealth_data">
                                    <div className="VIPLhealth_data1">
                                        <div className="VIPLhealth_content">Sensitivity to Medication:</div>
                                    </div>
                                    <div className="VIPLhealth_data2">
                                        <div><label for="chkPassport" className="VIPLcheck_box"> <input type="checkbox" id="chkPassport1" checked={sensitivity === "Sensitivity_Y"} onChange={() => setSensitivity("Sensitivity_Y")} /> Y </label>  <label for="chkPassport" className="VIPLcheck_box"><input type="checkbox" id="chkPassport" checked={sensitivity === "Sensitivity_N"} onChange={() => setSensitivity("Sensitivity_N")} /> N</label></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="VIPLhealthinput-group">
                                    <span className="VIPLhealthinput-group-text Handpiecehealth-header">Specify:</span>
                                    <input type="text" className="VIPLhealth_input" title="This field is disabled please check the Y checkbox to enable it" name="name" />
                                </div>
                            </div>

                            <div className="V_content">
                                <div className="VIPLhealth_data">
                                    <div className="VIPLhealth_data1">
                                        <div className="VIPLhealth_content">Allergy:</div>
                                    </div>
                                    <div className="VIPLhealth_data2">
                                        <div><label for="chkPassport" className="VIPLcheck_box"> <input type="checkbox" id="chkPassport1" checked={allergy === "Allergy_Y"} onChange={() => setAllergy("Allergy_Y")} /> Y </label>  <label for="chkPassport" className="VIPLcheck_box"><input type="checkbox" id="chkPassport" checked={allergy === "Allergy_N"} onChange={() => setAllergy("Allergy_N")} /> N</label></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="VIPLhealthinput-group">
                                    <span className="VIPLhealthinput-group-text Handpiecehealth-header">Specify:</span>
                                    <input type="text" className="VIPLhealth_input" title="This field is disabled please check the Y checkbox to enable it" name="name" />
                                </div>
                            </div>

                            <div className="V_content">
                                <div className="VIPLhealth_data">
                                    <div className="VIPLhealth_data1">
                                        <div className="VIPLhealth_content">Pregnancy:</div>
                                    </div>
                                    <div className="VIPLhealth_data2">
                                        <div><label for="chkPassport" className="VIPLcheck_box"> <input type="checkbox" id="chkPassport1" checked={pregnancy === "Pregnancy_Y"} onChange={() => setPregnancy("Pregnancy_Y")} /> Y </label>  <label for="chkPassport" className="VIPLcheck_box"><input type="checkbox" id="chkPassport" checked={pregnancy === "Pregnancy_N"} onChange={() => setPregnancy("Pregnancy_N")} /> N</label></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="VIPLhealthinput-group">
                                    <span className="VIPLhealthinput-group-text Handpiecehealth-header">Specify:</span>
                                    <input type="text" className="VIPLhealth_input" title="This field is disabled please check the Y checkbox to enable it" name="name" />
                                </div>
                            </div>

                            <div className="V_content">
                                <div className="VIPLhealth_data">
                                    <div className="VIPLhealth_data1">
                                        <div className="VIPLhealth_content">Under age of 18:</div>
                                    </div>
                                    <div className="VIPLhealth_data2">
                                        <div><label for="chkPassport" className="VIPLcheck_box"> <input type="checkbox" id="chkPassport1" checked={age === "Age_Y"} onChange={() => setAge("Age_Y")} /> Y </label>  <label for="chkPassport" className="VIPLcheck_box"><input type="checkbox" id="chkPassport" checked={age === "Age_N"} onChange={() => setAge("Age_N")} /> N</label></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="VIPLhealthinput-group">
                                    <span className="VIPLhealthinput-group-text Handpiecehealth-header">Specify:</span>
                                    <input type="text" className="VIPLhealth_input" title="This field is disabled please check the Y checkbox to enable it" name="name" />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Exclusion Criteria from treatment (Contraindications): */}
                    <div className="VIPLexclusion_subheader">Exclusion Criteria from treatment (Contraindications):</div>
                    <div>
                        <div>Tick any of the boxes that apply to you:</div>
                        <div className="handpiece_container">
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Cardiac pacemaker, defibrillator, or other implanted electronic/metallic device</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Any diseases which may be stimulated by light or heat (such as Herpes Simplex)</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Impaired immune system (such as HIV) or use of immunosuppressive medications</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Hepatitis or liver disease</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> History of bleeding coagulopathies, or use of anticoagulants (blood thinning medications)</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> High or low blood pressure (with medications)</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Epilepsy</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Hormonal disorders or endocrine disorders (such as polycystic ovary syndrome or diabetes), unless under control</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Suffering from Keloid scars or impaired wound healing</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Vitiligo or tendency to hypopigmentation</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Current or history of cancer, any cancer drug therapy (such as Ducabaxine, Fluorouracil, Methotrexate, etc.), pre-cancerous lesions or problematic moles</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> History of local or recurrent skin infection</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Fragile, extra dry and sensitive skin</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Any active skin disease or inflammation (such as Herpes, Psoriasis, Eczema, rash) the treatment area</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Metal implants in the treatment area</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Undiagnosed lesions in the treatment area</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> History or current tattoo or permanent makeup or nevi present in the treatment area</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Any synthetic filler procedures (i.e. silicon) in the treatment area. Please note that some of the fillers are "heat resistant". In these cases, treatments may start two weeks after the filler procedure.</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Deep chemical peel/ laser peel in the past 6 months</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Use of Accutane (Isotretinoin, Roaccutane) within the past 3-6 months</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Childbirth in the past 6 months or nursing in the past 3 months</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Sunburns, exposure to sun or artificial tanning during the past 3-4 weeks prior to treatment</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Use of photosensitive medication or herbs within 2 weeks prior to treatment (such as Isotretinoin, tetracycline, or St. John's Wort.)</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Tretinoin - Retin A in the last 2 weeks</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Meso-threads in the last 2-3 weeks</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Chemical peel or natural fillers in the past 2 weeks</div>
                            <div className="VIPLexclusion_content"><input type="checkbox" /> Botox injections in the past 5-7 days</div>
                            <div className="VIPLexclusion_content">Contraindications should be thoroughly evaluated and confirmed at each patient's visit</div>
                        </div>
                        <li className="VIPLexclusion_content1" style={{marginBottom: "30px"}}>For patients with chronic herpes simplex virus infections, pretreatment with antiviral medications should be initiated, especially when lesions appear in the site to be treated.. Antiviral treatment typically begins 1 day prior to treatment and continues for a total of 5-7 days.</li>
                        <div className="VIPLexclusion_content1" style={{lineHeight: '20px'}}>1. I <input type="text" style={{ marginBottom: '5px' }} /> duly authorize <input type="text" style={{ marginBottom: '5px' }} /> and other specially trained associate technicians of this facility, to perform treatments using the V-ST Handpiece.</div>
                        <div className="VIPLexclusion_content1">2. I am hereby undertaking the responsibility of the treatment outcome.</div>
                        <div className="VIPLexclusion_content1">3. I hereby commit to inform any change in my medical and health condition.</div>
                        <div className="VIPLexclusion_content1">4. I do not suffer from Herpes/ I suffer from Herpes and I agree to initiate preventive treatment with antiviral medications, though I am aware that preventive treatment does not ensure total prevention of Herpes appearance during the treatment.</div>
                        <div className="VIPLexclusion_content1">5. I understand the procedure is purely elective and that studies indicate that results vary with each individual according to the skin condition and physiologial attributes as well as the medical condition of the client.</div>
                        <div className="VIPLexclusion_content1">6. I understand that a commitment to a series of treatments is required to achieve optimal results and I am aware that the treatment may be performed by diferent Viora's personnel.</div>
                        <div className="VIPLexclusion_content1">7. I consent that Viora's clinical department may discontinue the treatment course at any time without prior notice.</div>
                        <div className="VIPLexclusion_content1">8. I consent to photographs for the purpose of monitoring response to treatment and for use in medical education research of Viora and the local distributor as long as my anonymity is maintained and my privacy protected.</div>
                        <div className="VIPLexclusion_content1">9. I hereby declare that I was informed regarding the following:</div>
                        <div className="handpiece-content">
                            <div className="VIPLexclusion_content1">9.1. The versatile treatments available with Viora's light based systems are based on a principle called selective
                                photo thermolysis. The light emitted and absorbed by targeted chromophores (light sensitive molecules) encourages
                                a specific biological process to achieve the desired clinical result.</div>
                            <div className="VIPLexclusion_content1">9.2. I have been advised regarding possible risks and side efects of the treatment which may include slight pain,
                                erythema, edema, superficial burn, blister, rash, color changes (hyper or hypo pigmentation), bruising, paradoxical
                                unwanted hair growth. All side effects are transient and mild, however in the event of adverse side effects the treating
                                personnel must be informed and a physician consult may be necessary.</div>
                            <div className="VIPLexclusion_content1">9.3. I am aware that exposure to sun 3-4 weeks prior and after treatment are contraindicated to the treatment and
                                may promote side effects. I was advised to use SPF&gt;30 in between treatments.</div>
                            <div className="VIPLexclusion_content1">9.4. I was advised about the use of protective goggles and I agree to wear them throughout the duration of the treatment.</div>
                        </div>
                        <div class="VIPLexclusion_content1">My questions regarding this procedure have been answered to my satisfaction. I accept all risks of treatment and
                            agree to provide aftercare as directed by this facility.</div>
                    </div>


                    {/* Name, Date and Signatures */}
                    <div className="VIPL_Footer">
                        <div className="VIPL_Footer1">
                            <label className="VIPLhandpiece_content">Client's Name:</label>
                        </div>
                        <div className="VIPL_Footer2">
                            <input type="text" placeholder="Name" class="form-control VIPL_input" />
                        </div>
                    </div>
                    <div className="VIPL_Footer">
                        <div className="VIPL_Footer1">
                            <label className="VIPLhandpiece_content">Date:</label>
                        </div>
                        <div className="VIPL_Footer2">
                            <input type="text" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control VIPL_input" />
                        </div>
                    </div>
                    <div className="VIPL_Footer">
                        <div className="VIPL_Footer1">
                            <label className="VIPLhandpiece_content">Signature:</label>
                        </div>
                        <div className="VIPL_Footer2">
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

                                    <div className="VIPL_Footerbtn">
                                        <div>
                                            <button className="viplclear_bttn" onClick={ClintClear}>clear</button>
                                        </div>
                                        <div>
                                            <button className="viplsave_bttn" onClick={ClintTrim}>save & continue</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="VIPL_content" style={{ fontWeight: "bold", marginTop: "30px" }}>For patients under the age of 18:</div>

                    <div className="VIPL_Footer">
                        <div className="VIPL_Footer1">
                            <label className="VIPLhandpiece_content">Guardian Name:</label>
                        </div>
                        <div className="VIPL_Footer2">
                            <input type="text" placeholder="Name" class="form-control VIPL_input" />
                        </div>
                    </div>
                    <div className="VIPL_Footer">
                        <div className="VIPL_Footer1">
                            <label className="VIPLhandpiece_content">Relation to patient:</label>
                        </div>
                        <div className="VIPL_Footer2">
                            <input type="text" placeholder="Name" class="form-control VIPL_input" />
                        </div>
                    </div>
                    <div className="VIPL_Footer">
                        <div className="VIPL_Footer1">
                            <label className="VIPLhandpiece_content">Date:</label>
                        </div>
                        <div className="VIPL_Footer2">
                            <input type="text" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control VIPL_input" />
                        </div>
                    </div>
                    <div className="VIPL_Footer">
                        <div className="VIPL_Footer1">
                            <label className="VIPLhandpiece_content">Signature:</label>
                        </div>
                        <div className="VIPL_Footer2">
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

                                    <div className="VIPL_Footerbtn">
                                        <div>
                                            <button className="viplclear_bttn" onClick={GuardianClear}>clear</button>
                                        </div>
                                        <div>
                                            <button className="viplsave_bttn" onClick={GuardianTrim}>save & continue</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="VIPL_content" style={{ fontWeight: "bold", marginTop: "30px" }}>Treating personnel Declaration:</div>

                    <div className="VIPL_Footer">
                        <div className="VIPL_Footer1">
                            <label className="VIPLhandpiece_content">Treating personnel's Name:</label>
                        </div>
                        <div className="VIPL_Footer2">
                            <input type="text" placeholder="Name" class="form-control VIPL_input" />
                        </div>
                    </div>
                    <div className="VIPL_Footer">
                        <div className="VIPL_Footer1">
                            <label className="VIPLhandpiece_content">Date:</label>
                        </div>
                        <div className="VIPL_Footer2">
                            <input type="text" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control VIPL_input" />
                        </div>
                    </div>
                    <div className="VIPL_Footer">
                        <div className="VIPL_Footer1">
                            <label className="VIPLhandpiece_content">Signature:</label>
                        </div>
                        <div className="VIPL_Footer2">
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

                                    <div className="VIPL_Footerbtn">
                                        <div>
                                            <button className="viplclear_bttn" onClick={PersonnelClear}>clear</button>
                                        </div>
                                        <div>
                                            <button className="viplsave_bttn" onClick={PersonnelTrim}>save & continue</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="VIPL_treatment">This consent was accepted by me, after I explained to the client all of the above and I confirm that all of my explanations were understood by her/him.</div>
                    <div>
                        

                        {/* Pre and Post treatment Instructions */}
                        <div className="VIPLtreatment_subheader">IPL PRE-TREATMENT INSTRUCTIONS</div>
                        <div className="VIPLtreatment_content">1. An accurate diagnosis by a physician is necessary prior to the IPL treatment.</div>
                        <div className="VIPLtreatment_content">2. Prior to the treatment, clean the treatment area. The treatment area should be free of any makeup, creams, perfumes and lotions. Male patients should shave just prior to treatment (the pigment in your beard could increase discomfort).</div>
                        <div className="VIPLtreatment_content">3. Discontinue sun tanning, use of tanning beds and any application of sunless tanning products one month before the treatment.</div>
                        <div className="VIPLtreatment_content">4. Always use an SPF 30 or greater sunblock on all exposed treatment areas. Wear sun protective hats and clothing.</div>
                        <div className="VIPLtreatment_content">5. Discontinue the use of exfoliating creams 1 week prior to the entire treatment</div>
                        <div className="VIPLtreatment_content">6. If the patient has a history of herpes outbreaks in the areas being treated, a prescribed medication, like Valtrex is recommended for one week prior to the treatment prior to the treatment to help prevent an outbreak.</div>
                        <div className="VIPLtreatment_content">Patients will need to have:</div>
                        <div style={{ paddingLeft: "20px" }}>
                            <ul>
                                <li className="VIPLtreatment_content"> A mild facial cleanser.</li>
                                <li className="VIPLtreatment_content"> A high quality sunblock SPF 30 (zinc and/or titanium dioxide &gt;10%)</li>
                                <li className="VIPLtreatment_content"> A good moisturizer available for your after-care.</li>
                            </ul>
                        </div>

                        <li className="VIPLtreatment_content"> For discomfort, a pain reliever such as ibuprofen or acetaminophen can be used. If an open area
                            occurs or if the treatment area is inadvertently picked an antibiotic ointment, such as Bacitracin can
                            also be applied.</li>


                        <div class="VIPLtreatment_subheader">IPL POST TREATMENT INSTRUCTIONS</div>
                        <div className="VIPLtreatment_content">1. A <u>mild sunburn-like sensation</u> is expected. This usually lasts 1-2 hours but can persist up to 24 hours, individuals may vary. Mild swelling, tenderness and/or redness may accompany this.</div>
                        <div className="VIPLtreatment_content">2. Apply <u>ice packs or gel packs (do not apply direct ice)</u> to the treated area for 10-15 minute intervals every hour for the next four hours as needed. A topical anti-inflammatory can be used for redness and tenderness. An oral, non-steroidal anti-inflammatory, such as acetaminophen or ibuprofen may be taken to reduce discomfort, use according to the manufacturer's instructions.</div>
                        <div className="VIPLtreatment_content">3. In rare cases, prolonged redness or blistering may occur, if this happens please call the physician’s office. An antibiotic ointment may be applied to the affected areas twice a day until healed. </div>
                        <div className="VIPLtreatment_content">4. Shower as usual. Treated areas may be temperature-sensitive. Avoid soaking in a hot tub of water. Avoid scrubbing, use of exfoliants, scrub brushes and loofah sponges until the treatment area has returned to its pre-treatment condition. </div>
                        <div className="VIPLtreatment_content">5. The pigmented lesions may initially look raised and/or darker with a reddened perimeter, this is normal. It will gradually turn darker over the next 24-48 hours. It may turn dark brown or even black and will begin to flake off in 7-10 days. Rarely would it progress to a scab or crusting phase, if this happens, please call us.</div>
                        <div className="VIPLtreatment_content">6. Veins or vascular lesions may undergo immediate graying or blanching (turning white) or they may exhibit a slight purple or red coloring. If the treated area develops crusting or a scab, it will start to flake off in 7-14 days. The vessels will fully or partially fade in about the same amount of time. Repeat treatment to veins may be every 7-14 days, or when the skin has fully recovered. </div>
                        <div className="VIPLtreatment_content">7. Do not pick, scratch or remove any scabs. Allow them to flake off on their own. Lesions are usually healed in 7-10 days. They will continue to fade over the next 6-8 weeks after treatment. Please keep all follow up appointments and do not hesitate to call our office if you have questions or concerns.</div>
                        <div className="VIPLtreatment_content">Until the redness has completely resolved, avoid all of the following:</div>
                        <ul>
                            <li className="VIPLtreatment_content">Applying cosmetics to the treated area</li>
                            <li className="VIPLtreatment_content">Swimming, especially in pools with chemicals, such as chlorine</li>
                            <li className="VIPLtreatment_content">Ocean swimming and Hot Tubs/Jacuzzis</li>
                            <li className="VIPLtreatment_content">Excessive perspiration or irritation to the treated area</li>
                            <li className="VIPLtreatment_content">Sun exposure to the treated areas – to prevent skin color change.</li>
                        </ul>
                        <div className="VIPLtreatment_content">8. Call your physician’s office with any questions or concerns you may have after the treatment</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VIPLHandpiece;