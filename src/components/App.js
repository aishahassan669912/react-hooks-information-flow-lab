import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import { v4 as uuid } from "uuid";

const initialItems = [
  { id: uuid(), name: "Apple", category: "Produce" },
  { id: uuid(), name: "Milk", category: "Dairy" },
  { id: uuid(), name: "Cake", category: "Dessert" },
  { id: uuid(), name: "Carrots", category: "Produce" },
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={initialItems} />
    </div>
  );
}

export default App;
