import { useState } from 'react';
import './App.css'; // Asegúrate de tener este archivo CSS

const Calculator = () => {
  const [number1, setnumber1] = useState('');
  const [operation, setOperation] = useState('');
  const [number2, setNumber2] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      number1,
      operation,
      number2,
    };

    try {
      const response = await fetch('http://ec2-3-95-155-9.compute-1.amazonaws.com/api/calculator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="calculator">
      <h2>Calculadora</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={number1}
          onChange={(e) => setnumber1(e.target.value)}
          placeholder="Número 1"
        />
        <input
          type="text"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          placeholder="Operador (+, -, *, /)"
        />
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          placeholder="Número 2"
        />
        <button type="submit">Calcular</button>
      </form>
    </div>
  );
};

export default Calculator;
