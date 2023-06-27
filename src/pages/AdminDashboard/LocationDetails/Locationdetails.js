import React, { useState, useEffect } from "react";
import './Locationdetails.css';
import { db } from "../../../components/Firebase/Firebase";
import { getDocs, collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { event } from "jquery";

function LocationDetails() {
    const [selectedLocation, setSelectedLocation] = useState(-1);
    const [searchTerm, setSearchTerm] = useState("");
    const [locationTitle, setLocationTitle] = useState("");
    const [locationId, setLocationId] = useState("");
    const [locationAddress, setLocationAddress] = useState("");
    const [locationCategory, setLocationCategory] = useState(["value"]);
    const [locationDetails, setLocationDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [active, setActive] = useState(true);
    const [Id, setId] = useState(null);
    const locationDetailsCollectionRef = collection(db, "locationdetails");

    //Fetching the data
    const getLocationDetails = async () => {
        try {
            const data = await getDocs(locationDetailsCollectionRef);
            const location = data.docs.map((doc) => ({
                ...doc.data(),
                userid: doc.id,
            }))
            setLocationDetails(location);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getLocationDetails();
        if (alertMessage !== '') {
            alert(alertMessage);
            setAlertMessage('');
        }
    }, [alertMessage])

    //Add Input Field data
    const handleAddField = () => {
        const valves = [...locationCategory, []];
        setLocationCategory(valves);
    };

    const handleChange = (onChangeValue, index) => {
        const valves = [...locationCategory];
        valves[index] = onChangeValue.target.value;
        setLocationCategory(valves);
    };

    const handleRemovePair = (index) => {
        const updatedPairs = [...locationCategory];
        updatedPairs.splice(index, 1);
        setLocationCategory(updatedPairs);
      };

    //Add the data
    const onSubmitService = async () => {
        setLoading(true);
        try {
            await addDoc(locationDetailsCollectionRef, {
                title: locationTitle,
                id: locationId,
                address: locationAddress,
                category: locationCategory,
                active: true,
            })
            getLocationDetails();
            setLoading(false);
            setAlertMessage('Data Uploaded Successfully!');
        } catch (err) {
            console.error(err);
        }
    };

    // //Edit the data
    // const handleEdit = (index) => {
    //     setSelectedLocation(index);
    // }

    // const handleUpdate = (index) => {
    //     setSelectedLocation(-1);
    // }

    // const handleInput= (e, index) => {
    //     const{ name, value } = event.target;
    //     const updatedData = [...records];
    //     updatedData[index][name] = value;
    //     setLocationDetails(updatedData);
    // }

    //Location form Modal Data
    const showDetail = () => {
        setShowModal(true);
    };

    const hideModal = () => {
        setShowModal(false);
    };

    //Searching the data
    const filteredData = locationDetails.filter(location =>
        location.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = filteredData.slice(firstIndex, lastIndex);
    const npage = Math.ceil(filteredData.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }

    //Diable button Modal data
    const handleDiableService = async (locationId, active) => {
        setShowModal1(true);
        setId(locationId);
        setActive(active);
    }

    const handleConfirmModel = async () => {
        const locationRef = doc(locationDetailsCollectionRef, Id);
        try {
            await updateDoc(locationRef, { active: !active });
            getLocationDetails();
            console.log(locationRef, { active: !active });
            setShowModal1(false);
        } catch (err) {
            console.error(err);
        }
    }

    const handleModalClose = () => {
        setShowModal1(false);
    };

    return (
        <div>
            <div className="locationlist_container">
                <h4 className="locationheader_list">Location Details</h4>
                <div className="locationHeader_Container">
                    <div>
                        <input
                            type="text number"
                            className="location_search"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className="location_button" onClick={() => showDetail()}>Add Location</button>
                    </div>
                </div>

                <div className="locationtable_container">
                    <table className="locationtable_list">
                        <tr className="locationrow_list" style={{ backgroundColor: "#F4E8D8" }}>
                            <th className="locationtable_head">Id</th>
                            <th className="locationtable_head">Title</th>
                            <th className="locationtable_head">Address</th>
                            <th className="locationtable_head">Category</th>
                            <th className="locationtable_head">Status</th>
                            <th className="locationtable_head">Action</th>
                        </tr>
                        {records.map((location, index) => (
                            // location.userid === selectedLocation ?
                            // <tr className="locationrow_list" key={index}>
                            //     <td className="locationtable_data"><input type="text" onChange={(e) =>handleInput(e, index)} name="id" value={location.id}/></td>
                            //     <td className="locationtable_data"><input type="text" onChange={(e) =>handleInput(e, index)} name="title" value={location.title}/></td>
                            //     <td className="locationtable_data"><input type="text" onChange={(e) =>handleInput(e, index)} name="address" value={location.address}/></td>
                            //     <td className="locationtable_data"><input type="text" onChange={(e) =>handleInput(e, index)} name="category"value={location.category}/></td>
                            //     <td><button onClick={handleUpdate}>Update</button></td>
                            // </tr>
                            // :
                            <tr className="locationrow_list" key={index}>
                                <td className="locationtable_data">{location.id}</td>
                                <td className="locationtable_data">{location.title}</td>
                                <td className="locationtable_data">{location.address}</td>
                                <td className="locationtable_data">{location.category[0]}, {location.category[1]}</td>
                                <td><div className="locationdisable_btn">
                                    <input type="checkbox" className="locationtoggle_btn" checked={location.active} onChange={() => { handleDiableService(location.userid, location.active); }} />
                                </div></td>
                                <td><div >
                                    <button 
                                    // onClick={() => handleEdit(location.userid)}
                                    >Edit</button>
                                </div></td>
                            </tr>
                        ))}
                    </table>

                    {showModal && (
                        <>
                            <div className="loaction_modal">
                                <div className="location_content">
                                    <div className="locationmodal_header">
                                        <h2>Add the Location</h2>
                                        <button type="button" onClick={hideModal} className="close_locationModal">&times;</button>
                                    </div>

                                    <div className="locationdetails_content">
                                        <form className="locationdetails_form">

                                            <label for="title">Title</label>
                                            <input
                                                type="text"
                                                className="locationdetails_input"
                                                placeholder="Enter the Title..."
                                                onChange={(e) => setLocationTitle(e.target.value)}
                                            />

                                            <label for="id">Id</label>
                                            <input
                                                type="text"
                                                className="locationdetails_input"
                                                placeholder="Enter the title..."
                                                onChange={(e) => setLocationId(e.target.value)}
                                            />

                                            <label for="address">Address</label>
                                            <input
                                                type="text"
                                                className="locationdetails_input"
                                                placeholder="Enter the Address..."
                                                onChange={(e) => setLocationAddress(e.target.value)}
                                            />

                                            <label for="category">category</label>
                                            <div>
                                                {locationCategory.map((input, index) => (
                                                    <div key={index}>
                                                        <input
                                                            type="text"
                                                            value={input.value}
                                                            className="locationdetails_input"
                                                            placeholder="Enter the category..."
                                                            onChange={(e) => handleChange(e, index)}
                                                            style={{width: "75%"}}
                                                        />
                                                        <button className="remove_btn" onClick={() => handleRemovePair(index)}>Remove</button>
                                                    </div>
                                                ))}
                                                <input type="button" className="CategoryAdd_Btn" onClick={handleAddField} value="Add Categories" />
                                            </div>

                                            {loading ? (
                                                <div style={{ textAlign: "center" }}><h4>adding the data...!!!</h4>
                                                    <img src="../../../assets/Loading.gif" /></div>
                                            ) : (
                                                <button className="locationSubmit_Btn" onClick={onSubmitService}>Submit</button>
                                            )}
    
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <nav className="locationpagination_container">
                    <li>
                        <a href="#" onClick={prePage}>Prev</a>
                    </li>
                    <li>
                        <a href="#" onClick={nextPage}>Next</a>
                    </li>
                </nav>

                {showModal1 && (
                    <div className="locationconfirm_modal">
                        <div className="locationmodal_content">
                            {active &&
                                <h4>Are you sure you want to disable the Location?</h4>
                            }
                            {!active &&
                                <h4>Are you sure you want to enable the Location?</h4>
                            }
                            <div className="locationmodal_button">
                                <button className="locationmodal_Yes" onClick={() => handleConfirmModel()}>Yes</button>
                                <button className="locationmodal_No" onClick={handleModalClose}>No</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LocationDetails;

