import React from "react";
import bg from "../assets/images/dark-moon.jpg";
import Carousel from "./Carousel";
import Stars from "./Stars";
import Cloud from "./Cloud";

const songTitle = ["Innovation" , "Algorithm" , "Development"]


export const HomePage = () => {
    return (
        <section className="hp">
            <img className="img-responsive" alt="" src={bg} />
            <div className="vertical-loop" >
                <Carousel songTitle={songTitle} />
            </div>
             <Stars />   
             <Cloud />
        </section>
    )
}