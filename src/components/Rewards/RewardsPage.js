import React, { useRef, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import './RewardsPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rdata, { Fqdata } from './Rdata';
import { FaRegHeart } from 'react-icons/fa';
function Rewards() {

    const [isShowVideo, setIsShowVideo] = useState(false);
    const [data, setData] = useState('No result');
    const [count, setCount] = useState(0);
    const videoElement = useRef(null);

    const startCam = () => {
        setIsShowVideo(true);
        setCount(count => count + 1);
    }

    const stopCam = () => {
        setIsShowVideo(false);
        let stream = videoElement.current.stream;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
    }
    
    //decreace the counter
    const decrement = () => {
        if(count >0){
        setCount(count => count - 1);
    }else {
        alert('Sorry, Zero Limit Reached');
        setCount(0);
    }
    };
    return (
        <React.Fragment>
            <div class="container">
                <h1 className="reward-header">Rewards Page</h1>
                <div class="bgg_container">
                    <div className="service_row">
                        <div><img src="../../../assets/Check-in.png" alt="mass" className="img_container" width="80px" height="80px" onClick={startCam}/></div>
                        <div className="sub_header"><h1 className="text_header">Rewards Tracker</h1>
                        <h2 className="text-service">Total Rewards ($)</h2>
                        <button onClick={stopCam} className="close_btn">Close</button>
                        </div>
                    </div>
                    <div className="camView">
                {isShowVideo &&
                     <>
                     <QrReader style={{ width: '40%' }} ref={videoElement} onResult={(result, error) => {
                         if (!!result) {
                           setData(result?.text);
                           setCount([count + 1]); 
                         }
               
                         if (!!error) {
                           console.info(error);
                         }
                       }}
                     />
                     <p>{data}</p>
                     <h1>Count={count}</h1>
                   </>
                }
            </div>
                    <div className="bg-reward-bg">
                        <div className="bg-reward">
                            <h2 className="myreward">My Rewards</h2>
                            <div class="row gy-4 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                                {Rdata.map(function (doc, idx) {
                                    return (
                                        <>
                                            <div class="col">
                                                <div className="reward-text">
                                                {doc.reward1 ? <div className="reward1-text">{doc.reward1}</div> : ""}
                                                <img src="../../../assets/GiftCard.png" alt="gift" height="100px" width="100px"/>
                                                {doc.reward2 ? <div className="reward2-text">{doc.reward2}</div> : ""}
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="btnn_next">
                        <button type="button" className="btnn"><FaRegHeart /> Send a Friend $50 Off Any Service!</button>
                    </div>

                    <div className="qtn-container">
                        <label for="country" className="qtn-text">Frequently asked questions</label>
                        <select id="country" name="country">
                            {Fqdata.map(function (doc, idx) {
                                return (
                                    <>
                                        {doc.question ? <option value="australia">{doc.question}</option> : ""}
                                    </>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Rewards;