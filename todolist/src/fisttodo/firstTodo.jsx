import React, { useState } from 'react';

const FirstTodo = () =>{

  // 데이터를 담을 공간 
  // 사용자라 인터렉티브 반응이 일어나느 공간 

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    setTodo(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setTodos(current => [todo, ...current])
    setTodo('')
    console.log(todos)
  }

  return(
    <>
      <h1>Fisrt Todolist {todos.length}</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          type="text" 
          placeholder='할일을 입력해주세요'
          onChange={handleInput}
        />
        <button>등록</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) =>{
          return( <li key={index}>{item}</li>)
        })}
      </ul>
    </>
  )
}

export default FirstTodo