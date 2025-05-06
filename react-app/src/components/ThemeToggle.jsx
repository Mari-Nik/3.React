import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Тёмная тема' : '☀️ Светлая тема'}
    </button>
  );
};