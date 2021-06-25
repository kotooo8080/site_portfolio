import React from 'react';
import logo from "../images/logo.png";

let refer;
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(name) {
        console.log(name);
        refer = document.getElementsByClassName(name)[0];
        console.log(refer);
        refer.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }
    render() {
        return (
            <div className="headerBar">
                <img src={logo} alt="logo"/>
                <div className="headerMenu">
                    <button className="main" >home</button>
                    <button onClick={() => this.handleClick('about')} className="usual">about</button>
                    <button onClick={() => this.handleClick('work')} className="usual" >process</button>
                    <button onClick={() => this.handleClick('process')} className="usual" >projects</button>
                    <button onClick={() => this.handleClick('contact')} className="usual" >contact</button>
                </div>
            </div>
        )
    }
}
export default Header;