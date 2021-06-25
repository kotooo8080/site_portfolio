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
        /*super позволяет получить доступ к this.props в конструкторе
        конструктор дочернего класса не может использовать this 
        пока не будет вызван вызов super()*/
        super(props);
        this.state = {toggleOn: false};

        /*для работы this в колбэке
        явно привязываем this значение к функции*/
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        //устанавливаем состояние для кнопки(если true, то ставим false)
        this.setState(state => ({
            toggleOn: !state.toggleOn
        }))
        //определяем тип скролла, если div открыт полностью, то прокручиваем до начала блока, если открыт не полностью, то 
        //прокручиваем к концу
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
            /*Устанавливаем ссылку на блок, чтобы добавить ему скролл */
            <div ref={ref} className="sites">
                <img src={pr4} alt=""/>
                <img src={pr2} alt=""/>
                <img src={pr6} alt=""/>
                <img src={pr10} alt=""/>
                <img src={pr5} alt=""/>
                <img src={pr3} alt=""/>
                <img src={pr7} alt=""/>
                <img src={pr9} alt=""/>
                {/* Устанавливаем класс для изображения в зависимости от нажатия кнопки */}
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