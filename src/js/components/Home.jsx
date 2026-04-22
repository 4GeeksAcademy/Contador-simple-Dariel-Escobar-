import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "../styles/index.css";


function SecondsCounter(props) {

    const sixDigits = String(props.seconds).padStart(6, "0").split("");

    return (
        <div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>

            {sixDigits.map((digit, index) => (
                <div key={index} className="digit">
                    {digit}
                </div>
            ))}
        </div>
    );
}

export default SecondsCounter;
