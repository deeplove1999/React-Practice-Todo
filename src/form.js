import React, { Component } from "react";

class Form extends Component {
  todoData = {
    item: "",
    quantity: "",
  };
  state = this.todoData;

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.todoData);
  };
  render() {
    const { item, quantity } = this.state;
    return (
      <form>
        <label htmlFor="item">Item</label>
        <input
          type="text"
          name="item"
          id="item"
          value={item}
          onChange={this.handleChange}
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="text"
          name="quantity"
          id="quantity"
          value={quantity}
          onChange={this.handleChange}
        />
        <input type="button" value="Add Item" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
