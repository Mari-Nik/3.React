import { useRef, useState, useEffect } from 'react';

export const InputFocus = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const prevValue = useRef('');
  
  useEffect(() => {
    prevValue.current = value;
  }, [value]);
  
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  return (
    <div className="input-focus">
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={focusInput}>Focus Input</button>
      <p>Current: {value}</p>
      <p>Previous: {prevValue.current}</p>
    </div>
  );
};