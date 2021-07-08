import React, { useState } from "react";

const StateFuncComponent = () => {
  const [saludo, setSaludo] = useState("Hola");

  const handleChangeState = () => {
    setSaludo("Chao");
  };

  return (
    <div>
      <h1>{saludo}</h1>

      <button onClick={handleChangeState}>Despedirse</button>
    </div>
  );
};

export default StateFuncComponent;
