import React, { useEffect, useState } from "react";
import './Instructions.css';
import { db, storage } from "../../../components/Firebase/Firebase";
import { getDocs, collection, doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function ImportPdf() {
    const [serviceList, setServiceList] = useState([]);
    const [serviceTitle, setServiceTitle] = useState("");
    const [fileUpload, setFileUpload] = useState(null);
    const [imageUpload, setImageUpload] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const serviceCollectionRef = collection(db, "instructions");

    const openModal = () => {
        setShowModal(true);
    };

    const hideModal = () => {
        setShowModal(false);
    };

    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleAccordion = (index) => {
        setIsOpen(!isOpen);
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    }
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

    const idRef = doc(collection(db, "instructions"));

    //Add the data
    const onSubmitService = async () => {
        setLoading(true);
        if (!fileUpload && !imageUpload) return;
        const filesFolderRef = ref(storage, `pdf/${fileUpload.name}`);
        const imageFolderRef = ref(storage, `files/${imageUpload.name}`);
        try {
            const uploadTask = uploadBytesResumable(filesFolderRef, fileUpload);
            const uploadTask1 = uploadBytesResumable(imageFolderRef, imageUpload);

            // await Promise.all([
            //     uploadTask,
            //     uploadTask1
            // ]);

            const imageURL = await getDownloadURL(uploadTask1.snapshot.ref);
            const fileURL = await getDownloadURL(uploadTask.snapshot.ref);

            await setDoc(idRef, {
                title: serviceTitle,
                userId: idRef.id,
                image: imageURL,
                file: fileURL
            })
            getServiceList();
            setLoading(false);
            setAlertMessage('Data Uploaded Successfully!');

            // uploadTask.on("state_changed", (snapshot) => { },
            //     error => {
            //         console.log(error);
            //     }, () => {

            //         getDownloadURL(uploadTask.snapshot.ref).then(
            //             async (downloadURL) => {
            //                 await setDoc(idRef, {
            //                     title: serviceTitle,
            //                     userId: idRef.id,
            //                     createdAt: Timestamp.fromDate(new Date()),
            //                     image: downloadURL,
            //                     fileUpload: downloadURL,
            //                 });
            // getServiceList();
            // setLoading(false);
            // setAlertMessage('Data Uploaded Successfully!');
            //             }
            //         );
            //     }
            // )
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div>
            <div className="Instructions_Container">
                <div className="Instructions_Header">
                    <h2>Add the Instructions</h2>
                </div>
                <div className="Instructions_form">
                    <form className="PDF_Form">
                        <label for="fname">Service</label>
                        <input
                            type="text"
                            className="instruction_input"
                            placeholder="Service title..."
                            onChange={(e) => setServiceTitle(e.target.value)}
                        />
                        <label for="message">Image</label>
                        <input
                            type="file"
                            className="instruction_input"
                            onChange={(e) => setImageUpload(e.target.files[0])}
                        />
                        <label for="message">PDF File</label>
                        <input
                            type="file"
                            className="instruction_input"
                            onChange={(e) => setFileUpload(e.target.files[0])}
                        />

                        {loading ? (
                            <div style={{ textAlign: "center" }}><h4>adding the data...!!!</h4>
                                <img src="../../../assets/Loading.gif" /></div>
                        ) : (
                            <button className="Submit" onClick={onSubmitService} style={{ backgroundColor: "#1d6355" }}>Submit</button>
                        )}
                    </form>
                </div>
            </div>
            <div className="Instruction_card">
                {serviceList && serviceList.map((service) => (
                    <div className="Instructions_service">
                        <img src={service.image} width="100%" height="150px" />
                        <h4 className="service_name">{service.title}</h4>
                        <a href={service.file} target="blank"><button className="instructions_btn">Instructions</button></a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImportPdf;