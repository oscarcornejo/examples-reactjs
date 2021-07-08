import React, { useState } from "react";
import PropTypes from "prop-types";

const initState = { name: "Hola Mundo" };

const ComponenteB = ({ saludo }) => {
  return <h1>{saludo.name}</h1>;
};

const PropTypesComponent = () => {
  const [newObject, setNewObject] = useState(initState);

  const handleClick = () => {
    setNewObject({ name: "Chao!" });
  };

  return (
    <div>
      <ComponenteB />
      <button onClick={handleClick}>Despedirse</button>
    </div>
  );
};

ComponenteB.propTypes = {
  saludo: PropTypes.object.isRequired,
};

ComponenteB.defaultProps = {
  saludo: { name: "Hola!" },
};

export default PropTypesComponent;
