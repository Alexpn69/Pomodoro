import React, { useState, useEffect } from "react";
import ItemsList from "./ItemsList";
import AddItem from "./AddItem";
import BigButton from "./BigButton";

export default function Todo() {

  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || []
  });
  const [name, setName] = useState("");
  const [valid, setValid] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!name) {
      setValid("Введите название задачи");
      return;
    }

    setItems([
      ...items,
      {
        id: items.length + 1,
        name: name,
        complete: false,
             }
    ]);
    setName("");
    setValid("");
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }


  function handleDeleteClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItems([
        ...items.map((item) => item.id === id ? {...item, complete: !item.complete} : {...item}
        )
    ])
};

  return (
    <div className='container text-center'>
      <form action="https://lifehacker.ru/texniki-tajm-menedzhmenta/" target="_blank">
      <BigButton>БЕРИ НОШУ ПО СЕБЕ</BigButton>
      </form>
      <AddItem
        name={name}
        valid={valid}
        onNameChange={handleNameChange}
        onFormSubmit={handleFormSubmit}
      />
          <ItemsList 
          items={items} 
          onDeleteClick={handleDeleteClick}
          onToggle={handleToggle} />
    </div>
  );
}
