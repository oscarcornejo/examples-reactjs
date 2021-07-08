import React, { useState } from "react";

const StateVsVariable = () => {
  const [state, setState] = useState(0);

  let estado = localStorage.getItem("var") || 0;

  const handleClickVar = () => {
    estado = estado + 1;
    // console.log(estado);
    localStorage.setItem("var", estado);
  };

  return (
    <>
      <h2>Estado: {state}</h2>

      <button onClick={() => setState(state + 1)}>Cambiar Estado</button>
      <br />
      <br />
      <h2>Variable: {estado}</h2>
      <button onClick={handleClickVar}>Cambiar variable</button>
    </>
  );
};

export default StateVsVariable;
