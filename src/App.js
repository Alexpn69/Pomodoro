import { useState, useEffect } from 'react';
import Timer from './Timer';
import Breake from './Breake';
import Todo from './ToDoList';
import Modal from './modal';
import Button from './button';
import BigButton from './bigButton';



function App() {
 const [breake, setBreake] = useState(false)
 const [todo, setTodo] = useState(false)  
 const [minutes, setMinutes] = useState(15);
 const [seconds, setSeconds] = useState(0);
 const [startstop, setStartstop] = useState(false);
 const [modalActive, setModalActive] = useState(false)

 let settingMinutes = [15, 20, 25, 30, 35]
 let doWhat = 'работать'

 useEffect(() => {
   let myInterval = setInterval(() => {
     if (startstop && seconds > 0) {
       setSeconds(seconds - 1);
     }
     if (seconds === 0) {
       if (minutes === 0) {
               handleStopClick()
       } else if (startstop) {
         setMinutes(minutes - 1);
         setSeconds(59);
       }
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
   setMinutes(15);
   setSeconds(0);
   setStartstop(false);
 }

 function handleMinChange(e) {
   setMinutes(e.target.value);
   setSeconds(0)
 }

 function handleChangeTimer(){
  setBreake(true)
  setMinutes(5)
  setSeconds(0)
  setStartstop(false)
 }

 function handleChangeBrake(){
  setBreake(false)
  handleStopClick()
 }


 if(breake){
 

 return (
  <>
  
  <div className="bg-red-700 min-h-screen justify-center text-center">
      <div className = "max-w-2xl min-h-screen mx-auto">
  
 
  <Breake 
  min={minutes}
  sec={seconds}
  startstop={startstop}
  onChangeTimer={handleChangeTimer}
  onToggleClick={handleToggleClick}
  onMinChange={handleMinChange}
  />
  
  <Button onClick={handleChangeBrake}>ЗА РАБОТУ</Button>
  
  </div>
  </div>
  </>) 
   } 
 
 
 else {
   if(!todo){
      return (<>

{/* <div className="container h-screen text-center bg-[url('foto4.jpg')] bg-cover bg-center"> */}

<div className="bg-red-700 min-h-screen justify-center text-center">
      <div className = "max-w-2xl min-h-screen mx-auto">

      
               <form action="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank">
       <BigButton>POMODORO TIMER</BigButton>
       </form>
         
         <Modal 
         active={modalActive} 
         setActive={setModalActive} 
         onMinChange={handleMinChange} 
         settingMinutes={settingMinutes}
         doWhat={doWhat} /> 

       
              <Timer 
         min={minutes}
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

<div className="bg-red-700 min-h-screen justify-center text-center">
      <div className = "max-w-2xl min-h-screen mx-auto">
              
      <Todo />
     
<Button onClick={() => setTodo(false)}>ХВАТИТ ПЛАНИРОВАТЬ</Button>
     
      </div>
      </div>)
   }
 }
}
   


export default App;
