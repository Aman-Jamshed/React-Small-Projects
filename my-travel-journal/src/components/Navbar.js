import React from "react";
// import fill from "../images/fill.png"
// import path from "../images/Path.png"
import earth from "../images/earth.svg"
import "../style.css"



export default function Navbar() {
    return (
        <nav>
            <img src={earth} alt="" className="nav--logo"/> 
            {/* <img src={path} alt="" className="nav--path"/> */}
            <h3 className="header">My travel journal</h3>
        </nav>
    )
}