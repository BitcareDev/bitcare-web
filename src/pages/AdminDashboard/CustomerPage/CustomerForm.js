import React, { useEffect, useState } from "react";
import './CustomerForm.css';
import { db, storage } from "../../../components/Firebase/Firebase";
import { collection, doc, Timestamp, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function CustomerForm() {
    const [customerName, setCustomerName] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerNumber, setCustomerNumber] = useState(0);
    const [customerAddress, setCustomerAddress] = useState("");
    const [customerDob, setCustomerDob] = useState("");
    const [customerGender, setCustomerGender] = useState("");
    const [customerProfile, setCustomerProfile] = useState(null);
    // const [customerJoining, setCustomerJoining] = useState("");
    // const [referredBy, setReferredBy] = useState("");
    const [alertMessage, setAlertMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const customerCollectionRef = doc(collection(db, "customer"));

    useEffect(() => {
        if (alertMessage !== '') {
            alert(alertMessage);
            setAlertMessage('');
        }
    }, [alertMessage]);

    //Add the data
    const onSubmitCustomerData = async () => {
        setLoading(true);
        if (!customerProfile) return;
        const filesFolderRef = ref(storage, `files/${customerProfile.name}`);
        try {
            const uploadTask = uploadBytesResumable(filesFolderRef, customerProfile)

            uploadTask.on("state_changed", (snapshot) => { },
                error => {
                    console.log(error);
                }, () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        async (downloadURL) => {
                            await setDoc(customerCollectionRef, {
                                name: customerName,
                                email: customerEmail,
                                phone: customerNumber,
                                address: customerAddress,
                                dob: customerDob,
                                gender: customerGender,
                                // joiningDate: customerJoining,
                                // referred: referredBy,
                                customerId: customerCollectionRef.id,
                                createdAt: Timestamp.fromDate(new Date()),
                                image: downloadURL,
                            });
                            setCustomerGender("");
                            setLoading(false);
                            setAlertMessage('Data Uploaded Successfully!');
                        }
                    );
                }
            )
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className="Form_Container">
            <div className="Bg_Form">
                <form>
                    <h3 className="CustomerForm_header">Add Customer</h3>
                    <div className="Custormer_Form">
                        <div>
                            <label for="name" className="Label">Name</label>
                            <input
                                type="text"
                                className="Form_input"
                                placeholder="name..."
                                required
                                onChange={(e) => setCustomerName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label for="email" className="Label">Email</label>
                            <input
                                type="email"
                                className="Form_input"
                                placeholder="email..."
                                required
                                onChange={(e) => setCustomerEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label for="phone" className="Label">Phone No.</label>
                            <input
                                type="number"
                                className="Form_input"
                                placeholder="Phone No..."
                                required
                                onChange={(e) => setCustomerNumber(Number(e.target.value))}
                            />
                        </div>
                        <div>
                            <label for="address" className="Label">Address</label>
                            <input
                                type="text"
                                className="Form_input"
                                placeholder="Address.."
                                required
                                onChange={(e) => setCustomerAddress(e.target.value)}
                            />
                        </div>
                        <div>
                            <label for="dob" className="Label">DOB</label>
                            <input
                                type="date"
                                className="Form_input"
                                required
                                onChange={(e) => setCustomerDob(e.target.value)}
                            />
                        </div>
                        <div>
                            <label for="gender" className="Label">Gender</label>
                            <select value={customerGender} id="country" name="country" className="Form_input" required onChange={(e) => setCustomerGender(e.target.value)}>
                                <option value="">Select Gender...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label for="profile" className="Label">Profile pic</label>
                            <input
                                type="file"
                                className="Form_input"
                                required
                                onChange={(e) => setCustomerProfile(e.target.files[0])}
                            />
                        </div>
                        {/* <div>
                            <label for="date" className="Label">Customer joining date</label>
                            <input
                                type="date"
                                className="Form_input"
                                required
                                onChange={(e) => setCustomerJoining(e.target.value)}
                            />
                        </div> */}
                        {/* <div>
                            <label for="referred" className="Label">Referred By</label>
                            <input
                                type="text"
                                className="Form_input"
                                placeholder="Referred By..."
                                required
                                onChange={(e) => setReferredBy(e.target.value)}
                            />
                        </div> */}
                    </div>
                    {loading ? (
                        <div className="Form_loader"><h4 className="Formdata_loading">adding the data...!!!</h4>
                            <img src="../../../assets/Loading.gif" /></div>
                    ) : (
                        <div className="form_btn">
                            <button className="submit_btn" onClick={onSubmitCustomerData}>Submit</button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
export default CustomerForm;