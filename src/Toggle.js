import React, {useContext} from "react";
import { Context } from "./Context";

export default function Toggle(props){
    const { theme, handleChange } = useContext(Context);
return (
<>
 <button className={theme ? "mtransition duration-500 ease-in-out bg-green-700 hover:bg-green-400 mt-10 rounded-lg p-2 text-lg font-bold font-color-white text-white"
                        : "mtransition duration-500 ease-in-out bg-blue-700 hover:bg-blue-400 mt-10 rounded-lg p-2 text-lg font-bold font-color-white text-white"} onClick={handleChange}>Выбери тему</button> 
</>
)}


