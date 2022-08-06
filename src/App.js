import { useState, useEffect } from 'react';
import Timer from './Timer';
import Breake from './Breake';
import Todo from './ToDoList';
import Modal from './modal';
// import Button from './button';



function App() {
 const [breake, setBreake] = useState(false)
 const [todo, setTodo] = useState(false)  

 const [minutes, setMinutes] = useState(15);
 const [seconds, setSeconds] = useState(0);
 const [startstop, setStartstop] = useState(false);
 
const [modalActive, setModalActive] = useState(false)


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

//  function handleSetTodo(){
//   setTodo(true)
//  }

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


  <button className="mtransition duration-500 ease-in-out  
       bg-green-700 hover:bg-green-400 mt-10 rounded-lg p-3 
       text-3xl font-bold font-color-white text-white" 
             onClick={handleChangeBrake}>ЗА РАБОТУ</button>
  
  
  
  </div>
  </div>
  </>) 
   } 
 
 
 else {
   if(!todo){
      return (<>

<div className="bg-red-700 min-h-screen justify-center text-center">
      <div className = "max-w-2xl min-h-screen mx-auto">

          
               <form action="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank">
         <button type='submit'
 className="mtransition duration-500 ease-in-out  
       bg-green-700 hover:bg-green-400 mt-10 rounded-lg p-3 
       text-7xl font-bold font-color-white text-white">POMODORO TIMER</button></form>
         
         <Modal active={modalActive} setActive={setModalActive}> 
<h1 className="py-1 font-bold text-white text-lg">
        Сколько времени ты собрался работать?
      </h1>
      <select className="border-2 border-green-700 rounded-md p-1 text-green-700 text-lg" 
      onChange={handleMinChange}>
              <option className="text-green-700 text-lg">15</option>
              <option className="text-green-700 text-lg">20</option>
              <option className="text-green-700 text-lg">25</option>
              <option className="text-green-700 text-lg">30</option>
              <option className="text-green-700 text-lg">35</option>
      </select>
</Modal>

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

         <button className="mtransition duration-500 ease-in-out  
       bg-green-700 hover:bg-green-400 mt-10 rounded-lg p-3 
       text-3xl font-bold font-color-white text-white" 
          onClick={handleChangeTimer}>УЖЕ УСТАЛ?</button>

          {/* <Button 
          onChangeTimer={handleChangeTimer}>УЖЕ УСТАЛ?</Button> */}


          <button className="mtransition duration-500 ease-in-out  
       bg-green-700 hover:bg-green-400 mt-10 rounded-lg p-3 
       text-3xl font-bold font-color-white text-white" 
          onClick={() => setTodo(true)}>СПИСОК ДЕЛ</button>
{/* 
          <Button 
          onSetTodo={handleSetTodo}>Список дел</Button> */}

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
      <button className="mtransition duration-500 ease-in-out  
       bg-green-700 hover:bg-green-400 mt-10 rounded-lg p-3 
       text-3xl font-bold font-color-white text-white" 
             onClick={() => setTodo(false)}>ХВАТИТ ПЛАНИРОВАТЬ</button>
      </div>
      </div>)
   }
 }
}
   


export default App;
