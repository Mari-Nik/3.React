import { useReducer, useState } from 'react';
import { todoReducer } from '../reducers/todoReducer';

export const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState('');
  
  const addTodo = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };
  
  return (
    <div className="todo-list">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none' 
            }}>
              {todo.text}
            </span>
            <button onClick={() => 
              dispatch({ type: 'TOGGLE_TODO', payload: todo.id })
            }>
              Toggle
            </button>
            <button onClick={() => 
              dispatch({ type: 'DELETE_TODO', payload: todo.id })
            }>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};