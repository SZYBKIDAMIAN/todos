import React from 'react';
import {Link} from 'react-router-dom'
const Intro = () => {
    return ( 
        <div className="intro">
        <h1 className='intro-text'>Masz już pomysł na dzień?</h1>
        <div className="holder">
        <img src='/image.png' alt="Failed to load an image" className='intro-img'></img>
        <Link to='/home'><button className='start'>Zaczynajmy!</button></Link>
        </div>
        <div className='curved'>
    <svg className='jeden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#1f1f1f" fill-opacity="1" d="M0,128L60,128C120,128,240,128,360,144C480,160,600,192,720,218.7C840,245,960,267,1080,256C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg>
<svg className='dwa' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#49a7ff" fill-opacity="1" d="M0,128L60,128C120,128,240,128,360,144C480,160,600,192,720,218.7C840,245,960,267,1080,256C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg>

        </div>
        </div>
    );
} 
export default Intro;
