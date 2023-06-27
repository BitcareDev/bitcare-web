import React, { useState, useEffect, useRef } from "react";
import './CustomerList.css';
import { db } from "../../../components/Firebase/Firebase";
import { getDocs, collection, setDoc, Timestamp, doc } from "firebase/firestore";
import { useDownloadExcel } from 'react-export-table-to-excel';
import * as XLSX from 'xlsx';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function CustomerList() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/customerdetails");
    };

    const [selectedFile, setSelectedFile] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [customerList, setCustomerList] = useState([]);
    const customerCollectionRef = collection(db, "customer");

    const tableRef = useRef(null);

    //Fetching the data
    const getCustomerList = async () => {
        try {
            const data = await getDocs(customerCollectionRef);
            const customer = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }))
            setCustomerList(customer);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getCustomerList();
    }, [])

    //Searching the data
    const filteredData = customerList.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //Export the data
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: "users sheet",
        sheet: "users sheet",
    });

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

    //Import the data
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleImport = async () => {
        if (selectedFile) {
            const fileReader = new FileReader();
            fileReader.onload = async (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                // Import the new data into the collection
                await Promise.all(
                    jsonData.slice(1).map((row) => {
                        setDoc((doc(collection(db, "customer2"))), {
                            name: row[0], // Map each column to the desired field in your Firebase collection
                            email: row[1],
                            phone: row[2],
                            dob: row[3],
                            address: row[4],
                            gender: row[5],
                            customerId: (doc(collection(db, "customer2"))).id,
                            createdAt: Timestamp.fromDate(new Date()),
                            image: "",
                            joiningDate: "",
                        })
                    })
                );

                console.log('Data imported successfully!');
                alert('Data imported successfully!');
            };

            fileReader.readAsArrayBuffer(selectedFile);
        }
    };

    return (
        <div className="list_container">
            <h4 className="header_list"><button className="back_button" onClick={handleClick}><AiOutlineArrowLeft /></button> Customer List</h4>
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
                <div className="Button_container">
                    <div className="import_field">
                        <input className="upload_file" type="file" onChange={handleFileChange} />
                        <label className="File_button" onClick={handleImport}>Import File</label>
                    </div>
                    <div>
                        <button onClick={onDownload} className="File_button">Export File</button>
                    </div>
                </div>
            </div>
            <div className="table_container">
                <table className="table_list" ref={tableRef}>
                    <tr className="row_list" style={{ backgroundColor: "#F4E8D8"}}>
                        <th className="table_head">Name</th>
                        <th className="table_head">Email</th>
                        <th className="table_head">Phone No</th>
                        <th className="table_head">Address</th>
                        <th className="table_head">DOB</th>
                        <th className="table_head">Gender</th>
                    </tr>
                    {records.map((customer) => (
                        <tr className="row_list" key={customer.id}>
                            {/* <img src={customer.image} className="profile_img" alt="profile" id="image" />  */}
                            <td className="table_data">{customer.name}</td>
                            <td className="table_data">{customer.email}</td>
                            <td className="table_data">{customer.phone}</td>
                            <td className="table_data">{customer.address}</td>
                            <td className="table_data">{customer.dob}</td>
                            <td className="table_data">{customer.gender}</td>
                        </tr>
                    ))}
                </table>
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
    );
}

export default CustomerList;