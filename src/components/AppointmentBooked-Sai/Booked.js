import React from "react";
import './Booked.css';
import { NavLink } from 'react-router-dom';


function Booked() {
    return (
        <div class="abcd">
            <div class="main">
                <header class="header">

                    <h2>Friday, 8:30AM</h2>&nbsp;&nbsp;
                    <h2>Dec 30</h2>
                </header>


                <div class="image">
                    <img src="../assets/Victoria.png" className="Victoria" /></div>

                <div class="details">
                    <h1>Primary Care Visit</h1>
                    <h2>Annual Physical</h2>
                    <h3>Dr.Victoria</h3>


                    <h5>texas</h5>        </div>

                <footer class="footer">
                    <NavLink to='/details'><button class="button5">Show Details</button></NavLink>
                </footer>


            </div>
            <br></br>


            <div class="main2">
                <header class="header2">

                    <h2>Saturday, 10:30AM</h2>&nbsp;&nbsp;
                    <h2>Dec 10</h2>



                </header>


                <div class="image2">
                    <img src="../assets/Lauren.png" className="Lauren2" /></div>

                <div class="details2">
                    <h1>Acute Care</h1>
                    <h2>Annual Physical</h2>
                    <h3>Dr.Lauren</h3>


                    <h5>Hensley</h5>        </div>

                <footer class="footer2">
                    <button>Show Details</button>
                </footer>


            </div>

            <br></br>
            <div class="main3">
                <header class="header3">

                    <h2>Friday, 8:30AM</h2>&nbsp;&nbsp;
                    <h2>Dec 30</h2>
                    <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="button3">Passed</button>
                </header>


                <div class="details3">
                    <h1>Primary Care Visit</h1>
                    <h2>Annual Physical</h2>
                    <h3>Dr.Victoria</h3>


                    <h5>texas</h5>        </div>

                <footer class="footer3">
                    <button class="button6">Show Details</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="button7">Another Time</button>
                </footer>


            </div>

            <br></br>
            <div class="main4">
                <header class="header4">

                    <h2>Friday, 8:30AM</h2>&nbsp;&nbsp;
                    <h2>Dec 30</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="button4">Cancelled</button>


                </header>
                <div class="details4">
                    <h1>Primary Care Visit</h1>
                    <h2>Annual Physical</h2>
                    <h3>Dr.Victoria</h3>


                    <h5>texas</h5>        </div>

                <footer class="footer4">
                    <button class="button8">Show Details</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="button9">Another Time</button>
                </footer>

            </div>

        </div>

    );
}

export default Booked;