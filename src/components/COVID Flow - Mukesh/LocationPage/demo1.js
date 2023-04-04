// import React from "react";
// import { Dtdata } from './data';
// import './demo1.css'
// import './LocationPage.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from "react";
// import { useEffect } from "react";
// import { getDocs, collection } from "firebase/firestore";
// import { db } from "../../../index";
// import { data } from "jquery";


// function Demo(props) {
//     const [users,setUsers] = useState([]);
//     useEffect(()=>{
//         const getUsers=async()=>{
//           await getDocs(collection(db, "ClinicLocation")).then((querySnapshot) => {
//             querySnapshot.forEach(element => {
//                 var data = element.data();
//                 console.log('data: ',data);
//                 setUsers(arr => [...arr , data]);
//             });
//         })
//         }
//         getUsers();
//       },[]) 

// const users1 = users.sort((a, b) => Number(b.active) - Number(a.active));



//   useEffect(() => {
//     fetchUsers()
//   },[])


//   async function fetchUsers(){
//     console.log("Mukesh")
//     const usersData = await getDocs(collection(db, "ClinicLocation"))
//     setUsers(await getDocs(collection(db, "ClinicLocation")))
//     users.forEach(function (doc, idx){
//       console.log("documents", doc.data());
//     })
//   }
//   return (
//     <React.Fragment>
//       <div class="container">
//         <h1 className="location-Header">Choose your location</h1>
//         <div class="row gy-4 row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">
//               {Dtdata.map(function (doc, idx) {
//                 return (
//                   <>
//                             <div class="col">
//                             {doc.timeslot1 ? <button type="button" className="btn-time" id="time">{doc.timeslot1}</button> : ""}
//                             </div>
                        
//                   </>
//                 )
//               })}
//               </div>
//       </div>
//     </React.Fragment>
//   );
// }

// export default Demo;

// export default function Demo() {
//     const [posts, setPosts] = useState([]);
//     const fetchPost = async () => {
//     const response = await fetch(
//         "https://api.chucknorris.io/jokes/random"
//       );
//      const data = await response.json();
//       setPosts(data);
//     };
  
//     useEffect(() => {
//       fetchPost();
//     }, []);
//     return (
//       <div className="App">
//       <p> {posts.value} </p>
//         <button onClick={fetchPost}> get new joke </button>
//       </div>
//     );
//   }

import React, { useState } from "react";
import ReactDOM from "react-dom";
import ConfirmBox from "react-dialog-confirm";
import "../node_modules/react-dialog-confirm/build/index.css"; // required

const App5 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const handleConfirm = () => {
    alert("yes button clicked");
  };
  const handleCancel = () => {
    alert("no button clicked");
  };

  return (
    <>
      <button onClick={handleClose}>open confirm box</button>

      <ConfirmBox // all props are required
        icon="https://img.icons8.com/clouds/100/000000/vector.png"
        label={{
          text: "Are you sure you want to delete this element?",
          confirm: "yes",
          cancel: "no"
        }}
        isOpen={isOpen} // to close or open dialog (true | false)
        onClose={handleClose} // to close or open dialog
        onConfirm={handleConfirm} // return yes : if button yes clicked
        onCancel={handleCancel} // return no : button no clicked
      />
    </>
  );
};

export default App5;