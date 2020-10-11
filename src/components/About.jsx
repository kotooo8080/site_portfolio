import React from 'react';
import line from "../images/line.png";

export default function About() {

   return (
       <div className="about">
           <h2>About me</h2>
           <h5>I study at a university on a technical basis, and have been doing programming 
               for several years, I am constantly striving to gain new knowledge and take a 
               responsible attitude to my work.
            </h5>
            <img src={line} alt=""/>
       </div>
   )
}