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
//  const [minutes, setMinutes] = useState(0);
 const [seconds, setSeconds] = useState(900);
 const [startstop, setStartstop] = useState(false);
 const [modalActive, setModalActive] = useState(false)
 const { theme} = useContext(Context);
 
//  const settingMinutes = [{name: 5, count: 300}, {name: 10, count: 600}, {name: 15, count: 900}]
 const settingMinutes = [300, 600, 900]
 const doWhat = 'работать'
 const light = "bg-red-700 min-h-screen justify-center text-center"
 const dark = "bg-black min-h-screen justify-center text-center"

//  useEffect(() => {
//    let myInterval = setInterval(() => {
//      if (startstop && seconds > 0) {
//        setSeconds(seconds - 1);
//      }
//      if (seconds === 0) {
//        if (minutes === 0) {
//                handleStopClick()
//        } else if (startstop) {
//          setMinutes(minutes - 1);
//          setSeconds(59);
//        }
//      }
//    }, 1000);
//    return () => {
//      clearInterval(myInterval);
//    };
//  });

useEffect(() => {
  let myInterval = setInterval(() => {
    if (startstop && seconds > 0) {
      setSeconds(seconds - 1);
    }
    if (seconds === 0) {
        handleStopClick()
    }
  }, 10);
  return () => {
    clearInterval(myInterval);
  };
}); 


 function handleToggleClick() {
   setStartstop(prev => !prev);
 }

 function handleStopClick() {
  //  setMinutes(15);
   setSeconds(900);
   setStartstop(false);
 }

 function handleMinChange(e) {
  //  setMinutes(e.target.value);
   setSeconds(e.target.value)
 }

 function handleChangeTimer(){
  setBreake(true)
  // setMinutes(5)
  setSeconds(900)
  setStartstop(false)
 }

 function handleChangeBrake(){
  setBreake(false)
  handleStopClick()
 }

//  const display = (seconds) => {
//   let min = (seconds-seconds%60)/60
//   let second = seconds%60
//   if(min < 10 && second <10)
//   {return "0" + min.toString() + ":" + "0" + second.toString()}
//   if(min < 10 && second > 10)
//   {return "0" + min.toString() + ":" + second.toString()}
//   if(min > 10 && second < 10)
//   {return min.toString() + ":" + "0" + second.toString()}
//   if(min > 10 && second > 10)
//   {return min.toString() + ":" + second.toString()}
// }


 if(breake){
 

 return (
  
  
  <div className={theme ? `${light}` : `${dark}`}>
      <div className = "max-w-2xl min-h-screen mx-auto">
  
 
  <Breake 
  // min={minutes}
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
        //  min={minutes}
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


