import React from 'react';
import Bannerseven from '../imgs/Banner7.jpeg';

function Banner7() {
    return (
        <div style={{ backgroundImage: `url(${Bannerseven})`, height: "400px" }}>

            <h1 className="h1-style">Today is great day to build something extraordinary.</h1>
            <div className="flex-container">
                <div className="flex-child box-two">
                    <button type="submit" className="button">Let's Start</button>

                    <p className="paragraph">Missfits is a world-class experience
                    design agency. We handcraft exceptional
                    websites, apps, brand designs, and
digital marketing campaigns.</p>
                </div>
                <div className="flex-child box-one">
                    <h6>Work</h6>
                    <h6>Careers</h6>
                    <h6>Contact</h6>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default Banner7;