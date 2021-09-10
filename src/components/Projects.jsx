import React from 'react';
import pr2 from "../images/pr2.png";
import pr3 from "../images/pr3.png";
import pr4 from "../images/pr4.png";
import pr5 from "../images/pr11.png";
import pr6 from "../images/pr6.png";
import pr7 from "../images/pr7.png";
import pr9 from "../images/pr9.png";
import pr10 from "../images/pr10.png";

const ref = React.createRef();
class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
            toggleOn: !state.toggleOn
        }))
        if(this.state.toggleOn) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
            const div = ref.current;
            div.style.height = '580px';
            console.log(div);
        }
        else {
            ref.current.lastChild.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
            const div = ref.current;
            div.style.height = '1000px';
            console.log(div);
        }
    }
    render () {
        return(
            <div ref={ref} className="sites">
                <img src={pr4} alt=""/>
                <img src={pr2} alt=""/>
                <img src={pr6} alt=""/>
                <img src={pr10} alt=""/>
                <img src={pr5} alt=""/>
                <img src={pr3} alt=""/>
                <img src={pr7} alt=""/>
                <img src={pr9} alt=""/>
                <img className={this.state.toggleOn ? 'btn_show' : 'none'} src={pr4} alt=""/>
                <img className={this.state.toggleOn ? 'btn_show' : 'none'} src={pr2} alt=""/>
                <img className={this.state.toggleOn ? 'btn_show' : 'none'} src={pr6} alt=""/>
                <img className={this.state.toggleOn ? 'btn_show' : 'none'} src={pr10} alt=""/>
                <img className={this.state.toggleOn ? 'btn_show' : 'none'} src={pr5} alt=""/>
                <img className={this.state.toggleOn ? 'btn_show' : 'none'} src={pr3} alt=""/>
                <img className={this.state.toggleOn ? 'btn_show' : 'none'} src={pr7} alt=""/>
                <img className={this.state.toggleOn ? 'btn_show' : 'none'} src={pr9} alt=""/>
                <button className="btn" onClick={this.handleClick}>load more projects</button>
            </div>
        )
    }
}
export default Projects;
