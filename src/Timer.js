import React from "react";
import Button from "./Button";
import { secondsToString } from "./utils/secondsToString";


export default function Timer ({onStopClick, onToggleClick, sec, startstop}){
 
  return (
    <div> 
        <h1 className="text-9xl text-white font-bold m-3">
               {secondsToString(sec)}
      </h1>
     
      <div className="flex justify-center space-x-6">
      
      <Button onClick={onToggleClick}>{startstop ? "ПРИТОРМОЗИ" : "ПОЕХАЛИ"}</Button>
     
     <Button onClick={onStopClick}>ДАВАЙ ВСЕ ПО НОВОЙ</Button>
     
     </div>    
      
    </div>
  );
};
