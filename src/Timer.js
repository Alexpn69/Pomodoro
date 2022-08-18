import React from "react";
import Button from "./Button";


export default function Timer ({onStopClick, onToggleClick, min, sec, startstop}){
 
  return (
    <div> 
        <h1 className="text-9xl text-white font-bold m-3">
        {(sec-sec%60)/60}:{sec%60 < 10 ? `0${sec%60}` : `${sec%60}`}
{/* {display} */}
      </h1>
     
      <div className="flex justify-center space-x-6">
      
      <Button onClick={onToggleClick}>{startstop ? "ПРИТОРМОЗИ" : "ПОЕХАЛИ"}</Button>
     
     <Button onClick={onStopClick}>ДАВАЙ ВСЕ ПО НОВОЙ</Button>
     
     </div>    
      
    </div>
  );
};
