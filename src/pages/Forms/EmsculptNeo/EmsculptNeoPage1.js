import React, { useState, useRef } from "react";
import './EmsculptNeoPage1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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

    var [date, setDate] = useState(new Date());

    //Signature ref
    let sigPad = useRef({});
    let data = '';

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
                <div class="container-fluid mt-3">
                    <div className="Bitcare_img">
                        <img src="../../../assets/Bitcare2.png" alt="main" className="image_info" />
                    </div>
                    <div>
                        <h1 class="Emsclupt_header">Neo EmSculpt FAQ</h1>
                    </div>
                    <div className="Emsculpt_container">
                        <div class="Emsculpt_content">What is Neo EmSculpt?</div>
                        <div class="Emsculpt_content mb-3">It is a non-invasive body contouring treatment that uses high-intensity focused electromagnetic
                            (HIFEM) energy to stimulate muscle contractions and build muscle mass.</div>

                        <div class="Emsculpt_content">How does it work?</div>
                        <div class="Emsculpt_content mb-3">The treatment uses a device that emits HIFEM energy to contract the muscle tissue. The
                            contractions are similar to those experienced during a workout, but are much more intense and
                            targeted.</div>

                        <div class="Emsculpt_content">What areas of the body can be treated?</div>
                        <div class="Emsculpt_content mb-3">The treatment is primarily used for the abdomen and buttocks, but it can also be used on the
                            arms, legs and calves.</div>

                        <div class="Emsculpt_content">How many treatments are needed?</div>
                        <div class="Emsculpt_content mb-3">The number of treatments needed varies depending on the individual and their goals, but most
                            people will typically receive 4-6 treatments over a 2-week period.</div>

                        <div class="Emsculpt_content">Is there any downtime?</div>
                        <div class="Emsculpt_content mb-3">No, there is no downtime associated with Neo EmSculpt. You can return to normal activities
                            immediately after the treatment.</div>

                        <div class="Emsculpt_content">Are there any side effects?</div>
                        <div class="Emsculpt_content mb-3">Some people may experience mild soreness or discomfort after treatment, but this usually
                            subsides quickly.</div>

                        <div class="Emsculpt_content">Who is not a candidate for the treatment?</div>
                        <div class="Emsculpt_content mb-3">Neo EmSculpt is not recommended for pregnant or breastfeeding women, people with
                            pacemakers, or people with metal implants in the treatment area.</div>

                        <div class="Emsculpt_content">How long does the result last?</div>
                        <div class="Emsculpt_content mb-3">The results of Neo EmSculpt are typically long-lasting, but maintenance treatments may be
                            needed to maintain the results.</div>

                        <div class="Emsculpt_content">How much does it cost?</div>
                        <div class="Emsculpt_content mb-3">The cost of Neo EmSculpt can vary depending on the number of treatments and the number of
                            areas needs to be treated. It's best to schedule a free consultation with one of our licensed or
                            certified providers.</div>
                    </div>
                    <div class="Emsculpt_subheader mb-3">Women's Menstrual or Pregnancy</div>

                    <div className="Emsculpt_container">
                        <div class="Emsculpt_content">Can women who are on their menstrual cycle receive Neo EmSculpt treatment?</div>
                        <div class="Emsculpt_content mb-3">It is not recommended to receive the treatment during your menstrual cycle, as the muscle
                            contractions during the treatment can cause discomfort. It's best to schedule the treatment at a
                            different time in your menstrual cycle.</div>

                        <div class="Emsculpt_content">Can pregnant women receive Neo EmSculpt treatment?</div>
                        <div class="Emsculpt_content mb-3">No, Neo EmSculpt is not recommended for pregnant women as it has not been studied in this
                            population and it may be harmful to the fetus.</div>

                        <div class="Emsculpt_content">Can women who are trying to conceive receive Neo EmSculpt treatment?</div>
                        <div class="Emsculpt_content mb-3">It is not recommended to receive Neo EmSculpt treatment while trying to conceive, as it's not
                            known whether the treatment could affect fertility.</div>

                        <div class="Emsculpt_content">Can breastfeeding women receive Neo EmSculpt treatment?</div>
                        <div class="Emsculpt_content mb-3">Neo EmSculpt is not recommended for breastfeeding women as it has not been studied in this
                            population.</div>

                        <div class="Emsculpt_content">Should women who are planning to get pregnant in the near future avoid Neo EmSculpt treatment?</div>
                        <div class="Emsculpt_content mb-3">If you are planning to get pregnant in the near future, it is best to consult with your doctor before
                            receiving Neo EmSculpt treatment, as it's not known how the treatment may affect pregnancy.</div>
                    </div>
                    <div class="Emsculpt_subheader mb-3">Frequency of Procedure and Body Areas Treated</div>

                    <div className="Emsculpt_container">
                        <div class="Emsculpt_content">How often can I receive Neo EmSculpt treatment?</div>
                        <div class="Emsculpt_content mb-3">The frequency of treatment will vary depending on the individual and their goals, but most
                            people will typically receive 4-6 treatments over a 2-week period. However, it's best to consult
                            with one of our providers for a personalized treatment plan.</div>

                        <div class="Emsculpt_content">Is there a limit to the number of areas of the body that can be treated with Neo EmSculpt?</div>
                        <div class="Emsculpt_content mb-3">The treatment can be used on multiple areas of the body, such as the abdomen, buttocks, arms,
                            legs, and calves. It's best to consult with our provider to determine the best treatment plan for
                            your individual needs.</div>

                        <div class="Emsculpt_content">How long does the treatment take?</div>
                        <div class="Emsculpt_content mb-3">Each treatment session typically takes about 30 minutes.</div>

                        <div class="Emsculpt_content">How soon will I see the results?</div>
                        <div class="Emsculpt_content mb-3">Some people may see results after a single treatment, but most will see results after a series of
                            treatments. The final results may take several weeks or months to fully develop.</div>

                        <div class="Emsculpt_content">How long will the results last?</div>
                        <div class="Emsculpt_content mb-3">The results of Neo EmSculpt are typically long-lasting, but maintenance treatments may be
                            needed to maintain the results.</div>

                        <div class="Emsculpt_content">Is it a permanent solution?</div>
                        <div class="Emsculpt_content mb-3">Neo EmSculpt is not a permanent solution. It is a non-invasive muscle-building treatment that
                            provides results that can last for a long time. However, to maintain the results, regular
                            maintenance sessions may be needed.</div>
                    </div>

                    <div>
                        <h1 class="Emsclupt_header">EMSCULPT NEO TREATMENT</h1>
                    </div>
                    <div class="Emsculpt_subheader mt-3">Consent and Consultation</div>
                    <div className="Emsculpt_container">
                        <div class="Emsculpt_content">I understand that I am about to undergo Neo EmSculpt treatment for the purpose of muscle
                            building and body contouring. I have been informed that this procedure uses high-intensity
                            focused electromagnetic energy to stimulate muscle contractions, which is similar to a workout,
                            but more intense and targeted.<br />I understand the following regarding this treatment:</div>
                        <ul>
                            <li class="Emsculpt_content mt-3">The procedure can be done on multiple areas of the body but is primarily used for the abdomen and buttocks.</li>
                            <li class="Emsculpt_content">The treatment is non-invasive and there is no downtime associated with it.</li>
                            <li class="Emsculpt_content">The treatment may cause mild soreness or discomfort, but this usually subsides quickly.</li>
                            <li class="Emsculpt_content">The number of treatments needed varies depending on the individual and their goals, but most people will typically receive 4-6 treatments over a 2-week period.</li>
                            <li class="Emsculpt_content">The results of Neo EmSculpt are typically long-lasting, but maintenance treatments may be needed to maintain the results.</li>
                        </ul>
                        <div class="Emsculpt_content mt-3"> I understand that there are risks associated with this treatment and that no guarantees have
                            been made to me about the results. I understand that my practitioner has explained the risks,
                            benefits, and alternatives to this procedure, and I have had the opportunity to ask questions and
                            receive answers to my satisfaction.
                        </div>

                        <div class="Emsculpt_content mt-3">I have been informed that this treatment is not recommended for pregnant or breastfeeding
                            women, people with pacemakers, or people with metal implants in the treatment area.
                            I have read and understand the information provided in this consent form and I voluntarily agree
                            to undergo the Neo EmSculpt treatment.
                        </div>
                    </div>

                    <div class="row mt-4">
                        <div class="col-sm-3">
                            <p className="EmsculptNeo_content">Name:</p>
                        </div>
                        <div class="col-sm-8">
                            <input type="text1" placeholder="Name" class="form-control Emsculpt_input" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-3">
                            <p className="EmsculptNeo_content">Date:</p>
                        </div>
                        <div class="col-sm-8">
                            <input type="text1" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control Emsculpt_input" />
                        </div>
                    </div>

                    <div>
                        <div class="row mt-3 mb-5">
                            <div class="col-sm-3">
                                <p className="EmsculptNeo_content">Signature:</p>
                            </div>
                            <div class="col-sm-8">
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
                    </div>

                    <div class="Emerald_subheader mt-3 mb-2" style={{ fontWeight: "600" }}>Consultation Questions</div>
                    <div className="Emsculpt_container">
                        <div class="Emsculpt_content mb-2">1. What are your goals for the treatment?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div class="Emsculpt_content mb-2">2. Are you currently experiencing any health conditions or taking any medications?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div class="Emsculpt_content mb-2">3. Are you pregnant or breastfeeding?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div class="Emsculpt_content mb-2">4. Have you had any previous body contouring procedures?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div class="Emsculpt_content">5. Are you experiencing any discomfort or pain in the treatment area?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div class="Emsculpt_content mb-2">6. What is your current exercise routine?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div class="Emsculpt_content mb-2">7. Are there any areas of your body that you would like to focus on during the treatment?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div class="Emsculpt_content mb-2">8. Are you currently experiencing menstrual?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div class="Emsculpt_content mb-2">9. Are you planning to get pregnant in the near future?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div class="Emsculpt_content mb-2">10. Are you currently experiencing any metal implants?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div class="Emsculpt_content mb-2">11. Have you had any previous negative reactions to electromagnetic energy?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div class="Emsculpt_content mb-2">12. How many sessions do you think you need to reach your goals?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                        <div class="Emsculpt_content mb-2">13. What is your budget?</div>
                        <input type="text1" class="form-control Emsculpt_input" name="name" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmscluptPage1;