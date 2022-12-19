import React from "react";
import { NavLink } from 'react-router-dom';

function CardData1(props) {
    return (
        <>
            <div class="abcd">
                <div class="main">
                    <header class="header">

                        {props.data.date ? <span>{props.data.date}</span> : ""}
                        <br></br>
                        {props.data.status ? <span className="ss">&nbsp;&nbsp;{props.data.status}&nbsp;&nbsp;</span> : ""}

                    </header>

                    <div class="image">
                        {props.data.img ? <img src={props.data.img} className="Victoria" /> : ""}
                    </div>

                    <div class="details">
                        {props.data.service ? <h3>{props.data.service}</h3> : ""}

                        {props.data.specialist ? <h3>{props.data.specialist}</h3> : ""}
                        {props.data.provider_name ? <h3>{props.data.provider_name}</h3> : ""}
                        {props.data.location ? <h3>{props.data.location}</h3> : ""}       </div>


                    <footer class="footer">

                        <NavLink to='/details'>{props.data.button1 ? <button >{props.data.button1}</button> : ""}</NavLink>
                        <NavLink to='/details2'>{props.data.button2 ? <button >{props.data.button2}</button> : ""}</NavLink>
                        <NavLink to='/passed'>{props.data.button3 ? <button >{props.data.button3}</button> : ""}</NavLink>
                        <NavLink to='/cancelled'>{props.data.button4 ? <button >{props.data.button4}</button> : ""}</NavLink>


                    </footer>


                </div>

                <br></br><br></br>
            </div>
        </>
    );
}

export default CardData1;
