import React,{ useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


 
function App() {

  const [appClass, setAppClass] = useState(true)


  function handleClick (){
    return setAppClass(!appClass)}
  

  return (
    <div className={!appClass ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick ={handleClick}>{!appClass ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;