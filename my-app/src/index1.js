import React from "react"
import ReactDOM from "react-dom"
import pic from "./images/react-logo.png";

// Step 1: Writing JSX inside a variable but it isn't efficient bcoz we cannot reuse this code
/*
const page = (
    <div>
        <img src={pic} alt="" width="60px" height="70px"/>
        <h1>Fun Facts About React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walker</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

console.log(page)
document.getElementById("root").append(page)
*/

// Step 2: Is Creating React Componenets

function TemporaryName() {
    return (
        <div>
            <img src={pic} alt="" width="60px" height="70px"/>
            <h1>Fun Facts About React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walker</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>

    )
}




ReactDOM.render(
    <TemporaryName />,
    document.getElementById("root")
)