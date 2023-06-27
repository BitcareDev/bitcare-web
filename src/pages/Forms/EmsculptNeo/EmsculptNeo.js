import React, { useState, useRef } from "react";
import './EmsculptNeo.css';
import SignaturePad from 'react-signature-canvas';
import jsPDF from 'jspdf';

function EmscluptPage1() {
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
            margin: [40, 20, 40, 10],
            autoPaging: 'text',
        });
    };

    const date = new Date();

    //Signature ref
    const sigPad = useRef({});

    //clear the signature
    function clear() {
        sigPad.current.clear();
    }

    //save the signature as image
    const trim = () => {
        setImageURL(sigPad.current.getTrimmedCanvas().toDataURL("image/png"))
    }
    return (
        <div>
            <button className="EmsculptGenerate_btn" onClick={handleGeneratePdf}>Generate PDF</button>
            <div ref={generatePdfRef}>
                <div className="Emsculptcontainer_fluid">
                    <div>
                        <h1 className="Emsclupt_header">Emsculpt Neo Consent Form</h1>
                        <h1 className="Emsclupt_header">Neo EmSculpt FAQ</h1>
                    </div>
                    <div className="Emsculpt_container">
                        <div className="Emsculpt_contentq">What is Neo EmSculpt?</div>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>It is a non-invasive body contouring treatment that uses high-intensity focused electromagnetic
                            (HIFEM) energy to stimulate muscle contractions and build muscle mass.</div>

                        <div className="Emsculpt_contentq">How does it work?</div>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>The treatment uses a device that emits HIFEM energy to contract the muscle tissue. The
                            contractions are similar to those experienced during a workout, but are much more intense and
                            targeted.</div>

                        <div className="Emsculpt_contentq">What areas of the body can be treated?</div>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>The treatment is primarily used for the abdomen and buttocks, but it can also be used on the
                            arms, legs and calves.</div>

                        <div className="Emsculpt_contentq">How many treatments are needed?</div>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>The number of treatments needed varies depending on the individual and their goals, but most
                            people will typically receive 4-6 treatments over a 2-week period.</div>

                        <div className="Emsculpt_contentq">Is there any downtime?</div>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>No, there is no downtime associated with Neo EmSculpt. You can return to normal activities
                            immediately after the treatment.</div>

                        <div className="Emsculpt_contentq">Are there any side effects?</div>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>Some people may experience mild soreness or discomfort after treatment, but this usually
                            subsides quickly.</div>

                        <div className="Emsculpt_contentq">Who is not a candidate for the treatment?</div>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>Neo EmSculpt is not recommended for pregnant or breastfeeding women, people with
                            pacemakers, or people with metal implants in the treatment area.</div>

                        <div className="Emsculpt_contentq">How long does the result last?</div>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>The results of Neo EmSculpt are typically long-lasting, but maintenance treatments may be
                            needed to maintain the results.</div>

                        <div className="Emsculpt_contentq">How much does it cost?</div>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>The cost of Neo EmSculpt can vary depending on the number of treatments and the number of
                            areas needs to be treated. It's best to schedule a free consultation with one of our licensed or
                            certified providers.</div>
                    </div>
                    <div className="Emsculpt_subheader" style={{ marginBottom: "20px" }}>Women's Menstrual or Pregnancy</div>

                    <div className="Emsculpt_container">
                        <div className="Emsculpt_contentq">Can women who are on their menstrual cycle receive Neo EmSculpt treatment?</div>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>It is not recommended to receive the treatment during your menstrual cycle, as the muscle
                            contractions during the treatment can cause discomfort. It's best to schedule the treatment at a
                            different time in your menstrual cycle.</div>

                        <div className="Emsculpt_contentq">Can pregnant women receive Neo EmSculpt treatment?</div>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>No, Neo EmSculpt is not recommended for pregnant women as it has not been studied in this
                            population and it may be harmful to the fetus.</div>

                        <div className="Emsculpt_contentq">Can women who are trying to conceive receive Neo EmSculpt treatment?</div>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>It is not recommended to receive Neo EmSculpt treatment while trying to conceive, as it's not
                            known whether the treatment could affect fertility.</div>

                        <div className="Emsculpt_contentq">Can breastfeeding women receive Neo EmSculpt treatment?</div>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>Neo EmSculpt is not recommended for breastfeeding women as it has not been studied in this
                            population.</div>

                        <div className="Emsculpt_contentq">Should women who are planning to get pregnant in the near future avoid Neo EmSculpt treatment?</div>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>If you are planning to get pregnant in the near future, it is best to consult with your doctor before
                            receiving Neo EmSculpt treatment, as it's not known how the treatment may affect pregnancy.</div>
                    </div>
                    <div className="Emsculpt_subheader" style={{ marginBottom: "20px" }}>Frequency of Procedure and Body Areas Treated</div>

                    <div className="Emsculpt_container">
                        <div className="Emsculpt_contentq">How often can I receive Neo EmSculpt treatment?</div>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>The frequency of treatment will vary depending on the individual and their goals, but most
                            people will typically receive 4-6 treatments over a 2-week period. However, it's best to consult
                            with one of our providers for a personalized treatment plan.</div>

                        <div className="Emsculpt_contentq">Is there a limit to the number of areas of the body that can be treated with Neo EmSculpt?</div>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>The treatment can be used on multiple areas of the body, such as the abdomen, buttocks, arms,
                            legs, and calves. It's best to consult with our provider to determine the best treatment plan for
                            your individual needs.</div>

                        <div className="Emsculpt_contentq">How long does the treatment take?</div>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>Each treatment session typically takes about 30 minutes.</div>

                        <div className="Emsculpt_contentq">How soon will I see the results?</div>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>Some people may see results after a single treatment, but most will see results after a series of
                            treatments. The final results may take several weeks or months to fully develop.</div>

                        <div className="Emsculpt_contentq">How long will the results last?</div>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>The results of Neo EmSculpt are typically long-lasting, but maintenance treatments may be
                            needed to maintain the results.</div>

                        <div className="Emsculpt_contentq">Is it a permanent solution?</div>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>Neo EmSculpt is not a permanent solution. It is a non-invasive muscle-building treatment that
                            provides results that can last for a long time. However, to maintain the results, regular
                            maintenance sessions may be needed.</div>
                    </div>

                    <div>
                        <h1 className="Emsclupt_header">EMSCULPT NEO TREATMENT</h1>
                    </div>
                    <div className="Emsculpt_subheader" style={{ marginTop: "20px" }}>Consent and Consultation</div>
                    <div className="Emsculpt_container">
                        <div className="Emsculpt_content">I understand that I am about to undergo Neo EmSculpt treatment for the purpose of muscle
                            building and body contouring. I have been informed that this procedure uses high-intensity
                            focused electromagnetic energy to stimulate muscle contractions, which is similar to a workout,
                            but more intense and targeted.<br />I understand the following regarding this treatment:</div>
                        <ul>
                            <li className="Emsculpt_content" style={{ marginTop: "20px" }}>The procedure can be done on multiple areas of the body but is primarily used for the abdomen and buttocks.</li>
                            <li className="Emsculpt_content">The treatment is non-invasive and there is no downtime associated with it.</li>
                            <li className="Emsculpt_content">The treatment may cause mild soreness or discomfort, but this usually subsides quickly.</li>
                            <li className="Emsculpt_content">The number of treatments needed varies depending on the individual and their goals, but most people will typically receive 4-6 treatments over a 2-week period.</li>
                            <li className="Emsculpt_content">The results of Neo EmSculpt are typically long-lasting, but maintenance treatments may be needed to maintain the results.</li>
                        </ul>
                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}> I understand that there are risks associated with this treatment and that no guarantees have
                            been made to me about the results. I understand that my practitioner has explained the risks,
                            benefits, and alternatives to this procedure, and I have had the opportunity to ask questions and
                            receive answers to my satisfaction.
                        </div>

                        <div className="Emsculpt_content" style={{ marginBottom: "20px" }}>I have been informed that this treatment is not recommended for pregnant or breastfeeding
                            women, people with pacemakers, or people with metal implants in the treatment area.
                            I have read and understand the information provided in this consent form and I voluntarily agree
                            to undergo the Neo EmSculpt treatment.
                        </div>
                    </div>

                    <div className="Emsculpt_Footer">
                        <div className="Emsculpt_Footer1">
                            <label className="EmeraldLaser_content">Name:</label>
                        </div>
                        <div className="Emsculpt_Footer2">
                            <input type="text1" placeholder="Name" class="form-control Emerald_input" />
                        </div>
                    </div>
                    <div className="Emsculpt_Footer">
                        <div className="Emsculpt_Footer1">
                            <label className="EmeraldLaser_content">Date:</label>
                        </div>
                        <div className="Emsculpt_Footer2">
                            <input type="text1" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control Emerald_input" />
                        </div>
                    </div>

                    <div>
                        <div className="Emsculpt_Footer">
                            <div className="Emsculpt_Footer1">
                                <p className="EmsculptNeo_content">Signature:</p>
                            </div>
                            <div className="Emsculpt_Footer2">
                                {imageURL !== null ? (
                                    <img
                                        src={imageURL}
                                        alt="my signature"
                                    />
                                ) : (
                                    <div>
                                        <div className="bg_Emsculpt">
                                            <SignaturePad
                                                ref={sigPad}
                                                penColor="black"
                                                backgroundColor='#ffffff'
                                            />
                                        </div>

                                        <div class="Emsculpt_FooterBtn">
                                            <div>
                                                <button className="Emsculptclear_bttn" onClick={clear}>clear</button>
                                            </div>
                                            <div>
                                                <button className="Emsculptsave_bttn" onClick={trim}>save & continue</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="Emsculpt_subheader mt-3 mb-2" style={{ fontWeight: "600", margin: "20px 0px" }}>Consultation Questions</div>
                    <div className="Emsculpt_container">
                        <div className="Emsculpt_content" style={{margin: "10px 0px"}}>1. What are your goals for the treatment?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div className="Emsculpt_content" style={{margin: "10px 0px"}}>2. Are you currently experiencing any health conditions or taking any medications?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div className="Emsculpt_content" style={{margin: "10px 0px"}}>3. Are you pregnant or breastfeeding?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div className="Emsculpt_content" style={{margin: "10px 0px"}}>4. Have you had any previous body contouring procedures?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div className="Emsculpt_content" style={{margin: "10px 0px"}}>5. Are you experiencing any discomfort or pain in the treatment area?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div className="Emsculpt_content" style={{margin: "10px 0px"}}>6. What is your current exercise routine?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div className="Emsculpt_content" style={{margin: "10px 0px"}}>7. Are there any areas of your body that you would like to focus on during the treatment?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div className="Emsculpt_content" style={{margin: "10px 0px"}}>8. Are you currently experiencing menstrual?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div className="Emsculpt_content" style={{margin: "10px 0px"}}>9. Are you planning to get pregnant in the near future?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div className="Emsculpt_content" style={{margin: "10px 0px"}}>10. Are you currently experiencing any metal implants?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div className="Emsculpt_content" style={{margin: "10px 0px"}}>11. Have you had any previous negative reactions to electromagnetic energy?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div className="Emsculpt_content" style={{margin: "10px 0px"}}>12. How many sessions do you think you need to reach your goals?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div className="Emsculpt_content" style={{margin: "10px 0px"}}>13. What is your budget?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmscluptPage1;