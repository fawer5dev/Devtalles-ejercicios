import { useState } from "react";
import { CustomJumbotron } from "./CustomJumbotron";

export const InputSumator = () => {
  // TODO: Crea un estado llamado `num1` para el primer input, inicializado como un string vacío.
  // TODO: Crea un estado llamado `num2` para el segundo input, inicializado como un string vacío.
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  // TODO: Calcula la suma.
  // 1. Convierte `num1` y `num2` a números. Puedes usar `Number()`.
  // 2. Si el resultado de la conversión no es un número (por ejemplo, si el input está vacío), deberías tratarlo como 0.
  // 3. Almacena el resultado de la suma en una variable.
  const sum = Number(num1) + Number(num2) || 0;

  return (
    <div className="main-container">
      <CustomJumbotron title="Sumador de Inputs" />
      <div className="container">
        <div className="input-group">
          <input
            type="number"
            // TODO: Vincula el `value` de este input con el estado `num1`.
            value={num1}
            // TODO: Añade un manejador `onChange` que actualice el estado `num1`
            // con el valor que el usuario escribe (e.target.value).
            onChange={(e) => setNum1(e.target.value)}
            className="input"
            aria-label="Primer número"
          />
          <span className="operator">+</span>
          <input
            type="number"
            // TODO: Vincula el `value` de este input con el estado `num2`.
            value={num2}
            // TODO: Añade un manejador `onChange` que actualice el estado `num2`.
            onChange={(e) => setNum2(e.target.value)}
            className="input"
            aria-label="Segundo número"
          />
        </div>
        <div className="result">
          <span className="input">=</span>
          <p className="sum">{sum}</p>
        </div>
      </div>
    </div>
  );
};