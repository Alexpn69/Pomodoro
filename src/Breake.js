import React, {useState} from "react";
import Modal from "./Modal";
import Button from "./Button";
import BigButton from "./BigButton";
import Toggle from "./Toggle";
import { secondsToString } from "./utils/secondsToString";



export default function Breake({onChangeTimer, onToggleClick, sec, startstop, onMinChange}) {

  const [modalActive, setModalActive] = useState(false)
  const settingMinute = [300, 600, 900]
  const restWhat = 'отдыхать'
  

  return (
    <>
    <div className='container text-center'>
      <form action="https://pikabu.ru/" target="_blank">
      <BigButton>РАБОТА НЕ ВОЛК</BigButton>
      </form>
      <Toggle />

<Modal 
         active={modalActive} 
         setActive={setModalActive} 
         onMinChange={onMinChange} 
         settingMinutes={settingMinute}
         doWhat={restWhat} 
         /> 
<h1 className="text-9xl text-white font-bold m-3">
{secondsToString(sec)}
      </h1>  

      <div className="flex justify-center space-x-6">
         
     <Button onClick={onToggleClick}>{startstop ? "ХВАТИТ" : "РЕЛАКСИРОВАТЬ"}</Button>

     <Button onClick={onChangeTimer}>ЕЩЕ ХОЧУ</Button>

     </div>

         
    </div>
    </>
  );
};
