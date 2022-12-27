import React, { useState } from "react";
import './MemberPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Member() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,gender,age)
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

                            <label for="age" className="label">Age</label>
                            <input type="number" id="age" placeholder="Enter your age" value={age} required onChange={(e) => setAge(e.target.value)}/>

                            <label for="message" className="label">Verification ID</label>
                            <input type="text" id="message" placeholder="Message(Optional)" />

                            <button className="Submit">Add Details</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Member;