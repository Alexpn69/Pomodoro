import React from "react";

export default function AddItem({onFormSubmit, name, onNameChange, valid}) {
  return (
    <form onSubmit={onFormSubmit} className='grid p-4 justify-center'>
      <div>
        <label className="py-2 font-bold text-white text-2xl">ЧТО СОБРАЛСЯ ДЕЛАТЬ?:</label>
        <input
          type="text"
          value={name}
          onChange={onNameChange}
          id="item-name"
          placeholder="Задача"
          className="border-2 border-green-600 rounded-md p-2 "
        />
      </div>
            <div>
        <div>{valid}</div>
        <input type="submit" 
       className="mtransition duration-500 ease-in-out  
       bg-green-700 hover:bg-green-400 mt-10 rounded-lg p-3 
       text-lg font-bold font-color-white text-white" 
        value="Добавить" />
      </div>
    </form>
  );
}
