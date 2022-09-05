import React from "react";
import star from "../images/star.png"
// import girl from "../images/girl.png";

export default function Card(props) {
  console.log(props)
  // let badgeText
  // if(props.openSpots === 0) {
  //   badgeText = "SOLD OUT"
  // }else if(props.country === "Online") {
  //   badgeText = "ONLINE"
  // }


  // return (  
  // <div className="card">
  //       {badgeText && <div className="card--badge">{badgeText}</div>}


  //       <img src={props.img} alt="" className="card--image"/>

  //       <div className="card--stats">
  //            <img src={star} alt="" className="card--star"/> 
  //            <span>{props.rating}</span>
  //            <span className="gray">({props.reviewCount}). </span>
  //            <span className="gray">{props.country}</span>
  //       </div>
  //       <p className="card--title">{props.title}</p>
  //       <p className="card-price"><strong>From ${props.price}</strong> / person </p>

  //   </div>


  let badgeText
  if(props.card.coverImg === 0) {
    badgeText = "SOLD OUT"
  }else if(props.card.location === "Online") {
    badgeText = "ONLINE"
  }


  return (  
  <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}


        <img src={props.card.coverImg} alt="" className="card--image"/>

        <div className="card--stats">
             <img src={star} alt="" className="card--star"/> 
             <span>{props.card.stats.rating}</span>
             <span className="gray">({props.card.stats.reviewCount}). </span>
             <span className="gray">{props.card.location}</span>
        </div>
        <p className="card--title">{props.card.title}</p>
        <p className="card--price"><strong>From ${props.card.price}</strong> / person </p>

    </div>
  )
    

}



        
