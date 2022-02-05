import React from "react";
import { IoStarSharp } from 'react-icons/io5';

const Stars = () => {
    function starMaker(){
      let stars=[]
      let count=0;
      while(count <= 70){
        let x=Math.floor(Math.random() * window.innerWidth)
        let y=Math.floor(Math.random() * window.innerHeight)
        let sz=Math.random() * 15
        let dur=Math.random() * 5
        // let ele=React.createElement("i",{className:"starEle" , style:{left:x,top:y , fontSize:sz , animationDuration:`${dur}s`}} , '\u22c6' )
        let ele=<IoStarSharp className="starEle" style={{left:x,top:y,fontSize:sz ,animationDuration:`${dur}s`}} />
        stars.push(ele)

        count++
      }
      return stars;
    }
    const starWorld={
      position:"absolute",
      left:0,
      top:0
    }

    
    return(
        <div style={starWorld}>
          {starMaker()}
        </div>
    )


}
export default Stars;

