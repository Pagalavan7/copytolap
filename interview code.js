import React, {useState} from "react";
import "./style.css";

export default function App() {

   let [toDoList, updateList]= useState([]);
   let [inputVal, updateVal] = useState("");
  console.log(toDoList);


  function updateInput(){
    updateVal(e.target.value);  
   

  }
  function updateListHandler(){
    updateList((prev)=>[...prev,inputVal]);
    updateVal("");
  }

  return (
    <div>
      <h1>To do!</h1>
      <input value={inputVal}  onChange={(e)=>{updateInput}}/>
      <button onClick={updateListHandler}>Add</button>
      <ul>
       { toDoList.map(item=>{
          return <li>{item}</li>
       })}
      </ul>

    </div>
  );
}
