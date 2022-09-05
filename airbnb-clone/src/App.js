import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import girl from "./images/girl.png";

import cardData  from "./data"


import "./style.css"

export default function App() {
    const cardElements = cardData.map(card => {
        return ( <Card 
            key={card.id}
            // {...card}
            card = {card}

            // img={card.coverImg}
            // rating={card.stats.rating}
            // reviewCount={card.stats.reviewCount}
            // country={card.location}
            // title={card.title}
            // price={card.price}
            // openSpots={card.openSpots}
            
        />
        )
    })






    return(
        <div>
            <Navbar/>
            <Hero/>
            <section className="cards-list">
                {cardElements}
            </section>
            

           
            
        </div>
    )
}

/* <Card
             img={girl}
             rating="5.0"
             reviewCount={6}
             country="USA"
             title="Learn wedding photography"
             price={125}
            /> */