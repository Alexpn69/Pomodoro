import React from "react";


export default function Timer ({onMinChange, onStopClick, onToggleClick, min, sec, startstop, setActive}){
 
  return (
    <div> 
        <h1 className="text-9xl text-white font-bold">
        {min}:{sec < 10 ? `0${sec}` : sec}
      </h1>
          <div>
      <button className="mtransition duration-500 ease-in-out  
       bg-green-700 hover:bg-green-400 mt-10 rounded-lg p-1
       text-lg font-bold font-color-white text-white"  
      onClick={() => setActive(true)}>настройся</button>
      </div>
      <div className="flex justify-center space-x-6">
      
      <button className="mtransition duration-500 ease-in-out  
       bg-green-700 hover:bg-green-400 mt-10 rounded-lg p-3 
       text-3xl font-bold font-color-white text-white"  
      onClick={onToggleClick}>{startstop ? "ПРИТОРМОЗИ" : "ПОЕХАЛИ"}</button>

      <button className="mtransition duration-500 ease-in-out  
       bg-green-700 hover:bg-green-400 mt-10 rounded-lg p-3 
       text-3xl font-bold font-color-white text-white" 
      onClick={onStopClick}>ДАВАЙ ВСЕ ПО НОВОЙ</button>
     
     </div>

     
      
    </div>
  );
};
