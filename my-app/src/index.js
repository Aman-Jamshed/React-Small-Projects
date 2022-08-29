import React from "react";
import ReactDOM  from "react-dom";
import "./style.css"
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

/*
Mini Challenge:
Move the `header` element from Page into its own
component called Header
*/




function Page() {
    return (
        <div>
            < Header />
            < MainContent />
            < Footer />
            
            
        </div>
    )
}

ReactDOM.render(< Page />, document.getElementById("root"))