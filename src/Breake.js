import React from "react";


export default function Breake({onChangeTimer, onToggleClick, min, sec, startstop, onMinChange}) {

  return (
    <div className='container text-center'>
      <form action="https://pikabu.ru/" target="_blank">
         <button type='submit'
 className="mtransition duration-500 ease-in-out  
       bg-green-700 hover:bg-green-400 mt-10 rounded-lg p-3 
       text-7xl font-bold font-color-white text-white">РАБОТА НЕ ВОЛК</button></form>
        <h1 className="text-9xl text-white font-bold">
          {min}:{sec < 10 ? `0${sec}` : sec}
      </h1>

      <h1 className="py-1 font-bold text-white text-lg">
        Сколько времени ты собрался отдыхать?
      </h1>
      <select className="border-2 border-green-700 rounded-md p-1 text-green-700 text-lg" 
      onChange={onMinChange}>
              <option className="text-green-700 text-lg">5</option>
              <option className="text-green-700 text-lg">10</option>
              <option className="text-green-700 text-lg">15</option>
              
      </select>
      
      <div className="flex justify-center space-x-6">
      <button className="mtransition duration-500 ease-in-out  
       bg-green-700 hover:bg-green-400 mt-10 rounded-lg p-3 
       text-3xl font-bold font-color-white text-white" 
      onClick={onToggleClick}>{startstop ? "ХВАТИТ" : "РЕЛАКСИРОВАТЬ"}</button>

      <button className="mtransition duration-500 ease-in-out  
       bg-green-700 hover:bg-green-400 mt-10 rounded-lg p-3 
       text-3xl font-bold font-color-white text-white" 
      onClick={onChangeTimer}>ЕЩЕ ХОЧУ</button>
     
     </div>

         
    </div>
  );
};
