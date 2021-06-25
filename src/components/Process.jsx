import React from 'react';
import projects from "../images/projects.png";
import reviews from "../images/reviews.png";
import heart from "../images/heart.png";

export default function Process () {

    return (
        <div className="process">
            <div className="pr1">
                <img src={projects} alt=""/>
                <p>5 completed projects</p>
            </div>
            <div className="pr2">
                <img src={reviews} alt=""/>
                <p>4 good reviews</p>
            </div>
            <div className="pr3">
                <img src={heart} alt=""/>
                <p>5 satisfied customers</p>
            </div>
        </div>
    )
}