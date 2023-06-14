import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory]= useState("All")

  function categoryChange(event){
    setCategory(event.target.value)
    console.log(items)
  }
  const filterItems=items.filter((foodObj)=> {
   if(selectedCategory==="All"){
    return foodObj
   }else if( selectedCategory=== foodObj.category){
    return foodObj
   }
  })

  console.log(filterItems)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={categoryChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
