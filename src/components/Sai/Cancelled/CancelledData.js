import React from "react";

function CancelledData(props) {
    return (
        <>

            <div className="passed_heading">
                {props.data.name1 ? <h1 className="name">Name:{props.data.name1}</h1> : ""}

                {props.data.test ? <h1 className="test">Test:{props.data.test}</h1> : ""}
                {props.data.date2 ? <h1 className="date">Date:{props.data.date2}</h1> : ""}
                {props.data.service ? <h1 className="service">Service:{props.data.service}</h1> : ""}

                {props.data.location6 ? <h1 className="location">Location:{props.data.location6}</h1> : ""}
                {props.data.status ? <h1 className="status">Status:{props.data.status}</h1> : ""}

                <br></br>
                <br></br>
                <a href="https://bitcare-web-application.vercel.app/auth"><h6 className="ad">Thankyou visit again</h6></a>
            </div>
        </>
    );
}

export default CancelledData;
