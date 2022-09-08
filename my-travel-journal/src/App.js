// import React from "react";
import datas from "./data"
import Travel from "./components/Travel";
import Navbar from "./components/Navbar";

import "./style.css"


export default function App() {

   const travel = datas.map(data => {
     return (
        <Travel
        data = {data}
        />
     )
   })




   return (
     <div>
            <Navbar />
            <section className="travels-list">
                  {travel}
            </section>
    </div>
      
   )
}




