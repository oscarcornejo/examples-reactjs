import React, { Component } from "react";

class CicloDeVida extends Component {
  constructor(props) {
    super(props); // Si no se llama super(props), this.props no tendrá efecto
    this.state = { saludo: false };

    this.handlerClick = this.handlerClick.bind(this);
  }

  //  state = { saludo: 'Mundo!' }

  // =================================================== //
  // ============ Montaje de un componente ============= //
  // =================================================== //

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps() para Montaje de un Componente");

    return null;
  }

  componentDidMount() {
    console.log("componentDidMount() para Montaje de un Componente");
  }

  // =================================================== //
  // ============ Actualizar un componente ============= //
  // =================================================== //

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate() Actualizar un componente");

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate() Actualizar un componente");
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.saludo !== this.state.saludo) {
      // Hacer algo al cambio del estado Counter
      console.log("saludo actualizó su Estado", this.state.saludo);
    }
  }

  // ====================================================== //
  // ============ Desmontaje de un componente ============= //
  // ====================================================== //

  componentWillUnmount() {
    console.log("componentWillUnmount() para Desmontaje de un componente");
  }

  // ============================================================== //
  // ============  Manejo de Errores de un componente ============= //
  // ============================================================== //

  static getDerivedStateFromError(error) {
    console.log(error);
  }

  componentDidCatch(error, infoError) {
    console.log(error);
    console.log(infoError);
  }

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

export default CicloDeVida;
