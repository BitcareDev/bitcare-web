import React, { useRef, useState } from "react";
import './LaserPage5.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignaturePad from 'react-signature-canvas';

function LaserPage5() {
    var [date, setDate] = useState(new Date());
    let sigPad = useRef({});
    let data = '';

    function clear() {
        sigPad.current.clear();
    }
    return (
        <div class="container-fluid mt-3">
            <div className="Bitcare_img">
                <img src="../../../assets/Bitcare2.png" alt="main" className="image_info2" />
            </div>
            <div>
                <h1 class="fitzpatrick_header">FITZPATRICK SKIN TYPE SCALE</h1>
            </div>
            <div className="fitzpatrick_container">
                <div className="fitzpatrick_content">This information will help your Esthetician to evaluate your skin type for a more effective laser
                    treatment. Skin type is determined by the color of your eyes, hair, skin and your skin's reaction to sun
                    exposure. Tanning by sun exposure, tanning booths or tanning lotions, can have a major impact on your
                    skin.</div>
            </div>
            <div>
                <div class="content5 mb-3">Please circle which Skin Type applies to you the most</div>
                <table class="table table-bordered table1 mb-4">
                    <thead>
                        <tr>
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
                        <tr>
                            <td className="fitzpatrick">What is the color of your eyes?</td>
                            <td className="fitzpatrick_container1" id="time">Light blue, green or grey</td>
                            <td className="fitzpatrick_container1" id="time">Blue, Grey, Green or Brown</td>
                            <td className="fitzpatrick_container1" id="time">Blue, Brown or Green</td>
                            <td className="fitzpatrick_container1" id="time">Dark Brown</td>
                            <td className="fitzpatrick_container1" id="time">Brownish Black</td>
                            <td className="fitzpatrick_container1" id="time">Black</td>
                        </tr>
                        <tr>
                            <td className="fitzpatrick">What is the natural color of your hair?</td>
                            <td className="fitzpatrick_container1" id="time">Red or Blonde</td>
                            <td className="fitzpatrick_container1" id="time">Blonde to Light Brown</td>
                            <td className="fitzpatrick_container1" id="time">Chestnut or Dark Blonde to Brown</td>
                            <td className="fitzpatrick_container1" id="time">Dark Brown</td>
                            <td className="fitzpatrick_container1" id="time">Dark Brown to Black</td>
                            <td className="fitzpatrick_container1" id="time">Black</td>
                        </tr>
                        <tr>
                            <td className="fitzpatrick">What is your skin color?</td>
                            <td className="fitzpatrick_container1" id="time">Pale to very fair, possibly freckled</td>
                            <td className="fitzpatrick_container1" id="time">Very Fair</td>
                            <td className="fitzpatrick_container1" id="time">Pale with Beige Tint</td>
                            <td className="fitzpatrick_container1" id="time">Olive Tone</td>
                            <td className="fitzpatrick_container1" id="time">Dark Brown</td>
                            <td className="fitzpatrick_container1" id="time">Very Dark</td>
                        </tr>
                        <tr>
                            <td className="fitzpatrick">Your skin's reaction to prolonged sun exposure?</td>
                            <td className="fitzpatrick_container1" id="time">Always burns and never tans</td>
                            <td className="fitzpatrick_container1" id="time">Burns easily and rarely tans</td>
                            <td className="fitzpatrick_container1" id="time">Burns sometimes and tans gradually</td>
                            <td className="fitzpatrick_container1" id="time">Rarely burns and tans easily</td>
                            <td className="fitzpatrick_container1" id="time">Rarely burns and skin darkens</td>
                            <td className="fitzpatrick_container1" id="time">Never burns</td>
                        </tr>
                    </tbody>
                </table>

                <div className="fitzpatrick_subcontent">
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
                            <div className="bg_fitzpatrick">
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
        </div>
    );
}

export default LaserPage5;