import React from "react";
import Button from "./button";


export default function Timer ({onStopClick, onToggleClick, min, sec, startstop, setActive}){
 
  return (
    <div> 
        <h1 className="text-9xl text-white font-bold">
        {min}:{sec < 10 ? `0${sec}` : sec}
      </h1>
    
      <div className="flex justify-center space-x-6">
      
      <Button onClick={onToggleClick}>{startstop ? "ПРИТОРМОЗИ" : "ПОЕХАЛИ"}</Button>
     
     <Button onClick={onStopClick}>ДАВАЙ ВСЕ ПО НОВОЙ</Button>
     
     </div>    
      
    </div>
  );
};
