import React from "react";
import './LaserHairRemoval.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from "react";
import SignaturePad from 'react-signature-canvas';
import jsPDF from 'jspdf';

function LaserHairRemoval() {

    const checkbox = ([])

    const [isCheckedYes1, setIsCheckedYes1] = useState(false);
    const [isCheckedNo1, setIsCheckedNo1] = useState(false);
    const [isCheckedYes2, setIsCheckedYes2] = useState(false);
    const [isCheckedNo2, setIsCheckedNo2] = useState(false);
    const [isCheckedYes3, setIsCheckedYes3] = useState(false);
    const [isCheckedNo3, setIsCheckedNo3] = useState(false);
    const [isCheckedYes4, setIsCheckedYes4] = useState(false);
    const [isCheckedNo4, setIsCheckedNo4] = useState(false);
    const [isCheckedYes5, setIsCheckedYes5] = useState(false);
    const [isCheckedNo5, setIsCheckedNo5] = useState(false);
    const [isCheckedYes6, setIsCheckedYes6] = useState(false);
    const [isCheckedNo6, setIsCheckedNo6] = useState(false);
    const [isCheckedYes7, setIsCheckedYes7] = useState(false);
    const [isCheckedNo7, setIsCheckedNo7] = useState(false);
    const [isCheckedYes8, setIsCheckedYes8] = useState(false);
    const [isCheckedNo8, setIsCheckedNo8] = useState(false);
    const [isCheckedYes9, setIsCheckedYes9] = useState(false);
    const [isCheckedNo9, setIsCheckedNo9] = useState(false);
    const [isCheckedYes10, setIsCheckedYes10] = useState(false);
    const [isCheckedNo10, setIsCheckedNo10] = useState(false);
    const [isCheckedYes11, setIsCheckedYes11] = useState(false);
    const [isCheckedNo11, setIsCheckedNo11] = useState(false);
    const [isCheckedYes12, setIsCheckedYes12] = useState(false);
    const [isCheckedNo12, setIsCheckedNo12] = useState(false);

    const handleYesChange1 = (event) => {
        setIsCheckedYes1(event.target.checked);
        setIsCheckedNo1(false);
    };

    const handleNoChange1 = (event) => {
        setIsCheckedNo1(event.target.checked);
        setIsCheckedYes1(false);
    };

    const handleYesChange2 = (event) => {
        setIsCheckedYes2(event.target.checked);
        setIsCheckedNo2(false);
    };

    const handleNoChange2 = (event) => {
        setIsCheckedNo2(event.target.checked);
        setIsCheckedYes2(false);
    };

    const handleYesChange3 = (event) => {
        setIsCheckedYes3(event.target.checked);
        setIsCheckedNo3(false);
    };

    const handleNoChange3 = (event) => {
        setIsCheckedNo3(event.target.checked);
        setIsCheckedYes3(false);
    };

    const handleYesChange4 = (event) => {
        setIsCheckedYes4(event.target.checked);
        setIsCheckedNo4(false);
    };

    const handleNoChange4 = (event) => {
        setIsCheckedNo4(event.target.checked);
        setIsCheckedYes4(false);
    };

    const handleYesChange5 = (event) => {
        setIsCheckedYes5(event.target.checked);
        setIsCheckedNo5(false);
    };

    const handleNoChange5 = (event) => {
        setIsCheckedNo5(event.target.checked);
        setIsCheckedYes5(false);
    };

    const handleYesChange6 = (event) => {
        setIsCheckedYes6(event.target.checked);
        setIsCheckedNo6(false);
    };

    const handleNoChange6 = (event) => {
        setIsCheckedNo6(event.target.checked);
        setIsCheckedYes6(false);
    };

    const handleYesChange7 = (event) => {
        setIsCheckedYes7(event.target.checked);
        setIsCheckedNo7(false);
    };

    const handleNoChange7 = (event) => {
        setIsCheckedNo7(event.target.checked);
        setIsCheckedYes7(false);
    };

    const handleYesChange8 = (event) => {
        setIsCheckedYes8(event.target.checked);
        setIsCheckedNo8(false);
    };

    const handleNoChange8 = (event) => {
        setIsCheckedNo8(event.target.checked);
        setIsCheckedYes8(false);
    };

    const handleYesChange9 = (event) => {
        setIsCheckedYes9(event.target.checked);
        setIsCheckedNo9(false);
    };

    const handleNoChange9 = (event) => {
        setIsCheckedNo9(event.target.checked);
        setIsCheckedYes9(false);
    };

    const handleYesChange10 = (event) => {
        setIsCheckedYes10(event.target.checked);
        setIsCheckedNo10(false);
    };

    const handleNoChange10 = (event) => {
        setIsCheckedNo10(event.target.checked);
        setIsCheckedYes10(false);
    };

    const handleYesChange11 = (event) => {
        setIsCheckedYes11(event.target.checked);
        setIsCheckedNo11(false);
    };

    const handleNoChange11 = (event) => {
        setIsCheckedNo11(event.target.checked);
        setIsCheckedYes11(false);
    };

    const handleYesChange12 = (event) => {
        setIsCheckedYes12(event.target.checked);
        setIsCheckedNo12(false);
    };

    const handleNoChange12 = (event) => {
        setIsCheckedNo12(event.target.checked);
        setIsCheckedYes12(false);
    };

    const [clientImageURL, setClientImageURL] = useState(null);
    const [technicianImageURL, setTechnicianImageURL] = useState(null);

    // Client signature
    let ClientSigPad = useRef({});

    // Client signature clear
    function ClientClear() {
        ClientSigPad.current.clear();
    }

    // Client signature save
    const ClientTrim = () => {
        setClientImageURL(ClientSigPad.current.getTrimmedCanvas().toDataURL("image/png"))
    }

    // Technician signature
    let TechnicianSigPad = useRef({});

    // Technician signature clear
    function TechnicianClear() {
        TechnicianSigPad.current.clear();
    }

    // Technician signature save
    const TechnicianTrim = () => {
        setTechnicianImageURL(TechnicianSigPad.current.getTrimmedCanvas().toDataURL("image/png"))
    }

    const [selectedOptionQA, setSelectedOptionQA] = useState('');
    const [selectedOptionQB, setSelectedOptionQB] = useState('');
    const [selectedOptionQC, setSelectedOptionQC] = useState('');
    const [selectedOptionQD, setSelectedOptionQD] = useState('');

    const handleClickQA = (option) => {
        setSelectedOptionQA(option);
    }

    const handleClickQB = (option) => {
        setSelectedOptionQB(option);
    }

    const handleClickQC = (option) => {
        setSelectedOptionQC(option);
    }

    const handleClickQD = (option) => {
        setSelectedOptionQD(option);
    }

    const [imageURL, setImageURL] = useState(null);
    const [fitzpatrickImageURL, setFitzpatrickImageURL] = useState(null);
    var [date, setDate] = useState(new Date());
    let data = '';

    // signature
    let sigPad = useRef({});

    function clear() {
        sigPad.current.clear();
    }

    //save the signature as image
    const trim = () => {
        setImageURL(sigPad.current.getTrimmedCanvas().toDataURL("image/png"))
    }

    // Fitzpatrick Signature
    let FitzpatrickSigPad = useRef({});

    function FitzpatrickClear() {
        FitzpatrickSigPad.current.clear();
    }
    const FitzpatrickTrim = () => {
        setFitzpatrickImageURL(FitzpatrickSigPad.current.getTrimmedCanvas().toDataURL("image/png"))
    }

    const generatePdfRef = useRef(null);

    //Generate PDF
    const handleGeneratePdf = () => {
        const doc = new jsPDF("p", "mm", [1400, 1400]);

        // Adding the fonts.
        doc.setFont('Inter-Regular', 'normal');

        doc.html(generatePdfRef.current, {
            async callback(doc) {
                await doc.save('document');
            },
            margin: [20, 20, 10, 10],
            autoPaging: 'text',
        });
    };


    return (
        <div>
            <button className="LaserGenerate_btn" onClick={handleGeneratePdf}>Generate PDF</button>
            <div ref={generatePdfRef}>
                <div class="container-fluid mt-3">

                    <div className="Bitcare_image">
                        <img src="../../../assets/Bitcare2.png" alt="main" className="image_info1" />
                    </div>
                    <div>
                        <h1 className="Laser_header">LASER HAIR REMOVAL</h1>
                    </div>
                    <div>
                        <h1 className="Laser_subheader">General Information</h1>
                    </div>
                    <form>
                        <div >
                            <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                                <div style={{ display: "flex", flexDirection: "row", width: "60%" }}>
                                    <p className="FormName-header">Name</p>
                                    <input type="text1" className="FormName_input" name="name" />
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", width: "50%" }}>
                                    <p className="FormDate-header">Date of Birth</p>
                                    <input type="text1" className="FormDate_input" name="DOB" />
                                </div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                                <p className="FormName-header">Address</p>
                                <input type="text1" className="FormAddress_input" name="Address" />
                            </div>

                            <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                                <div style={{ display: "flex", flexDirection: "row", width: "50%" }}>
                                    <p className="FormName-header">City</p>
                                    <input type="text1" className="FormName_input" name="City" />
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", width: "50%" }}>
                                    <p className="FormDate-header">State</p>
                                    <input type="text1" className="FormDate_input" name="State" />
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", width: "40%" }}>
                                    <p className="FormDate-header">Zipcode</p>
                                    <input type="text1" className="FormDate_input" name="Zipcode" />
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                                <div style={{ display: "flex", flexDirection: "row", width: "50%" }}>
                                    <p className="FormPhone-header">Phone #</p>
                                    <input type="text1" className="FormName_input" name="Phone" />
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", width: "50%" }}>
                                    <p className="FormMail-header">Email</p>
                                    <input type="text1" className="FormDate_input" name="Email" />
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                                <p className="FormName-header">Occupation</p>
                                <input type="text1" className="FormAddress_input" name="Occupation" />
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                                <div style={{ display: "flex", flexDirection: "row", width: "60%" }}>
                                    <p className="FormECN-header">Emergency Contact Name</p>
                                    <input type="text1" className="FormName_input" name="Emergency Contact Name" />
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", width: "50%" }}>
                                    <p className="FormEphone-header">Phone #</p>
                                    <input type="text1" className="FormDate_input" name="Phone" />
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                                <p className="Form12-header">Would you like to be added to our email list for specials and discounts?</p>
                                <div class="facial212">
                                    <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes1} onChange={handleYesChange1} /> No  <input type="checkbox" className="laser_checkbox" checked={isCheckedNo1} onChange={handleNoChange1} /></label>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                                <p className="FormName-header">Occupation</p>
                                <input type="text1" className="FormAddress_input" name="Occupation" />
                            </div>
                        </div>
                    </form>



                    <div className="form_laser">

                        <div style={{ width: "100%" }}>
                            <div>
                                <h1 className="Skin_header">SKIN CARE HISTORY</h1>
                            </div>

                            <div>
                                <div className="LaserHair1_container">
                                    <div>
                                        <p className="Laser_content" style={{ paddingTop: "10px", marginBottom: "10px" }}>Have you had a Laser Hair Removal treatment before? </p>
                                    </div>
                                    <div style={{textAlign: "center"}}>
                                        <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes2} onChange={handleYesChange2} /> No  <input type="checkbox" checked={isCheckedNo2} onChange={handleNoChange2} /></label>
                                    </div>
                                </div>
                                <div>
                                    {/* <div style={{ display: "flex", flexDirection: "row" }}>
                                        <p className="Form0-header" style={{ marginBottom: "10px" }}>If yes, when was the last treatment?</p>
                                        <input type="text1" className="LaserSkin1_input" name="name" />
                                    </div> */}
                                    <div class="input-group mt-1 mb-1" style={{ width: "96%" }}>
                                        <span class="input-group-text facial-header">If yes, when was the last treatment?</span>
                                        <input type="text1" class="form-control Laser_input" name="name" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="LaserHair1_container">
                                <div>
                                        <p className="Laser_content" style={{ paddingTop: "10px", marginBottom: "10px" }}>If yes, did you have any negative reaction? </p>
                                    </div>
                                    <div style={{textAlign: "center"}}>
                                        <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes3} onChange={handleYesChange3} /> No  <input type="checkbox" checked={isCheckedNo3} onChange={handleNoChange3} /></label>
                                    </div>
                                </div>
                                <div>
                                    <div class="input-group mt-1 mb-1" style={{ width: "96%" }}>
                                        <span class="input-group-text facial-header">Details:</span>
                                        <input type="text1" class="form-control Laser_input" name="name" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="LaserHair1_container">
                                    <div>
                                        <p className="Laser_content" style={{ paddingTop: "10px", marginBottom: "10px" }}>Do you have a scar or tattoo on the area to be treated?  </p>
                                    </div>
                                    <div style={{textAlign: "center"}}>
                                        <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes4} onChange={handleYesChange4} /> No  <input type="checkbox" checked={isCheckedNo4} onChange={handleNoChange4} /></label> </div>
                                </div>
                                <div>
                                    <div class="input-group mt-1 mb-1" style={{ width: "96%" }}>
                                        <span class="input-group-text facial-header">Details:</span>
                                        <input type="text1" class="form-control Laser_input" name="name" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="LaserHair1_container">
                                    <div>
                                        <p className="Laser_content" style={{ paddingTop: "10px", marginBottom: "10px" }}>Have you had Botox, Restylane, Juvederm or any Collagen
                                            <br></br>injections within the last 6 months?  </p>
                                    </div>
                                    <div style={{textAlign: "center"}}>
                                        <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes5} onChange={handleYesChange5} /> No  <input type="checkbox" checked={isCheckedNo5} onChange={handleNoChange5} /></label>                        </div>
                                </div>
                            </div>

                            <div>
                                <div className="LaserHair1_container">
                                    <div>
                                        <p className="Hydra12_content" style={{ paddingTop: "10px", marginRight: 100, marginBottom: "10px" }}>Have you used any Anticoagulants, Antibiotics, Accutane, Retina<br></br> or  Photo-Sensitizing  medication  within the last 3 months?</p>
                                    </div>
                                    <div style={{textAlign: "center"}}>
                                        <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes6} onChange={handleYesChange6} /> No  <input type="checkbox" checked={isCheckedNo6} onChange={handleNoChange6} /></label>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="LaserHair1_container">
                                    <div>
                                        <p className="Laser_content" style={{ paddingTop: "10px", marginBottom: "10px" }}>Are you currently sunburned on the areas you want treated?</p>
                                    </div>
                                    <div style={{textAlign: "center"}}>
                                        <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes7} onChange={handleYesChange7} /> No  <input type="checkbox" checked={isCheckedNo7} onChange={handleNoChange7} /></label>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="LaserHair1_container">
                                    <div>
                                        <p className="Laser_content" style={{ paddingTop: "10px", marginBottom: "10px" }}>Are you currently sunburned on the areas you want treated?</p>
                                    </div>
                                    <div style={{textAlign: "center"}}>
                                        <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes8} onChange={handleYesChange8} /> No  <input type="checkbox" checked={isCheckedNo8} onChange={handleNoChange8} /></label>                        </div>
                                </div>
                            </div>

                            <div>
                                <div className="LaserHair1_container">
                                    <div>
                                        <p className="Laser_content" style={{ paddingTop: "10px", marginBottom: "10px" }}>Does your skin get easily irritated?</p>
                                    </div>
                                    <div style={{textAlign: "center"}}>
                                        <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes9} onChange={handleYesChange9} /> No  <input type="checkbox" checked={isCheckedNo9} onChange={handleNoChange9} /></label>                        </div>
                                </div>
                            </div>

                            <div>
                                <div className="LaserHair1_container">
                                    <div>
                                        <p className="Laser_content" style={{ paddingTop: "10px", marginBottom: "10px" }}>Have you recently had any cosmetic procedures?<br></br> (eg Botox,Fillers, Peels etc) </p>
                                    </div>
                                    <div style={{textAlign: "center"}}>
                                        <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes10} onChange={handleYesChange10} /> No  <input type="checkbox" checked={isCheckedNo10} onChange={handleNoChange10} /></label>
                                    </div>
                                </div>
                                <div>
                                <div class="input-group mt-1 mb-1" style={{ width: "96%" }}>
                                        <span class="input-group-text facial-header">Details:</span>
                                        <input type="text1" class="form-control Laser_input" name="name" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="Laser_content">What are your current hair removal methods?</div>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <label style={{ marginLeft: 10, color: "#353535", fontSize: 14 }}><input type="checkbox" /> Shaving</label>
                                    <label style={{ marginLeft: 50, color: "#353535", fontSize: 14 }}><input type="checkbox" /> Waxing</label>
                                    <label style={{ marginLeft: 60, color: "#353535", fontSize: 14 }}><input type="checkbox" /> Sugaring</label>
                                    <label style={{ marginLeft: 40, color: "#353535", fontSize: 14 }}><input type="checkbox" /> Creams</label>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <label style={{ marginLeft: 10, color: "#353535", fontSize: 14 }}><input type="checkbox" /> Tweezing</label>
                                    <label style={{ marginLeft: 42, color: "#353535", fontSize: 14 }}><input type="checkbox" /> Electrolysis</label>
                                    <label style={{ marginLeft: 35, color: "#353535", fontSize: 14 }}><input type="checkbox" /> Other <input className="other_input" /></label>

                                </div>
                            </div>

                            <div>
                                <div className="Laser_content">What are your current Tanning methods?</div>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <label style={{ marginLeft: 10, color: "#353535", fontSize: 14 }}><input type="checkbox" /> Sun Exposure</label>
                                    <label style={{ marginLeft: 40, color: "#353535", fontSize: 14 }}><input type="checkbox" /> Self Tanners</label>
                                    <label style={{ marginLeft: 40, color: "#353535", fontSize: 14 }}><input type="checkbox" /> Spray Tan</label>
                                    <label style={{ marginLeft: 40, color: "#353535", fontSize: 14 }}><input type="checkbox" /> Sunbed</label>
                                </div>
                            </div>


                        </div>

                        <div className="treatment_laser">
                            <div>
                                <h1 className="Skin_header">WHICH AREAS WOULD YOU LIKE TREATED?</h1>
                                <div className="LaserHair_content">Please check all that apply:</div>
                            </div>

                            <div style={{ marginLeft: 0, backgroundColor: "#1f403d", alignItems: "center", padding: "10px" }}>
                                <div style={{ paddingBottom: "5px" }}>
                                    <label style={{ color: "#fff" }}><input type="checkbox" /> Upper Lip</label>
                                </div>
                                <div style={{ paddingBottom: "5px" }}>
                                    <label style={{ color: "#fff" }}><input type="checkbox" /> Chin</label>
                                </div>
                                <div style={{ paddingBottom: "5px" }}>
                                    <label style={{ color: "#fff" }}><input type="checkbox" /> Brows</label>
                                </div>
                                <div style={{ paddingBottom: "5px" }}>
                                    <label style={{ color: "#fff" }}><input type="checkbox" /> Underarms</label>
                                </div>
                                <div style={{ paddingBottom: "5px" }}>
                                    <label style={{ color: "#fff" }}><input type="checkbox" /> Chest</label>
                                </div>
                                <div style={{ paddingBottom: "5px" }}>
                                    <label style={{ color: "#fff" }}><input type="checkbox" /> Back</label>
                                </div>
                                <div style={{ paddingBottom: "5px" }}>
                                    <label style={{ color: "#fff" }}><input type="checkbox" /> Upper Legs</label>
                                </div>
                                <div style={{ paddingBottom: "5px" }}>
                                    <label style={{ color: "#fff" }}><input type="checkbox" /> Lower Legs</label>
                                </div>
                                <div style={{ paddingBottom: "5px" }}>
                                    <label style={{ color: "#fff" }}><input type="checkbox" /> Bikini Area</label>
                                </div>
                                <div style={{ paddingBottom: "5px" }}>
                                    <label style={{ color: "#fff" }}><input type="checkbox" /> Brazilian</label>
                                </div>
                                <div style={{ paddingBottom: "5px" }}>
                                    <label style={{ color: "#fff" }}><input type="checkbox" /> Upper Arms</label>
                                </div>
                                <div style={{ paddingBottom: "5px" }}>
                                    <label style={{ color: "#fff" }}><input type="checkbox" /> Lower Arms</label>
                                </div>
                                <div style={{ paddingBottom: "5px" }}>
                                    <label style={{ color: "#fff" }}><input type="checkbox" /> Other <input type="text" className="other_input" /> </label>
                                </div>
                            </div>

                            <div style={{ marginTop: 30, backgroundColor: "#efe2ea", alignItems: "center", padding: "10px" }}>
                                <div>
                                    <div className="Skin_header1">FOR FEMALE CLIENTS</div>
                                    <div className="LaserHair_content">Are you currently</div>
                                </div>
                                <div>
                                    <label style={{ color: "#353535" }}><input type="checkbox" /> Pregnant</label>
                                </div>
                                <div>
                                    <label style={{ color: "#353535" }}><input type="checkbox" />  Breast Feeding</label>
                                </div>
                                <div>
                                    <label style={{ color: "#353535" }}><input type="checkbox" /> Menstruating</label>
                                </div>
                            </div>
                        </div>

                    </div>



                    <div>
                        <h1 className="Medical_header">Medical History</h1>
                        <div className="Medical_content">Please check all that apply:</div>
                    </div>

                    <div className="facial">
                        <div className="LaserHair_container">
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> ALS (AmyotropicLateral Sclerosis)</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Dislocations</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Hormone Therapy</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Menopause</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Seborrhea</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Anticoagulants</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Easy Bruising</label>  <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Hyper pigmentation</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Multiple Sclerosis</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Skin Cancer</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Arthritis</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Epilepsy</label><br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Hypertension</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Muscle Cramps</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Skin Conditions/Disorders</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Autoimmune Disease</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Fever</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Hypopigmentation</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Organ Failure</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Skin Pigmentation</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Birth Control Pill</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Fungal Condition</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Hysterectomy</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Pacemaker</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Stress</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Bleeding Disorder</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Headaches/Migraines</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Infection</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Phlebitis</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Thyroid Disease</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Cancer</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Heart/Liver/Kidney Disease</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Inflammation</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Plastic/Bone/ Cement/Implants</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Transdermal Drug Delivery System</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Cardiac/Vascular Issues</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Hemophilliac</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Insulin Monitor</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Polycystic Ovaries</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Tranplant</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Cardiopathy</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Hepatitis</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Joint/Muscle Pain</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Pre-Cancerous Lesions</label><br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Unhealed Wounds</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Celiac</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> High Blood Pressure</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Keloid Scarring</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Psoriasis</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Varicose Veins</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Dermatitis</label><br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Hirsutism</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Loss of Sensation</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Rashes</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Warts</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Diabetes</label><br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> HIV</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Low Blood Pressure</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Recent Surgical Incision</label> <br></br>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Other</label>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Digestive Issues</label>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Hives/Herpes/Shingles</label>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Lupus</label>
                            </div>
                            <div className="medicalcheckbox">
                                <label className="fonts"><input type="checkbox" /> Rheumatoid Arthritis</label>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: "100%", marginTop: 15 }}>
                        <div>
                            <div class="input-group mt-1 mb-1">
                                <span class="input-group-text facial-header">Details for any of the above</span>
                                <input type="text1" class="form-control Laser_input" name="name" />
                            </div>
                        </div>
                        <div>
                            <div className="LaserHair1_container">
                                <div>
                                    <p className="Laser_content" style={{ paddingTop: "10px" }}>Are you currently taking any medications, including oral, topical or transdermal? </p>
                                </div>
                                <div style={{textAlign: "center"}}>
                                    <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes11} onChange={handleYesChange11} /> No  <input type="checkbox" checked={isCheckedNo11} onChange={handleNoChange11} /></label>
                                </div>
                            </div>
                            <div>
                                <div class="input-group mt-1 mb-1">
                                    <span class="input-group-text facial-header">Details:</span>
                                    <input type="text1" class="form-control Laser_input" name="name" />
                                </div>
                            </div>
                            <div style={{ marginBottom: 10 }}>
                                <p className="LaserSkin-header">Are you allergic to any of the following?</p>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <label style={{ marginLeft: 40, color: "#353535", fontSize: 14 }}><input type="checkbox" /> Lidocaine</label>
                                    <label style={{ marginLeft: 40, color: "#353535", fontSize: 14 }}><input type="checkbox" /> Latex</label>
                                    <label style={{ marginLeft: 40, color: "#353535", fontSize: 14 }}><input type="checkbox" /> Foods</label>
                                    <label style={{ marginLeft: 40, color: "#353535", fontSize: 14 }}><input type="checkbox" /> Lotions</label>
                                    <label style={{ marginLeft: 40, color: "#353535", fontSize: 14 }}><input type="checkbox" /> Other <input className="other_input" /></label>
                                </div>
                            </div>
                            <div className="LaserHair1_container">
                                <div class="facial1">
                                    <p className="Laser_content" style={{ paddingTop: "10px" }}>Would you like to be added to our email list for future specials and discounts? </p>
                                </div>
                                <div style={{textAlign: "center"}}>
                                    <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes12} onChange={handleYesChange12} /> No  <input type="checkbox" checked={isCheckedNo12} onChange={handleNoChange12} /></label>                        </div>
                            </div>
                            <div>
                                <div class="input-group mt-1 mb-1">
                                    <span class="input-group-text facial-header">How did you hear about "BUSINESS NAME"?</span>
                                    <input type="text1" class="form-control Laser_input" name="name" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="Laser_subheader1">
                        <h2 className="subheader3">This form is completely confidential. By signing below, I agree to the following:<br></br>
                            The information I have provided regarding my Medical History is accurate to the best of my knowledge.<br></br>
                            I understand the information given pertaining to the requested treatment/s and confirm that I do not have any
                            condition/s that would make the treatment/s unsuitable.<br></br>
                            I agree to inform my Technician if I experience any discomfort during the procedure, so they may adjust accordingly.<br></br>
                            I agree to waive all liability towards my Technician and "BUSINESS NAME" for any injury or damages incurred due to my
                            failure to disclose any existing or past health conditions.
                        </h2>
                    </div>

                    <div class="row mt-3">
                        <div class="col-sm-3">
                            <label className="Laser_content1">Date:</label>
                        </div>
                        <div class="col-sm-8">
                            <input type="text1" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control Laser_input" />
                        </div>
                    </div>

                    <div class="row mt-3 mb-5">
                        <div class="col-sm-3">
                            <label className="Laser_content1">Client Signature:</label>
                        </div>
                        <div class="col-sm-8">
                            {clientImageURL !== null ? (
                                <img
                                    src={clientImageURL}
                                    alt="my signature"
                                    width="100%"
                                />
                            ) : (
                                <div>
                                    <div className="bg_Laser">
                                        <SignaturePad
                                            ref={ClientSigPad}
                                            penColor="black"
                                            backgroundColor='#ffffff'
                                        />
                                    </div>

                                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                                        <div class="col">
                                            <input type="submit" id="clear_bttn" onClick={ClientClear} value="clear" />
                                        </div>
                                        <div class="col">
                                            <input type="submit" id="save_bttn" value="save & continue" onClick={ClientTrim} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div style={{marginTop: "100px"}}>
                    <div class="row" style={{ marginTop: "45px" }}>
                        <div class="col-sm-3">
                            <label className="Laser_content1">Technician Signature:</label>
                        </div>
                        <div class="col-sm-8">
                            {technicianImageURL !== null ? (
                                <img
                                    src={technicianImageURL}
                                    alt="my signature"
                                    width="100%"
                                />
                            ) : (
                                <div>
                                    <div className="bg_Laser">
                                        <SignaturePad
                                            ref={TechnicianSigPad}
                                            penColor="black"
                                            backgroundColor='#ffffff'
                                        />
                                    </div>

                                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                                        <div class="col">
                                            <input type="submit" id="clear_bttn" onClick={TechnicianClear} value="clear" />
                                        </div>
                                        <div class="col">
                                            <input type="submit" id="save_bttn" value="save & continue" onClick={TechnicianTrim} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <h1 class="Laser_header mt-5">CLIENT CONSENT FORM</h1>
                        <h1 class="Laser_header1">LASER HAIR REMOVAL</h1>
                    </div>
                    <div className="Laser_container">
                        <div class="Laser_content">Laser hair removal involves the use of a non-invasive laser device which targets hair follicles to reduce/remove facial and body hair. This treatment works on hairs that are in the active stage of growth and so, it does not work on dormant hairs. Several sessions are usually required and a hair removal session may vary, depending on the individual's amount of hair, density or color. Laser hair removal is not completely permanent and revisits may be needed for maintenance.</div>
                        <div class="Laser_content mt-2 mb-2">Please read and initial the following statements:</div>
                        <li class="Laser_content mb-2">I voluntarily elect to undergo this treatment, having had the nature and purpose of Laser Hair Removal, along with the risks and hazards involved, fully explained to me by "BUSINESS NAME".</li>
                        <li class="Laser_content mt-2 mb-2">I have been advised that Laser Hair Removal treatment can have certain side effects which may include, but is not limited to burning, blistering, flaking of the skin or swelling on the surface of the treated skin areas. I understand that in these cases, it is recommended that the area should heal first prior to undergoing another treatment.</li>
                        <li class="Laser_content mt-2 mb-2">I understand I may experience discomfort during the treatment and that this is a normal occurrence.</li>
                        <li class="Laser_content mt-2 mb-2">I understand there is the possibility of darkening or lightening of the skin during the healing process. I have been advised that this is usually temporary but on rare occasions, it can be permanent.</li>
                        <li class="Laser_content mt-2 mb-2">Because exposure to the eye with lasers can lead to temporary or permanent eye damage, I agree to wear the provided eye protection during the treatment period and will not remove it unless allowed by the Technician.</li>
                        <li class="Laser_content mt-2 mb-2">I have read and understood the post-treatment home care instructions and understand how important it is to follow all instructions given to me for post-treatment care. In the event I may have additional questions or concerns regarding my treatment or post-treatment care, I will consult "BUSINESS NAME immediately.</li>
                        <li class="Laser_content mt-2 mb-2">I have been advised that although rare, scarring may occur if the post treatment care instructions are not complied with.</li>
                        <li class="Laser_content mt-2 mb-2">I understand that I will need to undergo several treatments in order to obtain my desired results, as advised by my Esthetician.</li>
                        <li class="Laser_content mt-2 mb-2">I confirm I have not had any waxing treatments to the area/s to be treated within the last 7 days.</li>
                        <li class="Laser_content mt-2 mb-2">I agree to not have any prolonged sun exposure or any form of tanning (including self-tanners, spray tans, and tanning beds) for two weeks before and two weeks after each of my scheduled appointments. I understand that failure to avoid sun exposure or tanning can result in adverse reactions, such as hyper/hypopigmentation and/or burning of the exposed areas.</li>
                        <li class="Laser_content mt-2 mb-2">The following conditions are recognized as contraindications for Laser Hair Removal treatment and must be disclosed prior to treatment:
                            <ul>
                                <li className="Laser_content">Pregnancy/Breastfeeding</li>
                                <li className="Laser_content">Photo-sensitivity disorders</li>
                                <li className="Laser_content">Active Herpes</li>
                                <li className="Laser_content">Active Shingles</li>
                                <li className="Laser_content">Bacterial infections</li>
                                <li className="Laser_content">Use of antibiotics in the last 10 days</li>
                                <li className="Laser_content">Use of photo/sun sensitivity medication in the last 10 days</li>
                                <li className="Laser_content">Recent use of Anticoagulants</li>
                                <li className="Laser_content">Sunburn</li>
                                <li className="Laser_content">Keloid scarring</li>
                                <li className="Laser_content">Psoriasis</li>
                                <li className="Laser_content">Bleeding disorders</li>
                                <li className="Laser_content">Severe reactions to Histamines</li>
                                <li className="Laser_content">Any recent chemical peal/laser resurfacing procedure</li>
                                <li className="Laser_content">Vitiligo</li>
                                <li className="Laser_content">Open wounds/lesions</li>
                                <li className="Laser_content">Epilepsy</li>
                                <li className="Laser_content">Use of Accutane in the past 6 months</li>
                                <li className="Laser_content">Recent use of retinols, glycolic acids, alpha hydroxy acids (within the last 7 days)</li>
                                <li className="Laser_content"> Waxing of the area to be treated within the past 7 days</li>
                            </ul>
                        </li>
                        <li class="Laser_content mt-2 mb-2">I confirm that I am not currently under the influence of any alcohol or drugs.</li>
                        <li class="Laser_content mt-2 mb-2">I understand that a topical numbing product may be applied prior to Laser Hair Removal, to minimize any discomfort during treatment.</li>
                        <li class="Laser_content mt-2 mb-3">The information I have provided about my medical history is accurate to the best of my knowledge, including all known allergies and/or prescription drugs/products I am currently ingesting or using topically.</li>
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
                            {imageURL !== null ? (
                                <img
                                    src={imageURL}
                                    alt="my signature"
                                    width="100%"
                                />
                            ) : (
                                <div>
                                    <div className="bg_Laser">
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
                        <h1 class="fitzpatrick_header mt-5">FITZPATRICK SKIN TYPE SCALE</h1>
                    </div>
                    <div className="fitzpatrick_container">
                        <div className="fitzpatrick_content">This information will help your Esthetician to evaluate your skin type for a more effective laser
                            treatment. Skin type is determined by the color of your eyes, hair, skin and your skin's reaction to sun
                            exposure. Tanning by sun exposure, tanning booths or tanning lotions, can have a major impact on your
                            skin.</div>
                    </div>
                    <div>
                        <div class="content5 mb-3">Please circle which Skin Type applies to you the most</div>
                        <table class=" table1 mb-4">
                            <thead>
                                <tr className="tr1">
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
                                <tr className="tr1">
                                    <td className="fitzpatrick" id="td1">What is the color of your eyes?</td>
                                    <td id="td1" onClick={() => handleClickQA('Option 1')} className={selectedOptionQA === 'Option 1' ? "data1" : "data2"}>Light blue, green or grey</td>
                                    <td id="td1" onClick={() => handleClickQA('Option 2')} className={selectedOptionQA === 'Option 2' ? "data1" : "data2"}>Blue, Grey, Green or Brown</td>
                                    <td id="td1" onClick={() => handleClickQA('Option 3')} className={selectedOptionQA === 'Option 3' ? "data1" : "data2"}>Blue, Brown or Green</td>
                                    <td id="td1" onClick={() => handleClickQA('Option 4')} className={selectedOptionQA === 'Option 4' ? "data1" : "data2"}>Dark Brown</td>
                                    <td id="td1" onClick={() => handleClickQA('Option 5')} className={selectedOptionQA === 'Option 5' ? "data1" : "data2"}>Brownish Black</td>
                                    <td id="td1" onClick={() => handleClickQA('Option 6')} className={selectedOptionQA === 'Option 6' ? "data1" : "data2"}>Black</td>
                                </tr>
                                <tr className="tr1">
                                    <td id="td1" className="fitzpatrick">What is the natural color of your hair?</td>
                                    <td id="td1" onClick={() => handleClickQB('Option 1')} className={selectedOptionQB === 'Option 1' ? "data1" : "data2"}>Red or Blonde</td>
                                    <td id="td1" onClick={() => handleClickQB('Option 2')} className={selectedOptionQB === 'Option 2' ? "data1" : "data2"}>Blonde to Light Brown</td>
                                    <td id="td1" onClick={() => handleClickQB('Option 3')} className={selectedOptionQB === 'Option 3' ? "data1" : "data2"}>Chestnut or Dark Blonde to Brown</td>
                                    <td id="td1" onClick={() => handleClickQB('Option 4')} className={selectedOptionQB === 'Option 4' ? "data1" : "data2"}>Dark Brown</td>
                                    <td id="td1" onClick={() => handleClickQB('Option 5')} className={selectedOptionQB === 'Option 5' ? "data1" : "data2"}>Dark Brown to Black</td>
                                    <td id="td1" onClick={() => handleClickQB('Option 6')} className={selectedOptionQB === 'Option 6' ? "data1" : "data2"}>Black</td>
                                </tr>
                                <tr className="tr1">
                                    <td id="td1" className="fitzpatrick">What is your skin color?</td>
                                    <td id="td1" onClick={() => handleClickQC('Option 1')} className={selectedOptionQC === 'Option 1' ? "data1" : "data2"}>Pale to very fair, possibly freckled</td>
                                    <td id="td1" onClick={() => handleClickQC('Option 2')} className={selectedOptionQC === 'Option 2' ? "data1" : "data2"}>Very Fair</td>
                                    <td id="td1" onClick={() => handleClickQC('Option 3')} className={selectedOptionQC === 'Option 3' ? "data1" : "data2"}>Pale with Beige Tint</td>
                                    <td id="td1" onClick={() => handleClickQC('Option 4')} className={selectedOptionQC === 'Option 4' ? "data1" : "data2"}>Olive Tone</td>
                                    <td id="td1" onClick={() => handleClickQC('Option 5')} className={selectedOptionQC === 'Option 5' ? "data1" : "data2"}>Dark Brown</td>
                                    <td id="td1" onClick={() => handleClickQC('Option 6')} className={selectedOptionQC === 'Option 6' ? "data1" : "data2"}>Very Dark</td>
                                </tr>
                                <tr className="tr1">
                                    <td id="td1" className="fitzpatrick">Your skin's reaction to prolonged sun exposure?</td>
                                    <td id="td1" onClick={() => handleClickQD('Option 1')} className={selectedOptionQD === 'Option 1' ? "data1" : "data2"}>Always burns and never tans</td>
                                    <td id="td1" onClick={() => handleClickQD('Option 2')} className={selectedOptionQD === 'Option 2' ? "data1" : "data2"}>Burns easily and rarely tans</td>
                                    <td id="td1" onClick={() => handleClickQD('Option 3')} className={selectedOptionQD === 'Option 3' ? "data1" : "data2"}>Burns sometimes and tans gradually</td>
                                    <td id="td1" onClick={() => handleClickQD('Option 4')} className={selectedOptionQD === 'Option 4' ? "data1" : "data2"}>Rarely burns and tans easily</td>
                                    <td id="td1" onClick={() => handleClickQD('Option 5')} className={selectedOptionQD === 'Option 5' ? "data1" : "data2"}>Rarely burns and skin darkens</td>
                                    <td id="td1" onClick={() => handleClickQD('Option 6')} className={selectedOptionQD === 'Option 6' ? "data1" : "data2"}>Never burns</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="fitzpatrick_subcontent">
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
                                    {fitzpatrickImageURL !== null ? (
                                        <img
                                            src={fitzpatrickImageURL}
                                            alt="my signature"
                                            width="100%"
                                        />
                                    ) : (
                                        <div>
                                            <div className="bg_Laser">
                                                <SignaturePad
                                                    ref={FitzpatrickSigPad}
                                                    penColor="black"
                                                    backgroundColor='#ffffff'
                                                />
                                            </div>

                                            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                                                <div class="col">
                                                    <input type="submit" id="clear_bttn" onClick={FitzpatrickClear} value="clear" />
                                                </div>
                                                <div class="col">
                                                    <input type="submit" id="save_bttn" value="save & continue" onClick={FitzpatrickTrim} />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LaserHairRemoval;