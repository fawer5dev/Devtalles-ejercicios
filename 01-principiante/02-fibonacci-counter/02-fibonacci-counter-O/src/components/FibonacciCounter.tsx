import { useState } from "react";
import { CustomJumbotron } from "./CustomJumbotron";

/**
 * Calcula el número n de la secuencia de Fibonacci.
 */
const getFibonacci = (n: number): number => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  let a = 0;
  let b = 1;
  
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
};


export const FibonacciCounter = () => {
  // TODO: Crea un estado llamado `index` para llevar la cuenta de la posición en la secuencia.
  const [index, setIndex] = useState(0);
   
  const handlePrev = () => {
    // TODO: Implementa la lógica para decrementar el `index`.
    // El valor del índice no puede ser menor que 0.
    setIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    // TODO: Implementa la lógica para incrementar el `index`.
    setIndex(prevIndex => prevIndex + 1);
  };

  // TODO: Llama a la función `getFibonacci` pasándole el `index` del estado.
  const fibonacciNumber = getFibonacci(index);

  return (
    <div className="main-container">
      <CustomJumbotron title="Contador de Serie Fibonacci"/>
      <div className="container">
        <h2 className="title">Contador Fibonacci</h2>
        <p className="number-display">{fibonacciNumber}</p>
        <div className="button-group">
           <button
             onClick={handlePrev}
             // TODO: El botón debe estar deshabilitado (`disabled`) si el `index` es 0.
             disabled={index === 0}
             className="button"
           >
            Anterior
          </button>
          <button onClick={handleNext} className="button">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};