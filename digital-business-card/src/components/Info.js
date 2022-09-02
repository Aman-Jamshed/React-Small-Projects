import React from "react";
import pic from "../images/me.jpg"

export default function Info() {
    return (
        <div>
        <img src={pic} alt="" className="profile-pic"/>
        <h2>Aman Jamshed</h2>
        <h4>Frontend Developer</h4>
        <h6>amanjamshed.com</h6>
        <button><i class="fa-brands fa-linkedin">LinkedIn</i></button>
        <button><i class="fa-regular fa-envelope"></i></button>


        </div>
    )
}