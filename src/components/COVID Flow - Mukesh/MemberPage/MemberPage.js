import React, { useState, useRef } from "react";
import './MemberPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Member() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [file, setFile] = useState([]);
  const inputFile = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,gender,age)
    }

    const handleChange = e => {
        setFile([...file, e.target.files[0]]);
      }

      function FindAge() {
        var day = document.getElementById("dob").value;
        var DOB = new Date(day);
        var today = new Date();
        var Age = today.getTime() - DOB.getTime();
        Age = Math.floor(Age / (1000 * 60 * 60 * 24 * 365.25));
        document.getElementById("age").value = Age;
    }
    return (
        <div class="container">
            <h1 className="Member-Header"> Member Details</h1>
            <div class="bg1_container">
                <h1 className="Header1">Let's add your Details</h1>
                <div className="bg-member-bg">
                    <div className="bg_member">
                        <form action="/action_page.php" className="form" onSubmit={handleSubmit}>
                            <label for="fname" className="label">Full Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Enter your name" required value={name} onChange={(e) => setName(e.target.value)} />

                            <label for="country" className="label">Gender</label>
                            <select id="country" name="country" value={gender} required onChange={(e) => setGender(e.target.value)}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>

                            <label for="dob" className="label">DOB</label>
                            <input type="date" id="dob" required/>

                            <label for="age" className="label">Age</label>
                            <input type="number" className="Number_cont" id="age" onMouseEnter={FindAge} placeholder="Enter your age" value={age} required onChange={(e) => setAge(e.target.value)}/>

                            <label for="message" className="label">Verification ID</label>
                            <input type="file" onChange={handleChange} ref={inputFile} />

                            <button className="Submit">Add Details</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Member;