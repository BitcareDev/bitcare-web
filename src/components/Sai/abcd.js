import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";

import Card from "./Cards"
import "./Card.css";
// import Sdata from "../../Sdata"

import { collection, getDocs } from "firebase/firestore";


import { db } from "../../index"


function Abcd() {

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
  // useEffect(() => {

  //   //fetchUsers()
  //   const usersData = getDocs(collection(db, "ClinicBooking"))
  //   usersData.lenght > 0 && setUsers(currentUsers => [...currentUsers, ...usersData])
  //   users.forEach(function (doc, idx) {

  //     console.log("documents", doc.data() .userDate);

  //   })
  // }, [])



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
                    <Card
          data={data}
           
             />
          // <h1>
          //   <div>
          //   {/* {d.data().userDate} */}
            
          //   {data.userDate?<span className="card_date">{data.userDate}</span>:""}
          //   {data.providerDesc?<h3 className="card_service">{data.providerDesc}</h3>:""}
          //     <h2>hi</h2>
          //   </div>
          // </h1>
        )
      })}
    </React.Fragment>
  )
}

export default Abcd;



