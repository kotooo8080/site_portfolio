import React from 'react';

class PersonalSkills extends React.Component {
    state = {
        progress: 0
    }
    componentDidMount() {
        let count = 1;
        const interval = setInterval(() => {
            count+=this.props.percent/100;
            this.setState({
                progress : count
            })
            if(count >= this.props.percent) {
                clearInterval(interval);
            }
        }, 20);
    }
    render() {
        return (
            <div className="progressBlock">
                <div id="myProgress">
                   <div id="myBar" style={{width : this.state.progress + '%'}}></div>
                </div>
            </div>
        )
    }
}

export default PersonalSkills;