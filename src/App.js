import { useState, useEffect, useContext } from 'react';
import Timer from './Timer';
import Breake from './Breake';
import Todo from './ToDo';
import Modal from './Modal';
import Button from './Button';
import BigButton from './BigButton';
import Toggle from './Toggle';
import { Context } from "./Context";



function App() {
 const [breake, setBreake] = useState(false)
 const [todo, setTodo] = useState(false)  
 const [seconds, setSeconds] = useState(900);
 const [startstop, setStartstop] = useState(false);
 const [modalActive, setModalActive] = useState(false)
 const { theme} = useContext(Context);
 
 const settingMinutes = [900, 1200, 1500, 1800, 2100]
 const doWhat = 'работать'
 const light = "bg-red-700 min-h-screen justify-center text-center"
 const dark = "bg-black min-h-screen justify-center text-center"

useEffect(() => {
  let myInterval = setInterval(() => {
    if (startstop && seconds > 0) {
      setSeconds(seconds - 1);
    }
    if (seconds === 0) {
        handleStopClick()
    }
  }, 1000);
  return () => {
    clearInterval(myInterval);
  };
}); 


 function handleToggleClick() {
   setStartstop(prev => !prev);
 }

 function handleStopClick() {
   setSeconds(900);
   setStartstop(false);
 }

 function handleMinChange(e) {
   setSeconds(e.target.value)
 }

 function handleChangeTimer(){
  setBreake(true)
  setSeconds(300)
  setStartstop(false)
 }

 function handleChangeBrake(){
  setBreake(false)
  handleStopClick()
 }

 if(breake){

 return (
  
  
  <div className={theme ? `${light}` : `${dark}`}>
      <div className = "max-w-2xl min-h-screen mx-auto">
  
 
  <Breake 
  sec={seconds}
  startstop={startstop}
  onChangeTimer={handleChangeTimer}
  onToggleClick={handleToggleClick}
  onMinChange={handleMinChange}
  />
  
<Button onClick={handleChangeBrake}>ЗА РАБОТУ</Button>
  
</div>
</div>
   ) 
} 
 
 
 else {
   if(!todo){ 
      return (<>


<div className={theme ? `${light}` : `${dark}`}> 
      <div className = "max-w-2xl min-h-screen mx-auto">

      
        <form action="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank">
        <BigButton>POMODORO TIMER</BigButton>
        </form>
         
        <Toggle />


         <Modal 
         active={modalActive} 
         setActive={setModalActive} 
         onMinChange={handleMinChange} 
         settingMinutes={settingMinutes}
         doWhat={doWhat} /> 

       
              <Timer 
         sec={seconds}
         onStopClick={handleStopClick}
         onToggleClick={handleToggleClick}
         onMinChange={handleMinChange}
         startstop={startstop}
         setActive={setModalActive}
         />
        <div className="flex justify-center space-x-6">
       
          <Button onClick={handleChangeTimer}>УЖЕ УСТАЛ?</Button>

          <Button onClick={() => setTodo(true)}>СПИСОК ДЕЛ</Button>

         </div>
    </div>
    </div>
    </>
    )
   } 
   
   
   else {
      return (

<div className={theme ? `${light}` : `${dark}`}>
      <div className = "max-w-2xl min-h-screen mx-auto">
              
      <Todo />
     
<Button onClick={() => setTodo(false)}>ХВАТИТ ПЛАНИРОВАТЬ</Button>
     
      </div>
      </div>)
      
   }
 }
}
   


export default App;


