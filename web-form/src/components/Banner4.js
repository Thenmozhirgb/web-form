import React from 'react';
import Bannerfour from '../imgs/Bannerfour.jpeg';

function Banner4(){
    return(
        <div className="banner4-style">

<h1 className="Heading-style"> We let our work <a className="link-style" target="_blank" href="">speak</a> for us.</h1>
<img src={Bannerfour} style={{ width: "1000px", height: "500px" }}></img>
<button type="submit" className="button-two">See our works</button>
        </div>
    )
}

export default Banner4;