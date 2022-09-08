import React from "react";
// import data from "../data";
import locationPic from "../images/location.png"

export default function travel(props) {

    // structure of the website
    const location = props.data.location
    const capLocation = location.toUpperCase()
    
   


    return (
        
        <div className="card">
            <img src={props.data.imageUrl} alt="" className="card--img" />
            
            <div>
            
                <img src={locationPic} alt="" className="card--location" />
                <h6 className="location">{capLocation}</h6>
                <p className="card--map">View on Google Maps</p>
                <h2 className="card--title">{props.data.title}</h2>
                <p className="card--date"><strong>{props.data.startDate}-{props.data.endDate}</strong></p>
                <p className="card--des">{props.data.description}</p>
                
            </div>
            


        </div>
        
        
    )

}