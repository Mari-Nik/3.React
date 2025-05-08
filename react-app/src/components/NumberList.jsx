import { useState, useMemo } from 'react';

export const NumberList = () => {
  const [numbers, setNumbers] = useState([]);
  
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return numbers.reduce((total, num) => total + num, 0);
  }, [numbers]);
  
  const generateNumbers = () => {
    const newNumbers = Array.from({ length: 5 }, () => 
      Math.floor(Math.random() * 100) + 1
    );
    setNumbers(newNumbers);
  };
  
  return (
    <div className="number-list">
      <button onClick={generateNumbers}>Generate Numbers</button>
      <ul>
        {numbers.map((num, i) => (
          <li key={i}>{num}</li>
        ))}
      </ul>
      <p>Sum: {sum}</p>
    </div>
  );
};