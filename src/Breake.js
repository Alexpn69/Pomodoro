import React, {useState} from "react";
import Modal from "./modal";
import Button from "./button";
import BigButton from "./bigButton";


export default function Breake({onChangeTimer, onToggleClick, min, sec, startstop, onMinChange}) {

  const [modalActive, setModalActive] = useState(false)
  let settingMinute = [5, 10, 15]
  let restWhat = 'отдыхать'

  return (
    <div className='container text-center'>
      <form action="https://pikabu.ru/" target="_blank">
      <BigButton>РАБОТА НЕ ВОЛК</BigButton>
      </form>
        <h1 className="text-9xl text-white font-bold">
          {min}:{sec < 10 ? `0${sec}` : sec}
      </h1>   

<Modal 
         active={modalActive} 
         setActive={setModalActive} 
         onMinChange={onMinChange} 
         settingMinutes={settingMinute}
         doWhat={restWhat} 
         /> 


      <div className="flex justify-center space-x-6">
         
     <Button onClick={onToggleClick}>{startstop ? "ХВАТИТ" : "РЕЛАКСИРОВАТЬ"}</Button>

     <Button onClick={onChangeTimer}>ЕЩЕ ХОЧУ</Button>

     </div>

         
    </div>
  );
};
