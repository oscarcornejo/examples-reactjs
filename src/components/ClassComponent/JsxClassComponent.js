import React, { Component } from "react";

class JsxClassComponent extends Component {
  constructor(props) {
    super(props); // Si no se llama super(props), this.props no tendrá efecto
    this.state = { saludo: "Mundo!" };

    this.handleClick = this.handleClick.bind(this);
  }

  //  state = { saludo: 'Mundo!' }

  handleClick() {
    this.setState({
      saludo: "Chao!",
    });
  }

  render() {
    return (
      <>
        <h1>Hola, {this.state.saludo}</h1>
        <button onClick={this.handleClick}>Cambiar estado</button>
      </>
    );
  }
}

export default JsxClassComponent;
