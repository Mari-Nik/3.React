import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { Counter } from './components/Counter';
import { NumberList } from './components/NumberList';
import { InputFocus } from './components/InputFocus';
import { TodoList } from './components/TodoList';
import { ParentComponent } from './components/ParentComponent';
import { AdvancedTodoApp } from './components/AdvancedTodoApp';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <header>
          <h1>React Hooks Practice</h1>
          <h2>useContext. Тема</h2>
            <p>Тут можно переключить тему</p>
          <ThemeToggle />
        </header>
        
        <main>
          
          
          <section>
            <h2>useCallback</h2>
            <Counter />
          </section>
          
          <section>
            <h2>useMemo</h2>
            <NumberList />
          </section>
          
          <section>
            <h2>useRef</h2>
            <InputFocus />
          </section>
          
          <section>
            <h2>useReducer</h2>
            <TodoList />
          </section>
          
          <section>
            <h2>React.memo</h2>
            <ParentComponent />
          </section>
          
          <section>
            <h2>Combined Hooks</h2>
            <AdvancedTodoApp />
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;