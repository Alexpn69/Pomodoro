import React, {useState} from "react";
import Modal from "./Modal";
import Button from "./Button";
import BigButton from "./BigButton";
import Toggle from "./Toggle";



export default function Breake({onChangeTimer, onToggleClick, min, sec, startstop, onMinChange}) {

  const [modalActive, setModalActive] = useState(false)
  // const settingMinute = [{name: 5, count: 300}, {name: 10, count: 600}, {name: 15, count: 900}]
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
{(sec-sec%60)/60}:{sec%60 < 10 ? `0${sec%60}` : `${sec%60}`}
      </h1>  

      <div className="flex justify-center space-x-6">
         
     <Button onClick={onToggleClick}>{startstop ? "ХВАТИТ" : "РЕЛАКСИРОВАТЬ"}</Button>

     <Button onClick={onChangeTimer}>ЕЩЕ ХОЧУ</Button>

     </div>

         
    </div>
    </>
  );
};
