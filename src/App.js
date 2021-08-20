import React, { Component } from "react";
import Table from "./Table";
import Form from "./form";

class App extends Component {
  state = {
    items: [],
  };

  removeItem = index => {
    const { items } = this.state;
    this.setState({
      items: items.filter((item, i) => {
        return i !== index;
      }),
    });
  };
  handleSubmit = item => {
    this.setState({ items: [...this.state.items, item] });
  };
  render() {
    return (
      <div className="container">
        <Table itemData={this.state.items} removeItem={this.removeItem} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
