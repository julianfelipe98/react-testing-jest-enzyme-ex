// todo lo que comienze con use en el import del react significa que es un hook
import React, { useState } from "react";
import PropTypes from "prop-types";
const CounterComponent = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value); //el use state me retorna un arreglo con dos valores
  // cuando se usa el setcounter le decimos a react que el estado de counter cambio por lo cual va a realizar el renderizado nuevamente
  const handleAdd = (e) => {
    // esta forma se usa cuando de pronto no tenemos el estado en el contexto y es enviado como parametro de algun otro lado la otra forma normal seria decirle en el st counter counter+1
    setCounter((c) => c + 1);
  };
  const handleSubstract = () => setCounter(counter - 1);

  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>Counter Component</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleSubstract}>-1</button>
    </>
  );
};

CounterComponent.propTypes = {
  value: PropTypes.number,
};
export default CounterComponent;
