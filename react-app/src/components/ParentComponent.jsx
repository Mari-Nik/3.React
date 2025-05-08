import { useState, useCallback, memo } from 'react';

const MemoizedChild = memo(({ onClick }) => {
  console.log('MemoizedChild rendered');
  return <button onClick={onClick}>Memoized Button</button>;
});

const RegularChild = () => {
  console.log('RegularChild rendered');
  return <div>Regular Child</div>;
};

export const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  
  const increment = () => setCount(c => c + 1);
  
  // С useCallback - не вызывает ререндер MemoizedChild
  const logMessage = useCallback(() => console.log('Message'), []);
  
  return (
    <div className="parent-component">
      <button onClick={increment}>Increment: {count}</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      
      <RegularChild />
      <MemoizedChild onClick={logMessage} />
    </div>
  );
};