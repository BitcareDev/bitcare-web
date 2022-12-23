import React , { useEffect, useState }from "react";
import './Booked.css';
import CardData1 from "./Card_data1";
// import Sdata from "../../../Sdata";


import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../index"


function Booked() {

  const [users, setUsers] = useState([]);


  useEffect(()=>{

    const getUsers=async()=>{

      await getDocs(collection(db, "ClinicBooking")).then((querySnapshot) => {

        querySnapshot.forEach(element => {

            var data = element.data();

            console.log('data: ',data );

            setUsers(arr => [...arr , data]);

             

        });

    })



    }

    getUsers();



  },[])

  async function fetchUsers() {

    console.log("Sai")

    const usersData = getDocs(collection(db, "ClinicBooking"))
    setUsers(usersData)
    users.forEach(function (doc, idx) {

      console.log("documents", doc.data() .userDate);

    })
  }
  return (

    <React.Fragment>
      <h1 className="heading_style"> Appointment Details</h1>




      {users.map(function (data, idx) {
        return (
                    <CardData1
          data={data}
           
             />
        )
      })}
      {/* {Sdata.map(function (d, idx) {
        return (
          <CardData1
            data={d}
          />
        )
      })} */}
    </React.Fragment>

  );
}

export default Booked;