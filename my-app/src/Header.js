import React from "react";
import pic from "./images/react-logo.png";


export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="nav-logo" src={pic} alt="" />
                <ul className="nav-item">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

            </nav>
        </header>
    )
}

// export default Header