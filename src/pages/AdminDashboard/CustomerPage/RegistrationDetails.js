import React, { useState, useEffect, useRef } from "react";
import './CustomerList.css';
import { db } from "../../../components/Firebase/Firebase";
import { getDocs, collection } from "firebase/firestore";
import { NavLink } from 'react-router-dom';

function RegistrationDetails() {
    const [searchTerm, setSearchTerm] = useState("");
    const [customerDetails, setCustomerDetails] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const customerDetailsCollectionRef = collection(db, "Registration");

    //Fetching the data
    const getCustomerDetails = async () => {
        try {
            const data = await getDocs(customerDetailsCollectionRef);
            const customer = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }))
            setCustomerDetails(customer);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getCustomerDetails();
    }, [])

    //Modal Data
    const showDetail = (customerId) => {
        setShowModal(true);
        const selected = records.find((customer) => customer.id === customerId);
        setShowModal(selected);
    };

    const hideModal = () => {
        setShowModal(false);
    };

    //Searching the data
    const filteredData = customerDetails.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase())
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

    return (
        <div>
            <div className="list_container">
                <h4 className="header_list">Customer Details</h4>
                <div className="Header_Container">
                    <div>
                        <input
                            type="text number"
                            className="Search_filter"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div>
                    <NavLink to="/allcustomers"><button className="Customers_button">All Customers</button></NavLink>
                    </div>
                </div>

                <div className="table_container">
                    <table className="table_list">
                        <tr className="row_list" style={{ backgroundColor: "#F4E8D8" }}>
                            <th className="table_head">Full Name</th>
                            <th className="table_head">Email</th>
                            <th className="table_head">Phone No</th>
                            <th className="table_head">DOB</th>
                            <th className="table_head">Gender</th>
                            <th className="table_head">Registered Date</th>
                            <th className="table_head">Details</th>
                        </tr>
                        {records.map((customer) => (
                            <tr className="row_list" key={customer.id}>
                                <td className="table_data">{customer.name}</td>
                                <td className="table_data">{customer.email}</td>
                                <td className="table_data">{customer.phone}</td>
                                <td className="table_data">{customer.dob}</td>
                                <td className="table_data">{customer.gender}</td>
                                <td className="table_data">{customer.registrationDate.toDate().toLocaleDateString()}</td>
                                <td className="table_data"><button className="Details_btn" onClick={() => showDetail(customer.id)}>Show Details</button></td>
                            </tr>
                        ))}
                    </table>

                    {showModal && (
                        <>
                            <div className="customer_modal">
                                <div className="customer_content">
                                    <div className="modal_header">
                                        <h2>Details</h2>
                                        <button type="button" onClick={hideModal} className="close_modalbtn">&times;</button>
                                    </div>
                                    
                                    <div className="table_content">
                                        <table className="table_details">
                                            <tr>
                                                <th className="details_content">Name</th>
                                                <td className="details_content">: {showModal.name}</td>
                                            </tr>
                                            <tr>
                                                <th className="details_content">Email</th>
                                                <td className="details_content">: {showModal.email}</td>
                                            </tr>
                                            <tr>
                                                <th className="details_content">Phone No</th>
                                                <td className="details_content">: {showModal.phone}</td>
                                            </tr>
                                            <tr>
                                                <th className="details_content">DOB</th>
                                                <td className="details_content">: {showModal.dob}</td>
                                            </tr>
                                            <tr>
                                                <th className="details_content">Address</th>
                                                <td className="details_content">: {showModal.address}</td>
                                            </tr>
                                            <tr>
                                                <th className="details_content">Gender</th>
                                                <td className="details_content">: {showModal.gender}</td>
                                            </tr>
                                            <tr>
                                                <th className="details_content">Marital Status</th>
                                                <td className="details_content">: {showModal.maritalStatus}</td>
                                            </tr>
                                            <tr>
                                                <th className="details_content">Registered Date</th>
                                                <td className="details_content">: {showModal.registrationDate.toDate().toLocaleDateString()}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <nav className="pagination_container">
                    <li>
                        <a href="#" onClick={prePage}>Prev</a>
                    </li>
                    <li>
                        <a href="#" onClick={nextPage}>Next</a>
                    </li>
                </nav>
            </div>
        </div>
    );
}

export default RegistrationDetails;

