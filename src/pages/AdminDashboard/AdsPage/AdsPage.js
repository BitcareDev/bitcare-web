import React, { useState, useEffect } from "react";
import './AdsPage.css';
import { db, storage } from "../../../components/Firebase/Firebase";
import { getDocs, collection, addDoc, updateDoc, doc, Timestamp, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Advertisement() {
    const [serviceList, setServiceList] = useState([]);
    const [serviceTitle, setServiceTitle] = useState("");
    const [serviceDescription, setServiceDescription] = useState("");
    const [alertMessage, setAlertMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [Id, setId] = useState(null);

    //FILE UPLOAD STATE
    const [fileUpload, setFileUpload] = useState(null)
    const serviceCollectionRef = collection(db, "services");

    //Fetching the data
    const getServiceList = async () => {
        try {
            const data = await getDocs(serviceCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }))
            setServiceList(filteredData);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getServiceList();
        if (alertMessage !== '') {
            alert(alertMessage);
            setAlertMessage('');
        }
    }, [alertMessage]);

    //Add the data
    const onSubmitService = async () => {
        setLoading(true);
        if (!fileUpload) return;
        const filesFolderRef = ref(storage, `files/${fileUpload.name}`)
        try {
            const uploadTask = uploadBytesResumable(filesFolderRef, fileUpload);

            uploadTask.on("state_changed", (snapshot) => { },
                error => {
                    console.log(error);
                }, () => {
                    const idRef = doc(collection(db, "services"));
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        async (downloadURL) => {
                            await setDoc(idRef, {
                                title: serviceTitle,
                                description: serviceDescription,
                                isActive: true,
                                // id: auth?.currentUser?.uid,
                                userId: idRef.id,
                                createdAt: Timestamp.fromDate(new Date()),
                                fileUpload: downloadURL,
                            });
                            getServiceList();
                            setLoading(false);
                            setAlertMessage('Data Uploaded Successfully!');
                        }
                    );
                }
            )
        } catch (err) {
            console.error(err);
        }
    }

    //Diable
    const handleDiableService = async (serviceId, isActive) => {
        setShowModal(true);
        setId(serviceId);
        setIsActive(isActive);
    }

    const handleConfirmModel = async () => {
        const serviceRef = doc(serviceCollectionRef, Id);
        try {
            await updateDoc(serviceRef, { isActive: !isActive });
            getServiceList();
            console.log(serviceRef, { isActive: !isActive });
            // setIsActive(false);
            setShowModal(false);
        } catch (err) {
            console.error(err);
        }
    }

    const handleModalClose = () => {
        setShowModal(false);
    };


    return (
        <div>
            <div className="Ads_container">
                <div className="Ads_input">
                    {loading ? (
                        <div className="Ads_loader">
                            <h4 className="loading_data">Adding the data...!!!</h4>
                            <img src="../../../assets/Loading.gif" alt="loading" />
                        </div>
                    ) : (
                        <div>
                            <h2>Add the Services</h2>
                            <label for="fname" className="Label">Title</label>
                            <input
                                type="text"
                                className="add_input"
                                placeholder="Service title..."
                                onChange={(e) => setServiceTitle(e.target.value)}
                            />

                            <label for="Description" className="Label">Description</label>
                            <input
                                type="text"
                                className="add_input"
                                placeholder="Service Description..."
                                onChange={(e) => setServiceDescription(e.target.value)}
                            />

                            <label for="message" className="Label">Image</label>
                            <input type="file" className="add_input" style={{ backgroundColor: "white" }} onChange={(e) => setFileUpload(e.target.files[0])} />
                            <button className="Submit_Btn" onClick={onSubmitService}>Submit Services</button>
                        </div>
                    )}
                </div>
                <div class="Ads_data">
                    {serviceList.map((service) => (
                        <div className="card">
                            <h4 className="card-title">{service.title}</h4>
                            <img src={service.fileUpload} alt="main" class="image-info" />
                            <div class="card-Container">
                                <h2 className="card-description">{service.description}</h2>
                                <div className="disable_btn">
                                    <input type="checkbox" className="toggle_btn" checked={service.isActive} onChange={() => { handleDiableService(service.id, service.isActive); }} />
                                </div>
                            </div>
                        </div>
                    ))}

                    {showModal && (
                        <div className="confirm_modal">
                            <div className="modal_content">
                                {isActive &&
                                    <h4>Are you sure you want to disable the Advertisement?</h4>
                                }
                                {!isActive &&
                                    <h4>Are you sure you want to enable the Advertisement?</h4>
                                }
                                <div className="modal_button">
                                    <button className="modal_Yes" onClick={() => handleConfirmModel()}>Yes</button>
                                    <button className="modal_No" onClick={handleModalClose}>No</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Advertisement;