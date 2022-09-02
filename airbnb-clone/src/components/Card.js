import React from "react";
import star from "../images/star.png"
// import girl from "../images/girl.png";

export default function Card(props) {
  return (  
  <div className="card">
        {<img src={props.img} alt="" className="card--photo"/>}

        <div className="card--stats">
             <img src={star} alt="" className="card--star"/> 
             <span>{props.rating}</span>
             <span className="gray">{props.reviewCount} . </span>
             <span className="gray">{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p><strong>From ${props.price}</strong> / person </p>

    </div>
  )
    

}