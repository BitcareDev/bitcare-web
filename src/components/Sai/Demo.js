import { render } from "@testing-library/react";
import sai , { useState } from "react";
import ReactDOM from "react-dom";
import { collection ,  getDocs  } from "firebase/firestore";
import data from '../../Sdata'


// function Timer() {
//     const [count, setCount] = useState(0);
  
//     useEffect(() => {
//       setTimeout(() => {
//         setCount((count) => count + 1);
//       }, 1000);
//     });

    

function Hello( )
{
    
    //const student = [{name:"sai" , email: "sai@gmail.com" } , {email: "mani@gmail.com"}]
    const {date} =data[0];


        const [color, setColor] = useState("red");

   

    
  return(
  <sai.Fragment>
    <h1>Hello {color}</h1>
    <button>show</button>
  </sai.Fragment>
  )
}
export default Hello;

export function HelloWorld()
{
  return(
  <h1>hi hello</h1>
  );
}
