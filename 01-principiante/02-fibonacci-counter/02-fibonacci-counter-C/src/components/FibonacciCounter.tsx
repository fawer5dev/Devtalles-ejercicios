//Model auto generado por AI
import { useState } from "react";
import { CustomJumbotron } from "./CustomJumbotron";

/**
 * Calcula el número n de la secuencia de Fibonacci.
 */
const getFibonacci = (n: number): number => {
  /*
    TODO: Implementa la lógica para resolver la secuencia.

    Pistas:
    1.  Primero, maneja los casos base: si `n` es 0 o 1, el resultado es `n`.
    2.  Necesitarás dos variables para guardar los dos números anteriores de la secuencia.
        Piensa en los valores iniciales (ej: `a = 0`, `b = 1`).
    3.  Usa un bucle `for` que se repita `n-1` veces. En cada iteración:
        - Calcula el siguiente número sumando los dos anteriores.
        - Actualiza tus dos variables para que estén listas para la siguiente iteración.
    4.  Al final, una de tus variables contendrá el resultado correcto.
  */
  return 0; // Valor de retorno temporal
};


export const FibonacciCounter = () => {
  // TODO: Crea un estado llamado `index` para llevar la cuenta de la posición en la secuencia.
  const index = 0; // Temporal
  
  const handlePrev = () => {
    // TODO: Implementa la lógica para decrementar el `index`.
    // El valor del índice no puede ser menor que 0.
  };

  const handleNext = () => {
    // TODO: Implementa la lógica para incrementar el `index`.
  };

  // TODO: Llama a la función `getFibonacci` pasándole el `index` del estado.
  const fibonacciNumber = 0;

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
            disabled={false}
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