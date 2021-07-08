import { useState, useEffect, useLayoutEffect } from "react";

const CicloDeVidaFuncComponent = () => {
  const [counter, setCounter] = useState(10);

  useLayoutEffect(() => {
    console.log("Efecto desde useLayoutEffect");
    console.log("Valor de counter: ", counter);

    // if (counter > 10) {
    //   console.log("counter cambió");
    // }
  });

  useEffect(() => {
    // useEffect() se invocará cuando el componente sea montado.
    // Equivalente a componentDidMount()
    console.log("Efecto desde useEffect");

    let mounted = true;
    if (mounted) {
      console.log("Valor de counter: ", counter);
    }

    // Esta función se invoca solo cuando el componente se elimina del DOM
    // Equivalente a componentWillUnmount()
    return () => {
      mounted = false;
    };
  }, [counter]); // Matriz de dependencia - Equivalente a componentDidUpdate() // En este ejemplo Solo se vuelve a ejecutar si counter cambia

  // useEffect(callback(), [dependentProps]) => cleanupFunction

  return (
    <div>
      <div>
        <h3>El valor del Contador es:</h3>
        <h3>{counter}</h3>
        <button onClick={() => setCounter(counter - 1)}>Decrementar </button>
        &nbsp;
        <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
      </div>
    </div>
  );
};

export default CicloDeVidaFuncComponent;
