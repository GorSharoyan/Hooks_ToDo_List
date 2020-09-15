import React, { useState, useCallback, useMemo } from "react";



function App() {
  const [tods,setTodos]=useState([]);
  const [todoInput,setTodoInput]=useState('');

  // const handleTodoInput=({target:vale})=>{
  //   setTodoInput(value)
  // }
  // const handleTodoUpdate=()={
  //   setTodos({

  //   })
  // }

  return(
    <div>
      <ul>
        <input/>
        <button>Add</button>
      </ul>
    </div>
  )
}


export default App;
