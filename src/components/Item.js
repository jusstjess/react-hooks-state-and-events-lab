import React,{useState} from "react";

function Item({ name }) {

  const [ inCart, setInCart] = useState(false)
  function handleClick(){
    return setInCart(!inCart)

  }
  return (
    <li className= {!inCart ? "" : "in-cart"}>
      <span>{name}</span>
      <button className="add" onClick = {handleClick}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;