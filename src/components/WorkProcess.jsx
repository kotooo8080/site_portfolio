import React from 'react';
import video2 from './work_video.mp4';

class WorkProcess extends React.Component {
    render() {
        return (
           <div className="work about">
               <h2>Work process</h2>
               <h5>When I write my projects, I always try to add comments and make the code easy to 
                   read and understand. I am attentive to detail and strive to write beautiful code. 
                   I'm just learning so far, so I hope this won't be a problem for you.
               </h5>
               <video width="700" loop autoPlay>
                   <source src={video2} type="video/mp4"></source>
               </video>
            </div>
        )
    }
}

export default WorkProcess;