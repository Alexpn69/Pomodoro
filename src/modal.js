import React from "react";
import './modal.css'

export default function Modal({active, setActive, onMinChange, settingMinutes, doWhat}){

return (
<div>
    <button className="mtransition duration-500 ease-in-out  
       bg-green-700 hover:bg-green-400 mt-10 rounded-lg p-2
       text-lg font-bold font-color-white text-white"  
      onClick={() => setActive(true)}>настройся</button>

    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
    <div className={active ? 'modal__content' : 'modal'} onClick={e => e.stopPropagation()}>
    <h1 className="py-1 font-bold text-white text-lg">
        Сколько времени ты собрался {doWhat}?
      </h1>
            <select className="border-2 border-green-700 rounded-md p-1 text-green-700 text-lg" onChange={onMinChange}>
            {settingMinutes.map(minute => (<option className="text-green-700 text-lg">{minute}</option>))} 
             </select>
    </div>
    </div>
</div>
)}
