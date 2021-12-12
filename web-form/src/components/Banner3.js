import React from 'react';
import Bannerthird from '../imgs/Bannerthird.jpeg';

function Banner3(){
    return(
        <div  className ="imgage-style" style={{ backgroundImage: `url(${Bannerthird})`, width: "1500px", height: "500px" }}>
<div className="box">
<p className="paragraph-alignment">
We <a className="link-style" href="">obsess</a> over the <a className="link-style" href="">details</a> and
spend hours <a className="link-style" href="">hand-crafting</a> the
user experience and design. Our
success lies in <a className="link-style" href="">delighting</a> you
and your customers.
</p>
<button type="submit" className="button">View Website</button>
</div>

        </div>
    )
}

export default Banner3;