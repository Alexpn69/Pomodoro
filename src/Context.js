import React, { createContext, useState } from "react";

const Context = createContext();

function Provider(props) {
  const [theme, setTheme] = useState(true);
  const handleChange = () => {
    setTheme((prev) => !prev);
  };
 

  return (
    <Context.Provider value={{ theme, handleChange }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, Provider };