import React, { useState } from 'react';
import './referralPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiTrophyCup } from 'react-icons/gi';
import { Refdata, Reldata } from './Rdata';
import { FaRegCopy } from 'react-icons/fa';
import { CopyToClipboard } from "react-copy-to-clipboard";

function Referral() {
    const [isCopied, setIsCopied] = useState(false);
    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };
    return (
        <React.Fragment>
            <div class="container">
                <h1 className="referral-header">Referral Page</h1>
                <div class="bg1_container">
                    <div className="referral_row">
                        <div><img src="../../../assets/Check-in.png" alt="mass" width="80px" height="80px" /></div>
                        <div className="sub_header"><h1 className="text_header">Rewards Tracker</h1>
                            <h2 className="text-service">Total Rewards ($)</h2>
                        </div>
                    </div>
                    <div className="bg-referral-bg">
                        <div className="bg-referral">
                            <div class="row g1 gy-4 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                                <div class="col">
                                    <img src="../../../assets/Gift1.png" alt="mass" height="350px" width="100%" />
                                </div>
                                <div class="col ref">
                                    <h2 className="Referral1">Refer A Friend</h2>
                                    <div className="Referral2">Invite your friend and get $10 each</div>
                                    <div className="Referral3">Share the code below or ask them to enter it during the signup. Earn when your friend signs up on our app</div>
                                    {Refdata.map(function (doc, idx) {
                                        return (
                                            <>
                                                <div className="input-code">
                                                    {doc.code ? <div className="code">{doc.code}</div> : ""}
                                                    <CopyToClipboard text={doc.code} onCopy={onCopyText}>
                                                        <div className="copy-logo">{<FaRegCopy />}</div>
                                                    </CopyToClipboard>
                                                </div>
                                            </>
                                        )
                                    })}
                                    <div className="btn-invite">
                                        <button type="button" className="invite">Invite</button>
                                    </div>
                                </div>
                            </div>
                            <h2 className="myreferral">My Referrals</h2>
                            <div class="row gn gy-4 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                                {Reldata.map(function (doc, idx) {
                                    return (
                                        <>
                                            <div class="col">
                                                <div className="reward-text">
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <img src="../../../assets/Gift2.jpg" alt="gift" class="rounded-circle" height="100px" width="100px" />
                                                        </div>
                                                        <div class="col-8">
                                                            {doc.name ? <div className="reward1-text">{doc.name}</div> : ""}
                                                            {doc.status ? <div className="reward2-text">Referral status: {doc.status}</div> : ""}
                                                        </div>
                                                    </div>
                                                    {doc.reward ? <button className="referral-btn"><GiTrophyCup /> {doc.reward}</button> : ""}
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Referral;

