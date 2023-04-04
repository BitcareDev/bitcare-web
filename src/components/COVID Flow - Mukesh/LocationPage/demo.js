// import mukesh, { useEffect, useState } from "react";
// import d from './data';
// import { getDocs, collection } from "firebase/firestore";
// import { db } from "../../../index";

// function Hello(){
//     const student = {name: "mukesh", email: "kmukeshkumarreddy@gmail.com"}
//     // const {name}= student;
//     const student1 = [{name: "mukesh", email: "kmukeshkumarreddy@gmail.com"}, {name: "Ramesh", email: "Ramesh@gmail.com"}]
//     //const {name}= student1[1];
//     const {email}= student1[0];
//     const {city} = d[2];
//     const [name,setName] = useState('Mukesh');
//     useEffect(() => {

//     });
//     console.log(name);
//     return(
//         <mukesh.Fragment>
//             <h1>Hello India</h1>
//             {/* <h2>Hello {name}</h2> */}
//             <h2>Hello {email}</h2>
//             <h3>My location is {city}</h3>
//             <>
//             <h1>welcome to {name}</h1>
//             <button onClick={()=>setName('React')}>submit</button>
//             </>
//         </mukesh.Fragment>
//     );
// }

// export default Hello;

// export function Mapp() {
//   const [users,setUsers] = useState([]);
//   useEffect(() => {
//     fetchUsers()
//   },[])

// async function fetchUsers() {
//   const usersData = await getDocs(collection(db, "ClinicLocation"))
//   console.log('Mukesh');
//   usersData.forEach(function (doc, idx){
//     console.log("documents", doc.data());
//   })
// }
// //     const [brand, setBrand] = useState("Ford");
// //   const [model, setModel] = useState("Mustang");
// //   const [year, setYear] = useState("1964");
// //   const [color, setColor] = useState("red");

// //   const updateUser = () => {
// //     setColor('Blue')
// //   }
  
// //   return (
// //     <>
// //       <h1>My {brand}</h1>
// //       <p>
// //         It is a {color} {model} from {year}.
// //       </p>
// //       <button type="button" onClick={updateUser}>Blue</button>
// //     </>
// //   )

// // const [car, setCar] = useState({
// //     brand: "Ford",
// //     model: "Mustang",
// //     year: "1964",
// //     color: "red"
// //   });

// //   const updateYear = () => {
// //     setCar(previousState => {
// //       return { ...previousState, year: "1984", color: "blue", brand: "Honda", model: "city"}
// //     });
// //   }
// {users.map(function (doc, idx) {
//   return (
//     <>
//       {/* <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//       <button type="button" onClick={updateYear}>submit</button> */}
//       {users.doc.name ? <h3 className="Sub-content">{users.doc.name}</h3> : ""}
//       {users.doc.address ? <h4 className="Sub-text">{users.doc.address}</h4> : ""}
//     </>
//   )
//     })}
// // return (
// //     <div className="App">
// //       <button className='btn btn-primary'>Click here</button>
// //     </div>
// //   );
//   }

// import  React, { useState , useEffect } from 'react'

// export const Mapp = () => {

//     var [date,setDate] = useState(new Date());
    
//     useEffect(() => {
//         var timer = setInterval(()=>setDate(new Date()), 1000 )
//         // return function cleanup() {
//         //     clearInterval(timer)
//         // }
    
//     });

//     return(
//         <div>
//             {/* <p> Time : {date.toLocaleTimeString()}</p> */}
//             <p> Date : {date.toLocaleDateString()}</p>

//         </div>
//     )
// }

// export default Mapp;

import React, {useState} from "react"
import { useEffect } from "react"

export function Mapp() {

    const [initialList, setIinitialList] = useState([{id: 1, name:'jim'},{id: 2, name: 'joe'},{id: 3, name: 'beth'}])
    const [list, setList] = useState([])

    const clickHandler = (e, item) => {

        if (e.target.checked) {
            setList(prevState => [
                ...prevState,
                item
            ])
            const newInitialList = initialList.filter((list, index) => list.id !== item.id);
            setIinitialList(newInitialList)
        }
    }

    useEffect(() => {
        // Perform whatever you want to do when list changes here
        console.log(list);

    }, [list])

    return (
        <div>
            <ol>
                    {initialList.map((item) => (
                        <li key={item.id}>{item.name}
                        <input type="checkbox" onClick={(e) => clickHandler(e, item)} />
                    </li>))}
            </ol>
      </div>
    );
}