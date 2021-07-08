import React, { useState } from "react";

const initState = { name: "Hola Mundo" };

const ComponenteB = (props) => {
  return <h1>{props.saludo.name}</h1>;
};

const PropsComponent = () => {
  const [newObject, setNewObject] = useState(initState);

  const handleClick = () => {
    setNewObject({ name: "Chao!" });
  };

  return (
    <div>
      <ComponenteB saludo={newObject} />
      <button onClick={handleClick}>Despedirse</button>
    </div>
  );
};

export default PropsComponent;
