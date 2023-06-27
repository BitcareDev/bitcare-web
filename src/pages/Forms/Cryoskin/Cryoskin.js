import React, { useRef, useState } from "react";
import './Cryoskin.css';
import SignaturePad from 'react-signature-canvas';
import jsPDF from 'jspdf';

function Cryoskin() {
    const [clientImageURL, setClientImageURL] = useState(null);
    const generatePdfRef = useRef(null);
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
            margin: [35, 20, 35, 10],
            autoPaging: 'text',
        });
    };

    //Signature
    const ClintSigPad = useRef({});

    function ClintClear() {
        ClintSigPad.current.clear();
    }
    const ClintTrim = () => {
        setClientImageURL(ClintSigPad.current.getTrimmedCanvas().toDataURL("image/png"))
    }

    return (
        <div>
            <button className="CryoskinGenerate_btn" onClick={handleGeneratePdf}>Generate PDF</button>
            <div ref={generatePdfRef}>
                <div className="Cryoskincontainer_fluid" style={{ marginTop: "20px" }}>
                    <h1 className="cryoskin_header">Cryoskin Consent Form</h1>
                    <div className="cryoskin_container">
                        <div className="cryoskin_content" style={{ margin: "10px 0px" }}>By engaging BitCare Clinic and MedSpa (for the purposes hereof referred to together herein as the "Company") to provide cryotherapy, infrared sauna and related services ("Services") and using the Company's equipment and facilities in relation thereto, I hereby acknowledge on behalf of myself, my heirs, personal representatives and/or assigns, that there are certain inherent risks and dangers associated with receiving Services and my use of the Company's equipment and facilities. At all times, I shall comply with all stated and customary terms, posted safety signs, rules, and verbal instructions given to me by staff. If in the subjective opinion of the Company's staff, I would be at physical risk in receiving Services, I understand and agree that I may be denied access to Services until I furnish the Company with an opinion letter from my medical doctor, at my sole cost and expense, specifically addressing the Company's concerns and stating that the Company's concerns are unfounded.</div>
                        <div className="cryoskin_content" style={{ margin: "10px 0px 20px 0px" }}>I hereby (1) agree to assume full responsibility for any and all injuries or damage which are sustained or aggravated by me in relation to my receiving of the Services, (2) Release, indemnify, and hold harmless the Company, its direct and indirect parent, subsidiary affiliate entities, and each of their respective officers, directors, members, employees, representatives and agents, and each of their respective successors and assigns and all others, from any and all responsibility, claims, actions, suits, procedures, costs, expenses, damages, and liabilities to the fullest extent allowed by law arising out of or in any way related to the Services, and (3) Represent that: (a) I have no medical or physical condition that would prevent me from receiving the Services, (b) I do not have a physical or mental condition that would put me in any physical or medical danger, (c) I have not been instructed by a physician to not receive Services, (d) No warranty or guarantee, or other assurance, has been made to me covering the results of the Services, (e) Knowing the risks involved I nevertheless chose to voluntarily request the Services. Not withstanding the foregoing (and by way of illustration only and not limitation) if any of the following apply to me or if I'm unsure for any reason, I here by acknowledge the Company's recommendation that I consult a medical physician before receiving Services.</div>
                        <div className="cryoskin_text">Please initial on the designated lines below:</div>
                        <div className="cryoskin_subheader">Cryoskin CryoSlimming:</div>
                        <div className="subText" >
                            <div className="cryoskin_content"><input type="checkbox" /> Severe Raynaud's Syndrome</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Severe Allergy to Cold</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Cold-related Illness (Cryoglobulinemia, Paroxysmal Cold Hemoglobinuria, Cold Agglutinin Disease)</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Progressive Diseases (MS, ALS, Parkinson's, Neuropathy)</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Active Cancer</div>
                            <div className="cryoskin_content"><input type="checkbox" /> HIV/AIDS</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Cardiovascular Disease</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Lower Limb Ischemia</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Lymphatic Disorders</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Uncontrolled Diabetes or Diabetes-related complications</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Severe Kidney or Liver Disease</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Pregnancy/Breastfeeding</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Bacterial and viral infections of the skin</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Wound healing disorders</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Circulatory disorders</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Surgery in the past 6 months</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Pacemaker/metal implants</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Active/Severe Eczema, rashes, or dermatitis</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Use of topical antibiotics in desired treatment area</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Silicone/other implants in desired treatment area</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Mesh inserts in the desired treatment area</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Irremovable body piercings in the desired treatment area</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Incision scar(s) in the desired treatment area</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Open or infected wounds</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Impaired skin sensation</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Known sensitivity or allergy to propylene glycol</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Hernia in or adjacent to desired treatment area</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Active implanted device such as pacemaker or defibrillator in or adjacent to desired treatment area</div>
                        </div>
                        <div className="cryoskin_subtext">*I have read and acknowledged the contraindications of Cryoskin Slimming.</div>
                        <div className="cryoskin_subtext" style={{ margin: "10px 0px 20px 0px" }}>Initial: <input type="text" /></div>

                        <div className="cryoskin_subheader">Cryoskin CryoToning:</div>
                        <div className="subText">
                            <div className="cryoskin_content"><input type="checkbox" /> Severe Raynaud's</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Severe Allergy to Cold</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Cold-related Illness (Cryoglobulinemia, Paroxysmal Cold Hemoglobinuria, Cold Agglutinin Disease)</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Progressive Diseases (MS, ALS, Parkinson's, Neuropathy)</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Pregnancy/Breastfeeding</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Cardiovascular Disease or Lower Limb Ischemia</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Bacterial and viral infections of the skin</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Wound healing disorders</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Circulatory disorders</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Surgery in the past 6 months</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Pacemaker/metal implants</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Active/Severe Eczema, rashes, or dermatitis</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Silicone/other implants in desired treatment area</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Use of topical antibiotics in desired treatment area</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Mesh inserts in the desired treatment area</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Irremovable body piercings in the desired treatment area</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Impaired skin sensation</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Open or infected wounds</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Known sensitivity or allergy to propylene glycol.</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Active implanted device such as pacemaker or defibrillator in or adjacent to desired treatment area</div>
                        </div>
                        <div className="cryoskin_subtext">*I have read and acknowledged the contraindications of Cryoskin Toning.</div>
                        <div className="cryoskin_subtext" style={{ margin: "10px 0px 20px 0px" }}>Initial: <input type="text" /></div>

                        <div className="cryoskin_subheader">Cryoskin CryoFacial:</div>
                        <div className="subText">
                            <div className="cryoskin_content"><input type="checkbox" /> Severe Raynaud's</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Severe Allergy to Cold</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Cold-related Illness (Cryoglobulinemia, Paroxysmal Cold Hemoglobinuria, Cold Agglutinin Disease)</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Progressive Diseases (MS, ALS, Parkinson's, Neuropathy)</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Cardiovascular Disease or Lower Limb Ischemia</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Botox in the past 30 days</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Fillers in the past 90 days.</div>
                            <div className="cryoskin_content"><input type="checkbox" /> PDO threads in the pas 90 days</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Bacterial and viral infections of the skin</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Wound healing disorders</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Circulatory disorders</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Metal implants</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Surgery in the past 6 months</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Active/Severe Eczema, rashes, or dermatitis</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Silicone/other implants in desired treatment area</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Use of topical antibiotics in desired treatment area</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Irremovable body piercings in the desired treatment area.</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Impaired skin sensation</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Open or infected wounds</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Known sensitivity or allergy to propylene glycol</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Active implanted device such as pacemaker or defibrillator in or adjacent to desired treatment area</div>
                        </div>
                        <div className="cryoskin_subtext">*I have read and acknowledged the contraindications of Cryoskin Facial.</div>
                        <div className="cryoskin_subtext" style={{ margin: "10px 0px 20px 0px" }}>Initial: <input type="text" /></div>

                        <div className="cryoskin_subheader">Electrical Muscle Stimulation (E-Stim):</div>
                        <div className="subText">
                            <div className="cryoskin_content"><input type="checkbox" /> Pregnancy/Breastfeeding</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Pacemaker</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Cancer</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Current or recent bleeding/hemorrhage</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Active Tuberculosis</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Thrombophlebitis or Thrombosis</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Open wounds</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Compromised Circulation</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Regenerating nerves</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Altered tissue sensation</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Impaired mental status</div>
                            <div className="cryoskin_content"><input type="checkbox" /> Presence of any implanted electrical devices</div>
                        </div>
                        <div className="cryoskin_subtext">*I have read and acknowledged the contraindications of Electrical Muscle Stimulation.</div>
                        <div className="cryoskin_subtext" style={{ margin: "10px 0px 20px 0px" }}>Initial: <input type="text" /></div>
                        <div className="cryoskin_content" style={{ fontWeight: "bold" }}>If you have a serious health concern not listed, please consult with your physician before receiving treatments.</div>
                        <div className="cryoskin_content" style={{ margin: "10px 0px" }}>In participating in the Services, you may be photographed, videoed or otherwise recorded by the Company for safety, monitoring and training purposes. You hereby consent to such usage of your Imagery for all and any such purpose by the Company and hereby agree that the Company without any payment to you shall in all cases be the sole owner of all intellectual and other proprietary rights therein without any restriction whatsoever.</div>
                        <div className="cryoskin_content" style={{ margin: "10px 0px" }}>Your participation in the Services will expose you to extremely cold temperatures. I have read this Assumption of Risk, Waiver, and Release, fully understand its terms, and understand that I am giving up substantial rights, including my right to sue the Company under certain circumstances. I acknowledge that am signing this waiver freely and voluntarily. The term of this waiver is indefinite. I acknowledge that have been urged to avoid bringing valuables into and onto the Company's facilities and the Company shall not be liable for the loss of, theft of, or damage to my personal property. including items left in lockers, bathrooms, or anywhere else in the Company's facilities. I acknowledge that no portion of any fees paid by me is in consideration for the safeguarding of valuables.</div>
                    </div>

                    <div className="cryoskin_data">
                        <div className="cryoskin_data1">
                            <div className="cryoskininput-group" style={{ marginTop: "10px" }}>
                                <span className="cryoskininput-group-text cryoskin-header1">*Emergency Contact Name:</span>
                                <input type="text1" className="cryoskin_input" name="name" />
                            </div>
                        </div>
                        <div className="cryoskin_data2">
                            <div className="cryoskininput-group" style={{ marginTop: "10px" }}>
                                <span className="cryoskininput-group-text cryoskin-header1">*Phone:</span>
                                <input type="number" className="cryoskin_input" name="DOB" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="cryoskin-header1">This consent authorization shall expire one year from date of service</h1>
                    </div>

                    <div className="cryoskin_Footer">
                        <div className="cryoskin_Footer1">
                            <label className="cryoskin_content1">Client Name:</label>
                        </div>
                        <div className="cryoskin_Footer2">
                            <input type="text" placeholder="Name" class="form-control cryoskin_input" />
                        </div>
                    </div>
                    <div className="cryoskin_Footer">
                        <div className="cryoskin_Footer1">
                            <label className="cryoskin_content1">Date:</label>
                        </div>
                        <div className="cryoskin_Footer2">
                            <input type="text" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control cryoskin_input" />
                        </div>
                    </div>
                    <div className="cryoskin_Footer">
                        <div className="cryoskin_Footer1">
                            <label className="cryoskin_content1">Client Signature:</label>
                        </div>
                        <div className="cryoskin_Footer2">
                            {clientImageURL !== null ? (
                                <img
                                    src={clientImageURL}
                                    alt="my signature"
                                />
                            ) : (
                                <div>
                                    <div className="bg_Cryoskin">
                                        <SignaturePad
                                            ref={ClintSigPad}
                                            penColor="black"
                                            backgroundColor='#ffffff'
                                        />
                                    </div>

                                    <div className="cryoskin_FooterBtn">
                                        <div>
                                            <button className="cryoskinclear_bttn" onClick={ClintClear}>clear</button>
                                        </div>
                                        <div>
                                            <button className="cryoskinsave_bttn" onClick={ClintTrim}>save & continue</button>
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

export default Cryoskin;