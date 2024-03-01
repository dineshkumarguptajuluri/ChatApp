import React, { useState } from 'react'
import '../Styles/Vit.css'
import { VitData } from "../Data/VitData";
import LA from "../img/LA.png"
import RA from "../img/RA.png"
const Vit = () => {

  const [Selected,setSelected]=useState(0);
  const vLength=VitData.length; 
  return (
    <div className="vit">
        <div className="left-v">
            <span className='text'>VIT</span>
            <span>About Vit</span>
            <span style={{color:'orangered'}}>
            {VitData[Selected].name}
            </span>
            <span>
              {VitData[Selected].info}
            </span>
        </div>
        <div className="right-v">
          <div></div>
          <div></div>
          <img src={VitData[Selected].image} alt="" />
          <div className="arrows">
            <img
            onClick={()=>Selected===0?setSelected(vLength-1):setSelected((prev)=>prev-1)}
            src={LA} alt=""/>
            <img 
            onClick={()=>Selected===vLength-1?setSelected(0):setSelected((prev)=>prev+1)}
            src={RA} alt=""/>
          </div>
        </div>
    </div>
  )
}

export default Vit