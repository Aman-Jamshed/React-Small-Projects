import React from "react";
import ReactDOM from "react-dom";

function App() {
    const firstName = "Aman";
    const lastName = "Jamshed";
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "morning"
    } else if(hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
    }else {
        timeOfDay="night"
    }

    return (
        <div>
        <h1>Hello {firstName}  {lastName} ! Good {timeOfDay}</h1>
        <p>It is currently about {new Date().getHours() % 12} o'clock!</p>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))