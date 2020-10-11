import React from 'react';
import logo from "../images/logo.png";

export default function Header() {

    return (
        <div className="headerBar">
            <img src={logo} alt="logo"/>
            <div className="headerMenu">
                <a className="main" href="">home</a>
                <a className="usual" href="">about</a>
                <a className="usual" href="">info</a>
                <a className="usual" href="">process</a>
                <a className="usual" href="">projects</a>
                <a className="usual" href="">contact</a>
            </div>
        </div>

    );
}