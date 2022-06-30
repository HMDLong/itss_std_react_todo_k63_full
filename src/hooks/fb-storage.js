import { useState, useEffect } from 'react'
import db , { getAllTodos, addTodo, updateTodo } from '../lib/firebase.js'

function useFirestore(){
  const [todos, setItems] = useState([]);

  useEffect(async () => {
    getItems();
  }, [todos]);

  const getItems = async () => {
    const todos = await getAllTodos();
    setItems(todos);
  }
  
  const addItem = async (item) => {
    const newItem = {done: item.done, text: item.text};
    await addTodo(newItem);
    setItems([...todos, item]);
  }

  const clearItems = async () => {
    setItems([])
  }

  const updateItem = async (item) => {
    const changedItems = todos.map(todo => {
      if(todo.id === item.id){
        todo.done = !item.done;
      }
      return todo;
    })
    setItems(changedItems);
    await updateTodo({text: item.text, done: item.done}, item.id);
  }

  return [todos, addItem, clearItems, updateItem]
}

export default useFirestore;