import React, { Component } from "react";

class Bienvenido extends Component {
  constructor(props) {
    super(props); // Si no se llama super(props), this.props no tendrá efecto
    this.state = { saludo: false };

    this.handlerClick = this.handlerClick.bind(this);
  }

  //  state = { saludo: 'Mundo!' }

  handlerClick() {
    this.setState({
      saludo: !this.state.saludo,
    });
  }

  render() {
    return (
      <>
        <h1>Hola, {this.state.saludo ? "Bienvenidos" : "Mundo!"}</h1>
        <button onClick={this.handlerClick}>Cambiar estado</button>
      </>
    );
  }
}

export default Bienvenido;
