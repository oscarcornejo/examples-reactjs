import { useState, useEffect, useLayoutEffect } from "react";

import ChildrenContador from "./ChildrenContador";
import PropsContador from "./PropsContador";

const Contador = () => {
  const [counter, setCounter] = useState(10);

  // Prueba entre useLayoutEffect y useEffect
  // useLayoutEffect(() => {
  //   // setCounter(counter + 1);
  //   console.log("useLayoutEffect: ", counter);
  //   // setCounter((oldState) => {
  //   //   if (oldState !== counter) return oldState + 1;
  //   //   return oldState;
  //   // });
  // }, [counter]);

  // useEffect(() => {
  //   // setCounter(counter + 1);
  //   // setCounter((oldState) => {
  //   //   if (oldState !== counter) return oldState + 1;
  //   //   return oldState;
  //   // });
  //   console.log("useEffect: ", counter);
  // }, [counter]);

  useEffect(() => {
    console.log("Efecto desde useEffect");

    let mounted = true;
    if (mounted) {
      console.log("Valor de counter: ", counter);
    }

    // if (counter > 10) console.log("Nuevo Valor de counter: ", counter);

    return () => {
      mounted = false;
    };
  }, [counter]);

  return (
    <div>
      <div>
        <ChildrenContador>
          <h3>El valor</h3>
          <h3>del</h3>
          <h3>Contador es:</h3>
        </ChildrenContador>
        <PropsContador value={counter} />
        <button onClick={() => setCounter(counter - 1)}>Decrementar </button>
        &nbsp;
        <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
      </div>
    </div>
  );
};

export default Contador;
