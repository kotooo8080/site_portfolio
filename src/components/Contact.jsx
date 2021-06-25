import React from 'react';
import axios from 'axios';

//Подъём состояния - передача состояния в родительский компонент
class Contact extends React.Component {
    //конструктор класса
    constructor(props) {
        //В JavaScript-классах всегда нужно вызывать super при объявлении конструктора подкласса
        //super - позволяет получить доступ к this.props
        super(props);
        //устанавливаю начальное состояние
        this.state = {
            name: '',
            email: '',
            title: '',
            message: ''
        };
        //bind позволяет связать this со значением функции
        //преобразовает функцию в функцию с неименяемым значением this
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //если изменено, то беру значение из элемента формы и записываю его в состояние
    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    onTitleChange(event) {
        this.setState({title: event.target.value})
    }
    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
    //событие по нажатию кнопки  
    handleSubmit(event) {
        event.preventDefault();
        //массив letter объединяет все части письма
        const letter = {
          name: this.state.name,
          email: this.state.email,
          title: this.state.title,
          message: this.state.message
        };
        //API(Application Programming Interface) — это составляющая часть сервера, 
        //которая получает запросы и отправляет ответы
        //создание объекта запроса
        const api = axios.create({baseURL: 'http://localhost:8888/'})
        api.post("portfolio-php/api/contact.php", letter)
        //если удачно
        .then((success) => {
            console.log(success)
        })
      }
   
    render() {
        return (
           <div id="contact_id" className="contact about">
               <h2>Contact</h2>
               <h5>if you want to order a project, you can contact me using 
                   the form below or write to me on one of my social networks. 
                   I will be glad to cooperate with you.
               </h5>
               <form id="mail_form" onSubmit={this.handleSubmit} action="">
                   <input type="text" name="name" value={this.state.name} 
                   onChange={this.onNameChange.bind(this)}
                          placeholder="Your name"></input>
                   <input type="email" name="email" value={this.state.email} 
                   onChange={this.onEmailChange.bind(this)}
                          placeholder="Your Email"></input>
                   <input type="text" name="title" value={this.state.title} 
                   onChange={this.onTitleChange.bind(this)}
                          placeholder="Your title"></input>
                   <textarea name="message" cols="30" rows="10" value={this.state.message} 
                   onChange={this.onMessageChange.bind(this)}
                          placeholder="Your message"></textarea>
                   <button type="submit" name="send">Send message</button>
               </form>
           </div>
        )
    }
}

export default Contact;