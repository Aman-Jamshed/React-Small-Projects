import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import girl from "./images/girl.png";

import "./style.css"

export default function App() {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Card
             img={girl}
             rating="5.0"
             reviewCount={6}
             country="USA"
             title="Learn wedding photography"
             price={125}
            />
        </div>
    )
}