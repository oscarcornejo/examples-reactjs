import { Component } from "react";

class ClassComponentInput extends Component {
  state = {
    name: "Oscar",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      // Hacer algo al cambio del estado Counter
      console.log("EL name cambió a:", this.state.name);
    }
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ name: value });
  };

  render() {
    const { name } = this.state;

    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Enter your name"
          value={name}
        />
        <div>Hello, {name}</div>
      </div>
    );
  }
}

export default ClassComponentInput;
