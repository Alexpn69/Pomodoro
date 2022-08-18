import React, {useContext} from "react";
import { Context } from "./Context";
import Toggle from "./Toggle";


export default function AddItem({onFormSubmit, name, onNameChange, valid}) {

  const { theme } = useContext(Context);

  return (<> <Toggle />
    <form onSubmit={onFormSubmit} className='grid p-4 justify-center m-4'>
     
      <div>
        <label className="py-2 font-bold text-white text-2xl">ЧТО СОБРАЛСЯ ДЕЛАТЬ?:</label>

        

        <input
          type="text"
          value={name}
          onChange={onNameChange}
          id="item-name"
          placeholder="Задача"
          className={theme ? "border-2 border-green-600 rounded-md p-2 "
                          :"border-2 border-blue-600 rounded-md p-2 "}
        />
      </div>
            <div>
        <div>{valid}</div>
        <input type="submit" 
       className={theme ? "mtransition duration-500 ease-in-out bg-green-700 hover:bg-green-400 mt-10 rounded-lg p-3 text-lg font-bold font-color-white text-white"
        : "mtransition duration-500 ease-in-out bg-blue-700 hover:bg-blue-400 mt-10 rounded-lg p-3 text-lg font-bold font-color-white text-white"}
        value="Добавить" />
      </div>
    </form>
    </>
  );
}
