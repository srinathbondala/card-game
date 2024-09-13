import React from "react";
import "../App.css"
import { cardData } from "./Child";

 const Card:React.FC<cardData> = ({ value, on, blocked, handleClick, cardIndex })=>{
  let style = on? "#000000":"#FFFFFF"
  if(blocked){
    style="#888"
  }
  return (
    <div className="box"
        style={{backgroundColor:style}}
        onClick={()=>handleClick && cardIndex !== undefined && handleClick(cardIndex)}>{value}
       </div>
  )
}
export default Card;