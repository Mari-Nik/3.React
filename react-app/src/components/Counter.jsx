import { useState, useCallback, memo } from 'react';

const Button = memo(({ onClick, label }) => {
  console.log(`Render button: ${label}`);
  return <button onClick={onClick}>{label}</button>;
});

export const Counter = () => {
  const [count, setCount] = useState(0);
  
  // Без useCallback
  const increment = () => setCount(c => c + 1);
  
  // С useCallback
  const decrement = useCallback(() => setCount(c => c - 1), []);
  
  return (
    <div className="counter">
      <h3>Counter: {count}</h3>
      <Button onClick={increment} label="Increment" />
      <Button onClick={decrement} label="Decrement" />
    </div>
  );
};