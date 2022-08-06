import React from "react";


export default function Button({onChangeTimer, children}){

return (

<>

<button className="mtransition duration-500 ease-in-out  
bg-green-700 hover:bg-green-400 mt-10 rounded-lg p-3 
text-3xl font-bold font-color-white text-white"
onClick={onChangeTimer}>{children}</button> 

</>


)


}



