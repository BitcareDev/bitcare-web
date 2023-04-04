import React, {useState} from "react";
import Adata from './data';
import './LocationPage.css';
import { FaAngleRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


function Location(props) {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     const getUsers = async () => {
//       await getDocs(collection(db, "ClinicLocation")).then((querySnapshot) => {
//         querySnapshot.forEach(element => {
//           var data = element.data();
//           console.log('data: ', data);
//           setUsers(arr => [...arr, data]);
//         });
//       })
//     }
//     getUsers();
//   }, [])

//   const users1 = users.sort((a, b) => Number(b.active) - Number(a.active));

  // useEffect(() => {
  //   fetchUsers()
  // },[])

  // async function fetchUsers(){
  //   console.log("Mukesh")
  //   const usersData = await getDocs(collection(db, "ClinicLocation"))
  //   usersData.forEach(function (doc, idx){
  //     console.log("documents", doc.data());
  //   })
  // }
  return (
    <React.Fragment>
      <div class="container">
        <h1 className="location-Header"> Choose your location</h1>
        <div class="bg_container">
          <div className="bg-location-bg">
            <div className="bg_location">
              {Adata.map(function (doc, idx) {
                return (
                  <>
                    <NavLink to="/Service" style={{ textDecoration: 'none', color: "black"}}><div class="location-container" style={{ cursor: doc.active ? "pointer" : "not-allowed" }}>
                      <div className="location-image">
                        <img src="../../../assets/hospital.svg" width="80px" height="80px" />
                      </div>
                      <div className="location-content">
                      <div className="location-text" >
                          {doc.name ? <h3 className="Sub-content">{doc.name}</h3> : ""}
                          {doc.address ? <h4 className="Sub-text">{doc.address}</h4> : ""}
                        </div>
                        <div className="Right-icon">
                          <span className="icon-text"><FaAngleRight /></span>
                        </div>
                      </div>
                    </div></NavLink>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Location;