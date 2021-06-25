import React from 'react';

let refer;
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        refer = document.getElementById('contact_id');
        console.log(refer);
        refer.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        })
    }

    render() {
        return (
            <div className="home">
            <h1>Developer portfolio site</h1>
            <h5>I carry out layout and development of sites, 
                as well as revision of existing projects,
                adding full functionality to the site!
             </h5>
             <button onClick={this.handleClick}>contact</button>
        </div>
    )
}
}
export default Home;