import React from "react";
import './HydraFacialPage1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from "react";
import SignaturePad from 'react-signature-canvas';

function HydraFacial() {
    const [qtn, setQtn] = useState("");
    const [qtn1, setQtn1] = useState("");
    const [qtn2, setQtn2] = useState("");
    const [qtn3, setQtn3] = useState("");
    const [qtn4, setQtn4] = useState("");
    const [qtn5, setQtn5] = useState("");
    var [date, setDate] = useState(new Date());
    let sigPad = useRef({});
    let data = '';

    function clear() {
        sigPad.current.clear();
    }
    return (
        <div>
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
                        <div className="bg_hydrafacial">
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
    );
}

export default HydraFacial;