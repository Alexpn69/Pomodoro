import React, {useContext} from "react";
import { Context } from "./Context";


export default function ItemsList({items, onDeleteClick, onToggle}) {
  const { theme} = useContext(Context);
  return (
 <div className="flex flex-wrap">
      {items.map((item) => (
        <div key={item.id} className={item.complete 
          ? " bg-green-500 p-2 m-3 mx-auto flex  justify-center font-semibold text-white border-4 rounded-lg" 
          : "p-2 m-3 mx-auto flex justify-center font-semibold text-white border-4 rounded-lg cursor-pointer"}>
          <div className={item.complete 
        ? "p-3 line-through items-center cursor-pointer" 
        : "p-3 items-center cursor-pointer"} onClick = {() => onToggle(item.id)}> 
               <h2>{item.name}</h2>
               </div>
          <button
            className={theme ? "mtransition duration-500 ease-in-out bg-green-700 hover:bg-green-400 mt-10 rounded-lg p-2 text-md font-bold font-color-white text-white"
            : "mtransition duration-500 ease-in-out bg-blue-700 hover:bg-blue-400 mt-10 rounded-lg p-2 text-md font-bold font-color-white text-white"} 
            onClick={() => onDeleteClick(item.id)}>
            Удалить
          </button>
        </div>
      ))}
      </div>
  
  );
}


