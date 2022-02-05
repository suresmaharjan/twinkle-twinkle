import React from 'react';
import Cloud1 from "../assets/images/cloud1.png";
import Cloud2 from "../assets/images/cloud2.png";
// import Cloud3 from "../assets/images/cloud3.png";

const Cloud=()=>{
    return(
        <div className="clouds">
            <img src={Cloud1}  alt="" className="cloud1" />
            <img src={Cloud2}  alt="" className="cloud2" />
        </div>
    )
}

export default Cloud;