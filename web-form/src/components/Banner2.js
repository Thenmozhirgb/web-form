import React from 'react';
import logo1 from '../imgs/Banner2.jpeg';

function Banner2(){
    return(
        <div className="flex-container">
            <div className="flex-child food-company">
<p>For McDonald's India (North & East), we completely re-thought the website and built a fresh and attractive experience that showcases the McDonald's ethos of "all about feel good".</p>
<button type="submit" className="button">View Website</button>
            </div>
            <div className="flex-child details">
<img src={logo1} className="logo-style" alt="logo1"  />
</div>
        </div>
    )
}

export default Banner2;