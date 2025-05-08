import { useReducer, useMemo, useCallback, useContext, createContext, useState } from 'react';
import { todoReducer } from '../reducers/todoReducer';
import { ThemeContext } from '../context/ThemeContext';

const FilterContext = createContext();

export const AdvancedTodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('all');
  const { theme } = useContext(ThemeContext);
  
  const filteredTodos = useMemo(() => {
    console.log('Filtering todos...');
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'active':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);
  
  const addTodo = useCallback(() => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  }, [text]);
  
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      <div className={`advanced-todo ${theme}`}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add new todo"
        />
        <button onClick={addTodo}>Add</button>
        
        <div className="filters">
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('active')}>Active</button>
          <button onClick={() => setFilter('completed')}>Completed</button>
        </div>
        
        <ul>
          {filteredTodos.map(todo => (
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
    </FilterContext.Provider>
  );
};