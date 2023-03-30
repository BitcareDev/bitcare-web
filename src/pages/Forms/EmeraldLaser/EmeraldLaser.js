import React, { useState, useRef } from "react";
import './EmeraldLaser.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignaturePad from 'react-signature-canvas';
import jsPDF from 'jspdf';

function EmeraldPage1() {
    const [imageURL, setImageURL] = useState(null);
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
            margin: [40, 20, 75, 10],
            autoPaging: 'text',
        });
    };

    var [date, setDate] = useState(new Date());
    let sigPad = useRef({});
    let data = '';

    function clear() {
        sigPad.current.clear();
    }

    //save the signature as image
    const trim = () => {
        setImageURL(sigPad.current.getTrimmedCanvas().toDataURL("image/png"))
    }
    return (
        <div>
        <button className="EmeraldGenerate_btn" onClick={handleGeneratePdf}>Generate PDF</button>
        <div ref={generatePdfRef}>
        <div class="container-fluid mt-3">
            <div className="Bitcare_img">
                <img src="../../../assets/Bitcare2.png" alt="main" className="image_info2" />
            </div>
            <div>
                <h1 class="Emerald_header">Emerald Laser FAQ</h1>
            </div>
            <div className="Emerald_container">
                <div class="Emerald_content">Q: What is the Emerald Laser?</div>
                <div class="Emerald_content mb-3">A: The Emerald Laser is a non-invasive, FDA-approved treatment for reducing fat in specific areas of the
                    body, such as the stomach, thighs, and arms. The treatment uses laser energy to destroy fat cells, which
                    are then eliminated by the body's natural processes.</div>

                <div class="Emerald_content">Q: How does the treatment work?</div>
                <div class="Emerald_content mb-3">A: During treatment, the laser applicator is placed on the targeted area of the body. The laser energy
                    penetrates the skin and destroys the fat cells, while leaving the surrounding tissue unharmed. The
                    destroyed fat cells are then eliminated by the body's lymphatic system.</div>

                <div class="Emerald_content">Q: Is the treatment painful?</div>
                <div class="Emerald_content mb-3">A: Most patients report little to no discomfort during the treatment. The laser applicator has a cooling
                    system to keep the skin comfortable during the procedure.</div>

                <div class="Emerald_content">Q: How many treatments are needed?</div>
                <div class="Emerald_content mb-3">A: The number of treatments required will vary depending on the individual and the area being treated.
                    Typically, patients will see optimal results after a series of treatments.</div>

                <div class="Emerald_content">Q: Are there any side effects?</div>
                <div class="Emerald_content mb-3">A: The treatment is generally well-tolerated and has minimal side effects. Some patients may experience
                    redness or swelling in the treated area, but these side effects typically resolve quickly.</div>

                <div class="Emerald_content">Q: Who is a good candidate for the treatment?</div>
                <div class="Emerald_content mb-3">A: The treatment is safe for most healthy adults who are looking to reduce fat in specific areas of the
                    body. It is important to have a consultation with a medical professional to determine if the treatment is
                    right for you.</div>

                <div class="Emerald_content">Q: What kind of results can I expect?</div>
                <div class="Emerald_content mb-3">A: Most patients will see a reduction in fat in the treated area after a series of treatments. The results of
                    the treatment are permanent, but it is important to maintain a healthy lifestyle to prevent the
                    reaccumulation of fat.</div>

                <div class="Emerald_content">Q: How soon can I return to my normal activities after the treatment?</div>
                <div class="Emerald_content mb-3">A: There is no downtime associated with the treatment, so patients can return to their normal activities
                    immediately after the procedure.</div>
            </div>

            <div class="Emerald_subheader mb-3">Menstrual and Pregnancy</div>

            <div className="Emerald_container">
                <div class="Emerald_content">Q: Can I undergo the Emerald Laser treatment during my menstrual cycle?</div>
                <div class="Emerald_content mb-3">A: It is recommended to avoid the treatment during your menstrual cycle as it may cause
                    discomfort. It is best to schedule the treatment at least a week before or after your menstrual
                    cycle.</div>

                <div class="Emerald_content">Q: Can I undergo the Emerald Laser treatment while pregnant or breastfeeding?</div>
                <div class="Emerald_content mb-3">A: It is not recommended to undergo any treatment while pregnant or breastfeeding. It is best to
                    wait until after you have finished breastfeeding before considering the treatment.</div>

                <div class="Emerald_content">Q: Can the Emerald Laser treatment affect my fertility?</div>
                <div class="Emerald_content mb-3">A: There is no evidence that the treatment affects fertility. However, it is recommended to consult
                    with your doctor before undergoing any treatment if you are trying to conceive.</div>

                <div class="Emerald_content">Q: Can the Emerald Laser treatment affect my menstrual cycle?</div>
                <div class="Emerald_content mb-3">A: The treatment should not affect your menstrual cycle, however, it is always best to consult
                    with your doctor before undergoing any treatment if you have concerns about your menstrual
                    cycle.</div>
            </div>

            <div class="Emerald_subheader mb-3">Frequency and Areas of Treatment</div>

            <div className="Emerald_container">
                <div class="Emerald_content">Q: How often can I undergo the Emerald Laser treatment?</div>
                <div class="Emerald_content mb-3">A: The treatment can be repeated up to twice per week, depending on the individual needs,
                    goals, and the areas being treated.</div>

                <div class="Emerald_content">Q: Is there a limit to the number of areas of the body that can be treated with the Emerald Laser?</div>
                <div class="Emerald_content mb-3">A: There is no limit to the number of areas that can be treated, but it is important to consult with
                    a medical professional to determine the appropriate treatment plan for you. They will help you
                    choose the specific areas to be treated based on your individual needs and goals.</div>

                <div class="Emerald_content">Q: How many areas can be treated during one session?</div>
                <div class="Emerald_content mb-3">A: This will depend on the area being treated and the size of the area. A professional will be able
                    to advise you on how many areas can be treated per session during the consultation.</div>
            </div>

            <div>
                <h1 class="Emerald_header">Emerald Laser Treatment</h1>
            </div>
            <div class="Emerald_subheader mt-3" style={{ fontWeight: "600" }}>Consent and Consultation</div>
            <div className="Emerald_container">
                <div class="Emerald_content">I understand that the Emerald Laser treatment is a non-invasive, FDA-approved procedure used to
                    reduce fat in specific areas of the body. I understand that the procedure involves the use of laser
                    energy to emulsify fatty tissue, which is then eliminated by the body's lymphatic system.</div>
                <li class="Emerald_content mt-3">I understand that the number of treatments required will vary depending on the individual and the
                    area being treated. I understand that the treatment may cause some discomfort, but it is generally
                    well-tolerated and has minimal side effects.</li>

                <li class="Emerald_content mt-3">I understand that it is recommended to avoid the treatment during my menstrual cycle, while
                    pregnant or breastfeeding. I understand that the treatment should not affect my fertility or
                    menstrual cycle.</li>

                <li class="Emerald_content mt-3">I understand that the treatment is safe for most healthy adults who are looking to reduce fat in
                    specific areas of the body. I understand that it is important to maintain a healthy lifestyle to prevent
                    the reaccumulation of fat.</li>

                <li class="Emerald_content mt-3">I understand that the results of the treatment are permanent, but it is important to maintain a
                    healthy lifestyle to prevent the reaccumulation of fat.</li>

                <li class="Emerald_content mt-3">I understand that there is no downtime associated with the treatment and I can return to my
                    normal activities immediately after the procedure.</li>

                <li class="Emerald_content mt-3">I understand that there is a risk of complications associated with any medical procedure, including
                    the Emerald Laser treatment. I understand that any potential risks will be discussed with me in
                    detail before the procedure.</li>

                <li class="Emerald_content mt-3">I have read, understand, and agree to the terms of this consent form. I have received a copy of this
                    form for my records.</li>
            </div>

            <div class="row mt-4">
                <div class="col-sm-3">
                    <label className="EmeraldLaser_content">Name:</label>
                </div>
                <div class="col-sm-8">
                    <input type="text1" placeholder="Name" class="form-control Emerald_input" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-3">
                    <label className="EmeraldLaser_content">Date:</label>
                </div>
                <div class="col-sm-8">
                    <input type="text1" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control Emerald_input" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-3">
                    <label className="EmeraldLaser_content">Signature:</label>
                </div>
                <div class="col-sm-8">
                {imageURL !== null ? (
                                    <img
                                        src={imageURL}
                                        alt="my signature"
                                    />
                                ) : (
                                    <div>
                                        <div className="bg_Emerald">
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

            <div class="Emerald_subheader mt-3 mb-2" style={{ fontWeight: "600" }}>Consultation Questions</div>
            <div className="Emerald_container">
                <div class="Emerald_content mb-2">1. What are your goals for the treatment?</div>
                <input type="text1" class="form-control Emerald_input" name="name" />
                <div class="Emerald_content mb-2">2. What areas of your body are you looking to treat?</div>
                <input type="text1" class="form-control Emerald_input" name="name" />
                <div class="Emerald_content mb-2">3. Have you undergone any similar treatments in the past?</div>
                <input type="text1" class="form-control Emerald_input" name="name" />
                <div class="Emerald_content mb-2">4. Are you currently pregnant or breastfeeding?</div>
                <input type="text1" class="form-control Emerald_input" name="name" />
                <div class="Emerald_content">5. Do you have any medical conditions or medications that we should be aware of?</div>
                <input type="text1" class="form-control Emerald_input" name="name" />
                <div class="Emerald_content mb-2">6. Are you currently experiencing any discomfort or pain in the area you want to treat?</div>
                <input type="text1" class="form-control Emerald_input" name="name" />
                <div class="Emerald_content mb-2">7. Have you had any recent surgeries or injuries in the area you want to treat?</div>
                <input type="text1" class="form-control Emerald_input" name="name" />
                <div class="Emerald_content mb-2">8. Are you experiencing any hormonal changes or menstrual cycle?</div>
                <input type="text1" class="form-control Emerald_input" name="name" />
                <div class="Emerald_content mb-2">9. Are you willing to maintain a healthy diet and exercise regimen to maintain the results of the treatment??</div>
                <input type="text1" class="form-control Emerald_input" name="name" />
                <div class="Emerald_content mb-2">10. Are you aware of the potential risks and benefits of the treatment?</div>
                <input type="text1" class="form-control Emerald_input" name="name" />
            </div>
    
        </div>
        </div>
        </div>
    );
}

export default EmeraldPage1;