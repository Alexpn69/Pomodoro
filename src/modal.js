import React, {useContext} from "react";
import './index.css';
import { Context } from "./Context";

export default function Modal({active, setActive, onMinChange, settingMinutes, doWhat}){
  const {theme} = useContext(Context);
 
return (
<div>

<button className={theme ? "mtransition duration-500 ease-in-out bg-green-700 hover:bg-green-400 mt-10 rounded-lg p-2 text-lg font-bold font-color-white text-white"
                        : "mtransition duration-500 ease-in-out bg-blue-700 hover:bg-blue-400 mt-10 rounded-lg p-2 text-lg font-bold font-color-white text-white"}
                        onClick={() => setActive(true)}>Настройка времени</button> 



    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
    <div className={active ? 'modal__content active' : 'modal'} onClick={e => e.stopPropagation()}>
    <h1 className="py-1 font-bold text-black text-lg">
        Сколько времени ты собрался {doWhat}?
      </h1>
            <select className="border-2 border-black rounded-md p-1 text-black text-lg" onChange={onMinChange}>
            {settingMinutes.map(minute => (<option className="text-black text-lg" value={minute}>{minute/60}</option>))} 
             </select>
    </div>
    </div>
</div>
)}
