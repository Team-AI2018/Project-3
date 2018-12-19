import React from 'react';
// import './css/Video.css'
class Video extends React.Component{

    render(){
        return(

            <div className='bg-video'>
                <video className='bg-video_content' autoPlay muted loop>
                <source src='/People Eating Out.mp4' type='video/mp4'/> 
                Your browser is not supported!
                </video>
            </div>

            );
    }

}

export default Video;